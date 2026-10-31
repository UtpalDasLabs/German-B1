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
import { LEVEL_INFO } from '../data-source/levels.mjs';
import { COURSE } from '../data-source/course.mjs';
import { GRAMMAR } from '../data-source/grammar/index.mjs';
import { READING } from '../data-source/reading.mjs';
import { LISTENING } from '../data-source/listening.mjs';
import { WRITING } from '../data-source/writing.mjs';
import { SPEAKING } from '../data-source/speaking.mjs';
import { MAGAZINE } from '../data-source/magazine.mjs';
import { CONTRASTS, SHADOW } from '../data-source/pronunciation.mjs';
import { GLOSS_FILES } from '../data-source/gloss/index.mjs';
import { A1_READING, A1_LISTENING, A1_WRITING, A1_SPEAKING } from '../data-source/exams/a1.mjs';
import { A2_READING, A2_LISTENING, A2_WRITING, A2_SPEAKING } from '../data-source/exams/a2.mjs';
import { B2_READING, B2_LISTENING, B2_WRITING, B2_SPEAKING } from '../data-source/exams/b2.mjs';
import { C1_READING, C1_LISTENING, C1_WRITING, C1_SPEAKING } from '../data-source/exams/c1.mjs';
import { themeColors } from './palette.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src', 'data');

const problems = [];
const warnings = [];
function check(condition, message) {
  if (!condition) problems.push(message);
}

/* ------------------------------------------------------- source integrity */

/**
 * Catches a repeated theme key inside one level file.
 *
 * JavaScript lets an object literal repeat a key and silently keeps the last
 * one, so a second `arbeit: {` quietly deletes the first block and the only
 * symptom is words that vanish. Nothing at runtime can see this - by the time
 * the module is imported the duplicate is gone - so it has to be checked
 * against the source text.
 */
for (const level of ['a1', 'a2', 'b1', 'b2', 'c1']) {
  const file = path.join(ROOT, 'data-source', 'vocab', 'levels', `${level}.mjs`);
  if (!fs.existsSync(file)) continue;
  const seen = new Map();
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = /^  ([a-z]+): \{$/.exec(line);
    if (!m) continue;
    if (seen.has(m[1])) {
      problems.push(`${level}.mjs: theme "${m[1]}" appears twice; the first block would be silently discarded`);
    }
    seen.set(m[1], true);
  }
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

const LEVELS = LEVEL_INFO.map((l) => l.key);
const isLevel = (x) => LEVELS.includes(x);

/**
 * Walks a theme's word groups.
 *
 * A theme file may list its groups flat - `nouns: [...]` - in which case every
 * word in it belongs to the theme's own level; or it may nest them under
 * `levels: { A1: { nouns: [...] } }` when the theme spans several. Both forms
 * exist because the 22 themes written for the B1 exam predate levels, and
 * rewriting 900 reviewed rows to add a field they all share would be churn.
 */
function* wordRows(theme) {
  const flatLevel = theme.level ?? 'B1';
  for (const [group, pos] of Object.entries(POS_BY_GROUP)) {
    for (const row of theme[group] ?? []) yield { row, pos, level: flatLevel };
  }
  for (const [level, groups] of Object.entries(theme.levels ?? {})) {
    check(isLevel(level), `theme ${theme.key}: "${level}" is not a CEFR level`);
    for (const [group, pos] of Object.entries(POS_BY_GROUP)) {
      for (const row of groups[group] ?? []) yield { row, pos, level };
    }
  }
}

const vocab = [];
const themes = [];
const seenHeadwords = new Map();

THEME_FILES.forEach((theme, themeIndex) => {
  check(theme.key && theme.label?.de && theme.label?.en, `theme ${themeIndex} is missing key or label`);
  const themeMeta = {
    key: theme.key,
    label: theme.label,
    icon: theme.icon,
    color: themeColors[themeIndex % themeColors.length],
    payoff: theme.payoff,
    levels: [],
  };
  themes.push(themeMeta);

  let n = 0;
  const levelsSeen = new Set();
  {
    for (const { row, pos, level } of wordRows(theme)) {
      const [head, extra, en, exDe, exEn] = row;
      n += 1;
      levelsSeen.add(level);
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
        level,
        example: { de: exDe, en: exEn },
        forms: pos === 'verb' ? (extra ?? null) : null,
      });
    }
  }
  check(n > 0, `theme ${theme.key} has no words`);
  themeMeta.levels = LEVELS.filter((l) => levelsSeen.has(l));
});

