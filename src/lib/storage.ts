import AsyncStorage from '@react-native-async-storage/async-storage';

/** Bumped whenever the persisted shape changes incompatibly. */
/*
 * Deliberately still 'b1.' after the app was renamed to "Ich kann". This
 * prefix is the address of every existing learner's progress; changing it
 * would not migrate their data, it would orphan it, and they would open the
 * app to an empty deck with no way back.
 */
const PREFIX = 'b1.v1.';

export async function loadJSON<T>(key: string, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(PREFIX + key);
    if (raw == null) return fallback;
    return { ...fallback, ...(JSON.parse(raw) as T) };
  } catch {
    return fallback;
  }
}

export async function saveJSON(key: string, value: unknown): Promise<void> {
  try {
    await AsyncStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage is a nice-to-have; losing a write should never break the session.
  }
}

export async function clearAll(): Promise<void> {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys.filter((k) => k.startsWith(PREFIX)));
  } catch {
    // ignore
  }
}
