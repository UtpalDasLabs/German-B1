#!/usr/bin/env node
/**
 * Checks the gloss languages against the vocabulary they gloss.
 *
 * The build already refuses ids that do not exist. What it cannot notice is
 * coverage quietly falling: add twenty A1 words and every gloss language drops
 * below complete without anything failing, and learners start meeting English
 * in the middle of a Turkish deck. So the level a language claims to cover is
 * asserted here, and raising coverage means editing the claim on purpose.
 *
 * Run it with `npm run test:gloss`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'data', f), 'utf8'));

const vocab = read('vocab.json');
const meta = read('meta.json');

/** The levels each language is expected to cover completely. */
const COMPLETE = { tr: ['A1'], ar: ['A1'], ru: ['A1'] };

let failures = 0;
const fail = (msg) => {
  console.error('  ✗ ' + msg);
  failures += 1;
};

const languages = meta.glossLanguages;
if (languages.length === 0) fail('meta.json lists no gloss languages');

for (const lang of languages) {
  const before = failures;
  const table = read(`gloss.${lang.code}.json`);
  const expected = COMPLETE[lang.code];
  if (expected == null) {
    fail(`${lang.code} ships but is not listed in this test's expectations`);
    continue;
  }

  for (const level of expected) {
    const words = vocab.filter((v) => v.level === level);
    const missing = words.filter((v) => table[v.id] == null);
    if (missing.length > 0) {
      fail(
        `${lang.code} should cover all of ${level} but misses ${missing.length}: ` +
          missing
            .slice(0, 6)
            .map((v) => `${v.id} (${v.de})`)
            .join(', '),
      );
    }
    if (lang.coverage[level] !== 1) {
      fail(`${lang.code}: meta says ${level} coverage is ${lang.coverage[level]}, not complete`);
    }
  }

  // Every id in the file must be a real word, and no word may be glossed
  // twice - JSON cannot express a duplicate key, so this catches a build that
  // wrote the wrong table rather than a hand-editing slip.
  const ids = new Set(vocab.map((v) => v.id));
  for (const id of Object.keys(table)) {
    if (!ids.has(id)) fail(`${lang.code}: ${id} is not a vocabulary id`);
  }

  if (failures === before) {
    console.log(
      `  ✓ ${lang.code} (${lang.nativeName}${lang.rtl ? ', rtl' : ''}): ` +
        `${Object.keys(table).length} glosses, complete at ${expected.join(', ')}`,
    );
  }
}

if (failures > 0) {
  console.error(`\n${failures} gloss problem(s).`);
  process.exit(1);
}
console.log('\nGloss coverage holds.');
