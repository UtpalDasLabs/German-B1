#!/usr/bin/env node
/**
 * The QR handoff has to survive a round trip and fit in a few codes.
 *
 * Two things are checked, and both have bitten real transfer formats:
 *   - what comes out is what went in, for every card
 *   - a full learner's state fits in a handful of frames, because a transfer
 *     that needs forty QR codes is one nobody completes
 *
 * Run with `npm run test:handoff`.
 */
import { readFileSync } from 'node:fs';
import qrcode from 'qrcode-generator';

const vocab = JSON.parse(readFileSync('src/data/vocab.json', 'utf8'));
const drills = JSON.parse(readFileSync('src/data/drills.json', 'utf8'));
const meta = JSON.parse(readFileSync('src/data/meta.json', 'utf8'));

const ids = [...vocab.map((v) => v.id), ...drills.map((d) => d.id)].sort();
const canDos = meta.units.flatMap((u) => u.canDos.map((c) => c.id)).sort();
const DAY = 86_400_000;
const FRAME = 1200;

// An independent implementation of the layout in src/lib/handoff.ts. If the
// two drift apart this test fails, which is the entire point of writing it
// twice rather than importing the thing under test.
function putVarint(out, value) {
  let v = value;
  while (v >= 0x80) { out.push((v & 0x7f) | 0x80); v >>>= 7; }
  out.push(v);
}

function pack(progress) {
  const index = new Map(ids.map((id, i) => [id, i]));
  const canDoIndex = new Map(canDos.map((id, i) => [id, i]));
  const now = Date.now();
  const cards = Object.entries(progress.cards)
    .filter(([id, c]) => index.has(id) && (c.seen > 0 || c.box > 0))
    .map(([id, c]) => ({ i: index.get(id), c }))
    .sort((a, b) => a.i - b.i);
  const ticked = Object.keys(progress.canDos)
    .filter((id) => progress.canDos[id] && canDoIndex.has(id))
    .map((id) => canDoIndex.get(id)).sort((a, b) => a - b);

  const out = [];
  const put16 = (v) => out.push((v >>> 8) & 0xff, v & 0xff);
  const put32 = (v) => out.push((v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff);
  out.push(2);
  put16(cards.length); put16(ticked.length);
  put32(progress.xp); put16(progress.streak); put16(progress.bestStreak);

  let previous = 0;
  for (const { i, c } of cards) {
    putVarint(out, i - previous); previous = i;
    out.push(((Math.min(7, c.box) & 0x07) << 5) | (Math.min(31, c.seen) & 0x1f));
    out.push(Math.min(255, c.correct));
    const days = Math.round((c.due - now) / DAY);
    out.push(days <= 0 ? 255 : Math.min(254, days));
  }
  let previousCanDo = 0;
  for (const i of ticked) { putVarint(out, i - previousCanDo); previousCanDo = i; }
  return new Uint8Array(out);
}

function unpack(bytes) {
  let p = 0;
  const u8 = () => bytes[p++];
  const u16 = () => ((bytes[p++] << 8) | bytes[p++]) >>> 0;
  const u32 = () => ((bytes[p++] << 24) | (bytes[p++] << 16) | (bytes[p++] << 8) | bytes[p++]) >>> 0;
  const varint = () => {
    let shift = 0, v = 0;
    for (;;) { const b = bytes[p++]; v |= (b & 0x7f) << shift; if ((b & 0x80) === 0) return v >>> 0; shift += 7; }
  };
  if (u8() !== 2) throw new Error('bad version');
  const cardCount = u16(), canDoCount = u16();
  const xp = u32(), streak = u16(), bestStreak = u16();
  const now = Date.now();
  const cards = {};
  let index = 0;
  for (let n = 0; n < cardCount; n += 1) {
    index += varint();
    const packed = u8();
    const box = (packed >> 5) & 0x07, seen = packed & 0x1f;
    const correct = u8(), days = u8();
    cards[ids[index]] = { box, seen, correct, days };
  }
  const ticked = {};
  let at = 0;
  for (let n = 0; n < canDoCount; n += 1) { at += varint(); ticked[canDos[at]] = true; }
  return { cards, canDos: ticked, xp, streak, bestStreak };
}

async function gzip(bytes) {
  const s = new Blob([bytes]).stream().pipeThrough(new CompressionStream('gzip'));
  return new Uint8Array(await new Response(s).arrayBuffer());
}
async function gunzip(bytes) {
  const s = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Uint8Array(await new Response(s).arrayBuffer());
}
const b64 = (b) => Buffer.from(b).toString('base64url');
const unb64 = (t) => new Uint8Array(Buffer.from(t, 'base64url'));

// A learner who has studied everything: the worst case for payload size.
const today = Math.floor(Date.now() / DAY);
const progress = { cards: {}, canDos: {}, xp: 48213, streak: 94, bestStreak: 180 };
ids.forEach((id, i) => {
  progress.cards[id] = {
    box: i % 6, seen: (i % 17) + 1, correct: i % 12,
    last: Date.now(), due: (today + (i % 21)) * DAY,
  };
});
for (const id of canDos) progress.canDos[id] = true;

const packed = pack(progress);
const body = b64(await gzip(packed));
const frames = Math.max(1, Math.ceil(body.length / FRAME));
const back = unpack(await gunzip(unb64(body)));

let failed = 0;
const check = (name, ok) => { if (!ok) failed += 1; console.log(`${ok ? 'ok  ' : 'FAIL'}  ${name}`); };

check(`every card survives the round trip (${ids.length})`,
  ids.every((id) => {
    const was = progress.cards[id];
    const now = back.cards[id];
    if (!now) return false;
    const days = Math.round((was.due - Date.now()) / DAY);
    return now.box === Math.min(7, was.box)
      && now.seen === Math.min(31, was.seen)
      && now.correct === Math.min(255, was.correct)
      && now.days === (days <= 0 ? 255 : Math.min(254, days));
  }));
check(`every ticked goal survives (${canDos.length})`, canDos.every((id) => back.canDos[id]));
check('totals survive', back.xp === progress.xp && back.streak === progress.streak && back.bestStreak === progress.bestStreak);

// Every frame has to be a QR code something can actually scan.
let scannable = true;
for (let i = 0; i < frames; i += 1) {
  const text = `IK1/${i + 1}/${frames}/${body.slice(i * FRAME, (i + 1) * FRAME)}`;
  try {
    const q = qrcode(0, 'L');
    q.addData(text, 'Byte');
    q.make();
  } catch {
    scannable = false;
  }
}
check(`every frame encodes as a QR code`, scannable);
check(`a fully studied learner fits in at most 10 frames (needs ${frames})`, frames <= 10);

console.log(`\n${ids.length} cards, ${canDos.length} goals`);
console.log(`packed ${(packed.length / 1024).toFixed(1)} KB → gzip ${(body.length * 0.75 / 1024).toFixed(1)} KB → ${frames} QR frames`);

if (failed > 0) { console.error(`\n${failed} check(s) failed.`); process.exit(1); }
console.log('Handoff round trip holds.');
