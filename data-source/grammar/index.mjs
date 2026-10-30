/**
 * Grammar topics in study order.
 *
 * A1 comes first and in course order, because at that level the sequence is
 * not negotiable - you cannot practise the accusative before you can conjugate.
 * From A2 upwards the order is by family: tenses first, because telling what
 * happened is the first thing every productive task asks for; then sentence
 * structure, which is what visibly separates B1 from A2; then the verb
 * constructions and the case work, which are where marks quietly leak away.
 */
import { A1_GRAMMAR } from './a1.mjs';
import { ZEITEN } from './zeiten.mjs';
import { SATZBAU } from './satzbau.mjs';
import { VERBFORMEN } from './verbformen.mjs';
import { NOMEN } from './nomen.mjs';
import { SONSTIGES } from './sonstiges.mjs';

export const GRAMMAR = [...A1_GRAMMAR, ...ZEITEN, ...SATZBAU, ...VERBFORMEN, ...NOMEN, ...SONSTIGES];
