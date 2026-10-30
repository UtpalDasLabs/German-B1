import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { MascotSays } from '@/components/Mascot';
import { Card, Screen, Txt } from '@/components/ui';
import { articlesIn, getTheme, levels } from '@/lib/study';
import { useScope } from '@/lib/useScope';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * The magazine index.
 *
 * Articles are listed easiest first and include the levels below the current
 * one, because reading below your level is how fluency gets built - unlike
 * answering questions below your level, which just wastes the session.
 */
export default function MagazineScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scope = useScope();
  const { progress } = useProgress();

  const articles = useMemo(() => articlesIn(scope), [scope]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + space.md,
          paddingHorizontal: space.lg,
          paddingBottom: space.xxxl,
          gap: space.md,
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
            {t('magazineTitle')}
          </Txt>
        </View>

        <Txt variant="small" tone="muted">
          {t('magazineSub')}
        </Txt>

        {articles.length === 0 ? (
          <MascotSays mood="thinking" size={84}>
            <Txt variant="bodyStrong">{t('noMaterialYet')}</Txt>
            <Txt variant="small" tone="muted">
              {t('noMaterialYetSub')}
            </Txt>
          </MascotSays>
        ) : (
          articles.map((article) => {
            const theme = getTheme(article.theme);
            const read = progress.articles[article.id];
            const color = levels.find((l) => l.key === article.level)?.color ?? colors.info;
            return (
              <Pressable
                key={article.id}
                onPress={() => router.push(`/article?id=${article.id}`)}
                accessibilityRole="button"
                accessibilityLabel={article.title[locale]}
              >
                <Card style={{ gap: space.sm }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
                    <View
                      style={{
                        backgroundColor: `${color}22`,
                        borderRadius: radius.sm,
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                      }}
                    >
                      <Txt variant="caption" style={{ color }}>
                        {article.level}
                      </Txt>
                    </View>
                    {theme ? (
                      <Txt variant="caption" tone="faint">
                        {theme.icon} {theme.label[locale].toUpperCase()}
                      </Txt>
                    ) : null}
                    <View style={{ flex: 1 }} />
                    <Txt variant="caption" tone="faint">
                      {article.minutes} {t('minutes')}
                    </Txt>
                    {read ? <Ionicons name="checkmark-circle" size={16} color={colors.success} /> : null}
                  </View>
                  <Txt variant="heading">{article.title[locale]}</Txt>
                  <Txt variant="small" tone="muted">
                    {article.teaser[locale]}
                  </Txt>
                  {read?.score != null ? (
                    <Txt variant="caption" tone="faint">
                      {t('lastScore')}: {read.score}%
                    </Txt>
                  ) : null}
                </Card>
              </Pressable>
            );
          })
        )}
      </ScrollView>
    </Screen>
  );
}
