import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Illustration } from '@/components/Illustration';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Card, ProgressBar, Screen, Txt } from '@/components/ui';
import { PROVIDERS_BY_KEY } from '@/lib/official';
import { moduleStats } from '@/lib/stats';
import { isAutoScored, meta, tasksFor } from '@/lib/study';
import { MODULE_KEYS, type ModuleKey } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/** Where each module's task list lives. */
const ROUTE: Record<ModuleKey, string> = {
  lesen: '/reading',
  hoeren: '/listening',
  schreiben: '/writing',
  sprechen: '/speaking',
};

export default function PracticeScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { progress } = useProgress();

  const provider = PROVIDERS_BY_KEY[settings.provider];
  const stats = useMemo(() => moduleStats(progress.attempts, MODULE_KEYS), [progress.attempts]);

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
          maxWidth: 680,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Txt variant="display">{t('fourModules')}</Txt>
          <Txt variant="small" tone="muted">
            {t('practiceBody')}
          </Txt>
        </View>

        {MODULE_KEYS.map((module) => {
          const area = meta.areas[module];
          const stat = stats.find((s) => s.module === module)!;
          const tasks = tasksFor(module);
          return (
            <Pressable
              key={module}
              accessibilityRole="button"
              accessibilityLabel={`${area.label[locale]}, ${tasks.length} tasks`}
              onPress={() => router.push(ROUTE[module] as never)}
              style={({ pressed }) => ({ opacity: pressed ? 0.88 : 1 })}
            >
              <Card level={2} style={{ gap: space.md }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
                  <View
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: radius.lg,
                      backgroundColor: `${area.color}1F`,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Illustration name={module} color={area.color} size={46} />
                  </View>
                  <View style={{ flex: 1, gap: 2 }}>
                    <Txt variant="heading">{area.label[locale]}</Txt>
                    <Txt variant="small" tone="muted">
                      {tasks.length} {locale === 'de' ? 'Aufgaben' : 'tasks'} · {provider.minutes[module]}{' '}
                      {t('minutes')}
                      {isAutoScored(module) ? '' : ` · ${t('selfAssessed')}`}
                    </Txt>
                  </View>
                  <Ionicons name="chevron-forward" size={22} color={colors.textFaint} />
                </View>

                {stat.attempts > 0 ? (
                  <>
                    <ProgressBar value={stat.best / 100} color={area.color} height={10} />
                    <View style={{ flexDirection: 'row', gap: space.lg }}>
                      <Txt variant="caption" tone="muted">
                        {t('bestScore')}: {stat.best}%
                      </Txt>
                      <Txt variant="caption" tone="muted">
                        {t('lastScore')}: {stat.last}%
                      </Txt>
                      <Txt variant="caption" tone="faint" style={{ flex: 1, textAlign: 'right' }}>
                        {stat.attempts} {t('attempts')}
                      </Txt>
                    </View>
                  </>
                ) : (
                  <Txt variant="caption" tone="faint">
                    {t('notSatYet')}
                  </Txt>
                )}
              </Card>
            </Pressable>
          );
        })}

        <Card style={{ gap: space.sm }}>
          <Txt variant="heading">{provider.name}</Txt>
          <Txt variant="small" tone="muted">
            {provider.who[locale]}
          </Txt>
          <Txt variant="caption" tone="faint">
            {t('passLabel')}: {provider.passPercent}% {t('perModule')} · {t('modularLabel')}:{' '}
            {provider.modular ? t('yes') : t('no')}
          </Txt>
        </Card>
      </ScrollView>
    </Screen>
  );
}
