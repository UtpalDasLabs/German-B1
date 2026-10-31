import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnswerOption, type OptionState } from '@/components/AnswerOption';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { MascotSays } from '@/components/Mascot';
import { PitchTrace } from '@/components/PitchTrace';
import { Button, Card, Chip, Divider, ProgressBar, Screen, Txt } from '@/components/ui';
import { makeHaptics } from '@/lib/haptics';
import { say, stopSpeaking } from '@/lib/speech';
import { contrastsIn, getContrast, shadowIn, shuffle } from '@/lib/study';
import type { Contrast, MinimalPair, ShadowPhrase } from '@/lib/types';
import { useScope } from '@/lib/useScope';
import { useT } from '@/lib/useT';
import { canRecord, releaseRecording, startRecording, type Recording } from '@/lib/voice';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Pronunciation, in the order the two halves actually have to be learnt.
 *
 * "Hören" comes first and is the more important of the two: you cannot
 * reliably produce a contrast you cannot hear, and a learner who thinks ü and
 * u are the same sound will not fix their ü by being scored on it. It needs no
 * microphone, so it works everywhere, including on a device that has refused
 * permission.
 *
 * "Sprechen" records locally and shows you what you said. It does not score
 * you, because scoring would mean uploading your voice to a vendor, and
 * because a number was never the useful part anyway - where your stress landed
 * is, and that you can see.
 */
export default function PronounceScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scope = useScope();
  const { settings } = useSettings();
  const params = useLocalSearchParams<{ mode?: string; contrast?: string }>();

  const [mode, setMode] = useState<'hear' | 'speak'>(params.mode === 'speak' ? 'speak' : 'hear');
  const available = useMemo(() => contrastsIn(scope), [scope]);
  const [key, setKey] = useState<string | null>(params.contrast ?? available[0]?.key ?? null);
  const contrast = key ? getContrast(key) : undefined;

  useEffect(() => stopSpeaking, []);

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
          <Pressable
            onPress={() => {
              stopSpeaking();
              router.back();
            }}
            accessibilityRole="button"
            accessibilityLabel={t('backHome')}
            hitSlop={12}
          >
            <Ionicons name="chevron-back" size={28} color={colors.textFaint} />
          </Pressable>
          <Txt variant="title" style={{ flex: 1 }}>
            {t('pronounceTitle')}
          </Txt>
        </View>

        <View style={{ flexDirection: 'row', gap: space.sm }}>
          <Chip label={t('pronounceHear')} active={mode === 'hear'} onPress={() => setMode('hear')} />
          <Chip
            label={t('pronounceSpeak')}
            active={mode === 'speak'}
            onPress={() => {
              stopSpeaking();
              setMode('speak');
            }}
          />
        </View>

        {mode === 'hear' ? (
          <>
            <Txt variant="small" tone="muted">
              {t('pronounceHearSub')}
            </Txt>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', gap: space.sm, paddingRight: space.lg }}>
                {available.map((c) => (
                  <Chip key={c.key} label={c.title[locale]} active={key === c.key} onPress={() => setKey(c.key)} />
                ))}
              </View>
            </ScrollView>
            {contrast ? (
              <HearTrainer contrast={contrast} slow={settings.slowAudio} haptics={settings.haptics} />
            ) : (
              <Txt variant="small" tone="muted">
                {t('noMaterialYet')}
              </Txt>
            )}
          </>
        ) : (
          <SpeakTrainer slow={settings.slowAudio} />
        )}
      </ScrollView>
    </Screen>
  );
}

/* ------------------------------------------------------------------ hear */

