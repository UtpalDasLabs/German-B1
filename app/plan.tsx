import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { MascotSays } from '@/components/Mascot';
import { Card, Chip, ProgressBar, Screen, Txt } from '@/components/ui';
import { forecast, formatDate, planFor } from '@/lib/forecast';
import { GOALS, GOAL_ORDER } from '@/lib/goals';
import { moduleStats } from '@/lib/stats';
import { meta, reviewableIds } from '@/lib/study';
import { MODULE_KEYS } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

const DAY = 24 * 60 * 60 * 1000;

/** Offer concrete dates rather than a date picker - fewer taps, no keyboard. */
function dateChoices(now = Date.now()) {
  return [
    { weeks: 4, iso: isoAfter(now, 28) },
    { weeks: 8, iso: isoAfter(now, 56) },
    { weeks: 12, iso: isoAfter(now, 84) },
    { weeks: 24, iso: isoAfter(now, 168) },
  ];
}

function isoAfter(now: number, days: number): string {
  const d = new Date(now + days * DAY);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

type GoalLabel = 'goalCasual' | 'goalRegular' | 'goalSerious' | 'goalIntense';

export default function PlanScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings, update } = useSettings();
  const { progress } = useProgress();
  const [choices] = useState(() => dateChoices());

  const f = useMemo(
    () => forecast(reviewableIds, progress.cards, settings.goal),
    [progress.cards, settings.goal],
  );
  const plan = useMemo(
    () => (settings.examDate ? planFor(f, settings.examDate, settings.goal) : null),
    [f, settings.examDate, settings.goal],
  );
  const modules = useMemo(() => moduleStats(progress.attempts, MODULE_KEYS), [progress.attempts]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  const mood = plan == null ? 'thinking' : plan.impossible || !plan.onTrack ? 'sad' : 'happy';

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
            <Ionicons name="chevron-back" size={28} color={colors.textFaint} />
          </Pressable>
          <Txt variant="title" style={{ flex: 1 }}>
            {t('planTitle')}
          </Txt>
        </View>

        <MascotSays mood={mood} size={88}>
          <Txt variant="bodyStrong">
            {plan == null
              ? t('whenExam')
              : plan.daysLeft <= 0
                ? t('examPassed')
                : plan.impossible
                  ? t('tooSoon')
                  : plan.onTrack
                    ? t('onTrack')
                    : t('needMore')}
          </Txt>
          <Txt variant="small" tone="muted">
            {plan == null
              ? t('whenExamBody')
              : plan.impossible
                ? `${t('tooSoonBody')} ${f.minimumDays} ${locale === 'de' ? 'Tagen' : 'days'}.`
                : plan.onTrack
                  ? t('onTrackBody')
                  : `${t('needMoreBody')} ${plan.cardsPerDay} ${t('itemsADay')}.`}
          </Txt>
        </MascotSays>

        {/* readiness */}
        <Card style={{ gap: space.sm }}>
          <Txt variant="heading">{t('readyLabel')}</Txt>
          <ProgressBar value={f.score} color={colors.info} />
          <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: space.sm }}>
            <Txt variant="title" tone="info">
              {Math.round(f.score * 100)}%
            </Txt>
            <Txt variant="small" tone="muted" style={{ flex: 1 }}>
              {f.started} / {f.total} {t('itemsStarted')}
            </Txt>
          </View>
          <Txt variant="caption" tone="faint">
            {f.ready} {t('readyItems')}
          </Txt>
          {f.reviewsLeft > 0 ? (
            <Txt variant="small" tone="muted">
              {t('readyBy')} <Txt variant="bodyStrong">{formatDate(f.readyDate, locale)}</Txt>
            </Txt>
          ) : null}
        </Card>

        {/* the four modules, which the readiness score above deliberately does
            not include: spaced repetition can schedule words, not essays */}
        <Card style={{ gap: space.md }}>
          <Txt variant="heading">{t('fourModules')}</Txt>
          {modules.map((m) => {
            const area = meta.areas[m.module];
            return (
              <View key={m.module} style={{ gap: 6 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Txt variant="small">
                    {area.icon} {area.label[locale]}
                  </Txt>
                  <Txt variant="caption" tone="faint">
                    {m.attempts > 0 ? `${t('bestScore')} ${m.best}%` : t('notSatYet')}
                  </Txt>
                </View>
                <ProgressBar value={m.best / 100} color={area.color} height={10} />
              </View>
            );
          })}
        </Card>

        {/* exam date */}
        <Card style={{ gap: space.md }}>
          <Txt variant="heading">{t('whenExam')}</Txt>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }}>
            {choices.map((c) => (
              <Chip
                key={c.iso}
                label={`in ${c.weeks} ${locale === 'de' ? 'Wochen' : 'weeks'}`}
                active={settings.examDate === c.iso}
                onPress={() => update({ examDate: settings.examDate === c.iso ? null : c.iso })}
              />
            ))}
            <Chip
              label={t('noDateYet')}
              active={settings.examDate == null}
              onPress={() => update({ examDate: null })}
            />
          </View>
          {settings.examDate ? (
            <Txt variant="small" tone="muted">
              {formatDate(new Date(`${settings.examDate}T00:00:00`), locale)}
              {plan && plan.daysLeft > 0 ? ` · ${plan.daysLeft} ${t('daysToGo')}` : ''}
            </Txt>
          ) : null}
        </Card>

        {/* pace */}
        <Card style={{ gap: space.md }}>
          <Txt variant="heading">{t('setGoal')}</Txt>
          {GOAL_ORDER.map((g) => {
            const projected = forecast(reviewableIds, progress.cards, g);
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
                <Txt variant="caption" tone="faint">
                  {projected.reviewsLeft === 0 ? '✓' : formatDate(projected.readyDate, locale)}
                </Txt>
              </Pressable>
            );
          })}
        </Card>
      </ScrollView>
    </Screen>
  );
}
