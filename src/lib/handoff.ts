import { mergeProgress } from './merge';
import { allReviewableIds, units } from './study';
import type { Progress } from './types';

/**
 * Carrying progress between two devices in the same room, with no network.
 *
 * One device shows a sequence of QR codes, the other points its camera at
 * them. Nothing is uploaded, nothing is stored anywhere in between, and the
 * two devices never need to share an account, a cloud provider or even a
 * wifi network. For a learner who has a phone and a laptop and no Dropbox,
 * this is the only account-free sync that works at all.
 *
 * Getting it into a few frames takes real packing. The state is ~2,400 cards,
 * and sending it as JSON would be about 300KB - a hundred QR codes. So:
 *
 *   - card ids become indexes into the app's own sorted id list, which both
 *     devices rebuild identically from the dataset they already have. Cards go
 *     out in index order and only the gap to the previous one is sent, as a
 *     varint, so a dense deck costs one byte per card instead of two.
 *   - box and seen share a byte: a box is 0-5 and a seen count past 31 tells
 *     you nothing a smaller one does not.
 *   - due becomes days-from-now in a single byte, because a card is either
 *     overdue or due inside its box interval, and the longest interval is 21
 *     days. 255 means overdue.
 *   - cards that have never been seen are left out entirely. They are the
 *     default, and the receiving side already has them.
 *   - the result is gzipped, which works well because box numbers and counts
 *     repeat heavily.
 *
 * Together that is about four bytes a card, which puts a fully studied learner
 * inside ten frames rather than forty.
 *
 * What is deliberately NOT sent: drafts, which are prose and would dominate
 * the payload, and the settings, which are cheap to set again and whose
 * last-write-wins rule would make a one-way transfer surprising.
 */

const MAGIC = 'IK1';
/** Base64 characters per frame. A QR code holds more; this stays scannable. */
const FRAME = 1200;

function idTable(): string[] {
  return [...allReviewableIds].sort();
}

function canDoTable(): string[] {
  return units.flatMap((u) => u.canDos.map((c) => c.id)).sort();
}

const DAY = 86_400_000;

/** Appends a varint; values under 128 cost one byte, which is the common case. */
function putVarint(out: number[], value: number): void {
  let v = value;
  while (v >= 0x80) {
    out.push((v & 0x7f) | 0x80);
    v >>>= 7;
  }
  out.push(v);
}

function pack(progress: Progress): Uint8Array {
  const ids = idTable();
  const index = new Map(ids.map((id, i) => [id, i]));
  const canDos = canDoTable();
  const canDoIndex = new Map(canDos.map((id, i) => [id, i]));

  const now = Date.now();
  const cards = Object.entries(progress.cards)
    .filter(([id, c]) => index.has(id) && (c.seen > 0 || c.box > 0))
    .map(([id, c]) => ({ i: index.get(id) as number, c }))
    .sort((a, b) => a.i - b.i);
  const ticked = Object.keys(progress.canDos)
    .filter((id) => progress.canDos[id] && canDoIndex.has(id))
    .map((id) => canDoIndex.get(id) as number)
    .sort((a, b) => a - b);

  const out: number[] = [];
  const put16 = (v: number) => out.push((v >>> 8) & 0xff, v & 0xff);
  const put32 = (v: number) => out.push((v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff);

  out.push(2);                                        // format version
  put16(Math.min(65535, cards.length));
  put16(Math.min(65535, ticked.length));
  put32(Math.min(4294967295, progress.xp));
  put16(Math.min(65535, progress.streak));
  put16(Math.min(65535, progress.bestStreak));

  let previous = 0;
  for (const { i, c } of cards) {
    putVarint(out, i - previous);
    previous = i;
    out.push(((Math.min(7, c.box) & 0x07) << 5) | (Math.min(31, c.seen) & 0x1f));
    out.push(Math.min(255, c.correct));
    const days = Math.round((c.due - now) / DAY);
    out.push(days <= 0 ? 255 : Math.min(254, days));
  }
  let previousCanDo = 0;
  for (const i of ticked) {
    putVarint(out, i - previousCanDo);
    previousCanDo = i;
  }
  return new Uint8Array(out);
}

function unpack(bytes: Uint8Array): Partial<Progress> {
  const ids = idTable();
  const canDos = canDoTable();
  let p = 0;
  const u8 = () => bytes[p++];
  const u16 = () => ((bytes[p++] << 8) | bytes[p++]) >>> 0;
  const u32 = () => ((bytes[p++] << 24) | (bytes[p++] << 16) | (bytes[p++] << 8) | bytes[p++]) >>> 0;
  const varint = () => {
    let shift = 0;
    let v = 0;
    for (;;) {
      const byte = bytes[p++];
      v |= (byte & 0x7f) << shift;
      if ((byte & 0x80) === 0) return v >>> 0;
      shift += 7;
    }
  };

  const version = u8();
  if (version !== 2) throw new Error('unsupported handoff version');
  const cardCount = u16();
  const canDoCount = u16();
  const xp = u32();
  const streak = u16();
  const bestStreak = u16();

  const now = Date.now();
  const cards: Progress['cards'] = {};
  let index = 0;
  for (let n = 0; n < cardCount; n += 1) {
    index += varint();
    const packed = u8();
    const box = (packed >> 5) & 0x07;
    const seen = packed & 0x1f;
    const correct = u8();
    const days = u8();
    const id = ids[index];
    // An id the receiving side does not know means the two devices are on
    // different dataset versions. Skipping it is right: inventing one is not.
    if (id) {
      cards[id] = { box, seen, correct, last: now, due: days === 255 ? now : now + days * DAY };
    }
  }

  const ticked: Record<string, boolean> = {};
  let canDoAt = 0;
  for (let n = 0; n < canDoCount; n += 1) {
    canDoAt += varint();
    const id = canDos[canDoAt];
    if (id) ticked[id] = true;
  }

  return { cards, canDos: ticked, xp, streak, bestStreak };
}

/* ------------------------------------------------------- transport coding */

function toBase64(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i += 1) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64(text: string): Uint8Array {
  const padded = text.replace(/-/g, '+').replace(/_/g, '/');
  const s = atob(padded + '='.repeat((4 - (padded.length % 4)) % 4));
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i += 1) out[i] = s.charCodeAt(i);
  return out;
}

