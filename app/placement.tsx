import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnswerOption } from '@/components/AnswerOption';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Mascot, MascotSays } from '@/components/Mascot';
import { Button, Card, ProgressBar, Screen, Txt } from '@/components/ui';
import { buildPlacement, PER_LEVEL, placeFrom } from '@/lib/placement';
import { levels } from '@/lib/study';
import { useT } from '@/lib/useT';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * The placement test.
 *
 * It exists because a self-selected level is usually wrong, and being wrong in
 * either direction is expensive: too high and every session is demoralising,
 * too low and the learner spends weeks on material they already know.
 *
 * It is scored but not marked as you go. Showing the answer after each question
 * would let a learner correct course mid-test, which is exactly what you do not
 * want from an instrument whose only job is to find out where they are. There
 * is also an explicit "I do not know" option, because a guess that happens to
 * land right places someone a level too high.
 */
export default function PlacementScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { update } = useSettings();

  const [seed] = useState(() => Date.now());
  const blocks = useMemo(() => buildPlacement(seed), [seed]);
  const questions = useMemo(() => blocks.flatMap((b) => b.items), [blocks]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [finished, setFinished] = useState(false);

  const item = questions[index];
  const result = useMemo(() => placeFrom(blocks, answers), [blocks, answers]);

  function answer(value: number | null) {
    if (!item) return;
    setAnswers((a) => ({ ...a, [item.id]: value }));
    if (index + 1 >= questions.length) setFinished(true);
    else setIndex(index + 1);
  }

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  if (questions.length === 0) {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md }}>
        <Txt variant="title">{t('noMaterialYet')}</Txt>
        <Button title={t('backHome')} onPress={() => router.back()} />
      </Screen>
    );
  }

  if (finished) {
    const info = levels.find((l) => l.key === result.level);
    return (
      <Screen>
        <ScrollView
          contentContainerStyle={{
            paddingTop: insets.top + space.xl,
            paddingHorizontal: space.lg,
            paddingBottom: space.xxxl,
            gap: space.md,
            alignItems: 'center',
            maxWidth: 480,
            width: '100%',
            alignSelf: 'center',
          }}
        >
          <Mascot mood="happy" size={140} />
          <Txt variant="small" tone="muted">
            {t('placementResult')}
          </Txt>
          <Txt variant="display" style={{ color: info?.color }}>
            {result.level}
          </Txt>
          {info ? (
            <>
              <Txt variant="heading">{info.name[locale]}</Txt>
              <Txt variant="small" tone="muted" style={{ textAlign: 'center' }}>
                {info.summary[locale]}
              </Txt>
            </>
          ) : null}
          <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
            {result.correct}/{questions.length} {t('placementScore')} · {t('placementResultSub')}
          </Txt>

          <Card style={{ gap: space.sm, alignSelf: 'stretch', marginTop: space.md }}>
            {result.perLevel.map((row) => {
              const li = levels.find((l) => l.key === row.level);
              return (
                <View key={row.level} style={{ gap: 6 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Txt variant="small">{row.level}</Txt>
                    <Txt variant="caption" tone="faint">
                      {row.correct}/{row.total}
                    </Txt>
                  </View>
                  <ProgressBar value={row.correct / row.total} color={li?.color} height={8} />
                </View>
              );
            })}
          </Card>

          <View style={{ gap: space.sm, alignSelf: 'stretch', marginTop: space.lg }}>
            <Button
              title={t('placementAccept')}
              size="lg"
              full
              onPress={() => {
                update({ level: result.level, placed: true });
                router.replace('/course');
              }}
            />
            <Button title={t('backHome')} variant="ghost" full onPress={() => router.back()} />
          </View>
        </ScrollView>
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
            {t('placementTitle')}
          </Txt>
          <Txt variant="caption" tone="faint">
            {index + 1}/{questions.length}
          </Txt>
        </View>

        <ProgressBar value={index / questions.length} height={8} />

        {index === 0 ? (
          <MascotSays mood="thinking" size={84}>
            <Txt variant="small" tone="muted">
              {t('placementSub')}
            </Txt>
          </MascotSays>
        ) : null}

        <Card level={2} style={{ paddingVertical: space.xl }}>
          <Txt variant="heading" style={{ textAlign: 'center' }}>
            {item.prompt}
          </Txt>
        </Card>

        <View style={{ gap: space.sm }}>
          {item.options.map((option, i) => (
            <AnswerOption key={`${item.id}.${i}`} index={i} label={option} state="idle" onPress={() => answer(i)} />
          ))}
        </View>

        {/* A lucky guess places someone a level too high, so saying so is a
            first-class answer rather than something to skip past. */}
        <Pressable
          onPress={() => answer(null)}
          accessibilityRole="button"
          style={{
            borderRadius: radius.md,
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: colors.border,
            padding: space.md,
            alignItems: 'center',
          }}
        >
          <Txt variant="small" tone="faint">
            {t('dontKnow')}
          </Txt>
        </Pressable>

        <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
          {PER_LEVEL} × {blocks.length} · {t('placementResultSub')}
        </Txt>
      </ScrollView>
    </Screen>
  );
}
