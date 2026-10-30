#!/usr/bin/env node
/**
 * Properties the progress merge has to have, checked on every push.
 *
 * These are not unit tests of the obvious kind. They are the three properties
 * that make a sync mechanism safe to run automatically, and all three are easy
 * to break by accident while editing the rule:
 *
 *   order-independent  merging A into B gives the same bytes as B into A, or
 *                      two devices writing to one file rewrite each other for
 *                      ever with identical content.
 *   idempotent         merging a result with itself changes nothing, or a
 *                      repeated sync keeps mutating state.
 *   loses nothing      no card, claim or sitting disappears.
 *
 * Run with `npm run test:merge`.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

// merge.ts has no runtime imports, so it compiles on its own.
const out = mkdtempSync(join(tmpdir(), 'merge-check-'));
execFileSync(
  'npx',
  ['tsc', 'src/lib/merge.ts', '--ignoreConfig', '--outDir', out,
   '--module', 'esnext', '--target', 'es2022', '--moduleResolution', 'bundler', '--skipLibCheck'],
  { stdio: 'inherit' },
);
const { mergeProgress } = await import(pathToFileURL(join(out, 'merge.js')).href);

const base = () => ({
  cards: {}, canDos: {}, saved: {}, articles: {}, drafts: {},
  attempts: [], exams: [], lastStudyDay: null, streak: 0, bestStreak: 0,
  xp: 0, xpToday: 0, xpDay: null, goalDays: [],
});

const A = {
  ...base(),
  cards: {
    'w.wohnen.001': { box: 3, seen: 5, correct: 4, last: 1000, due: 9000 },
    'w.essen.002': { box: 1, seen: 2, correct: 1, last: 500, due: 600 },
  },
  canDos: { 'cd.a1.1.1': true },
  saved: { 'w.wohnen.001': 300 },
  attempts: [{ at: 100, module: 'lesen', score: 80, selfAssessed: false, taskId: 'l1a' }],
  xp: 400, bestStreak: 9, streak: 3, lastStudyDay: '2026-10-20', goalDays: ['2026-10-20'],
};
const B = {
  ...base(),
  // The same card, reviewed later and got WRONG. The merge must take this.
  cards: {
    'w.wohnen.001': { box: 0, seen: 6, correct: 4, last: 2000, due: 2100 },
    'w.zeit.003': { box: 2, seen: 3, correct: 3, last: 1500, due: 8000 },
  },
  canDos: { 'cd.a1.2.1': true },
  saved: { 'w.wohnen.001': 100, 'w.zeit.003': 900 },
  attempts: [{ at: 200, module: 'hoeren', score: 60, selfAssessed: false, taskId: 'h1a' }],
  xp: 350, bestStreak: 7, streak: 5, lastStudyDay: '2026-10-25', goalDays: ['2026-10-25'],
};

const ab = mergeProgress(A, B);
const ba = mergeProgress(B, A);

let failed = 0;
const check = (name, condition) => {
  if (!condition) failed += 1;
  console.log(`${condition ? 'ok  ' : 'FAIL'}  ${name}`);
};

check('order-independent, byte for byte', JSON.stringify(ab) === JSON.stringify(ba));
check('idempotent', JSON.stringify(mergeProgress(ab, ab)) === JSON.stringify(ab));
check('re-merging a source changes nothing', JSON.stringify(mergeProgress(ab, A)) === JSON.stringify(ab));
check(
  'the later review wins even when it demotes the card',
  ab.cards['w.wohnen.001'].box === 0 && ab.cards['w.wohnen.001'].last === 2000,
);
check('cards unique to one side survive', !!ab.cards['w.essen.002'] && !!ab.cards['w.zeit.003']);
check('ticked goals union', ab.canDos['cd.a1.1.1'] && ab.canDos['cd.a1.2.1']);
check('saved keeps the earlier timestamp', ab.saved['w.wohnen.001'] === 100);
check('history concatenates', ab.attempts.length === 2);
check('XP takes the maximum, not the sum', ab.xp === 400);
check('best streak takes the maximum', ab.bestStreak === 9);
check('streak follows whichever side studied last', ab.streak === 5 && ab.lastStudyDay === '2026-10-25');
check('goal days union', ab.goalDays.length === 2);

rmSync(out, { recursive: true, force: true });
if (failed > 0) {
  console.error(`\n${failed} merge propert${failed === 1 ? 'y' : 'ies'} broken.`);
  process.exit(1);
}
console.log('\nAll merge properties hold.');
