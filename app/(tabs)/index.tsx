import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { MascotSays } from '@/components/Mascot';
import { ProgressRing } from '@/components/ProgressRing';
import { Button, Card, ProgressBar, Screen, StatPill, Txt } from '@/components/ui';
import { forecast, formatDate, planFor } from '@/lib/forecast';
import { GOALS } from '@/lib/goals';
import { GENDER_COLORS } from '@/components/Flashcard';
import { Chip, Divider } from '@/components/ui';
import { headword, reviewableIds } from '@/lib/study';
import { todayPlan, wordOfDay } from '@/lib/today';
import { useScope } from '@/lib/useScope';
import { isDue, todayKey } from '@/lib/srs';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

export default function HomeScreen() {
  const { colors, space } = useTheme();
  const { settings } = useSettings();
  const scope = useScope();
  const { progress } = useProgress();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const dueCount = useMemo(
    () => reviewableIds(scope).filter((id: string) => isDue(progress.cards[id])).length,
    [progress.cards, scope],
  );
  const f = useMemo(
    () => forecast(reviewableIds(scope), progress.cards, settings.goal),
    [progress.cards, settings.goal, scope],
  );
  const plan = useMemo(
    () => (settings.examDate ? planFor(f, settings.examDate, settings.goal) : null),
    [f, settings.examDate, settings.goal],
  );

  const plan2 = useMemo(() => todayPlan(scope, progress), [scope, progress]);
  const word = useMemo(() => wordOfDay(scope), [scope]);

  const goalXp = GOALS[settings.goal].xp;
  const xpToday = progress.xpDay === todayKey() ? progress.xpToday : 0;
  const goalProgress = Math.min(1, xpToday / goalXp);
  const goalDone = xpToday >= goalXp;
  const started = progress.xp > 0;

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
          maxWidth: 640,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* wordmark */}
        <View>
          <Txt variant="title">{t('appName')}</Txt>
          <Txt variant="caption" tone="faint">
            {t('appSubtitle').toUpperCase()}
          </Txt>
        </View>

        {/* top counters */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.lg }}>
          <StatPill
            icon={<Ionicons name="flame" size={22} color={progress.streak > 0 ? colors.streak : colors.textFaint} />}
            value={String(progress.streak)}
            color={progress.streak > 0 ? colors.streak : colors.textFaint}
            label={t('dayStreak')}
          />
          <StatPill
            icon={<Ionicons name="flash" size={22} color={colors.xp} />}
            value={String(progress.xp)}
            color={colors.xp}
            label={t('totalXp')}
          />
          <View style={{ flex: 1 }} />
          <Pressable
            onPress={() => router.push('/(tabs)/you')}
            accessibilityRole="button"
            accessibilityLabel={t('settings')}
            hitSlop={10}
          >
            <Ionicons name="settings-outline" size={22} color={colors.textFaint} />
          </Pressable>
        </View>

        {/* mascot + daily goal */}
        <MascotSays mood={goalDone ? 'celebrate' : started ? 'happy' : 'idle'} size={96}>
          <Txt variant="bodyStrong">
            {goalDone ? t('goalMet') : started ? t('continueStudying') : t('welcomeBack')}
          </Txt>
          <Txt variant="small" tone="muted">
            {goalDone ? t('goalMetBody') : `${xpToday} / ${goalXp} ${t('xpToday')}`}
          </Txt>
        </MascotSays>

        <Card level={2} style={{ gap: space.md }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.lg }}>
            <ProgressRing value={goalProgress} size={84} stroke={12} color={colors.success}>
              <Txt variant="heading">{Math.round(goalProgress * 100)}%</Txt>
            </ProgressRing>
            <View style={{ flex: 1, gap: 2 }}>
              <Txt variant="overline" tone="faint">
                {t('dailyGoal').toUpperCase()}
              </Txt>
              <Txt variant="heading">
                {t(`goal${settings.goal[0].toUpperCase()}${settings.goal.slice(1)}` as 'goalRegular')}
              </Txt>
              <Txt variant="small" tone="muted">
                {GOALS[settings.goal].cards} {t('itemsADay')}
              </Txt>
            </View>
          </View>

          <Button
            title={started ? t('continueStudying') : t('startStudying')}
            size="lg"
            full
            icon={<Ionicons name="play" size={20} color={colors.onAccent} />}
            onPress={() => router.push('/study?mode=due')}
          />
        </Card>

        {/* exam readiness */}
        <Pressable onPress={() => router.push('/plan')} accessibilityRole="button">
          <Card style={{ gap: space.md }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Txt variant="heading" style={{ flex: 1 }}>
                {t('readyLabel')}
              </Txt>
              <Ionicons name="chevron-forward" size={20} color={colors.textFaint} />
            </View>

            <ProgressBar value={f.score} color={colors.info} />
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: space.sm }}>
              <Txt variant="heading" tone="info">
                {Math.round(f.score * 100)}%
              </Txt>
              <Txt variant="small" tone="muted" style={{ flex: 1 }}>
                {f.started} / {f.total} {t('itemsStarted')}
                {f.ready > 0 ? ` · ${f.ready} ${t('mastered').toLowerCase()}` : ''}
              </Txt>
            </View>

            {plan ? (
              plan.daysLeft <= 0 ? (
                <Banner tone="info" text={t('examPassed')} />
              ) : plan.impossible ? (
                <Banner
                  tone="danger"
                  text={`${t('tooSoonBody')} ${f.minimumDays} ${locale === 'de' ? 'Tagen' : 'days'}.`}
                />
              ) : plan.onTrack ? (
                <Banner tone="success" text={`${t('onTrack')} — ${plan.daysLeft} ${t('daysToGo')}`} />
              ) : (
                <Banner tone="danger" text={`${t('needMoreBody')} ${plan.cardsPerDay} ${t('itemsADay')}`} />
              )
            ) : (
              <Txt variant="small" tone="muted">
                {t('readyBy')} {formatDate(f.readyDate, locale)}
              </Txt>
            )}
          </Card>
        </Pressable>

        {/* Today's plan: three things, so the session is not spent choosing. */}
        <Card style={{ gap: space.md }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Txt variant="heading" style={{ flex: 1 }}>
              {t('todayPlan')}
            </Txt>
            <Txt variant="caption" tone="faint">
              {plan2.minutes} {t('planMinutes')}
            </Txt>
          </View>
          <Txt variant="small" tone="muted">
            {t('todayPlanSub')}
          </Txt>
          {plan2.steps.map((step, i) => (
            <Pressable
              key={step.key}
              onPress={() => router.push(step.route as never)}
              accessibilityRole="button"
              accessibilityLabel={t(PLAN_LABEL[step.key])}
              style={{ flexDirection: 'row', alignItems: 'center', gap: space.md, paddingVertical: 4 }}
            >
              <Ionicons
                name={step.done ? 'checkmark-circle' : 'ellipse-outline'}
                size={22}
                color={step.done ? colors.success : colors.textFaint}
              />
              <View style={{ flex: 1 }}>
                <Txt variant="body" tone={step.done ? 'muted' : 'default'}>
                  {t(PLAN_LABEL[step.key])}
                </Txt>
                <Txt variant="caption" tone="faint">
                  {step.key === 'read' && plan2.article
                    ? plan2.article.title[locale]
                    : t(PLAN_SUB[step.key])}
                </Txt>
              </View>
              <Txt variant="caption" tone="faint">
                {step.minutes} {t('planMinutes')}
              </Txt>
              <Ionicons name="chevron-forward" size={18} color={colors.textFaint} />
            </Pressable>
          ))}
        </Card>

        {/* Word of the day: the same word all day, on every device. */}
        {word ? (
          <Pressable
            onPress={() => router.push(`/dictionary`)}
            accessibilityRole="button"
            accessibilityLabel={`${t('wordOfDay')}: ${headword(word)}`}
          >
            <Card style={{ gap: 4 }}>
              <Txt variant="overline" tone="faint">
                {t('wordOfDay').toUpperCase()}
              </Txt>
              <Txt variant="heading" style={{ color: word.article ? GENDER_COLORS[word.article] : colors.text }}>
                {headword(word)}
              </Txt>
              <Txt variant="small" tone="muted">
                {word.en}
              </Txt>
              <Txt variant="caption" tone="faint" style={{ marginTop: 2 }}>
                {word.example.de}
              </Txt>
            </Card>
          </Pressable>
        ) : null}

        <View style={{ flexDirection: 'row', gap: space.md }}>
          <Tile emoji="📰" title={t('magazineTitle')} onPress={() => router.push('/magazine')} />
          <Tile emoji="🎯" title={t('courseTitle')} onPress={() => router.push('/course')} />
          <Tile emoji="📖" title={t('dictionaryTitle')} onPress={() => router.push('/dictionary')} />
        </View>

        <View style={{ flexDirection: 'row', gap: space.md }}>
          <Tile emoji="🧩" title={t('quickDrill')} onPress={() => router.push('/drill?count=10')} />
          <Tile emoji="📐" title={t('grammarRules')} onPress={() => router.push('/grammar')} />
          <Tile emoji="🎓" title={t('mockExam')} onPress={() => router.push('/(tabs)/exam')} />
        </View>

        {/* The three trainers: the parts of a German word a flashcard lets you
            believe you knew. */}
        <View style={{ flexDirection: 'row', gap: space.md }}>
          <Tile emoji="🔘" title={t('genderTrainer')} onPress={() => router.push('/trainer?kind=gender')} />
          <Tile emoji="👥" title={t('pluralTrainer')} onPress={() => router.push('/trainer?kind=plural')} />
          <Tile emoji="🔁" title={t('verbTrainer')} onPress={() => router.push('/trainer?kind=verb')} />
        </View>

        {dueCount > 0 ? (
          <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
            {dueCount} {t('dueToday').toLowerCase()}
          </Txt>
        ) : null}
      </ScrollView>
    </Screen>
  );
}

