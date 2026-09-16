#!/usr/bin/env node
/**
 * Compiles the authored study material in data-source/ into the JSON the app
 * imports from src/data/.
 *
 * The source is written as terse tuples because a thousand vocabulary entries
 * typed as full objects is unreviewable; this script is what turns them into
 * the typed shapes in src/lib/types.ts, and what fails the build when an entry
 * is malformed. Run it with `npm run data`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { THEME_FILES } from '../data-source/vocab/index.mjs';
import { GRAMMAR } from '../data-source/grammar/index.mjs';
import { READING } from '../data-source/reading.mjs';
import { LISTENING } from '../data-source/listening.mjs';
import { WRITING } from '../data-source/writing.mjs';
import { SPEAKING } from '../data-source/speaking.mjs';
import { themeColors } from './palette.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src', 'data');

const problems = [];
function check(condition, message) {
  if (!condition) problems.push(message);
}

/* ------------------------------------------------------------------ vocab */

const POS_BY_GROUP = {
  nouns: 'noun',
  verbs: 'verb',
  adjectives: 'adj',
  adverbs: 'adv',
  phrases: 'phrase',
  connectors: 'conj',
  prepositions: 'prep',
};

const ARTICLES = ['der', 'die', 'das'];

const vocab = [];
const themes = [];
const seenHeadwords = new Map();

THEME_FILES.forEach((theme, themeIndex) => {
  check(theme.key && theme.label?.de && theme.label?.en, `theme ${themeIndex} is missing key or label`);
  themes.push({
    key: theme.key,
    label: theme.label,
    icon: theme.icon,
    color: themeColors[themeIndex % themeColors.length],
    payoff: theme.payoff,
  });

  let n = 0;
  for (const [group, pos] of Object.entries(POS_BY_GROUP)) {
    for (const row of theme[group] ?? []) {
      const [head, extra, en, exDe, exEn] = row;
      n += 1;
      const id = `w.${theme.key}.${String(n).padStart(3, '0')}`;

      check(typeof head === 'string' && head.length > 0, `${id}: missing headword`);
      check(typeof en === 'string' && en.length > 0, `${id} (${head}): missing translation`);
      check(typeof exDe === 'string' && exDe.length > 4, `${id} (${head}): missing German example`);
      check(typeof exEn === 'string' && exEn.length > 4, `${id} (${head}): missing English example`);

      const parts = head.split(' ');
      const isNoun = pos === 'noun';
      const article = isNoun && ARTICLES.includes(parts[0]) ? parts[0] : null;
      const word = article ? parts.slice(1).join(' ') : head;

      check(!isNoun || article != null, `${id} (${head}): noun without an article`);
      check(
        pos !== 'verb' || extra == null || extra.includes('·'),
        `${id} (${head}): verb forms should read "form · form · form"`,
      );

      // The same word appearing under two themes is a data bug, not a feature:
      // it would be scheduled twice and the counts would be wrong.
      const dupKey = `${article ?? ''} ${word}`.trim().toLowerCase();
      if (seenHeadwords.has(dupKey)) {
        problems.push(`${id} (${head}) duplicates ${seenHeadwords.get(dupKey)}`);
      } else {
        seenHeadwords.set(dupKey, id);
      }

      vocab.push({
        id,
        de: word,
        article,
        plural: isNoun ? (extra ?? null) : null,
        pos,
        en,
        theme: theme.key,
        example: { de: exDe, en: exEn },
        forms: pos === 'verb' ? (extra ?? null) : null,
      });
    }
  }
  check(n > 0, `theme ${theme.key} has no words`);
});

/* ---------------------------------------------------------------- grammar */

const grammar = [];
const drills = [];

GRAMMAR.forEach((topic, i) => {
  check(topic.key && topic.title?.de, `grammar topic ${i} is missing key or title`);
  grammar.push({
    key: topic.key,
    title: topic.title,
    summary: topic.summary,
    icon: topic.icon,
    order: i,
    body: topic.body,
    tables: topic.tables ?? [],
    examples: topic.examples ?? [],
    pitfalls: topic.pitfalls ?? [],
  });

  check((topic.drills ?? []).length >= 4, `grammar topic ${topic.key} has fewer than 4 drills`);
  (topic.drills ?? []).forEach((row, n) => {
    const [prompt, options, answer, whyDe, whyEn] = row;
    const id = `g.${topic.key}.${String(n + 1).padStart(2, '0')}`;
    check(Array.isArray(options) && options.length >= 2, `${id}: needs at least two options`);
    check(
      Number.isInteger(answer) && answer >= 0 && answer < options.length,
      `${id}: answer index ${answer} is out of range`,
    );
    check(new Set(options).size === options.length, `${id}: duplicate options`);
    check(typeof whyDe === 'string' && typeof whyEn === 'string', `${id}: missing explanation`);
    drills.push({
      id,
      topic: topic.key,
      kind: 'grammar',
      prompt,
      promptEn: null,
      options,
      answer,
      why: { de: whyDe, en: whyEn },
    });
  });
});

/* ------------------------------------------------- reading and listening */

