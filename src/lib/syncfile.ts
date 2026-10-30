import { Platform } from 'react-native';

import { mergeProgress } from './merge';
import type { Progress, Settings } from './types';

/**
 * Sync through a file the learner owns, with no server and no account.
 *
 * The File System Access API hands back a durable handle to a file the user
 * picked. If they pick one inside their own iCloud Drive, Dropbox or OneDrive
 * folder, their cloud provider does the syncing and this app never sees any of
 * it. That is the whole trick: the sync is real, continuous and cross-device,
 * and there is still nothing of theirs on anybody's server but their own.
 *
 * The handle is kept in IndexedDB because it is not JSON and cannot go in
 * localStorage. Browsers also drop the permission between sessions, so every
 * read and write checks and re-asks; a refused permission is an ordinary
 * outcome here, not an error.
 *
 * Only Chromium-based desktop browsers implement this. Everywhere else the
 * feature reports itself unavailable and the QR handoff in `handoff.ts` and
 * the backup file remain.
 */

const DB = 'ich-kann-sync';
const STORE = 'handles';
const KEY = 'progress-file';

type Handle = FileSystemFileHandle & {
  queryPermission?: (d: { mode: 'readwrite' }) => Promise<PermissionState>;
  requestPermission?: (d: { mode: 'readwrite' }) => Promise<PermissionState>;
};

export type SyncPayload = { app: 'ich-kann'; version: 1; at: number; progress: Progress; settings: Settings };

export function syncFileSupported(): boolean {
  return (
    Platform.OS === 'web' &&
    typeof window !== 'undefined' &&
    'showSaveFilePicker' in window &&
    typeof indexedDB !== 'undefined'
  );
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function store(handle: Handle | null): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    if (handle) tx.objectStore(STORE).put(handle, KEY);
    else tx.objectStore(STORE).delete(KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function load(): Promise<Handle | null> {
  if (!syncFileSupported()) return null;
  try {
    const db = await openDb();
    const handle = await new Promise<Handle | null>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(KEY);
      req.onsuccess = () => resolve((req.result as Handle) ?? null);
      req.onerror = () => reject(req.error);
    });
    db.close();
    return handle;
  } catch {
    return null;
  }
}

/** The file's name, or null when none is linked. Used to show what is linked. */
export async function linkedFileName(): Promise<string | null> {
  const handle = await load();
  return handle?.name ?? null;
}

/**
 * Asks for permission, re-prompting if the browser has forgotten it.
 *
 * Returns false rather than throwing when the user says no: declining is a
 * choice the app has to respect quietly, not an error to report.
 */
async function allowed(handle: Handle): Promise<boolean> {
  try {
    if (!handle.queryPermission) return true;
    if ((await handle.queryPermission({ mode: 'readwrite' })) === 'granted') return true;
    return (await handle.requestPermission?.({ mode: 'readwrite' })) === 'granted';
  } catch {
    return false;
  }
}

/** Opens the picker so the learner can choose or create the file. */
export async function chooseSyncFile(): Promise<string | null> {
  if (!syncFileSupported()) return null;
  try {
    const handle = (await (
      window as unknown as {
        showSaveFilePicker: (o: unknown) => Promise<Handle>;
      }
    ).showSaveFilePicker({
      suggestedName: 'ich-kann-fortschritt.json',
      types: [{ description: 'Ich kann', accept: { 'application/json': ['.json'] } }],
    })) as Handle;
    await store(handle);
    return handle.name;
  } catch {
    // The picker throws on cancel, which is not a failure.
    return null;
  }
}

export async function forgetSyncFile(): Promise<void> {
  await store(null);
}

async function readPayload(handle: Handle): Promise<SyncPayload | null> {
  try {
    const file = await handle.getFile();
    if (file.size === 0) return null;
    const data = JSON.parse(await file.text()) as SyncPayload;
    if (data?.app !== 'ich-kann' || !data.progress) return null;
    return data;
  } catch {
    return null;
  }
}

export type SyncOutcome =
  | { kind: 'merged'; progress: Progress; settings: Settings | null; name: string }
  | { kind: 'written'; name: string }
  | { kind: 'none' }
  | { kind: 'denied' }
  | { kind: 'failed' };

/**
 * Reads the file, merges it into what is on this device, and writes the result
 * back.
 *
 * One operation rather than separate pull and push, because anything else
 * invites the learner to push before pulling and overwrite the other device.
 * The merge is order-independent and idempotent, so running this repeatedly -
 * which it will, on every change - settles instead of oscillating.
 */
export async function syncNow(progress: Progress, settings: Settings): Promise<SyncOutcome> {
  const handle = await load();
  if (!handle) return { kind: 'none' };
  if (!(await allowed(handle))) return { kind: 'denied' };

  try {
    const theirs = await readPayload(handle);
    const merged = theirs ? mergeProgress(progress, theirs.progress) : progress;

    const payload: SyncPayload = {
      app: 'ich-kann',
      version: 1,
      at: Date.now(),
      progress: merged,
      settings,
    };
    const writable = await handle.createWritable();
    await writable.write(JSON.stringify(payload));
    await writable.close();

    if (!theirs) return { kind: 'written', name: handle.name };
    return {
      kind: 'merged',
      progress: merged,
      // Settings are last-write-wins, and the file is only newer if it was
      // written after this device last changed anything.
      settings: theirs.at > Date.now() - 1000 ? theirs.settings : null,
      name: handle.name,
    };
  } catch {
    return { kind: 'failed' };
  }
}
