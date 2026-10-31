/**
 * Gloss languages.
 *
 * A gloss language is not an interface language. The interface stays in the two
 * languages this project can write and proof-read properly (German, English);
 * a gloss is the one-line meaning of a single German word, which is both the
 * part learners actually need in their own language and the part that can be
 * checked entry by entry.
 *
 * Each file exports `meta` and `words` (vocabulary id -> gloss). Coverage is
 * allowed to be partial: the app falls back to the English translation for any
 * word a language has not glossed yet, so a language can ship at A1 and grow.
 */
import * as tr from './tr.mjs';
import * as ar from './ar.mjs';
import * as ru from './ru.mjs';

export const GLOSS_FILES = [tr, ar, ru];
