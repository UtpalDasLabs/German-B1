import type { GoalId } from './types';

/**
 * Daily XP goals. The XP numbers are deliberately small multiples of a single
 * card review so "one more word" always visibly moves the ring.
 */
export const GOALS: Record<GoalId, { xp: number; cards: number }> = {
  casual: { xp: 30, cards: 5 },
  regular: { xp: 60, cards: 10 },
  serious: { xp: 120, cards: 20 },
  intense: { xp: 240, cards: 40 },
};

export const GOAL_ORDER: GoalId[] = ['casual', 'regular', 'serious', 'intense'];

/** XP awarded per card review. Getting it right is worth more than guessing. */
export const XP_CORRECT = 6;
export const XP_WRONG = 2;
/** Bonus for finishing one timed module, win or lose - sitting it is the work. */
export const XP_MODULE = 25;
/** Bonus for finishing a full mock exam across all four modules. */
export const XP_EXAM = 80;

export function xpForReview(knewIt: boolean): number {
  return knewIt ? XP_CORRECT : XP_WRONG;
}

/** Roughly how many items a goal's XP represents, for plain-language copy. */
export function cardsForGoal(goal: GoalId): number {
  return GOALS[goal].cards;
}
