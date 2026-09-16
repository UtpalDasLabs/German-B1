import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

/**
 * Listening practice without audio files.
 *
 * Shipping real recordings for every Hören task would mean either licensing
 * them or recording them, so the app speaks the scripts with the device's own
 * German voice instead. That is not identical to exam audio - it is cleaner,
 * and it never overlaps - but it exercises the thing that actually matters at
 * B1: catching specific information in connected German speech without seeing
 * the words.
 *
 * Every device disagrees about voices, so the whole module fails soft: if no
 * German voice exists the UI says so and offers the transcript instead of
 * pretending to play something.
 */

export type Line = { speaker: string; text: string };

/** Rates chosen by ear: the default web voice is fast for a B1 listener. */
const RATE_NORMAL = Platform.OS === 'web' ? 0.95 : 0.92;
const RATE_SLOW = Platform.OS === 'web' ? 0.72 : 0.7;

/**
 * Pitch per speaker, so a two-person dialogue does not arrive in one flat
 * voice. Derived from the name so the same character sounds the same in every
 * task without anyone maintaining a cast list.
 */
export function pitchFor(speaker: string): number {
  if (/^(ansage|announcement|sprecher|moderator)/i.test(speaker)) return 1.0;
  let hash = 0;
  for (let i = 0; i < speaker.length; i += 1) hash = (hash * 31 + speaker.charCodeAt(i)) >>> 0;
  // 0.85 - 1.25: audibly different people, still recognisably human.
  return 0.85 + (hash % 5) * 0.1;
}

export type PlayerHandlers = {
  /** Fires as each line starts, so the UI can highlight where we are. */
  onLine?: (index: number) => void;
  onDone?: () => void;
  onError?: () => void;
};

/**
 * Speaks a script line by line.
 *
 * Chaining through each line's `onDone` rather than queueing everything at
 * once is deliberate: it is the only way to know which line is playing, and it
 * makes `stop()` immediate rather than leaving a queue to drain.
 */
export function createPlayer(lines: Line[], slow: boolean, handlers: PlayerHandlers = {}) {
  let cancelled = false;
  let index = 0;

  function speakFrom(i: number) {
    if (cancelled || i >= lines.length) {
      if (!cancelled) handlers.onDone?.();
      return;
    }
    index = i;
    handlers.onLine?.(i);
    Speech.speak(lines[i].text, {
      language: 'de-DE',
      pitch: pitchFor(lines[i].speaker),
      rate: slow ? RATE_SLOW : RATE_NORMAL,
      onDone: () => {
        if (cancelled) return;
        // A short gap between turns; without it speakers talk over each other.
        setTimeout(() => speakFrom(i + 1), 320);
      },
      onError: () => {
        if (!cancelled) handlers.onError?.();
      },
    });
  }

  return {
    start() {
      cancelled = false;
      Speech.stop();
      speakFrom(0);
    },
    stop() {
      cancelled = true;
      Speech.stop();
    },
    get line() {
      return index;
    },
  };
}

/**
 * Whether this device can speak German at all.
 *
 * Web reports voices asynchronously and often returns an empty list on the
 * first call, so this waits for the `voiceschanged` event once before giving
 * up. Native returns the full list straight away.
 */
export async function hasGermanVoice(): Promise<boolean> {
  try {
    if (Platform.OS === 'web') {
      if (typeof window === 'undefined' || !window.speechSynthesis) return false;
      const german = () => window.speechSynthesis.getVoices().some((v) => /^de/i.test(v.lang));
      if (german()) return true;
      return await new Promise<boolean>((resolve) => {
        const done = () => {
          window.speechSynthesis.removeEventListener('voiceschanged', done);
          resolve(german());
        };
        window.speechSynthesis.addEventListener('voiceschanged', done);
        // Some browsers never fire the event if the list is already final.
        setTimeout(done, 1200);
      });
    }
    const voices = await Speech.getAvailableVoicesAsync();
    return voices.some((v) => /^de/i.test(v.language));
  } catch {
    return false;
  }
}

/** Reads a single word or sentence aloud - used on vocabulary cards. */
export function say(text: string, slow = false): void {
  try {
    Speech.stop();
    Speech.speak(text, { language: 'de-DE', rate: slow ? RATE_SLOW : RATE_NORMAL });
  } catch {
    // Pronunciation is a bonus; a device without a voice still shows the word.
  }
}

export function stopSpeaking(): void {
  try {
    Speech.stop();
  } catch {
    // ignore
  }
}
