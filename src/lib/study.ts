import rawMeta from '@/data/meta.json';
import rawVocab from '@/data/vocab.json';
import rawDrills from '@/data/drills.json';
import rawGrammar from '@/data/grammar.json';
import rawReading from '@/data/reading.json';
import rawListening from '@/data/listening.json';
import rawWriting from '@/data/writing.json';
import rawSpeaking from '@/data/speaking.json';

import type {
  AreaKey,
  CardProgress,
  Drill,
  GrammarTopic,
  ListeningTask,
  Meta,
  ModuleKey,
  ReadingTask,
  SpeakingTask,
  VocabEntry,
  VocabTheme,
  WritingTask,
} from './types';
import { isDue, mastery } from './srs';

export const meta = rawMeta as unknown as Meta;
export const vocab = rawVocab as unknown as VocabEntry[];
export const drills = rawDrills as unknown as Drill[];
export const grammar = rawGrammar as unknown as GrammarTopic[];
export const reading = rawReading as unknown as ReadingTask[];
export const listening = rawListening as unknown as ListeningTask[];
export const writing = rawWriting as unknown as WritingTask[];
export const speaking = rawSpeaking as unknown as SpeakingTask[];

export const themes: VocabTheme[] = meta.themes;

const vocabById = new Map(vocab.map((v) => [v.id, v]));
const drillById = new Map(drills.map((d) => [d.id, d]));
const themeByKey = new Map(themes.map((t) => [t.key, t]));
const grammarByKey = new Map(grammar.map((g) => [g.key, g]));

export function getVocab(id: string): VocabEntry | undefined {
  return vocabById.get(id);
}
export function getDrill(id: string): Drill | undefined {
  return drillById.get(id);
}
export function getTheme(key: string): VocabTheme | undefined {
  return themeByKey.get(key);
}
export function getGrammar(key: string): GrammarTopic | undefined {
  return grammarByKey.get(key);
}

/** Everything the spaced-repetition schedule tracks, in one list. */
export const reviewableIds: string[] = [...vocab.map((v) => v.id), ...drills.map((d) => d.id)];

/** The full headword as it should be read aloud and shown on a card. */
export function headword(entry: VocabEntry): string {
  return entry.article ? `${entry.article} ${entry.de}` : entry.de;
}

export type VocabFilter = {
  theme?: string | 'all';
  /** Only items that are due for review (or never seen). */
  dueOnly?: boolean;
  /** Only items answered wrong more often than right. */
  trickyOnly?: boolean;
};

export function filterVocab(
  cards: Record<string, CardProgress>,
  filter: VocabFilter,
  now = Date.now(),
): VocabEntry[] {
  return vocab.filter((v) => {
    if (filter.theme && filter.theme !== 'all' && v.theme !== filter.theme) return false;
    return passesSchedule(cards[v.id], filter, now);
  });
}

export function filterDrills(
  cards: Record<string, CardProgress>,
  filter: VocabFilter & { topic?: string | 'all' },
  now = Date.now(),
): Drill[] {
  return drills.filter((d) => {
    if (filter.topic && filter.topic !== 'all' && d.topic !== filter.topic) return false;
    return passesSchedule(cards[d.id], filter, now);
  });
}

function passesSchedule(card: CardProgress | undefined, filter: VocabFilter, now: number): boolean {
  if (filter.dueOnly && !isDue(card, now)) return false;
  if (filter.trickyOnly) {
    if (card == null || card.seen === 0) return false;
    if (card.correct / card.seen > 0.6) return false;
  }
  return true;
}

/**
 * Orders a session so weak items come first but the deck never feels like the
 * same five words on a loop.
 */
export function orderForStudy<T extends { id: string }>(
  items: T[],
  cards: Record<string, CardProgress>,
  seed = Date.now(),
): T[] {
  const rng = mulberry32(seed);
  return [...items]
    .map((item) => ({ item, weight: (1 - mastery(cards[item.id])) * 2 + rng() }))
    .sort((a, b) => b.weight - a.weight)
    .map((x) => x.item);
}

export function shuffle<T>(items: T[], seed = Date.now()): T[] {
  const rng = mulberry32(seed);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Small deterministic PRNG so a given session can be replayed. */
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Item ids grouped under the key the progress screens roll them up by. */
export function vocabGroups(): { id: string; key: string }[] {
  return vocab.map((v) => ({ id: v.id, key: v.theme }));
}
export function drillGroups(): { id: string; key: string }[] {
  return drills.map((d) => ({ id: d.id, key: d.topic }));
}
export function areaGroups(): { id: string; key: AreaKey }[] {
  return [
    ...vocab.map((v) => ({ id: v.id, key: 'wortschatz' as AreaKey })),
    ...drills.map((d) => ({ id: d.id, key: 'grammatik' as AreaKey })),
  ];
}

/* --------------------------------------------------------------- modules */

export function readingById(id: string): ReadingTask | undefined {
  return reading.find((t) => t.id === id);
}
export function listeningById(id: string): ListeningTask | undefined {
  return listening.find((t) => t.id === id);
}
export function writingById(id: string): WritingTask | undefined {
  return writing.find((t) => t.id === id);
}
export function speakingById(id: string): SpeakingTask | undefined {
  return speaking.find((t) => t.id === id);
}

/**
 * Picks one task per module for a full mock exam.
 *
 * Reading and listening draw from the parts the real paper always contains, so
 * a mock never turns into four Teil-1 tasks in a row.
 */
export function buildExam(seed = Date.now()): {
  lesen: ReadingTask;
  hoeren: ListeningTask;
  schreiben: WritingTask;
  sprechen: SpeakingTask;
} {
  const pick = <T,>(list: T[], offset: number): T => shuffle(list, seed + offset)[0];
  return {
    lesen: pick(reading, 0),
    hoeren: pick(listening, 1),
    schreiben: pick(writing, 2),
    sprechen: pick(speaking, 3),
  };
}

/** Tasks for one module, newest format first, used by the module screens. */
export function tasksFor(module: ModuleKey): { id: string; teil: number; title: { de: string; en: string } }[] {
  if (module === 'lesen') return reading.map((t) => ({ id: t.id, teil: t.teil, title: t.title }));
  if (module === 'hoeren') return listening.map((t) => ({ id: t.id, teil: t.teil, title: t.title }));
  if (module === 'schreiben') return writing.map((t) => ({ id: t.id, teil: t.teil, title: t.title }));
  return speaking.map((t) => ({ id: t.id, teil: t.teil, title: t.title }));
}

/** True for the two modules the app can mark against an answer key. */
export function isAutoScored(module: ModuleKey): boolean {
  return module === 'lesen' || module === 'hoeren';
}
