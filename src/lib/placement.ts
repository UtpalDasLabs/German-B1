import { drills, levels, mulberry32, shuffle } from './study';
import type { Drill, Level } from './types';

/** How many questions are asked per level. */
export const PER_LEVEL = 4;

/**
 * Builds a placement test out of the grammar drills that already exist.
 *
 * It does not need its own question bank. A grammar drill tagged B1 is, by
 * construction, a question only a B1 learner should get right, so the existing
 * drills are a better calibrated instrument than anything written specially -
 * and it means the test gets longer and more accurate as levels are added,
 * rather than going stale.
 *
 * Only levels that actually have drills are probed. A test that asked four C1
 * questions when no C1 material existed would place everybody at B1 and look
 * like it had measured something.
 */
export function buildPlacement(seed = Date.now()): { level: Level; items: Drill[] }[] {
  return levels
    .map((info) => {
      const pool = drills.filter((d) => d.level === info.key);
      return { level: info.key, items: shuffle(pool, seed + hash(info.key)).slice(0, PER_LEVEL) };
    })
    .filter((block) => block.items.length === PER_LEVEL);
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Turns the answers into a suggested level.
 *
 * The rule is a ladder, not a total: you are placed at the first level you did
 * not comfortably pass, because a learner who aces A1 and A2 and then scores
 * one in four at B1 belongs in B1 - averaging those three would place them at
 * A2 and waste their time on material they have already proved they know.
 *
 * It returns a suggestion and says so. Four questions per level is enough to
 * point at a starting point and nowhere near enough to certify anything.
 */
export function placeFrom(
  blocks: { level: Level; items: Drill[] }[],
  answers: Record<string, number | null>,
): { level: Level; perLevel: { level: Level; correct: number; total: number }[]; correct: number } {
  const perLevel = blocks.map((block) => ({
    level: block.level,
    correct: block.items.filter((item) => answers[item.id] === item.answer).length,
    total: block.items.length,
  }));

  const pass = Math.ceil(PER_LEVEL * 0.75);
  let suggested: Level = blocks[0]?.level ?? 'A1';
  for (const row of perLevel) {
    if (row.correct >= pass) {
      // Comfortable here, so provisionally move up to the next probed level.
      const next = blocks[blocks.findIndex((b) => b.level === row.level) + 1];
      suggested = next ? next.level : row.level;
    } else {
      suggested = row.level;
      break;
    }
  }

  return { level: suggested, perLevel, correct: perLevel.reduce((n, r) => n + r.correct, 0) };
}

/** Kept so a future shuffled variant stays reproducible. */
export { mulberry32 };
