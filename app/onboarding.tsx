import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { InstallGuide } from '@/components/InstallGuide';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Mascot, type MascotMood } from '@/components/Mascot';
import { Button, Chip, ProgressBar, Screen, Txt } from '@/components/ui';
import { GOALS, GOAL_ORDER } from '@/lib/goals';
import { isEmbeddedArtifact } from '@/lib/install';
import { PROVIDERS } from '@/lib/official';
import { meta } from '@/lib/study';
import type { ExamProvider } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

type StepId = 'welcome' | 'why' | 'how' | 'provider' | 'goal' | 'install';

const BASE_STEPS: StepId[] = ['welcome', 'why', 'how', 'provider', 'goal'];

/**
 * The install step only means something on a real web page: a native build is
 * already an app, and an embedded artifact has no page to install.
 */
function stepsFor(): StepId[] {
  if (Platform.OS !== 'web' || isEmbeddedArtifact()) return BASE_STEPS;
  return [...BASE_STEPS, 'install'];
}

const MOODS: Record<StepId, MascotMood> = {
  welcome: 'happy',
  why: 'thinking',
  how: 'idle',
  provider: 'thinking',
  goal: 'happy',
  install: 'celebrate',
};

type GoalLabel = 'goalCasual' | 'goalRegular' | 'goalSerious' | 'goalIntense';

/**
 * First-run introduction: what this is, why it exists, how it works, then the
 * two settings that change what you see. Skippable at every step, shown once.
 */
export default function OnboardingScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings, update } = useSettings();
  const [index, setIndex] = useState(0);
  // Frozen per mount: the step list depends on environment, not on state.
  const [steps] = useState(stepsFor);

  const step = steps[index];
  const isLast = index === steps.length - 1;

  const finish = useCallback(() => {
    update({ onboarded: true });
    router.replace('/(tabs)');
  }, [update, router]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  return (
    <Screen>
      <View
        style={{
          paddingTop: insets.top + space.md,
          paddingHorizontal: space.lg,
          flexDirection: 'row',
          alignItems: 'center',
          gap: space.md,
        }}
      >
        <View style={{ flex: 1 }}>
          <ProgressBar value={(index + 1) / steps.length} color={colors.success} height={10} />
        </View>
        <Pressable onPress={finish} accessibilityRole="button" hitSlop={10}>
          <Txt variant="small" tone="faint">
            {t('skip')}
          </Txt>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: space.lg,
          paddingTop: space.xl,
          paddingBottom: space.lg,
          gap: space.lg,
          maxWidth: 560,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: 'center' }}>
          <Mascot mood={MOODS[step]} size={148} />
        </View>

        <Txt variant="title" style={{ textAlign: 'center' }}>
          {
            {
              welcome: t('obWelcomeTitle'),
              why: t('obWhyTitle'),
              how: t('obHowTitle'),
              provider: t('obProviderTitle'),
              goal: t('obGoalTitle'),
              install: t('installTitle'),
            }[step]
          }
        </Txt>

        <Txt variant="body" tone="muted" style={{ textAlign: 'center' }}>
          {
            {
              welcome: t('obWelcomeBody'),
              why: t('obWhyBody'),
              how: t('obHowBody'),
              provider: t('obProviderBody'),
              goal: t('obGoalBody'),
              install: t('installWhy'),
            }[step]
          }
        </Txt>

        {step === 'provider' ? (
          <View style={{ gap: space.sm }}>
            {PROVIDERS.map((p) => {
              const active = settings.provider === p.key;
              return (
                <Pressable
                  key={p.key}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: active }}
                  onPress={() => update({ provider: p.key as ExamProvider })}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: space.md,
                    padding: space.md,
                    borderRadius: radius.md,
                    borderWidth: 2,
                    borderColor: active ? colors.success : colors.border,
                    backgroundColor: active ? colors.successBg : 'transparent',
                  }}
                >
                  <Ionicons
                    name={active ? 'radio-button-on' : 'radio-button-off'}
                    size={22}
                    color={active ? colors.success : colors.textFaint}
                  />
                  <View style={{ flex: 1 }}>
                    <Txt variant="bodyStrong">{p.name}</Txt>
                    <Txt variant="small" tone="muted">
                      {p.who[locale]}
                    </Txt>
                  </View>
                </Pressable>
              );
            })}
          </View>
        ) : null}

        {step === 'goal' ? (
          <View style={{ gap: space.sm }}>
            {GOAL_ORDER.map((g) => {
              const active = settings.goal === g;
              return (
                <Pressable
                  key={g}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: active }}
                  onPress={() => update({ goal: g })}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: space.md,
                    padding: space.md,
                    borderRadius: radius.md,
                    borderWidth: 2,
                    borderColor: active ? colors.success : colors.border,
                    backgroundColor: active ? colors.successBg : 'transparent',
                  }}
                >
                  <Ionicons
                    name={active ? 'radio-button-on' : 'radio-button-off'}
                    size={22}
                    color={active ? colors.success : colors.textFaint}
                  />
                  <View style={{ flex: 1 }}>
                    <Txt variant="bodyStrong">{t(`goal${g[0].toUpperCase()}${g.slice(1)}` as GoalLabel)}</Txt>
                    <Txt variant="small" tone="muted">
                      {GOALS[g].cards} {t('itemsADay')}
                    </Txt>
                  </View>
                </Pressable>
              );
            })}
          </View>
        ) : null}

        {step === 'install' ? <InstallGuide compact /> : null}

        {step === 'welcome' ? (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm, justifyContent: 'center' }}>
            <Chip label={`${meta.counts.vocab} ${t('words')}`} />
            <Chip label={`${meta.counts.drills} Drills`} />
            <Chip label={`${meta.counts.grammar} ${t('grammarTitle')}`} />
            <Chip
              label={`${
                meta.counts.reading + meta.counts.listening + meta.counts.writing + meta.counts.speaking
              } ${locale === 'de' ? 'Prüfungsaufgaben' : 'exam tasks'}`}
            />
          </View>
        ) : null}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          gap: space.md,
          paddingHorizontal: space.lg,
          paddingBottom: insets.bottom + space.lg,
        }}
      >
        {index > 0 ? <Button title={t('back')} variant="secondary" onPress={() => setIndex((i) => i - 1)} /> : null}
        <View style={{ flex: 1 }}>
          <Button
            title={isLast ? t('startLearning') : t('next')}
            size="lg"
            full
            icon={<Ionicons name="arrow-forward" size={18} color={colors.onAccent} />}
            onPress={() => (isLast ? finish() : setIndex((i) => i + 1))}
          />
        </View>
      </View>
    </Screen>
  );
}
