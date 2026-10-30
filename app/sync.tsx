import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { QrCode } from '@/components/QrCode';
import { Button, Card, Divider, Screen, Txt } from '@/components/ui';
import { buildFrames, collector, handoffSupported, applyHandoff } from '@/lib/handoff';
import {
  chooseSyncFile,
  forgetSyncFile,
  linkedFileName,
  syncFileSupported,
  syncNow,
} from '@/lib/syncfile';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Two ways to get your progress onto another device, neither of which needs an
 * account or a server of ours.
 *
 * The file link is the good one where it exists: point it at a file inside
 * your own iCloud Drive, Dropbox or OneDrive folder and your cloud provider
 * does the syncing. We never see it. Only Chromium-based desktop browsers
 * implement the API, which is why the second one exists.
 *
 * The handoff is the universal one. Two devices in the same room, a sequence
 * of QR codes on one screen and the camera on the other, and no network at all
 * - not even a shared wifi. It is the only account-free sync that works on an
 * iPhone, which is most of the point.
 */
export default function SyncScreen() {
  const { colors, space, radius } = useTheme();
  const { t } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { progress, restore } = useProgress();
  const { settings, update } = useSettings();

  const [fileName, setFileName] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void linkedFileName().then(setFileName);
  }, []);

  const link = useCallback(async () => {
    const name = await chooseSyncFile();
    if (!name) return;
    setFileName(name);
    const outcome = await syncNow(progress, settings);
    setNote(outcome.kind === 'failed' ? t('syncFailed') : t('syncLinked'));
  }, [progress, settings, t]);

  const run = useCallback(async () => {
    setBusy(true);
    try {
      const outcome = await syncNow(progress, settings);
      if (outcome.kind === 'merged') {
        restore(outcome.progress);
        if (outcome.settings) update(outcome.settings);
        setNote(t('syncMerged'));
      } else if (outcome.kind === 'written') setNote(t('syncWritten'));
      else if (outcome.kind === 'denied') setNote(t('syncDenied'));
      else if (outcome.kind === 'none') setNote(t('syncNoFile'));
      else setNote(t('syncFailed'));
    } finally {
      setBusy(false);
    }
  }, [progress, settings, restore, update, t]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + space.md,
          paddingHorizontal: space.lg,
          paddingBottom: space.xxxl,
          gap: space.lg,
          maxWidth: 680,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
          <Pressable onPress={() => router.back()} accessibilityRole="button" accessibilityLabel={t('backHome')} hitSlop={12}>
            <Ionicons name="chevron-back" size={28} color={colors.textFaint} />
          </Pressable>
          <Txt variant="title" style={{ flex: 1 }}>
            {t('syncTitle')}
          </Txt>
        </View>

        <Txt variant="small" tone="muted">
          {t('syncIntro')}
        </Txt>

        {/* Link a file in the learner's own cloud folder. */}
        <Card style={{ gap: space.md }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
            <Ionicons name="cloud-outline" size={20} color={colors.info} />
            <Txt variant="heading" style={{ flex: 1 }}>
              {t('syncFileTitle')}
            </Txt>
          </View>
          <Txt variant="small" tone="muted">
            {t('syncFileBody')}
          </Txt>

          {!syncFileSupported() ? (
            <Txt variant="small" tone="faint">
              {t('syncFileUnsupported')}
            </Txt>
          ) : fileName ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: space.sm,
                  backgroundColor: colors.surfaceAlt,
                  borderRadius: radius.sm,
                  padding: space.md,
                }}
              >
                <Ionicons name="document-text-outline" size={18} color={colors.textFaint} />
                <Txt variant="small" style={{ flex: 1 }}>
                  {fileName}
                </Txt>
              </View>
              <Button
                title={busy ? t('syncRunning') : t('syncNow')}
                full
                disabled={busy}
                icon={<Ionicons name="sync" size={18} color="#FFFFFF" />}
                onPress={() => void run()}
              />
              <Button
                title={t('syncUnlink')}
                variant="ghost"
                full
                onPress={() => {
                  void forgetSyncFile();
                  setFileName(null);
                  setNote(t('syncUnlinked'));
                }}
              />
            </>
          ) : (
            <Button
              title={t('syncLink')}
              full
              icon={<Ionicons name="link" size={18} color="#FFFFFF" />}
              onPress={() => void link()}
            />
          )}
          {note ? (
            <Txt variant="caption" tone="info">
              {note}
            </Txt>
          ) : null}
        </Card>

        <Handoff />

        <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
          {t('syncPrivacy')}
        </Txt>
      </ScrollView>
    </Screen>
  );
}

/* --------------------------------------------------------------- handoff */

