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
import { areaColors } from '@/theme/tokens';
import { filterDrills, getGrammar, orderForStudy } from '@/lib/study';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Multiple-choice grammar practice.
 *
 * Every item explains itself after you answer, right or wrong. That is the
 * whole point: a drill that only says "correct" teaches nothing you did not
 * already know, and a drill that only says "wrong" teaches even less.
 */
export default function DrillScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { progress, grade } = useProgress();
  const params = useLocalSearchParams<{ count?: string; topic?: string; mode?: string }>();

  const haptics = useMemo(() => makeHaptics(settings.haptics), [settings.haptics]);
  const count = Math.max(1, Number(params.count ?? 10) || 10);
  const goalXp = GOALS[settings.goal].xp;

  const [seed, setSeed] = useState(() => Date.now());
  const queue = useMemo(() => {
    const filtered = filterDrills(progress.cards, {
      topic: params.topic ?? 'all',
      dueOnly: params.mode === 'due',
      trickyOnly: params.mode === 'tricky',
    });
    return orderForStudy(filtered, progress.cards, seed).slice(0, count);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- frozen for the session
  }, [seed, params.topic, params.mode, count]);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const drill = queue[index];
  const done = index >= queue.length;

  const check = useCallback(() => {
    if (!drill || picked == null) return;
    const right = picked === drill.answer;
    right ? haptics.success() : haptics.error();
    grade(drill.id, right, goalXp);
    if (right) setScore((s) => s + 1);
    setChecked(true);
  }, [drill, picked, grade, haptics, goalXp]);

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
          {t('noItems')}
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

  const topic = getGrammar(drill.topic);

  function stateFor(i: number): OptionState {
    if (!checked) return picked === i ? 'selected' : 'idle';
    if (i === drill.answer) return 'correct';
    if (i === picked) return 'wrong';
    return 'muted';
  }

  return (
    <Screen>
      <View
        style={{
          paddingTop: insets.top + space.sm,
          paddingHorizontal: space.lg,
          paddingBottom: space.md,
          flexDirection: 'row',
          alignItems: 'center',
          gap: space.md,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel={t('backHome')}
          hitSlop={12}
        >
          <Ionicons name="close" size={26} color={colors.textMuted} />
        </Pressable>
        <View style={{ flex: 1 }}>
          <ProgressBar value={index / queue.length} color={areaColors.grammatik} />
        </View>
        <Txt variant="caption" tone="muted">
          {score} · {index + 1}/{queue.length}
        </Txt>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: space.lg,
          paddingBottom: space.xxxl,
          gap: space.lg,
          maxWidth: 720,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Card level={2} style={{ gap: space.md, paddingVertical: space.xl }}>
          {topic ? (
            <Txt variant="caption" style={{ color: areaColors.grammatik }}>
              {topic.icon} {topic.title[locale]}
            </Txt>
          ) : null}
          <Txt variant="heading" style={{ textAlign: 'center' }}>
            {drill.prompt}
          </Txt>
        </Card>

        <View style={{ gap: space.sm }}>
          {drill.options.map((option, i) => (
            <AnswerOption
              key={option}
              index={i}
              label={option}
              state={stateFor(i)}
              onPress={
                checked
                  ? undefined
                  : () => {
                      haptics.tap();
                      setPicked(i);
                    }
              }
            />
          ))}
        </View>

        {checked ? (
          <View style={{ backgroundColor: colors.infoBg, borderRadius: radius.md, padding: space.lg, gap: space.xs }}>
            <Txt variant="overline" style={{ color: colors.info }}>
              {t('whyLabel').toUpperCase()}
            </Txt>
            <Txt variant="small" tone="muted">
              {drill.why[locale]}
            </Txt>
          </View>
        ) : null}

        {checked && topic ? (
          <Button
            title={t('readTopic')}
            variant="secondary"
            full
            icon={<Ionicons name="book-outline" size={18} color={colors.text} />}
            onPress={() => router.push(`/grammar?topic=${topic.key}`)}
          />
        ) : null}
      </ScrollView>

      <View style={{ padding: space.lg, paddingBottom: insets.bottom + space.lg }}>
        {checked ? (
          <Button
            title={index + 1 === queue.length ? t('finish') : t('nextQuestion')}
            size="lg"
            full
            onPress={next}
            icon={<Ionicons name="arrow-forward" size={18} color={colors.onAccent} />}
          />
        ) : (
          <Button title={t('checkAnswer')} size="lg" full disabled={picked == null} onPress={check} />
        )}
      </View>
    </Screen>
  );
}
