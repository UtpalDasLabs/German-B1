/**
 * Gloss languages: a one-line meaning for a single German word in the
 * learner's own language.
 *
 * This is deliberately not an interface translation. The interface stays in
 * German and English, which are the two languages this project can write and
 * proof-read; a learner who manages "Daily goal" in English should still not
 * have to learn "die Voraussetzung" through a second foreign language.
 *
 * The gloss files are loaded on demand and cached, so a learner who never
 * picks a gloss language never downloads one, and one who picks Turkish
 * downloads only Turkish. That is the whole reason they are not part of
 * vocab.json.
 */
import type { GlossLanguage } from './types';
import { meta } from './study';

type Table = Record<string, string>;

const cache = new Map<GlossLanguage, Table>();
const inFlight = new Map<GlossLanguage, Promise<Table>>();

/** The languages the build shipped, with their coverage per level. */
export const glossLanguages = meta.glossLanguages;

export function glossMeta(code: GlossLanguage | null) {
  return code == null ? null : (glossLanguages.find((g) => g.code === code) ?? null);
}

/** Whether the gloss table for a language is already in memory. */
export function glossReady(code: GlossLanguage | null): boolean {
  return code != null && cache.has(code);
}

/**
 * The import list is written out rather than built from the code because
 * bundlers need a static set of specifiers to split on; a template literal
 * would either fail to resolve or pull every language into one chunk.
 */
function fetchTable(code: GlossLanguage): Promise<Table> {
  switch (code) {
    case 'tr':
      return import('@/data/gloss.tr.json').then((m) => m.default as Table);
    case 'ar':
      return import('@/data/gloss.ar.json').then((m) => m.default as Table);
    case 'ru':
      return import('@/data/gloss.ru.json').then((m) => m.default as Table);
    default:
      return Promise.resolve({});
  }
}

/** Loads a gloss table, or returns the cached one. Never rejects. */
export function loadGloss(code: GlossLanguage | null): Promise<Table> {
  if (code == null) return Promise.resolve({});
  const cached = cache.get(code);
  if (cached) return Promise.resolve(cached);

  const existing = inFlight.get(code);
  if (existing) return existing;

  const p = fetchTable(code)
    .then((table) => {
      cache.set(code, table);
      inFlight.delete(code);
      return table;
    })
    .catch(() => {
      // A gloss is an aid, not the lesson: if the chunk cannot be fetched the
      // app carries on in English rather than blocking the review.
      inFlight.delete(code);
      return {} as Table;
    });
  inFlight.set(code, p);
  return p;
}

/**
 * The loaded gloss table, or null when nothing is loaded for this language.
 * Used by the dictionary, which searches glosses as well as German and
 * English - a Turkish speaker who knows a word only as "aile" should be able
 * to find "die Familie" by typing it.
 */
export function glossTable(code: GlossLanguage | null): Table | null {
  return code == null ? null : (cache.get(code) ?? null);
}

/**
 * The gloss for one word, or null when this language has not glossed it. The
 * caller falls back to the English translation, which is why this returns null
 * rather than a placeholder.
 */
export function glossFor(code: GlossLanguage | null, id: string): string | null {
  if (code == null) return null;
  return cache.get(code)?.[id] ?? null;
}
