import { useEffect, useMemo, useState } from 'react';

import { glossFor, glossMeta, glossTable, loadGloss } from './gloss';
import { useSettings } from '@/store/SettingsProvider';

/** A word's meaning in the learner's gloss language, or null. */
export type Gloss = { text: string; rtl: boolean } | null;

/**
 * The gloss lookup for the chosen language, plus the direction it needs.
 *
 * The table arrives asynchronously, so the first render after a learner picks
 * a language returns nulls and the second returns glosses. That is on purpose:
 * a word card must render immediately with the English it already has rather
 * than wait on a chunk.
 */
export function useGloss() {
  const { settings } = useSettings();
  const code = settings.gloss;
  const [ready, setReady] = useState(0);

  useEffect(() => {
    if (code == null) return;
    let live = true;
    loadGloss(code).then(() => {
      if (live) setReady((n) => n + 1);
    });
    return () => {
      live = false;
    };
  }, [code]);

  const rtl = glossMeta(code)?.rtl ?? false;

  return useMemo(
    () => ({
      language: code,
      rtl,
      /** The gloss for a vocabulary id, or null to fall back to English. */
      gloss: (id: string): Gloss => {
        const text = glossFor(code, id);
        return text == null ? null : { text, rtl };
      },
      /** Whether this word's gloss contains the search text. */
      glossMatches: (id: string, q: string): boolean => {
        const text = glossTable(code)?.[id];
        return text != null && text.toLowerCase().includes(q);
      },
    }),
    // `ready` is in the deps because the table it reads is module-level state;
    // without it the memo would keep handing back the pre-load empty lookup.
    [code, rtl, ready],
  );
}
