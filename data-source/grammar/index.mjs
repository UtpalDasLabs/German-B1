/**
 * Grammar topics in study order.
 *
 * The sequence is deliberate: tenses first, because telling what happened is
 * the first thing every productive task asks for; then sentence structure,
 * which is what visibly separates B1 from A2; then the verb constructions and
 * the case work, which are where marks quietly leak away.
 */
import { ZEITEN } from './zeiten.mjs';
import { SATZBAU } from './satzbau.mjs';
import { VERBFORMEN } from './verbformen.mjs';
import { NOMEN } from './nomen.mjs';
import { SONSTIGES } from './sonstiges.mjs';

export const GRAMMAR = [...ZEITEN, ...SATZBAU, ...VERBFORMEN, ...NOMEN, ...SONSTIGES];