async function gzip(bytes: Uint8Array): Promise<Uint8Array> {
  const stream = new Blob([bytes as BlobPart]).stream().pipeThrough(new CompressionStream('gzip'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function gunzip(bytes: Uint8Array): Promise<Uint8Array> {
  const stream = new Blob([bytes as BlobPart]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/** True where the browser can build the frames at all. */
export function handoffSupported(): boolean {
  return typeof CompressionStream !== 'undefined' && typeof btoa !== 'undefined';
}

/**
 * The frames to display, in order.
 *
 * Each carries its own position, so the receiving side can collect them in any
 * order and knows when it has them all. That matters because a camera will
 * catch frame 3 before frame 1 as often as not.
 */
export async function buildFrames(progress: Progress): Promise<string[]> {
  const body = toBase64(await gzip(pack(progress)));
  const total = Math.max(1, Math.ceil(body.length / FRAME));
  const frames: string[] = [];
  for (let i = 0; i < total; i += 1) {
    frames.push(`${MAGIC}/${i + 1}/${total}/${body.slice(i * FRAME, (i + 1) * FRAME)}`);
  }
  return frames;
}

export type Collector = {
  /** Feeds one scanned frame in. Returns how many distinct frames are held. */
  add: (raw: string) => number;
  total: number | null;
  have: number;
  /** Resolves the progress once every frame has been seen. */
  finish: () => Promise<Partial<Progress>>;
};

export function collector(): Collector {
  const parts = new Map<number, string>();
  let total: number | null = null;

  const self: Collector = {
    get total() {
      return total;
    },
    get have() {
      return parts.size;
    },
    add(raw: string) {
      const m = /^IK1\/(\d+)\/(\d+)\/(.*)$/s.exec(raw.trim());
      if (!m) return parts.size;
      const [, nStr, totalStr, body] = m;
      const declared = Number(totalStr);
      // A frame from a different transfer would corrupt the payload silently,
      // so a changed total starts a fresh collection.
      if (total != null && declared !== total) parts.clear();
      total = declared;
      parts.set(Number(nStr), body);
      return parts.size;
    },
    async finish() {
      if (total == null || parts.size !== total) throw new Error('frames missing');
      let body = '';
      for (let i = 1; i <= total; i += 1) {
        const part = parts.get(i);
        if (part == null) throw new Error('frames missing');
        body += part;
      }
      return unpack(await gunzip(fromBase64(body)));
    },
  };
  return self;
}

/**
 * Folds a received transfer into the progress on this device.
 *
 * Uses the same merge rule as every other path, so a handoff can never lose
 * work that the file sync would have kept.
 */
export function applyHandoff(mine: Progress, theirs: Partial<Progress>): Progress {
  return mergeProgress(mine, { ...mine, ...theirs });
}
