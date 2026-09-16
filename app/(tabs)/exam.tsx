import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Linking, Platform, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Illustration } from '@/components/Illustration';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Button, Card, Chip, Divider, Screen, Txt } from '@/components/ui';
import { OFFICIAL, PROVIDERS, PROVIDERS_BY_KEY, totalMinutes } from '@/lib/official';
import { meta } from '@/lib/study';
import { MODULE_KEYS, type ExamProvider } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

export default function ExamIntroScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings, update } = useSettings();
  const { progress } = useProgress();

  const provider = PROVIDERS_BY_KEY[settings.provider];

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
          maxWidth: 720,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Txt variant="display">{t('examTitle')}</Txt>

        <Card level={2} style={{ alignItems: 'center', gap: space.md, paddingVertical: space.xl }}>
          <Illustration name="official" color={colors.accent} size={104} />
          <Txt variant="body" tone="muted" style={{ textAlign: 'center' }}>
            {t('examIntro')}
          </Txt>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.lg, justifyContent: 'center' }}>
            {MODULE_KEYS.map((m) => (
              <Fact key={m} value={String(provider.minutes[m])} label={meta.areas[m].label[locale]} />
            ))}
          </View>
          <Txt variant="caption" tone="faint">
            {totalMinutes(provider)} {t('minutes')} · {t('passMark')}
          </Txt>
        </Card>

        <Button
          title={t('startExam')}
          size="lg"
          full
          icon={<Ionicons name="play" size={18} color={colors.onAccent} />}
          onPress={() => router.push('/exam-session')}
        />

        {/* Which certificate you are sitting */}
        <Card style={{ gap: space.md }}>
          <Txt variant="heading">{t('provider')}</Txt>
          <Txt variant="small" tone="muted">
            {t('providerSub')}
          </Txt>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }}>
            {PROVIDERS.map((p) => (
              <Chip
                key={p.key}
                label={p.name}
                active={settings.provider === p.key}
                onPress={() => update({ provider: p.key as ExamProvider })}
              />
            ))}
          </View>

          <Divider />

          <Txt variant="bodyStrong">{provider.full[locale]}</Txt>
          <Txt variant="small" tone="muted">
            {provider.who[locale]}
          </Txt>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }}>
            <Pill text={`${t('passLabel')}: ${provider.passPercent}%`} />
            <Pill text={`${t('costLabel')}: ${provider.costEur}`} />
            <Pill text={`${t('modularLabel')}: ${provider.modular ? t('yes') : t('no')}`} />
          </View>

          <Txt variant="overline" tone="faint">
            {t('formatNotes').toUpperCase()}
          </Txt>
          {provider.notes.map((note, i) => (
            <View key={i} style={{ flexDirection: 'row', gap: space.sm, alignItems: 'flex-start' }}>
              <Ionicons name="ellipse" size={7} color={colors.textFaint} style={{ marginTop: 8 }} />
              <Txt variant="small" tone="muted" style={{ flex: 1 }}>
                {note[locale]}
              </Txt>
            </View>
          ))}

          <Divider />
          <Txt variant="overline" tone="faint">
            {t('officialLinks').toUpperCase()}
          </Txt>
          <Link label={provider.name} url={provider.url} />
          <Link
            label={locale === 'de' ? 'Kostenlose Modellsätze' : 'Free sample papers'}
            url={settings.provider === 'goethe' ? OFFICIAL.goetheSample : OFFICIAL.telcSample}
          />
          <Link
            label={locale === 'de' ? 'Offizielle B1-Wortliste' : 'Official B1 word list'}
            url={OFFICIAL.wordlist}
          />
        </Card>

        {/* attempts */}
        <Card style={{ gap: space.md }}>
          <Txt variant="heading">{t('examHistory')}</Txt>
          {progress.exams.length === 0 ? (
            <Txt variant="small" tone="muted">
              {t('noExamsYet')}
            </Txt>
          ) : (
            progress.exams.slice(0, 8).map((e, i) => (
              <View key={e.at} style={{ gap: space.md }}>
                {i > 0 ? <Divider /> : null}
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
                  <View
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 10,
                      borderRadius: radius.pill,
                      backgroundColor: e.passed ? colors.successBg : colors.dangerBg,
                    }}
                  >
                    <Txt variant="caption" tone={e.passed ? 'success' : 'danger'}>
                      {e.passed ? t('passed') : t('failed')}
                    </Txt>
                  </View>
                  <Txt variant="small" style={{ flex: 1 }}>
                    {MODULE_KEYS.filter((m) => e.scores[m] != null)
                      .map((m) => `${meta.areas[m].label[locale].slice(0, 1)} ${e.scores[m]}%`)
                      .join(' · ')}
                  </Txt>
                  <Txt variant="caption" tone="faint">
                    {new Date(e.at).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-GB')}
                  </Txt>
                </View>
              </View>
            ))
          )}
        </Card>
      </ScrollView>
    </Screen>
  );
}

function Fact({ value, label }: { value: string; label: string }) {
  const { space } = useTheme();
  return (
    <View style={{ alignItems: 'center', minWidth: 64, gap: space.xs / 2 }}>
      <Txt variant="title">{value}</Txt>
      <Txt variant="caption" tone="muted">
        {label}
      </Txt>
    </View>
  );
}

function Pill({ text }: { text: string }) {
  const { colors, radius, space } = useTheme();
  return (
    <View
      style={{
        paddingVertical: 6,
        paddingHorizontal: space.md,
        borderRadius: radius.pill,
        backgroundColor: colors.surfaceAlt,
      }}
    >
      <Txt variant="caption" tone="muted">
        {text}
      </Txt>
    </View>
  );
}

function Link({ label, url }: { label: string; url: string }) {
  const { colors, space } = useTheme();
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={label}
      onPress={() => {
        if (Platform.OS === 'web') {
          if (typeof window !== 'undefined') window.open(url, '_blank', 'noopener,noreferrer');
          return;
        }
        void Linking.openURL(url);
      }}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: space.sm,
        paddingVertical: space.sm,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Ionicons name="open-outline" size={18} color={colors.info} />
      <Txt variant="small" style={{ color: colors.info, flex: 1 }}>
        {label}
      </Txt>
    </Pressable>
  );
}