function buildItems(prefix, rawItems) {
  return rawItems.map((row, n) => {
    const [prompt, options, answer, whyDe, whyEn, promptEn] = row;
    const id = `${prefix}.${String(n + 1).padStart(2, '0')}`;
    check(Array.isArray(options) && options.length >= 2, `${id}: needs at least two options`);
    check(
      Number.isInteger(answer) && answer >= 0 && answer < options.length,
      `${id}: answer index ${answer} is out of range`,
    );
    check(typeof whyDe === 'string' && whyDe.length > 0, `${id}: missing German explanation`);
    check(typeof whyEn === 'string' && whyEn.length > 0, `${id}: missing English explanation`);
    return {
      id,
      prompt,
      promptEn: promptEn ?? null,
      options,
      answer,
      why: { de: whyDe, en: whyEn },
    };
  });
}

const reading = READING.map((task) => {
  check(task.texts?.length > 0, `reading ${task.id} has no text`);
  check(task.items?.length > 0, `reading ${task.id} has no items`);
  return {
    id: task.id,
    module: 'lesen',
    teil: task.teil,
    title: task.title,
    instructions: task.instructions,
    minutes: task.minutes,
    texts: task.texts,
    items: buildItems(`r.${task.id}`, task.items),
  };
});

const listening = LISTENING.map((task) => {
  check(task.script?.length > 0, `listening ${task.id} has no script`);
  check(task.items?.length > 0, `listening ${task.id} has no items`);
  for (const line of task.script) {
    check(!!line.speaker && !!line.text, `listening ${task.id}: a script line is missing speaker or text`);
  }
  return {
    id: task.id,
    module: 'hoeren',
    teil: task.teil,
    title: task.title,
    instructions: task.instructions,
    minutes: task.minutes,
    script: task.script,
    plays: task.plays,
    transcriptHidden: true,
    items: buildItems(`h.${task.id}`, task.items),
  };
});

/* ---------------------------------------------- writing and speaking */

function checkProductive(task, kind) {
  check(task.bullets?.length >= 3, `${kind} ${task.id}: fewer than three Leitpunkte`);
  check(task.model?.length > 80, `${kind} ${task.id}: model answer looks too short`);
  check(task.checklist?.length >= 4, `${kind} ${task.id}: checklist needs at least four rows`);
  check(task.phrases?.length > 0, `${kind} ${task.id}: no phrase bank`);
}

WRITING.forEach((t) => checkProductive(t, 'writing'));
SPEAKING.forEach((t) => checkProductive(t, 'speaking'));

/* ------------------------------------------------------------------- meta */

const AREAS = {
  wortschatz: { label: { de: 'Wortschatz', en: 'Vocabulary' }, icon: '\u{1F520}', color: '#FF9F1C' },
  grammatik: { label: { de: 'Grammatik', en: 'Grammar' }, icon: '\u{1F9E9}', color: '#FF4B4B' },
  lesen: { label: { de: 'Lesen', en: 'Reading' }, icon: '\u{1F4D6}', color: '#2BB3F3' },
  hoeren: { label: { de: 'Hören', en: 'Listening' }, icon: '\u{1F442}', color: '#A472F0' },
  schreiben: { label: { de: 'Schreiben', en: 'Writing' }, icon: '✍️', color: '#18B98A' },
  sprechen: { label: { de: 'Sprechen', en: 'Speaking' }, icon: '\u{1F5E3}️', color: '#F45D9C' },
};

const meta = {
  themes,
  areas: AREAS,
  counts: {
    vocab: vocab.length,
    drills: drills.length,
    grammar: grammar.length,
    reading: reading.length,
    listening: listening.length,
    writing: WRITING.length,
    speaking: SPEAKING.length,
    reviewable: vocab.length + drills.length,
  },
};

/* ------------------------------------------------------------------ write */

if (problems.length > 0) {
  console.error(`Refusing to write: ${problems.length} problem(s) in the source data.\n`);
  for (const p of problems.slice(0, 80)) console.error('  - ' + p);
  if (problems.length > 80) console.error(`  ... and ${problems.length - 80} more`);
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });
const files = {
  'vocab.json': vocab,
  'grammar.json': grammar,
  'drills.json': drills,
  'reading.json': reading,
  'listening.json': listening,
  'writing.json': WRITING,
  'speaking.json': SPEAKING,
  'meta.json': meta,
};

for (const [name, data] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), JSON.stringify(data, null, 1) + '\n');
}

const size = (name) => (fs.statSync(path.join(OUT, name)).size / 1024).toFixed(0);
console.log('Wrote src/data:');
for (const name of Object.keys(files)) console.log(`  ${name} (${size(name)} KB)`);
console.log(
  `\n${vocab.length} words in ${themes.length} themes, ${drills.length} drills across ${grammar.length} grammar topics,\n` +
    `${reading.length} reading tasks, ${listening.length} listening tasks, ` +
    `${WRITING.length} writing tasks, ${SPEAKING.length} speaking tasks.\n` +
    `${meta.counts.reviewable} items are on the review schedule.`,
);

// Keep a reference to the loader so bundlers do not tree-shake the import.
void pathToFileURL;