function Banner({ tone, text }: { tone: 'success' | 'danger' | 'info'; text: string }) {
  const { colors, radius, space } = useTheme();
  const bg = { success: colors.successBg, danger: colors.dangerBg, info: colors.infoBg }[tone];
  const fg = { success: colors.success, danger: colors.danger, info: colors.info }[tone];
  return (
    <View style={{ backgroundColor: bg, borderRadius: radius.md, padding: space.md }}>
      <Txt variant="small" style={{ color: fg }}>
        {text}
      </Txt>
    </View>
  );
}

function Tile({ emoji, title, onPress }: { emoji: string; title: string; onPress: () => void }) {
  const { space } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => ({ flex: 1, opacity: pressed ? 0.85 : 1 })}
    >
      <Card style={{ alignItems: 'center', gap: space.xs, paddingVertical: space.lg }}>
        <Txt variant="title">{emoji}</Txt>
        <Txt variant="small" style={{ textAlign: 'center' }}>
          {title}
        </Txt>
      </Card>
    </Pressable>
  );
}

const PLAN_LABEL = {
  review: 'continueStudying',
  read: 'magazineTitle',
  goal: 'courseTitle',
} as const;

const PLAN_SUB = {
  review: 'dueToday',
  read: 'magazineSub',
  goal: 'goalsTitle',
} as const;
