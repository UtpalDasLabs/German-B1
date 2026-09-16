import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Illustration } from '@/components/Illustration';
import { Card, Screen, Txt } from '@/components/ui';
import { PROVIDERS_BY_KEY } from '@/lib/official';
import { meta } from '@/lib/study';
import type { ModuleAttempt, ModuleKey } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * The list of tasks inside one module.
 *
 * Each row carries its Teil number, because at B1 the part number is the most
 * useful thing to know about a task: Lesen Teil 3 is a different skill from
 * Lesen Teil 1, and learners are usually weak at one particular part.
 */
export function TaskPicker({
  module,
  tasks,
  onPick,
}: {
  module: ModuleKey;
  tasks: { id: string; teil: number; title: { de: string; en: string } }[];
  onPick: (id: string) => void;
}) {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { progress } = useProgress();

  const area = meta.areas[module];
  const provider = PROVIDERS_BY_KEY[settings.provider];
  const attemptsFor = (taskId: string): ModuleAttempt | undefined =>
    progress.attempts.find((a) => a.taskId === taskId);

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
            <Ionicons name="chevron-back" size={28} color={colors.textFaint} />
          </Pressable>
          <Txt variant="title" style={{ flex: 1 }}>
            {area.label[locale]}
          </Txt>
        </View>

        <Card level={2} style={{ alignItems: 'center', gap: space.sm, paddingVertical: space.xl }}>
          <Illustration name={module} color={area.color} size={96} />
          <Txt variant="small" tone="muted" style={{ textAlign: 'center' }}>
            {provider.name} · {provider.minutes[module]} {t('minutes')}
          </Txt>
        </Card>

        {tasks.map((task) => {
          const last = attemptsFor(task.id);
          return (
            <Pressable
              key={task.id}
              accessibilityRole="button"
              onPress={() => onPick(task.id)}
              style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
            >
              <Card style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
                <View
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: radius.md,
                    backgroundColor: `${area.color}22`,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Txt variant="heading" style={{ color: area.color }}>
                    {task.teil}
                  </Txt>
                </View>
                <View style={{ flex: 1 }}>
                  <Txt variant="bodyStrong">{task.title[locale]}</Txt>
                  <Txt variant="caption" tone={last ? 'muted' : 'faint'}>
                    {last ? `${t('lastScore')}: ${last.score}%` : t('notSatYet')}
                  </Txt>
                </View>
                <Ionicons name="chevron-forward" size={20} color={colors.textFaint} />
              </Card>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
}
