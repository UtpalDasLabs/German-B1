import { todayKey } from './srs';
import { articlesIn, mulberry32, reviewableIds, unitsFor, vocabIn, type Scope } from './study';
import type { Article, Progress, VocabEntry } from './types';

/**
 * The word of the day.
 *
 * Deterministic from the date, so it is the same word all day on every device
 * and changes at midnight without anything having to be stored. Picking at
 * random on each render would mean the "word of the day" changed every time the
 * home screen was scrolled past.
 */
export function wordOfDay(scope: Scope, day = todayKey()): VocabEntry | undefined {
  const pool = vocabIn(scope);
  if (pool.length === 0) return undefined;
  return pool[Math.floor(mulberry32(hash(day))() * pool.length)];
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export type PlanStep = {
  key: 'review' | 'read' | 'goal';
  /** Minutes this step should realistically take. */
  minutes: number;
  /** Where tapping it goes. */
  route: string;
  /** Filled in by the caller from the dataset, so this stays copy-free. */
  detail: string | null;
  done: boolean;
};

/**
 * Three things to do today, in order, with an honest minute figure.
 *
 * The problem this solves is the one every study app has: the learner opens it
 * meaning to study and spends the session deciding what to study. So the plan
 * is short, fixed for the day, and never longer than three items - a list of
 * twelve suggestions is the same problem wearing a different hat.
 *
 * Minutes are derived, not invented: review time comes from how many cards are
 * actually due, reading time from the article itself.
 */
export function todayPlan(scope: Scope, progress: Progress, now = Date.now()): {
  steps: PlanStep[];
  minutes: number;
  article: Article | undefined;
} {
  const due = reviewableIds(scope).filter((id) => {
    const card = progress.cards[id];
    return card == null || card.due <= now;
  }).length;

  // The first unread article in scope, or the shortest one if all are read -
  // re-reading is a legitimate activity, inventing a new one is not.
  const candidates = articlesIn(scope);
  const article = candidates.find((a) => !progress.articles[a.id]) ?? candidates[0];

  const units = unitsFor(scope.level);
  const openGoal = units.flatMap((u) => u.canDos).find((c) => !progress.canDos[c.id]);

  // About eight cards a minute, floored at two minutes so the step never looks
  // like it is not worth starting.
  const reviewMinutes = Math.max(2, Math.min(12, Math.round(Math.min(due, 40) / 8)));

  const steps: PlanStep[] = [
    {
      key: 'review',
      minutes: reviewMinutes,
      route: '/study?mode=due',
      detail: null,
      done: due === 0,
    },
  ];

  if (article) {
    steps.push({
      key: 'read',
      minutes: article.minutes,
      route: `/article?id=${article.id}`,
      detail: null,
      done: !!progress.articles[article.id],
    });
  }

  steps.push({
    key: 'goal',
    minutes: 3,
    route: openGoal ? '/course' : '/drill?count=10',
    detail: null,
    done: units.length > 0 && openGoal == null,
  });

  return { steps, minutes: steps.reduce((n, s) => n + s.minutes, 0), article };
}
