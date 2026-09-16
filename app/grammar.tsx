import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { MascotSays } from '@/components/Mascot';
import { Button, Card, Divider, ProgressBar, Screen, Txt } from '@/components/ui';
import { drillGroups, grammar, getGrammar } from '@/lib/study';
import { groupStats } from '@/lib/stats';
import type { GrammarTopic } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { areaColors } from '@/theme/tokens';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * The "understand it" half of the grammar module. Reachable from any drill and
 * browsable as a list on its own.
 */
export default function GrammarScreen() {
  const { colors, space } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ topic?: string }>();
  const [open, setOpen] = useState<string | null>(params.topic ?? null);
  const { progress } = useProgress();

  const stats = useMemo(() => {
    const byKey = new Map(groupStats(drillGroups(), progress.cards).map((s) => [s.key, s]));
    return byKey;
  }, [progress.cards]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  const active = open ? getGrammar(open) : null;

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
            onPress={() => (active ? setOpen(null) : router.back())}
            accessibilityRole="button"
            accessibilityLabel={t('backHome')}
            hitSlop={12}
          >
            <Ionicons name="chevron-back" size={28} color={colors.textFaint} />
          </Pressable>
          <Txt variant="title" style={{ flex: 1 }}>
            {active ? active.title[locale] : t('grammarTitle')}
          </Txt>
        </View>

        {active ? (
          <Article
            topic={active}
            locale={locale}
            onPractise={() => router.push(`/drill?topic=${active.key}&count=8`)}
            practiseLabel={t('practiceThis')}
            labels={{
              rules: t('rulesLabel'),
              examples: t('examplesLabel'),
              pitfalls: t('pitfallsLabel'),
              wrong: t('wrongLabel'),
              right: t('rightLabel'),
            }}
          />
        ) : (
          <>
            <MascotSays mood="thinking" size={84}>
              <Txt variant="bodyStrong">{t('grammarTitle')}</Txt>
              <Txt variant="small" tone="muted">
                {t('grammarBody')}
              </Txt>
            </MascotSays>

            {grammar.map((topic) => {
              const stat = stats.get(topic.key);
              return (
                <Pressable
                  key={topic.key}
                  accessibilityRole="button"
                  onPress={() => setOpen(topic.key)}
                  style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
                >
                  <Card style={{ gap: space.sm }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
                      <View
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 16,
                          backgroundColor: `${areaColors.grammatik}22`,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Txt variant="heading">{topic.icon}</Txt>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Txt variant="bodyStrong">{topic.title[locale]}</Txt>
                        <Txt variant="small" tone="muted">
                          {topic.summary[locale]}
                        </Txt>
                      </View>
                      <Ionicons name="chevron-forward" size={20} color={colors.textFaint} />
                    </View>
                    {stat ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
                        <View style={{ flex: 1 }}>
                          <ProgressBar value={stat.progress} color={areaColors.grammatik} height={8} />
                        </View>
                        <Txt variant="caption" tone="faint">
                          {stat.mastered}/{stat.total}
                        </Txt>
                      </View>
                    ) : null}
                  </Card>
                </Pressable>
              );
            })}
          </>
        )}
      </ScrollView>
    </Screen>
  );
}

function Article({
  topic,
  locale,
  onPractise,
  practiseLabel,
  labels,
}: {
  topic: GrammarTopic;
  locale: 'de' | 'en';
  onPractise: () => void;
  practiseLabel: string;
  labels: { rules: string; examples: string; pitfalls: string; wrong: string; right: string };
}) {
  const { colors, radius, space } = useTheme();
  const tint = areaColors.grammatik;

  return (
    <View style={{ gap: space.lg }}>
      <View style={{ alignItems: 'center' }}>
        <Txt style={{ fontSize: 56, lineHeight: 64 }}>{topic.icon}</Txt>
      </View>

      <Txt variant="overline" style={{ color: tint }}>
        {labels.rules.toUpperCase()}
      </Txt>
      {topic.body[locale].map((paragraph, i) => (
        <Txt key={i} variant="prose" tone={i === 0 ? 'default' : 'muted'}>
          {paragraph}
        </Txt>
      ))}

      {topic.tables.map((table, i) => (
        <Card key={i} style={{ gap: space.sm, padding: space.md }}>
          <Txt variant="overline" tone="faint">
            {table.caption[locale].toUpperCase()}
          </Txt>
          <View style={{ flexDirection: 'row', gap: space.sm }}>
            {table.head.map((cell, c) => (
              <Txt key={c} variant="caption" tone="faint" style={{ flex: 1 }}>
                {cell}
              </Txt>
            ))}
          </View>
          <Divider />
          {table.rows.map((row, r) => (
            <View key={r} style={{ flexDirection: 'row', gap: space.sm }}>
              {row.map((cell, c) => (
                <Txt key={c} variant="small" tone={c === 0 ? 'default' : 'muted'} style={{ flex: 1 }}>
                  {cell}
                </Txt>
              ))}
            </View>
          ))}
        </Card>
      ))}

      {topic.examples.length ? (
        <View style={{ backgroundColor: colors.infoBg, borderRadius: radius.md, padding: space.lg, gap: space.md }}>
          <Txt variant="overline" style={{ color: colors.info }}>
            {labels.examples.toUpperCase()}
          </Txt>
          {topic.examples.map((ex, i) => (
            <View key={i} style={{ gap: 2 }}>
              <Txt variant="bodyStrong">{ex.de}</Txt>
              {locale === 'en' ? (
                <Txt variant="small" tone="muted">
                  {ex.en}
                </Txt>
              ) : null}
            </View>
          ))}
        </View>
      ) : null}

      {topic.pitfalls.length ? (
        <View style={{ gap: space.md }}>
          <Txt variant="overline" style={{ color: colors.danger }}>
            {labels.pitfalls.toUpperCase()}
          </Txt>
          {topic.pitfalls.map((p, i) => (
            <Card key={i} style={{ gap: space.xs, borderColor: colors.danger }}>
              <View style={{ flexDirection: 'row', gap: space.sm, alignItems: 'flex-start' }}>
                <Txt variant="caption" tone="danger" style={{ width: 54 }}>
                  {labels.wrong.toUpperCase()}
                </Txt>
                <Txt variant="small" tone="danger" style={{ flex: 1, textDecorationLine: 'line-through' }}>
                  {p.wrong}
                </Txt>
              </View>
              <View style={{ flexDirection: 'row', gap: space.sm, alignItems: 'flex-start' }}>
                <Txt variant="caption" tone="success" style={{ width: 54 }}>
                  {labels.right.toUpperCase()}
                </Txt>
                <Txt variant="small" tone="success" style={{ flex: 1 }}>
                  {p.right}
                </Txt>
              </View>
              <Txt variant="small" tone="muted">
                {p.why[locale]}
              </Txt>
            </Card>
          ))}
        </View>
      ) : null}

      <Button
        title={practiseLabel}
        size="lg"
        full
        icon={<Ionicons name="barbell" size={18} color={colors.onAccent} />}
        onPress={onPractise}
      />
    </View>
  );
}
