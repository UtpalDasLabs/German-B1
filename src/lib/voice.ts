import { Platform } from 'react-native';

/**
 * Recording your own voice, analysed in the browser and never sent anywhere.
 *
 * This file is the reason the app can offer pronunciation practice at all. The
 * obvious route - the browser's SpeechRecognition API - uploads your audio to
 * Google or Apple, which would end the one guarantee this app makes. So nothing
 * here leaves the device: the recording lives in memory as an object URL, is
 * analysed with the Web Audio API, and is dropped when you leave the screen.
 * It is never written to storage, never put in the backup file and never
 * uploaded.
 *
 * What it cannot do, therefore, is tell you whether you said it right. It can
 * show you what you said - loudness over time and pitch over time - next to a
 * phrase whose stressed syllables are known, and let your own ear and eye do
 * the comparison. That is a weaker claim than a score and a more honest one;
 * a score of 73% was never going to tell you that your stress was on the wrong
 * syllable, and this does.
 */

export type Frame = {
  /** 0-1, perceived loudness of this frame. */
  level: number;
  /** Hz, or null where the frame has no clear pitch (a consonant, or silence). */
  pitch: number | null;
};

export type Recording = {
  /** Playable in an <audio> element; revoke it when done. */
  url: string;
  seconds: number;
  frames: Frame[];
};

export function canRecord(): boolean {
  return (
    Platform.OS === 'web' &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia &&
    typeof MediaRecorder !== 'undefined'
  );
}

type Session = { stop: () => Promise<Recording>; cancel: () => void };

/**
 * Starts recording. Resolves once the microphone is actually live, so the
 * caller can show "recording" only when it is true.
 */
export async function startRecording(): Promise<Session> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  const chunks: BlobPart[] = [];
  recorder.ondataavailable = (e) => chunks.push(e.data);
  recorder.start();

  const release = () => stream.getTracks().forEach((t) => t.stop());

  return {
    cancel() {
      try {
        recorder.stop();
      } catch {
        /* already stopped */
      }
      release();
    },
    stop() {
      return new Promise<Recording>((resolve, reject) => {
        recorder.onstop = async () => {
          release();
          try {
            const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
            resolve(await analyse(blob));
          } catch (err) {
            reject(err);
          }
        };
        try {
          recorder.stop();
        } catch (err) {
          release();
          reject(err);
        }
      });
    },
  };
}

/** Frames per second of analysis. 50 is fine enough to see a syllable. */
const FPS = 50;
/** Pitch search range, wide enough for most voices and narrow enough to be fast. */
const MIN_HZ = 70;
const MAX_HZ = 400;

async function analyse(blob: Blob): Promise<Recording> {
  const AudioCtx: typeof AudioContext =
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext ??
    window.AudioContext;
  const ctx = new AudioCtx();
  try {
    const audio = await ctx.decodeAudioData(await blob.arrayBuffer());
    const data = audio.getChannelData(0);
    const rate = audio.sampleRate;
    const hop = Math.floor(rate / FPS);
    const win = Math.min(Math.floor(rate / 40), hop * 4); // ~25ms, enough for MIN_HZ

    const frames: Frame[] = [];
    let peak = 1e-6;
    for (let start = 0; start + win < data.length; start += hop) {
      let sum = 0;
      for (let i = 0; i < win; i += 1) sum += data[start + i] * data[start + i];
      const rms = Math.sqrt(sum / win);
      peak = Math.max(peak, rms);
      frames.push({ level: rms, pitch: pitchAt(data, start, win, rate) });
    }

    // Normalise loudness against this recording's own peak: the useful question
    // is where the stress fell, not how close the learner sat to the mic.
    for (const f of frames) f.level = Math.min(1, f.level / peak);

    return { url: URL.createObjectURL(blob), seconds: audio.duration, frames };
  } finally {
    void ctx.close();
  }
}

/**
 * Autocorrelation pitch detection on one window.
 *
 * Deliberately simple: it is accurate enough to draw a contour and it runs in
 * milliseconds on a phone, which matters more here than tracking a singer. A
 * frame with no strong periodicity returns null rather than a guess, so
 * consonants and silence leave gaps in the line instead of noise.
 */
function pitchAt(data: Float32Array, start: number, win: number, rate: number): number | null {
  let energy = 0;
  for (let i = 0; i < win; i += 1) energy += data[start + i] * data[start + i];
  if (energy / win < 1e-5) return null; // silence

  const minLag = Math.floor(rate / MAX_HZ);
  const maxLag = Math.min(Math.floor(rate / MIN_HZ), win - 1);

  let bestLag = -1;
  let best = 0;
  for (let lag = minLag; lag <= maxLag; lag += 1) {
    let corr = 0;
    for (let i = 0; i + lag < win; i += 1) corr += data[start + i] * data[start + i + lag];
    corr /= win - lag;
    if (corr > best) {
      best = corr;
      bestLag = lag;
    }
  }

  // Normalised correlation below this is noise rather than a note.
  if (bestLag < 0 || best / (energy / win) < 0.3) return null;
  return rate / bestLag;
}

/** Frees the object URL. Call this when the recording leaves the screen. */
export function releaseRecording(rec: Recording | null): void {
  if (rec) URL.revokeObjectURL(rec.url);
}

/**
 * Where the loud parts are, as fractions of the whole.
 *
 * Used to mark the peaks on the contour so a learner can see at a glance
 * whether their stress landed where the phrase expects it.
 */
export function peaks(frames: Frame[], count: number): number[] {
  if (frames.length === 0 || count <= 0) return [];
  const scored = frames.map((f, i) => ({ i, level: f.level }));
  const found: number[] = [];
  // A peak has to be clear of the ones already taken, or one loud syllable
  // would be reported as several.
  const apart = Math.max(4, Math.floor(frames.length / (count * 3)));
  for (const { i, level } of scored.sort((a, b) => b.level - a.level)) {
    if (level < 0.35) break;
    if (found.some((j) => Math.abs(j - i) < apart)) continue;
    found.push(i);
    if (found.length === count) break;
  }
  return found.sort((a, b) => a - b).map((i) => i / frames.length);
}
