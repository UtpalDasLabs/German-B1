import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Mascot, MascotSays } from '@/components/Mascot';
import { Button, Card, Screen, Txt } from '@/components/ui';
import { PROVIDERS_BY_KEY } from '@/lib/official';
import { buildExam, meta } from '@/lib/study';
import { MODULE_KEYS, type ModuleKey } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/** Where each module's task screen lives. */
const ROUTE: Record<ModuleKey, string> = {
  lesen: '/reading',
  hoeren: '/listening',
  schreiben: '/writing',
  sprechen: '/speaking',
};

/**
 * A full mock exam: one task from each module, sat in order.
 *
 * This screen is a coordinator rather than a container. Each module already has
 * a screen that knows how to run its own format and record its own score, so
 * the exam sends you there and reads the result back out of your recorded
 * attempts. That keeps one implementation of each module instead of two, and it
 * means a module sat inside the exam counts exactly like one sat on its own.
 */
export default function ExamSessionScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { progress, recordExam } = useProgress();

  const provider = PROVIDERS_BY_KEY[settings.provider];
  // Frozen per sitting: re-rolling the paper halfway through would be cheating
  // in the one direction that matters.
  const [startedAt] = useState(() => Date.now());
  const [seed] = useState(() => Date.now());
  const paper = useMemo(() => buildExam(seed), [seed]);
  const [finished, setFinished] = useState(false);

  const taskFor: Record<ModuleKey, string> = {
    lesen: paper.lesen.id,
    hoeren: paper.hoeren.id,
    schreiben: paper.schreiben.id,
    sprechen: paper.sprechen.id,
  };

  /** Scores earned during this sitting only, keyed by module. */
  const scores = useMemo(() => {
    const out: Partial<Record<ModuleKey, number>> = {};
    for (const module of MODULE_KEYS) {
      const attempt = progress.attempts.find(
        (a) => a.module === module && a.taskId === taskFor[module] && a.at >= startedAt,
      );
      if (attempt) out[module] = attempt.score;
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- taskFor is derived from the frozen paper
  }, [progress.attempts, startedAt, seed]);

  const doneCount = MODULE_KEYS.filter((m) => scores[m] != null).length;
  const allDone = doneCount === MODULE_KEYS.length;
  const passed = allDone && MODULE_KEYS.every((m) => (scores[m] ?? 0) >= provider.passPercent);

  const finish = useCallback(() => {
    recordExam({
      at: Date.now(),
      scores,
      passed: MODULE_KEYS.every((m) => (scores[m] ?? 0) >= provider.passPercent),
      duration: Math.round((Date.now() - startedAt) / 1000),
    });
    setFinished(true);
  }, [recordExam, scores, provider.passPercent, startedAt]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  if (finished) {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md }}>
        <Mascot mood={passed ? 'celebrate' : 'sad'} size={160} />
        <Txt variant="title" tone={passed ? 'success' : 'danger'}>
          {passed ? t('passed') : t('failed')}
        </Txt>
        <View style={{ gap: space.sm, alignSelf: 'stretch', maxWidth: 340, marginTop: space.md }}>
          {MODULE_KEYS.map((m) => {
            const score = scores[m] ?? 0;
            const ok = score >= provider.passPercent;
            return (
              <View key={m} style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
                <Ionicons
                  name={ok ? 'checkmark-circle' : 'close-circle'}
                  size={20}
                  color={ok ? colors.success : colors.danger}
                />
                <Txt variant="body" style={{ flex: 1 }}>
                  {meta.areas[m].label[locale]}
                </Txt>
                <Txt variant="bodyStrong" tone={ok ? 'success' : 'danger'}>
                  {score}%
                </Txt>
              </View>
            );
          })}
        </View>
        <Txt variant="caption" tone="faint" style={{ textAlign: 'center', maxWidth: 320 }}>
          {t('passMark')} {t('selfAssessed')}: {meta.areas.schreiben.label[locale]},{' '}
          {meta.areas.sprechen.label[locale]}.
        </Txt>
        <View style={{ gap: space.sm, marginTop: space.lg, alignSelf: 'stretch', maxWidth: 340 }}>
          <Button title={t('backHome')} size="lg" full onPress={() => router.replace('/(tabs)')} />
        </View>
      </Screen>
    );
  }

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
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel={t('backHome')}
            hitSlop={12}
          >
            <Ionicons name="close" size={26} color={colors.textMuted} />
          </Pressable>
          <Txt variant="title" style={{ flex: 1 }}>
            {t('examTitle')}
          </Txt>
          <Txt variant="caption" tone="faint">
            {doneCount}/4
          </Txt>
        </View>

        <MascotSays mood={allDone ? 'celebrate' : 'thinking'} size={84}>
          <Txt variant="bodyStrong">{allDone ? t('examDone') : provider.name}</Txt>
          <Txt variant="small" tone="muted">
            {allDone ? t('overallResult') : t('examIntro')}
          </Txt>
        </MascotSays>

        {MODULE_KEYS.map((module, i) => {
          const area = meta.areas[module];
          const score = scores[module];
          const done = score != null;
          // Modules unlock in order, the way the real paper is sat.
          const locked = i > 0 && scores[MODULE_KEYS[i - 1]] == null;

          return (
            <Card key={module} style={{ gap: space.md, opacity: locked ? 0.55 : 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: radius.md,
                    backgroundColor: done ? area.color : `${area.color}22`,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {done ? (
                    <Ionicons name="checkmark" size={24} color="#FFFFFF" />
                  ) : (
                    <Txt variant="heading" style={{ color: area.color }}>
                      {i + 1}
                    </Txt>
                  )}
                </View>
                <View style={{ flex: 1 }}>
                  <Txt variant="bodyStrong">{area.label[locale]}</Txt>
                  <Txt variant="caption" tone="faint">
                    {provider.minutes[module]} {t('minutes')}
                  </Txt>
                </View>
                {done ? (
                  <Txt
                    variant="heading"
                    tone={score >= provider.passPercent ? 'success' : 'danger'}
                  >
                    {score}%
                  </Txt>
                ) : (
                  <Button
                    title={t('startTask')}
                    disabled={locked}
                    onPress={() => router.push(`${ROUTE[module]}?task=${taskFor[module]}` as never)}
                  />
                )}
              </View>
            </Card>
          );
        })}

        {allDone ? (
          <Button
            title={t('finish')}
            size="lg"
            full
            variant="success"
            icon={<Ionicons name="flag" size={18} color="#FFFFFF" />}
            onPress={finish}
          />
        ) : null}
      </ScrollView>
    </Screen>
  );
}
