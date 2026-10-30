import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnswerOption, type OptionState } from '@/components/AnswerOption';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Button, Card, ProgressBar, Screen, Txt } from '@/components/ui';
import { GOALS } from '@/lib/goals';
import { makeHaptics } from '@/lib/haptics';
import { getVocab } from '@/lib/study';
import { buildRound, type TrainerKind } from '@/lib/trainers';
import { useScope } from '@/lib/useScope';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

const TITLES: Record<TrainerKind, { title: 'genderTrainer' | 'pluralTrainer' | 'verbTrainer'; icon: string }> = {
  gender: { title: 'genderTrainer', icon: '\u{1F518}' },
  plural: { title: 'pluralTrainer', icon: '\u{1F465}' },
  verb: { title: 'verbTrainer', icon: '\u{1F501}' },
};

/**
 * The gender, plural and conjugation trainers.
 *
 * All three grade the vocabulary card they came from, which is deliberate. The
 * app's card model is "do you know this word", and for a German noun the
 * article and the plural are part of knowing it - the swipe deck already shows
 * them and asks you to grade yourself on the whole entry. This is the same
 * question, marked by the app instead of by you, which is why it is allowed to
 * move the card.
 */
export default function TrainerScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { progress, grade } = useProgress();
  const scope = useScope();
  const params = useLocalSearchParams<{ kind?: string; count?: string }>();

  const kind = (['gender', 'plural', 'verb'].includes(params.kind ?? '') ? params.kind : 'gender') as TrainerKind;
  const count = Math.max(1, Number(params.count ?? 12) || 12);
  const haptics = useMemo(() => makeHaptics(settings.haptics), [settings.haptics]);
  const goalXp = GOALS[settings.goal].xp;

  const [seed, setSeed] = useState(() => Date.now());
  const queue = useMemo(() => buildRound(kind, scope, count, seed), [kind, scope, count, seed]);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const item = queue[index];
  const done = index >= queue.length;

  const check = useCallback(() => {
    if (!item || picked == null) return;
    const right = picked === item.answer;
    right ? haptics.success() : haptics.error();
    grade(item.entryId, right, goalXp);
    if (right) setScore((s) => s + 1);
    setChecked(true);
  }, [item, picked, grade, haptics, goalXp]);

  const next = useCallback(() => {
    setChecked(false);
    setPicked(null);
    setIndex((i) => i + 1);
  }, []);

  const restart = useCallback(() => {
    setSeed(Date.now());
    setIndex(0);
    setPicked(null);
    setChecked(false);
    setScore(0);
  }, []);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  if (queue.length === 0) {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md }}>
        <Txt variant="title" style={{ textAlign: 'center' }}>
          {t('noMaterialYet')}
        </Txt>
        <Txt variant="small" tone="muted" style={{ textAlign: 'center', maxWidth: 320 }}>
          {t('noMaterialYetSub')}
        </Txt>
        <Button title={t('backHome')} onPress={() => router.back()} />
      </Screen>
    );
  }

  if (done) {
    const pct = Math.round((score / queue.length) * 100);
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md }}>
        <Txt variant="display">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</Txt>
        <Txt variant="title">{t('practiceDone')}</Txt>
        <Txt variant="display" tone={pct >= 50 ? 'success' : 'danger'}>
          {score}/{queue.length}
        </Txt>
        <View style={{ gap: space.sm, marginTop: space.lg, alignItems: 'center' }}>
          <Button title={t('tryAgain')} size="lg" onPress={restart} />
          <Button title={t('backHome')} variant="ghost" onPress={() => router.back()} />
        </View>
      </Screen>
    );
  }

  const entry = getVocab(item.entryId);

  function stateFor(i: number): OptionState {
    if (!checked) return picked === i ? 'selected' : 'idle';
    if (i === item.answer) return 'correct';
    if (i === picked) return 'wrong';
    return 'muted';
  }

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + space.md,
          paddingHorizontal: space.lg,
          paddingBottom: space.xxxl,
          gap: space.lg,
          maxWidth: 640,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
          <Pressable
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel={t('backHome')}
            hitSlop={12}
          >
            <Ionicons name="close" size={26} color={colors.textMuted} />
          </Pressable>
          <Txt variant="bodyStrong" style={{ flex: 1 }}>
            {TITLES[kind].icon} {t(TITLES[kind].title)}
          </Txt>
          <Txt variant="caption" tone="faint">
            {index + 1}/{queue.length}
          </Txt>
        </View>

        <ProgressBar value={index / queue.length} height={8} />

        <Card level={2} style={{ gap: space.sm, paddingVertical: space.xl, alignItems: 'center' }}>
          <Txt variant="display" style={{ textAlign: 'center' }}>
            {item.prompt}
          </Txt>
          {item.promptEn ? (
            <Txt variant="small" tone="muted" style={{ textAlign: 'center' }}>
              {item.promptEn}
            </Txt>
          ) : null}
        </Card>

        <View style={{ gap: space.sm }}>
          {item.options.map((option, i) => (
            <AnswerOption
              key={`${item.id}.${i}`}
              index={i}
              label={option}
              state={stateFor(i)}
              onPress={checked ? undefined : () => setPicked(i)}
            />
          ))}
        </View>

        {checked ? (
          <View style={{ backgroundColor: colors.infoBg, borderRadius: radius.md, padding: space.md, gap: 4 }}>
            <Txt variant="small" style={{ color: colors.info }}>
              {item.why[locale]}
            </Txt>
            {entry ? (
              <Txt variant="caption" tone="faint">
                {entry.example.en}
              </Txt>
            ) : null}
          </View>
        ) : null}

        {checked ? (
          <Button title={t('next')} size="lg" full onPress={next} />
        ) : (
          <Button title={t('checkAnswer')} size="lg" full disabled={picked == null} onPress={check} />
        )}
      </ScrollView>
    </Screen>
  );
}
