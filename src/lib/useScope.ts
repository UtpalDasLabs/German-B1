import { useMemo } from 'react';

import type { Scope } from './study';
import { useSettings } from '@/store/SettingsProvider';

/**
 * The levels the current settings study.
 *
 * Every screen that lists material needs this, and every screen must agree -
 * a word counted on the home screen but missing from the deck would make the
 * readiness percentage a lie. Reading it from one place is what keeps them
 * agreeing.
 */
export function useScope(): Scope {
  const { settings } = useSettings();
  return useMemo(
    () => ({ level: settings.level, includeLower: settings.includeLower }),
    [settings.level, settings.includeLower],
  );
}
