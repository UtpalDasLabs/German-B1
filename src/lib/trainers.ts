import { headword, mulberry32, shuffle, vocabIn, type Scope } from './study';
import type { Bilingual, Item, VocabEntry } from './types';

/**
 * The three things German makes hard that a word list cannot fix.
 *
 * A vocabulary card asks "do you know this word" and lets you answer honestly.
 * That works for meaning and fails for the article, the plural and the verb
 * forms, because those are the parts you can read off the card and believe you
 * knew. These trainers hide the answer and make you produce it, which is the
 * only way to find out.
 */
export type TrainerKind = 'gender' | 'plural' | 'verb';

export const TRAINER_KINDS: TrainerKind[] = ['gender', 'plural', 'verb'];

export type TrainerItem = Item & {
  /** The vocabulary entry this was generated from, so it can be graded. */
  entryId: string;
};

const ARTICLES = ['der', 'die', 'das'];

/** Which verb form a conjugation question is asking for. */
const VERB_SLOTS: { index: number; prompt: Bilingual; subject: string }[] = [
  {
    index: 0,
    prompt: { de: 'Präsens, er/sie/es', en: 'present tense, er/sie/es' },
    subject: 'er',
  },
  { index: 1, prompt: { de: 'Präteritum, er/sie/es', en: 'past tense, er/sie/es' }, subject: 'er' },
  { index: 2, prompt: { de: 'Perfekt', en: 'the Perfekt' }, subject: 'er' },
];

function nouns(scope: Scope): VocabEntry[] {
  return vocabIn(scope).filter((v) => v.pos === 'noun' && v.article != null);
}

/**
 * Builds one round of trainer questions.
 *
 * Distractors are drawn from other real entries in scope rather than invented,
 * so a wrong option is always a plural ending or a verb form that German
 * actually uses. An invented ending would be rejected on sight and the question
 * would test nothing.
 */
export function buildRound(kind: TrainerKind, scope: Scope, count: number, seed = Date.now()): TrainerItem[] {
  if (kind === 'gender') return genderRound(scope, count, seed);
  if (kind === 'plural') return pluralRound(scope, count, seed);
  return verbRound(scope, count, seed);
}

function genderRound(scope: Scope, count: number, seed: number): TrainerItem[] {
  return shuffle(nouns(scope), seed)
    .slice(0, count)
    .map((entry) => ({
      id: `tr.gender.${entry.id}`,
      entryId: entry.id,
      prompt: `___ ${entry.de}`,
      promptEn: entry.en,
      options: ARTICLES,
      answer: ARTICLES.indexOf(entry.article as string),
      why: {
        de: `${headword(entry)} – ${entry.en}. ${entry.example.de}`,
        en: `${headword(entry)} – ${entry.en}. ${entry.example.de}`,
      },
    }));
}

function pluralRound(scope: Scope, count: number, seed: number): TrainerItem[] {
  // "nur Plural" and "ohne Plural" are facts about the word, not endings, so
  // they are excluded: asking for the plural of "die Nebenkosten" is not a
  // question with an answer.
  const endings = ['-', '-e', '-en', '-n', '-er', '-s', '-¨e', '-¨er', '-¨'];
  const usable = nouns(scope).filter((v) => v.plural != null && endings.includes(v.plural));
  const rng = mulberry32(seed);

  return shuffle(usable, seed)
    .slice(0, count)
    .map((entry) => {
      const right = entry.plural as string;
      const wrong = shuffle(
        endings.filter((e) => e !== right),
        Math.floor(rng() * 1e9),
      ).slice(0, 3);
      const options = shuffle([right, ...wrong], Math.floor(rng() * 1e9));
      return {
        id: `tr.plural.${entry.id}`,
        entryId: entry.id,
        prompt: `${headword(entry)} → Plural?`,
        promptEn: entry.en,
        options,
        answer: options.indexOf(right),
        why: {
          de: `${headword(entry)}, Plural ${right}. ${entry.example.de}`,
          en: `${headword(entry)}, plural ${right}. ${entry.example.de}`,
        },
      };
    });
}

function verbRound(scope: Scope, count: number, seed: number): TrainerItem[] {
  // Only strong and irregular verbs carry principal parts, and they are exactly
  // the ones worth drilling - a weak verb's forms follow from a rule.
  const usable = vocabIn(scope).filter(
    (v) => v.pos === 'verb' && v.forms != null && v.forms.split('·').length === 3,
  );
  const parts = (v: VocabEntry) => (v.forms as string).split('·').map((x) => x.trim());
  const rng = mulberry32(seed);

  return shuffle(usable, seed)
    .slice(0, count)
    .map((entry) => {
      const slot = VERB_SLOTS[Math.floor(rng() * VERB_SLOTS.length)];
      const right = parts(entry)[slot.index];
      const wrong = shuffle(
        usable.filter((v) => v.id !== entry.id).map((v) => parts(v)[slot.index]),
        Math.floor(rng() * 1e9),
      )
        .filter((form) => form !== right)
        .slice(0, 3);
      const options = shuffle([right, ...wrong], Math.floor(rng() * 1e9));
      return {
        id: `tr.verb.${entry.id}.${slot.index}`,
        entryId: entry.id,
        prompt: `${entry.de} – ${slot.subject} ___`,
        promptEn: `${entry.en} – ${slot.prompt.en}`,
        options,
        answer: options.indexOf(right),
        why: {
          de: `${entry.de}: ${entry.forms}`,
          en: `${entry.de}: ${entry.forms} (${entry.en})`,
        },
      };
    });
}

/** How many questions a trainer could ask in the current scope. */
export function availableFor(kind: TrainerKind, scope: Scope): number {
  return buildRound(kind, scope, Number.MAX_SAFE_INTEGER, 1).length;
}
