import { mastery } from './srs';
import type { CardProgress, ModuleAttempt, ModuleKey } from './types';

export type GroupStat = {
  key: string;
  total: number;
  seen: number;
  mastered: number;
  /** Average box position across the group, 0-1. */
  progress: number;
};

/** Box 4 and 5 count as "mastered" - the item is on a long interval. */
export const MASTERED_BOX = 4;

/**
 * Rolls a set of item ids up by whatever key the caller groups them under -
 * a vocabulary theme, a grammar topic, or one of the six study areas.
 */
export function groupStats(
  items: { id: string; key: string }[],
  cards: Record<string, CardProgress>,
  order?: string[],
): GroupStat[] {
  const buckets = new Map<string, string[]>();
  for (const item of items) {
    const list = buckets.get(item.key) ?? [];
    list.push(item.id);
    buckets.set(item.key, list);
  }

  const stats = [...buckets.entries()].map(([key, ids]) => {
    let seen = 0;
    let mastered = 0;
    let sum = 0;
    for (const id of ids) {
      const card = cards[id];
      if (card && card.seen > 0) seen += 1;
      if ((card?.box ?? 0) >= MASTERED_BOX) mastered += 1;
      sum += mastery(card);
    }
    return { key, total: ids.length, seen, mastered, progress: sum / ids.length };
  });

  if (!order) return stats;
  const rank = new Map(order.map((k, i) => [k, i]));
  return stats.sort((a, b) => (rank.get(a.key) ?? 999) - (rank.get(b.key) ?? 999));
}

export function overallProgress(ids: string[], cards: Record<string, CardProgress>): number {
  if (ids.length === 0) return 0;
  return ids.reduce((sum, id) => sum + mastery(cards[id]), 0) / ids.length;
}

export function masteredCount(ids: string[], cards: Record<string, CardProgress>): number {
  return ids.filter((id) => (cards[id]?.box ?? 0) >= MASTERED_BOX).length;
}

/**
 * Best and most recent score for one exam module.
 *
 * Schreiben and Sprechen are self-assessed, so `best` mixes a checked answer
 * key with the learner's own judgement. That is the honest limit of practising
 * a productive skill alone, and the UI says so rather than hiding it.
 */
export type ModuleStat = { module: ModuleKey; attempts: number; best: number; last: number | null };

export function moduleStats(attempts: ModuleAttempt[], modules: ModuleKey[]): ModuleStat[] {
  return modules.map((module) => {
    const mine = attempts.filter((a) => a.module === module);
    return {
      module,
      attempts: mine.length,
      best: mine.reduce((max, a) => Math.max(max, a.score), 0),
      // `attempts` is newest first, so the head is the most recent sitting.
      last: mine.length ? mine[0].score : null,
    };
  });
}

/** Percentage score, rounded the way a certificate reports it. */
export function percent(correct: number, total: number): number {
  return total === 0 ? 0 : Math.round((correct / total) * 100);
}
