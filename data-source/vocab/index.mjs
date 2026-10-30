/**
 * The vocabulary themes, in the order they appear on the study path.
 *
 * Everyday themes come first because they pay off immediately; the last four
 * are the "engine room" sets - key verbs, verbs with prepositions, connectors
 * and fixed expressions - which are what actually separates a B1 text from an
 * A2 one, and which no theme-based list covers on its own.
 */
import familie from './familie.mjs';
import wohnen from './wohnen.mjs';
import arbeit from './arbeit.mjs';
import bildung from './bildung.mjs';
import gesundheit from './gesundheit.mjs';
import essen from './essen.mjs';
import einkaufen from './einkaufen.mjs';
import reisen from './reisen.mjs';
import verkehr from './verkehr.mjs';
import freizeit from './freizeit.mjs';
import medien from './medien.mjs';
import umwelt from './umwelt.mjs';
import behoerden from './behoerden.mjs';
import gefuehle from './gefuehle.mjs';
import kommunikation from './kommunikation.mjs';
import stadt from './stadt.mjs';
import zeit from './zeit.mjs';
import verben from './verben.mjs';
import adjektive from './adjektive.mjs';
import praepositionen from './praepositionen.mjs';
import konnektoren from './konnektoren.mjs';
import nomenverben from './nomenverben.mjs';

import { A1 } from './levels/a1.mjs';
import { A2 } from './levels/a2.mjs';
import { B2 } from './levels/b2.mjs';
import { C1 } from './levels/c1.mjs';

const THEMES = [
  familie,
  wohnen,
  arbeit,
  bildung,
  gesundheit,
  essen,
  einkaufen,
  reisen,
  verkehr,
  freizeit,
  medien,
  umwelt,
  behoerden,
  gefuehle,
  kommunikation,
  stadt,
  zeit,
  verben,
  adjektive,
  praepositionen,
  konnektoren,
  nomenverben,
];

/**
 * Words for the levels other than B1 are authored one file per level rather
 * than one file per theme, and merged onto the themes here.
 *
 * The reason is review, not taste: when adding a level, the question you need
 * to answer is "is this a sensible A1 wordlist?", and that is only answerable
 * if the whole level is in front of you. Splitting it across 22 theme files
 * would make it unreviewable, which is the same mistake as writing the entries
 * out as full objects.
 */
const BY_LEVEL = { A1, A2, B2, C1 };

export const THEME_FILES = THEMES.map((theme) => {
  const levels = {};
  for (const [level, byTheme] of Object.entries(BY_LEVEL)) {
    if (byTheme[theme.key]) levels[level] = byTheme[theme.key];
  }
  return Object.keys(levels).length > 0 ? { ...theme, levels } : theme;
});

/** Theme keys a level file names that no theme file defines. */
const known = new Set(THEMES.map((t) => t.key));
for (const [level, byTheme] of Object.entries(BY_LEVEL)) {
  for (const key of Object.keys(byTheme)) {
    if (!known.has(key)) throw new Error(`${level} vocabulary names unknown theme "${key}"`);
  }
}