function Handoff() {
  const { colors, space, radius } = useTheme();
  const { t } = useT();
  const { progress, restore } = useProgress();

  const [mode, setMode] = useState<'idle' | 'show' | 'scan'>('idle');
  const [frames, setFrames] = useState<string[]>([]);
  const [at, setAt] = useState(0);
  const [status, setStatus] = useState<string | null>(null);

  // Frames cycle on a timer. The receiving camera catches them in whatever
  // order it happens to see them, which is why each frame carries its own
  // position and the collector accepts them out of order.
  useEffect(() => {
    if (mode !== 'show' || frames.length < 2) return;
    const id = setInterval(() => setAt((i) => (i + 1) % frames.length), 700);
    return () => clearInterval(id);
  }, [mode, frames.length]);

  const show = useCallback(async () => {
    setStatus(null);
    try {
      const built = await buildFrames(progress);
      setFrames(built);
      setAt(0);
      setMode('show');
    } catch {
      setStatus(t('syncFailed'));
    }
  }, [progress, t]);

  if (!handoffSupported()) {
    return (
      <Card style={{ gap: space.sm }}>
        <Txt variant="heading">{t('handoffTitle')}</Txt>
        <Txt variant="small" tone="faint">
          {t('handoffUnsupported')}
        </Txt>
      </Card>
    );
  }

  return (
    <Card style={{ gap: space.md }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
        <Ionicons name="qr-code-outline" size={20} color={colors.info} />
        <Txt variant="heading" style={{ flex: 1 }}>
          {t('handoffTitle')}
        </Txt>
      </View>
      <Txt variant="small" tone="muted">
        {t('handoffBody')}
      </Txt>

      {mode === 'show' && frames.length > 0 ? (
        <View style={{ alignItems: 'center', gap: space.sm }}>
          <QrCode text={frames[at]} />
          <Txt variant="caption" tone="faint">
            {t('handoffFrame')} {at + 1}/{frames.length}
          </Txt>
          <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
            {t('handoffShowHint')}
          </Txt>
          <Button title={t('close')} variant="secondary" onPress={() => setMode('idle')} />
        </View>
      ) : mode === 'scan' ? (
        <Scanner
          onDone={(partial) => {
            restore(applyHandoff(progress, partial));
            setMode('idle');
            setStatus(t('handoffReceived'));
          }}
          onCancel={() => setMode('idle')}
        />
      ) : (
        <View style={{ flexDirection: 'row', gap: space.sm }}>
          <View style={{ flex: 1 }}>
            <Button
              title={t('handoffShow')}
              variant="secondary"
              full
              icon={<Ionicons name="qr-code" size={18} color={colors.text} />}
              onPress={() => void show()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title={t('handoffScan')}
              variant="secondary"
              full
              icon={<Ionicons name="camera-outline" size={18} color={colors.text} />}
              onPress={() => setMode('scan')}
            />
          </View>
        </View>
      )}

      {status ? (
        <Txt variant="caption" tone="info">
          {status}
        </Txt>
      ) : null}
    </Card>
  );
}

/**
 * The camera half of the handoff.
 *
 * Deliberately written against the plain browser APIs rather than a camera
 * component: the only thing needed is a video element and a canvas to read
 * frames out of, and nothing here should be able to reach the network.
 */
function Scanner({
  onDone,
  onCancel,
}: {
  onDone: (partial: Awaited<ReturnType<ReturnType<typeof collector>['finish']>>) => void;
  onCancel: () => void;
}) {
  const { colors, space, radius } = useTheme();
  const { t } = useT();
  const [have, setHave] = useState(0);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const hostRef = useRef<View>(null);

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    let stream: MediaStream | null = null;
    let stop = false;
    const box = collector();

    const video = document.createElement('video');
    video.setAttribute('playsinline', 'true');
    video.style.width = '100%';
    video.style.borderRadius = '12px';
    const canvas = document.createElement('canvas');

    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        video.srcObject = stream;
        await video.play();
        const host = hostRef.current as unknown as HTMLElement | null;
        host?.appendChild(video);

        const { default: jsQR } = await import('jsqr');
        const tick = async () => {
          if (stop) return;
          if (video.videoWidth > 0) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (ctx) {
              ctx.drawImage(video, 0, 0);
              const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
              const found = jsQR(image.data, image.width, image.height);
              if (found?.data) {
                const count = box.add(found.data);
                setHave(count);
                setTotal(box.total);
                if (box.total != null && count === box.total) {
                  stop = true;
                  try {
                    onDone(await box.finish());
                  } catch {
                    setError(t('handoffBadFrames'));
                  }
                  return;
                }
              }
            }
          }
          requestAnimationFrame(() => void tick());
        };
        void tick();
      } catch {
        setError(t('handoffNoCamera'));
      }
    })();

    return () => {
      stop = true;
      stream?.getTracks().forEach((track) => track.stop());
      video.remove();
    };
  }, [onDone, t]);

  return (
    <View style={{ gap: space.sm }}>
      <View ref={hostRef} style={{ backgroundColor: colors.surfaceAlt, borderRadius: radius.md, minHeight: 180 }} />
      <Txt variant="small" tone={error ? 'danger' : 'muted'} style={{ textAlign: 'center' }}>
        {error ?? `${t('handoffScanning')} ${have}${total ? `/${total}` : ''}`}
      </Txt>
      <Button title={t('cancel')} variant="secondary" full onPress={onCancel} />
    </View>
  );
}
