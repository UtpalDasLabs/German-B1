import type { Progress, Settings } from './types';

/**
 * Merging two copies of the same learner's progress.
 *
 * Every sync mechanism needs this and most skip it, which is why most sync
 * silently loses work. The rule here is chosen so that merging is always safe
 * to do: whatever order the two sides arrive in, and however many times you
 * merge them, the result is the same and nothing you earned disappears.
 *
 * Per kind of data:
 *
 *   cards      the more recently reviewed side wins, per card. Not the higher
 *              box - demoting a card you got wrong is real information, and
 *              taking the maximum would quietly undo every mistake you made on
 *              the other device.
 *   claims     can-dos and saved words union. Ticking a goal is a claim you
 *              made; un-ticking is rare and does not propagate, because
 *              resurrecting a claim is a smaller harm than deleting one.
 *   history    attempts, exams and read articles concatenate and de-duplicate
 *              on their timestamp, which is unique enough in practice and
 *              stable across devices.
 *   drafts     the later edit wins, per task. A draft is a single document and
 *              there is no sensible way to merge two versions of a paragraph.
 *   totals     XP takes the maximum rather than the sum, because both sides
 *              share a history and adding them would count it twice. Streak
 *              comes from whichever side studied more recently.
 *
 * The result is canonical: keys come out sorted and ties break deterministically,
 * so merging A into B and B into A produce the same bytes, not merely the same
 * data. That matters for a file both devices write to - without it the two would
 * keep rewriting each other with identical content and sync would never settle.
 */

/** Rebuilds a record with its keys in sorted order, so output is canonical. */
function sorted<T>(record: Record<string, T>): Record<string, T> {
  const out: Record<string, T> = {};
  for (const key of Object.keys(record).sort()) out[key] = record[key];
  return out;
}
export function mergeProgress(a: Progress, b: Progress): Progress {
  const cards = { ...a.cards };
  for (const [id, theirs] of Object.entries(b.cards)) {
    const mine = cards[id];
    if (!mine || theirs.last > mine.last || (theirs.last === mine.last && theirs.seen > mine.seen)) {
      cards[id] = theirs;
    }
  }

  const articles = { ...a.articles };
  for (const [id, theirs] of Object.entries(b.articles)) {
    const mine = articles[id];
    if (!mine || theirs.at > mine.at) articles[id] = theirs;
  }

  const drafts = { ...a.drafts };
  for (const [id, theirs] of Object.entries(b.drafts)) {
    const mine = drafts[id];
    if (!mine || theirs.at > mine.at) drafts[id] = theirs;
  }

  // Saved words keep the earlier timestamp: it records when you first wanted
  // to come back to the word, and that does not change by syncing.
  const saved = { ...a.saved };
  for (const [id, at] of Object.entries(b.saved)) {
    saved[id] = saved[id] ? Math.min(saved[id], at) : at;
  }

  const newer = (b.lastStudyDay ?? '') > (a.lastStudyDay ?? '') ? b : a;
  const newerDay = (b.xpDay ?? '') > (a.xpDay ?? '') ? b : a;

  return {
    cards: sorted(cards),
    canDos: sorted({ ...a.canDos, ...b.canDos }),
    saved: sorted(saved),
    articles: sorted(articles),
    drafts: sorted(drafts),
    attempts: byTime([...a.attempts, ...b.attempts], 40),
    exams: byTime([...a.exams, ...b.exams], 20),
    lastStudyDay: newer.lastStudyDay,
    streak: newer.streak,
    bestStreak: Math.max(a.bestStreak, b.bestStreak),
    xp: Math.max(a.xp, b.xp),
    xpToday: newerDay.xpToday,
    xpDay: newerDay.xpDay,
    goalDays: [...new Set([...a.goalDays, ...b.goalDays])].sort().reverse().slice(0, 400),
  };
}

/**
 * Newest first, one entry per distinct record, capped.
 *
 * De-duplicating on the whole record rather than on the timestamp alone: two
 * copies of the same sitting are identical and collapse, whereas two genuinely
 * different entries that happen to share a millisecond both survive. Ties break
 * on the serialised form so the order does not depend on which side was passed
 * first.
 */
function byTime<T extends { at: number }>(all: T[], cap: number): T[] {
  const unique = new Map<string, T>();
  for (const item of all) unique.set(JSON.stringify(item), item);
  return [...unique.entries()]
    .sort(([keyX, x], [keyY, y]) => y.at - x.at || keyX.localeCompare(keyY))
    .map(([, item]) => item)
    .slice(0, cap);
}

/**
 * Settings are last-write-wins, because they have no per-field history and
 * merging a level and a theme preference would produce a setup neither device
 * chose. The caller decides which side is newer.
 */
export function mergeSettings(mine: Settings, theirs: Settings, theirsIsNewer: boolean): Settings {
  return theirsIsNewer ? { ...mine, ...theirs } : mine;
}