/* ---------------------------------------------------------------- grammar */

const grammar = [];
const drills = [];

GRAMMAR.forEach((topic, i) => {
  check(topic.key && topic.title?.de, `grammar topic ${i} is missing key or title`);
  check(isLevel(topic.level), `grammar topic ${topic.key}: level "${topic.level}" is not a CEFR level`);
  grammar.push({
    key: topic.key,
    title: topic.title,
    summary: topic.summary,
    icon: topic.icon,
    level: topic.level,
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
      level: topic.level,
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

function taskLevel(task, kind) {
  const level = task.level ?? 'B1';
  check(isLevel(level), `${kind} ${task.id}: level "${level}" is not a CEFR level`);
  return level;
}

const reading = [...A1_READING, ...A2_READING, ...READING, ...B2_READING, ...C1_READING].map((task) => {
  check(task.texts?.length > 0, `reading ${task.id} has no text`);
  check(task.items?.length > 0, `reading ${task.id} has no items`);
  return {
    id: task.id,
    module: 'lesen',
    teil: task.teil,
    level: taskLevel(task, 'reading'),
    title: task.title,
    instructions: task.instructions,
    minutes: task.minutes,
    texts: task.texts,
    items: buildItems(`r.${task.id}`, task.items),
  };
});

const listening = [...A1_LISTENING, ...A2_LISTENING, ...LISTENING, ...B2_LISTENING, ...C1_LISTENING].map((task) => {
  check(task.script?.length > 0, `listening ${task.id} has no script`);
  check(task.items?.length > 0, `listening ${task.id} has no items`);
  for (const line of task.script) {
    check(!!line.speaker && !!line.text, `listening ${task.id}: a script line is missing speaker or text`);
  }
  return {
    id: task.id,
    module: 'hoeren',
    teil: task.teil,
    level: taskLevel(task, 'listening'),
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

const writing = [...A1_WRITING, ...A2_WRITING, ...WRITING, ...B2_WRITING, ...C1_WRITING].map((t) => {
  checkProductive(t, 'writing');
  return { ...t, level: taskLevel(t, 'writing') };
});
const speaking = [...A1_SPEAKING, ...A2_SPEAKING, ...SPEAKING, ...B2_SPEAKING, ...C1_SPEAKING].map((t) => {
  checkProductive(t, 'speaking');
  return { ...t, level: taskLevel(t, 'speaking') };
});

const AREAS = {
  wortschatz: { label: { de: 'Wortschatz', en: 'Vocabulary' }, icon: '\u{1F520}', color: '#FF9F1C' },
  grammatik: { label: { de: 'Grammatik', en: 'Grammar' }, icon: '\u{1F9E9}', color: '#FF4B4B' },
  lesen: { label: { de: 'Lesen', en: 'Reading' }, icon: '\u{1F4D6}', color: '#2BB3F3' },
  hoeren: { label: { de: 'Hören', en: 'Listening' }, icon: '\u{1F442}', color: '#A472F0' },
  schreiben: { label: { de: 'Schreiben', en: 'Writing' }, icon: '✍️', color: '#18B98A' },
  sprechen: { label: { de: 'Sprechen', en: 'Speaking' }, icon: '\u{1F5E3}️', color: '#F45D9C' },
};

/* ----------------------------------------------------------------- course */

const grammarKeys = new Set(grammar.map((g) => g.key));
const themeKeys = new Set(themes.map((t) => t.key));
const taskIds = new Set([
  ...reading.map((t) => t.id),
  ...listening.map((t) => t.id),
  ...writing.map((t) => t.id),
  ...speaking.map((t) => t.id),
]);

const units = [];
const canDoIds = new Set();

for (const level of COURSE) {
  check(isLevel(level.level), `course: "${level.level}" is not a CEFR level`);
  check(level.units?.length > 0, `course ${level.level} has no units`);

  level.units.forEach((unit, i) => {
    const key = `${level.level.toLowerCase()}.${i + 1}`;
    check(unit.title?.de && unit.title?.en, `unit ${key} is missing a title`);
    check(unit.canDos?.length >= 2, `unit ${key} needs at least two can-do statements`);

    // A unit that points at material which does not exist is worse than a
    // missing unit: the learner taps a goal and lands nowhere.
    for (const t of unit.themes ?? []) {
      check(themeKeys.has(t), `unit ${key} points at unknown theme "${t}"`);
    }
    for (const g of unit.grammar ?? []) {
      check(grammarKeys.has(g), `unit ${key} points at unknown grammar topic "${g}"`);
      const topic = grammar.find((x) => x.key === g);
      check(
        topic.level === level.level,
        `unit ${key} (${level.level}) teaches ${g}, which is tagged ${topic.level}`,
      );
    }
    for (const id of unit.tasks ?? []) {
      check(taskIds.has(id), `unit ${key} points at unknown task "${id}"`);
    }

    const canDos = unit.canDos.map((c, n) => {
      const id = `cd.${key}.${n + 1}`;
      check(!canDoIds.has(id), `duplicate can-do id ${id}`);
      canDoIds.add(id);
      check(c.text?.de && c.text?.en, `${id}: missing text`);
      check(
        AREAS[c.area] != null,
        `${id}: "${c.area}" is not one of ${Object.keys(AREAS).join(', ')}`,
      );
      return { id, text: c.text, area: c.area };
    });

    units.push({
      key,
      level: level.level,
      n: i + 1,
      title: unit.title,
      icon: unit.icon,
      blurb: unit.blurb,
      canDos,
      themes: unit.themes ?? [],
      grammar: unit.grammar ?? [],
      tasks: unit.tasks ?? [],
    });
  });
}


/* --------------------------------------------------------------- magazine */

/**
 * Turns an article paragraph into tokens.
 *
 * `[Kaution]` and `[bezahlt|bezahlen]` become word tokens carrying the id of a
 * real dictionary entry; `{musst du bezahlen|modalverben}` becomes a grammar
 * token carrying a real topic key. Both are resolved here rather than in the
 * app, so a word that does not exist stops the build instead of shipping as an
 * untappable link a learner never gets an explanation for.
 */
function tokenise(text, article, byHeadword) {
  const tokens = [];
  const re = /\[([^\[\]|]+)(?:\|([^\[\]|]+))?\]|\{([^{}|]+)\|([^{}|]+)\}/g;
  let last = 0;
  let m;

  while ((m = re.exec(text)) != null) {
    if (m.index > last) tokens.push({ t: 'text', s: text.slice(last, m.index) });
    last = m.index + m[0].length;

    if (m[3] != null) {
      const key = m[4].trim();
      check(
        grammarKeys.has(key),
        `${article.id}: grammar link "${m[3]}" names unknown topic "${key}"`,
      );
      const topic = grammar.find((g) => g.key === key);
      check(
        !topic || levelAtMost(topic.level, article.level),
        `${article.id} (${article.level}): grammar link "${key}" is tagged ${topic && topic.level}`,
      );
      tokens.push({ t: 'grammar', s: m[3], key });
      continue;
    }

    const surface = m[1];
    const lemma = (m[2] ?? m[1]).trim();
    const entry = byHeadword.get(lemma.toLowerCase());
    check(entry != null, `${article.id}: "[${surface}]" does not match any word (looked up "${lemma}")`);
    if (entry) {
      check(
        levelAtMost(entry.level, article.level),
        `${article.id} (${article.level}): "${lemma}" is a ${entry.level} word`,
      );
      tokens.push({ t: 'word', s: surface, id: entry.id });
    }
  }

  if (last < text.length) tokens.push({ t: 'text', s: text.slice(last) });
  return tokens;
}

const levelAtMost = (a, b) => LEVELS.indexOf(a) <= LEVELS.indexOf(b);

// A word is looked up by its headword with or without the article, because an
// article writes "[Wohnung]" and the entry is stored as "die Wohnung".
const byHeadword = new Map();
for (const v of vocab) {
  byHeadword.set(v.de.toLowerCase(), v);
  if (v.article) byHeadword.set(`${v.article} ${v.de}`.toLowerCase(), v);
}

const articles = MAGAZINE.map((article) => {
  check(isLevel(article.level), `article ${article.id}: "${article.level}" is not a CEFR level`);
  check(themeKeys.has(article.theme), `article ${article.id}: unknown theme "${article.theme}"`);
  check(article.paragraphs?.length > 0, `article ${article.id} has no text`);
  check(article.items?.length >= 3, `article ${article.id} needs at least three questions`);
  check(article.minutes > 0, `article ${article.id}: minutes must be positive`);

  const paragraphs = article.paragraphs.map((p) => tokenise(p, article, byHeadword));

  // Stray markup is a silent failure otherwise: it renders as literal brackets
  // in the middle of a sentence and nobody notices until a learner reports it.
  for (const p of paragraphs) {
    for (const token of p) {
      if (token.t !== 'text') continue;
      check(
        !/[[\]{}|]/.test(token.s),
        `${article.id}: leftover markup in "${token.s.trim().slice(0, 40)}"`,
      );
    }
  }

  return {
    id: article.id,
    level: article.level,
    theme: article.theme,
    title: article.title,
    teaser: article.teaser,
    minutes: article.minutes,
    paragraphs,
    spoken: paragraphs.map((p) => p.map((x) => x.s).join('')),
    items: buildItems(`a.${article.id}`, article.items),
  };
});

const articleIds = new Set(articles.map((a) => a.id));
check(articleIds.size === articles.length, 'two articles share an id');

/* -------------------------------------------------------- pronunciation */

const contrasts = CONTRASTS.map((c) => {
  check(isLevel(c.level), `contrast ${c.key}: "${c.level}" is not a CEFR level`);
  check(c.pairs?.length >= 3, `contrast ${c.key} needs at least three pairs`);
  check(!!c.tip?.de && !!c.tip?.en, `contrast ${c.key} is missing the articulation tip`);
  return {
    key: c.key,
    level: c.level,
    title: c.title,
    summary: c.summary,
    tip: c.tip,
    pairs: c.pairs.map(([a, b, aNote, bNote], n) => {
      const id = `p.${c.key}.${String(n + 1).padStart(2, '0')}`;
      // A "minimal pair" whose halves are identical teaches nothing and would
      // make the question unanswerable, since both buttons would be right.
      check(a !== b, `${id}: both sides are "${a}"`);
      check(!!aNote?.de && !!bNote?.de, `${id}: a note is missing`);
      return { id, a, b, aNote, bNote };
    }),
  };
});

const shadow = SHADOW.map((s, i) => {
  const id = `sh.${String(i + 1).padStart(2, '0')}`;
  check(isLevel(s.level), `${id}: "${s.level}" is not a CEFR level`);
  check(/\[[^\[\]]+\]/.test(s.text), `${id}: no stressed syllable is marked`);
  check(
    (s.text.match(/\[/g) || []).length === (s.text.match(/\]/g) || []).length,
    `${id}: unbalanced brackets`,
  );

  // "Ich [kom]me" becomes runs with the stress flag already resolved, so the
  // app never parses markup at runtime. Splitting on the brackets alternates
  // between unstressed and stressed, which is why the convention wraps rather
  // than merely points at a syllable.
  const syllables = [];
  s.text.split(/[[\]]/).forEach((chunk, i) => {
    if (chunk.length > 0) syllables.push({ text: chunk, stress: i % 2 === 1 });
  });
  check(
    syllables.some((x) => x.stress),
    `${id}: brackets present but no stressed syllable survived parsing`,
  );

  const text = s.text.replace(/[[\]]/g, '');
  check(text.length > 8, `${id}: phrase looks too short to shadow`);
  return { id, level: s.level, syllables, text, note: s.note };
});

/* ----------------------------------------------------------------- glosses */

/**
 * A gloss file is a flat map from vocabulary id to a one-line meaning in
 * another language. Coverage may be partial - the app falls back to the
 * English translation - so the build does not demand completeness; it demands
 * that every id a file claims actually exists, which is the failure that would
 * otherwise go unnoticed when vocabulary is renumbered.
 */
const vocabById = new Map(vocab.map((v) => [v.id, v]));
const glossLanguages = [];
const glossFiles = {};

for (const mod of GLOSS_FILES) {
  const m = mod.meta;
  check(m?.code && m.name && m.nativeName, `a gloss file is missing code/name/nativeName`);
  const code = m?.code ?? '?';
  check(typeof m?.rtl === 'boolean', `gloss ${code}: rtl must be stated explicitly`);
  check(
    !glossLanguages.some((g) => g.code === code),
    `gloss ${code}: two gloss files claim the same language code`,
  );

  const entries = Object.entries(mod.words ?? {});
  check(entries.length > 0, `gloss ${code}: no entries`);
  const covered = Object.fromEntries(LEVELS.map((l) => [l, 0]));

  for (const [id, text] of entries) {
    const word = vocabById.get(id);
    if (!word) {
      problems.push(`gloss ${code}: ${id} is not a vocabulary id`);
      continue;
    }
    if (typeof text !== 'string' || text.trim().length === 0) {
      problems.push(`gloss ${code}: ${id} (${word.de}) has an empty gloss`);
      continue;
    }
    // A gloss identical to the German headword is usually a copy-paste slip,
    // but sometimes the honest answer: "Kurs" really is kurs in Turkish and
    // "Internet" really is internet. So it is reported, not refused.
    if (text.trim().toLowerCase() === word.de.toLowerCase()) {
      warnings.push(`gloss ${code}: ${id} repeats the German headword "${word.de}"`);
    }
    covered[word.level] += 1;
  }

  // Coverage is a share of the words at that level, which is what the app
  // shows the learner; a language at 1.00 for A1 needs no English fallback
  // anywhere in A1.
  const coverage = Object.fromEntries(
    LEVELS.map((l) => [
      l,
      byLevelVocabCount(l) === 0 ? 0 : Number((covered[l] / byLevelVocabCount(l)).toFixed(3)),
    ]),
  );
  glossLanguages.push({ code, name: m.name, nativeName: m.nativeName, rtl: m.rtl, coverage });
  glossFiles[`gloss.${code}.json`] = Object.fromEntries(
    entries.filter(([id]) => vocabById.has(id)).sort(([a], [b]) => a.localeCompare(b)),
  );
}

function byLevelVocabCount(level) {
  return vocab.filter((v) => v.level === level).length;
}

/* ------------------------------------------------------------------- meta */


const byLevel = Object.fromEntries(
  LEVELS.map((l) => [
    l,
    {
      vocab: vocab.filter((v) => v.level === l).length,
      drills: drills.filter((d) => d.level === l).length,
      grammar: grammar.filter((g) => g.level === l).length,
      tasks: [...reading, ...listening, ...writing, ...speaking].filter((t) => t.level === l).length,
      articles: articles.filter((a) => a.level === l).length,
    },
  ]),
);

// A level is only required to have material once the course teaches it, so a
// level can be added content-first or course-first without breaking the build.
for (const level of new Set(units.map((u) => u.level))) {
  check(
    byLevel[level].vocab + byLevel[level].drills > 0,
    `the course teaches ${level}, but ${level} has no study material`,
  );
}

const meta = {
  themes,
  contrasts,
  shadow,
  levels: LEVEL_INFO,
  units,
  areas: AREAS,
  counts: {
    vocab: vocab.length,
    drills: drills.length,
    grammar: grammar.length,
    reading: reading.length,
    listening: listening.length,
    writing: writing.length,
    speaking: speaking.length,
    articles: articles.length,
    reviewable: vocab.length + drills.length,
  },
  byLevel,
  glossLanguages,
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
  'writing.json': writing,
  'speaking.json': speaking,
  'magazine.json': articles,
  'meta.json': meta,
  ...glossFiles,
};

for (const [name, data] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), JSON.stringify(data, null, 1) + '\n');
}

if (warnings.length > 0) {
  console.warn(`${warnings.length} thing(s) worth a second look:`);
  for (const w of warnings) console.warn('  ! ' + w);
  console.warn('');
}

const size = (name) => (fs.statSync(path.join(OUT, name)).size / 1024).toFixed(0);
console.log('Wrote src/data:');
for (const name of Object.keys(files)) console.log(`  ${name} (${size(name)} KB)`);
console.log(
  `\n${vocab.length} words in ${themes.length} themes, ${drills.length} drills across ${grammar.length} grammar topics,\n` +
    `${reading.length} reading tasks, ${listening.length} listening tasks, ` +
    `${writing.length} writing tasks, ${speaking.length} speaking tasks.\n` +
    `${articles.length} magazine articles.\n` +
    `${contrasts.length} sound contrasts with ${contrasts.reduce((n, c) => n + c.pairs.length, 0)} minimal pairs, ` +
    `${shadow.length} shadowing phrases.\n` +
    `${units.length} course units, ${canDoIds.size} can-do goals.\n` +
    `${meta.counts.reviewable} items are on the review schedule.\n`,
);

for (const l of LEVELS) {
  const c = byLevel[l];
  console.log(
    `  ${l}: ${String(c.vocab).padStart(4)} words  ${String(c.drills).padStart(4)} drills  ` +
      `${String(c.grammar).padStart(2)} topics  ${String(c.tasks).padStart(2)} tasks  ` +
      `${String(c.articles).padStart(2)} articles  ` +
      `${units.filter((u) => u.level === l).length} units`,
  );
}

// Keep a reference to the loader so bundlers do not tree-shake the import.
void pathToFileURL;