function HearTrainer({
  contrast,
  slow,
  haptics: hapticsOn,
}: {
  contrast: Contrast;
  slow: boolean;
  haptics: boolean;
}) {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const haptics = useMemo(() => makeHaptics(hapticsOn), [hapticsOn]);

  const [seed, setSeed] = useState(() => Date.now());
  const round = useMemo(() => {
    // Which side is spoken is decided per question and frozen, so replaying
    // the word cannot change the answer under the learner.
    return shuffle(contrast.pairs, seed).map((pair, i) => ({
      pair,
      spoken: (seed + i) % 2 === 0 ? 'a' : ('b' as 'a' | 'b'),
    }));
  }, [contrast, seed]);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<'a' | 'b' | null>(null);
  const [score, setScore] = useState(0);
  const [plays, setPlays] = useState(0);

  // A new contrast is a new round; without this the index would point past the
  // end of a shorter set.
  useEffect(() => {
    setSeed(Date.now());
    setIndex(0);
    setPicked(null);
    setScore(0);
    setPlays(0);
  }, [contrast.key]);

  const current = round[index];
  const done = index >= round.length;

  const play = useCallback(() => {
    if (!current) return;
    setPlays((p) => p + 1);
    say(current.spoken === 'a' ? current.pair.a : current.pair.b, slow);
  }, [current, slow]);

  // Say the word as soon as the question appears: the question *is* the sound.
  useEffect(() => {
    if (current) {
      setPlays(1);
      say(current.spoken === 'a' ? current.pair.a : current.pair.b, slow);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fires once per question
  }, [index, contrast.key]);

  if (done) {
    const pct = Math.round((score / round.length) * 100);
    return (
      <Card level={2} style={{ gap: space.md, alignItems: 'center', paddingVertical: space.xl }}>
        <Txt variant="display">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</Txt>
        <Txt variant="display" tone={pct >= 50 ? 'success' : 'danger'}>
          {score}/{round.length}
        </Txt>
        <Txt variant="small" tone="muted" style={{ textAlign: 'center' }}>
          {pct >= 80 ? t('pronounceHeardWell') : t('pronounceHeardAgain')}
        </Txt>
        <Button
          title={t('tryAgain')}
          size="lg"
          onPress={() => {
            setSeed(Date.now());
            setIndex(0);
            setPicked(null);
            setScore(0);
          }}
        />
      </Card>
    );
  }

  const answer = current.spoken;
  function stateFor(side: 'a' | 'b'): OptionState {
    if (picked == null) return 'idle';
    if (side === answer) return 'correct';
    if (side === picked) return 'wrong';
    return 'muted';
  }

  return (
    <View style={{ gap: space.md }}>
      <Card style={{ gap: space.sm }}>
        <Txt variant="bodyStrong">{contrast.summary[locale]}</Txt>
        <View style={{ backgroundColor: colors.infoBg, borderRadius: radius.sm, padding: space.md }}>
          <Txt variant="small" style={{ color: colors.info }}>
            {contrast.tip[locale]}
          </Txt>
        </View>
      </Card>

      <ProgressBar value={index / round.length} height={8} />

      <Card level={2} style={{ gap: space.md, alignItems: 'center', paddingVertical: space.xl }}>
        <Txt variant="small" tone="muted">
          {t('pronounceWhichHeard')}
        </Txt>
        <Pressable
          onPress={play}
          accessibilityRole="button"
          accessibilityLabel={t('pronouncePlayAgain')}
          style={{
            width: 88,
            height: 88,
            borderRadius: 44,
            backgroundColor: colors.infoBg,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="volume-high" size={40} color={colors.info} />
        </Pressable>
        <Txt variant="caption" tone="faint">
          {plays} × {t('pronouncePlayed')}
        </Txt>
      </Card>

      <View style={{ gap: space.sm }}>
        {(['a', 'b'] as const).map((side, i) => (
          <AnswerOption
            key={side}
            index={i}
            label={side === 'a' ? current.pair.a : current.pair.b}
            state={stateFor(side)}
            onPress={
              picked
                ? undefined
                : () => {
                    const right = side === answer;
                    right ? haptics.success() : haptics.error();
                    if (right) setScore((s) => s + 1);
                    setPicked(side);
                  }
            }
          />
        ))}
      </View>

      {picked ? (
        <>
          <Card style={{ gap: 6 }}>
            <Txt variant="small">
              <Txt variant="bodyStrong">{current.pair.a}</Txt> — {current.pair.aNote[locale]}
            </Txt>
            <Txt variant="small">
              <Txt variant="bodyStrong">{current.pair.b}</Txt> — {current.pair.bNote[locale]}
            </Txt>
            <View style={{ flexDirection: 'row', gap: space.sm, marginTop: space.sm }}>
              <Button title={current.pair.a} variant="secondary" onPress={() => say(current.pair.a, slow)} />
              <Button title={current.pair.b} variant="secondary" onPress={() => say(current.pair.b, slow)} />
            </View>
          </Card>
          <Button
            title={t('next')}
            size="lg"
            full
            onPress={() => {
              setPicked(null);
              setIndex((i) => i + 1);
            }}
          />
        </>
      ) : null}
    </View>
  );
}

/* ----------------------------------------------------------------- speak */

function SpeakTrainer({ slow }: { slow: boolean }) {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const scope = useScope();

  const phrases = useMemo(() => shadowIn(scope), [scope]);
  const [index, setIndex] = useState(0);
  const phrase: ShadowPhrase | undefined = phrases[index];

  const [recording, setRecording] = useState(false);
  const [result, setResult] = useState<Recording | null>(null);
  const [error, setError] = useState<string | null>(null);
  const session = useRef<Awaited<ReturnType<typeof startRecording>> | null>(null);

  // The recording is held in memory only, so it has to be released when it is
  // replaced or when the screen goes away.
  useEffect(() => () => releaseRecording(result), [result]);

  const begin = useCallback(async () => {
    setError(null);
    releaseRecording(result);
    setResult(null);
    try {
      session.current = await startRecording();
      setRecording(true);
    } catch {
      setError(t('pronounceNoMic'));
    }
  }, [result, t]);

  const finish = useCallback(async () => {
    setRecording(false);
    const s = session.current;
    session.current = null;
    if (!s) return;
    try {
      setResult(await s.stop());
    } catch {
      setError(t('pronounceNoMic'));
    }
  }, [t]);

  if (!canRecord()) {
    return (
      <MascotSays mood="thinking" size={84}>
        <Txt variant="bodyStrong">{t('pronounceNoRecord')}</Txt>
        <Txt variant="small" tone="muted">
          {t('pronounceNoRecordSub')}
        </Txt>
      </MascotSays>
    );
  }

  if (!phrase) {
    return (
      <Txt variant="small" tone="muted">
        {t('noMaterialYet')}
      </Txt>
    );
  }

  return (
    <View style={{ gap: space.md }}>
      <Txt variant="small" tone="muted">
        {t('pronounceSpeakSub')}
      </Txt>

      <Card level={2} style={{ gap: space.md, paddingVertical: space.lg }}>
        <Txt variant="caption" tone="faint">
          {phrase.level} · {index + 1}/{phrases.length}
        </Txt>
        {/* Stressed syllables are marked because that is what the app actually
            knows. It does not know where your stress fell - you can see that
            in the trace underneath and judge it yourself. */}
        <Txt variant="heading" style={{ lineHeight: 34 }}>
          {phrase.syllables.map((syl, i) => (
            <Txt
              key={i}
              variant="heading"
              style={syl.stress ? { color: colors.info } : { color: colors.textMuted }}
            >
              {syl.text}
            </Txt>
          ))}
        </Txt>
        <Txt variant="small" tone="muted">
          {phrase.note[locale]}
        </Txt>
        <View style={{ flexDirection: 'row', gap: space.sm }}>
          <Button
            title={t('pronounceListen')}
            variant="secondary"
            icon={<Ionicons name="volume-medium-outline" size={18} color={colors.text} />}
            onPress={() => say(phrase.text, slow)}
          />
          {result ? (
            <Button
              title={t('pronounceHearYourself')}
              variant="secondary"
              icon={<Ionicons name="person-outline" size={18} color={colors.text} />}
              onPress={() => {
                const audio = new Audio(result.url);
                void audio.play();
              }}
            />
          ) : null}
        </View>
      </Card>

      {recording ? (
        <Button
          title={t('pronounceStop')}
          size="lg"
          full
          variant="danger"
          icon={<Ionicons name="stop-circle" size={18} color="#FFFFFF" />}
          onPress={() => void finish()}
        />
      ) : (
        <Button
          title={result ? t('pronounceAgain') : t('pronounceRecord')}
          size="lg"
          full
          icon={<Ionicons name="mic" size={18} color="#FFFFFF" />}
          onPress={() => void begin()}
        />
      )}

      {error ? (
        <Txt variant="small" tone="danger">
          {error}
        </Txt>
      ) : null}

      {result ? (
        <Card style={{ gap: space.sm }}>
          <Txt variant="overline" tone="faint">
            {t('pronounceYourTrace').toUpperCase()}
          </Txt>
          <PitchTrace recording={result} expected={phrase.syllables.filter((s) => s.stress).length} />
          <Txt variant="caption" tone="faint">
            {t('pronounceTraceHint')}
          </Txt>
        </Card>
      ) : null}

      <Divider />
      <View style={{ flexDirection: 'row', gap: space.sm }}>
        <View style={{ flex: 1 }}>
          <Button
            title={t('previous')}
            variant="secondary"
            full
            disabled={index === 0}
            onPress={() => {
              releaseRecording(result);
              setResult(null);
              setIndex((i) => Math.max(0, i - 1));
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title={t('next')}
            variant="secondary"
            full
            disabled={index >= phrases.length - 1}
            onPress={() => {
              releaseRecording(result);
              setResult(null);
              setIndex((i) => Math.min(phrases.length - 1, i + 1));
            }}
          />
        </View>
      </View>

      <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
        {t('pronouncePrivacy')}
      </Txt>
    </View>
  );
}
