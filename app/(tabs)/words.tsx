import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Illustration } from '@/components/Illustration';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Mascot } from '@/components/Mascot';
import { ProgressRing } from '@/components/ProgressRing';
import { Card, Screen, Txt, useShadow } from '@/components/ui';
import { filterVocab, themes, vocabGroups } from '@/lib/study';
import { groupStats, type GroupStat } from '@/lib/stats';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useTheme } from '@/theme/ThemeProvider';

/** Horizontal offsets that make the column of nodes wind like a path. */
const WEAVE = [0, 54, 78, 54, 0, -54, -78, -54, 0];

export default function WordsScreen() {
  const { colors, space } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { progress } = useProgress();

  const stats = useMemo(
    () => groupStats(vocabGroups(), progress.cards, themes.map((x) => x.key)),
    [progress.cards],
  );
  const dueCount = useMemo(() => filterVocab(progress.cards, { dueOnly: true }).length, [progress.cards]);
  const trickyCount = useMemo(() => filterVocab(progress.cards, { trickyOnly: true }).length, [progress.cards]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + space.lg,
          paddingHorizontal: space.lg,
          paddingBottom: space.xxxl,
          gap: space.lg,
          maxWidth: 560,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Txt variant="display">{t('byTheme')}</Txt>

        <View style={{ flexDirection: 'row', gap: space.md }}>
          <QuickDeck
            label={t('due')}
            count={dueCount}
            icon="time"
            color={colors.info}
            onPress={() => router.push('/study?mode=due')}
          />
          <QuickDeck
            label={t('tricky')}
            count={trickyCount}
            icon="alert-circle"
            color={colors.danger}
            onPress={() => router.push('/study?mode=tricky')}
          />
        </View>

        <View style={{ alignItems: 'center', gap: space.xl, marginTop: space.md }}>
          {stats.map((s, i) => {
            const theme = themes.find((x) => x.key === s.key);
            if (!theme) return null;
            return (
              <PathNode
                key={s.key}
                stat={s}
                offset={WEAVE[i % WEAVE.length]}
                label={theme.label[locale]}
                payoff={theme.payoff[locale]}
                color={theme.color}
                onPress={() => router.push(`/study?mode=all&theme=${s.key}`)}
              />
            );
          })}

          <View style={{ alignItems: 'center', gap: space.sm, marginTop: space.lg }}>
            <Mascot mood="happy" size={110} />
            <Txt variant="small" tone="muted" style={{ textAlign: 'center', maxWidth: 280 }}>
              {t('themeFootnote')}
            </Txt>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

function PathNode({
  stat,
  offset,
  label,
  payoff,
  color,
  onPress,
}: {
  stat: GroupStat;
  offset: number;
  label: string;
  payoff: string;
  color: string;
  onPress: () => void;
}) {
  const { colors, space } = useTheme();
  const shadow = useShadow(2);
  const complete = stat.mastered === stat.total;

  return (
    <View style={{ alignItems: 'center', transform: [{ translateX: offset }], gap: space.xs }}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${label}, ${stat.mastered} of ${stat.total} mastered. ${payoff}`}
        style={({ pressed }) => ({ transform: [{ translateY: pressed ? 3 : 0 }] })}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ProgressRing value={stat.progress} size={104} stroke={9} color={color}>
            <View
              style={[
                {
                  width: 78,
                  height: 78,
                  borderRadius: 39,
                  backgroundColor: complete ? color : colors.surface,
                  borderWidth: 3,
                  borderColor: complete ? color : colors.border,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                shadow,
              ]}
            >
              {complete ? (
                <Ionicons name="trophy" size={34} color="#FFFFFF" />
              ) : (
                <Illustration name={stat.key} color={color} size={52} />
              )}
            </View>
          </ProgressRing>
        </View>
      </Pressable>

      <Txt variant="bodyStrong" style={{ textAlign: 'center', maxWidth: 200 }}>
        {label}
      </Txt>
      <Txt variant="caption" tone="faint">
        {stat.mastered}/{stat.total}
      </Txt>
    </View>
  );
}

function QuickDeck({
  label,
  count,
  icon,
  color,
  onPress,
}: {
  label: string;
  count: number;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  onPress: () => void;
}) {
  const { space } = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={count === 0}
      style={({ pressed }) => ({ flex: 1, opacity: count === 0 ? 0.45 : pressed ? 0.85 : 1 })}
    >
      <Card style={{ gap: space.xs, alignItems: 'flex-start' }}>
        <Ionicons name={icon} size={22} color={color} />
        <Txt variant="title">{count}</Txt>
        <Txt variant="caption" tone="muted">
          {label}
        </Txt>
      </Card>
    </Pressable>
  );
}
