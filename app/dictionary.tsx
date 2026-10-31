import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { GENDER_COLORS } from '@/components/Flashcard';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Meaning } from '@/components/Meaning';
import { Card, Chip, Screen, Txt } from '@/components/ui';
import { say } from '@/lib/speech';
import { getTheme, headword, levels, vocab } from '@/lib/study';
import type { Level, VocabEntry } from '@/lib/types';
import { useGloss } from '@/lib/useGloss';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Every word in the app, searchable.
 *
 * Deliberately not scoped to the current level. A dictionary you look things up
 * in is useless if it hides the word you just met because it is tagged above
 * you - that is exactly when you need it. The level is shown on the entry
 * instead, so you can see that the word is above your level and decide for
 * yourself.
 *
 * It works offline because it is the app's own corpus, not a service: no
 * request leaves the device, and nothing is logged about what you looked up.
 */
export default function DictionaryScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const { glossMatches } = useGloss();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { progress, toggleSaved } = useProgress();

  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [savedOnly, setSavedOnly] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = vocab.filter((v) => {
      if (level !== 'all' && v.level !== level) return false;
      if (savedOnly && !progress.saved[v.id]) return false;
      if (q.length === 0) return savedOnly || level !== 'all';
      return (
        v.de.toLowerCase().includes(q) ||
        v.en.toLowerCase().includes(q) ||
        glossMatches(v.id, q) ||
        v.example.de.toLowerCase().includes(q)
      );
    });
    // A word that starts with what you typed is almost always the one you
    // meant, so those come first rather than in alphabetical order.
    if (q.length === 0) return matches.slice(0, 200);
    return matches
      .sort((a, b) => rank(a, q) - rank(b, q) || a.de.localeCompare(b.de, 'de'))
      .slice(0, 200);
  }, [query, level, savedOnly, progress.saved, glossMatches]);

  const savedCount = Object.keys(progress.saved).length;

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
        keyboardShouldPersistTaps="handled"
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
            {t('dictionaryTitle')}
          </Txt>
        </View>

        <Txt variant="small" tone="muted">
          {t('dictionarySub')}
        </Txt>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: space.sm,
            backgroundColor: colors.surfaceAlt,
            borderRadius: radius.md,
            borderWidth: 1,
            borderColor: colors.border,
            paddingHorizontal: space.md,
          }}
        >
          <Ionicons name="search" size={18} color={colors.textFaint} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor={colors.textFaint}
            autoCorrect={false}
            accessibilityLabel={t('searchPlaceholder')}
            style={{ flex: 1, paddingVertical: space.md, color: colors.text, fontSize: 16 }}
          />
          {query.length > 0 ? (
            <Pressable onPress={() => setQuery('')} accessibilityRole="button" hitSlop={10}>
              <Ionicons name="close-circle" size={18} color={colors.textFaint} />
            </Pressable>
          ) : null}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: space.sm, paddingRight: space.lg }}>
            <Chip label={locale === 'de' ? 'Alle' : 'All'} active={level === 'all' && !savedOnly} onPress={() => { setLevel('all'); setSavedOnly(false); }} />
            {levels.map((l) => (
              <Chip
                key={l.key}
                label={l.key}
                active={level === l.key}
                onPress={() => { setLevel(level === l.key ? 'all' : l.key); setSavedOnly(false); }}
              />
            ))}
            <Chip
              label={`★ ${savedCount}`}
              active={savedOnly}
              onPress={() => { setSavedOnly(!savedOnly); setLevel('all'); }}
            />
          </View>
        </ScrollView>

        {results.length === 0 ? (
          <Txt variant="small" tone="muted" style={{ marginTop: space.lg, textAlign: 'center' }}>
            {query.trim().length === 0 && !savedOnly ? t('searchPlaceholder') : t('noResults')}
          </Txt>
        ) : (
          <>
            <Txt variant="caption" tone="faint">
              {results.length} {t('resultsCount')}
            </Txt>
            {results.map((entry) => (
              <Entry
                key={entry.id}
                entry={entry}
                saved={!!progress.saved[entry.id]}
                onSave={() => toggleSaved(entry.id)}
                slow={settings.slowAudio}
              />
            ))}
          </>
        )}
      </ScrollView>
    </Screen>
  );
}

/** Lower is a better match: prefix beats word-start beats anywhere. */
function rank(entry: VocabEntry, q: string): number {
  const de = entry.de.toLowerCase();
  const en = entry.en.toLowerCase();
  if (de === q || en === q) return 0;
  if (de.startsWith(q)) return 1;
  if (en.startsWith(q)) return 2;
  if (de.includes(q) || en.includes(q)) return 3;
  return 4;
}

function Entry({
  entry,
  saved,
  onSave,
  slow,
}: {
  entry: VocabEntry;
  saved: boolean;
  onSave: () => void;
  slow: boolean;
}) {
  const { colors, space, radius } = useTheme();
  const { locale } = useT();
  const theme = getTheme(entry.theme);
  const color = entry.article ? GENDER_COLORS[entry.article] : colors.textMuted;

  return (
    <Card style={{ gap: space.sm }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: space.sm }}>
        <View style={{ flex: 1, gap: 2 }}>
          <Txt variant="heading" style={{ color }}>
            {headword(entry)}
          </Txt>
          <Meaning entry={entry} />
        </View>
        <Pressable
          onPress={() => say(headword(entry), slow)}
          accessibilityRole="button"
          accessibilityLabel={`${entry.de} – audio`}
          hitSlop={10}
        >
          <Ionicons name="volume-medium-outline" size={22} color={colors.info} />
        </Pressable>
        <Pressable
          onPress={onSave}
          accessibilityRole="button"
          accessibilityState={{ selected: saved }}
          accessibilityLabel={`${entry.de} – save`}
          hitSlop={10}
        >
          <Ionicons name={saved ? 'star' : 'star-outline'} size={22} color={saved ? colors.xp : colors.textFaint} />
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
        <Tag text={entry.level} />
        <Tag text={POS_LABEL[entry.pos][locale]} />
        {entry.plural ? <Tag text={`Pl. ${entry.plural}`} /> : null}
        {entry.forms ? <Tag text={entry.forms} /> : null}
        {theme ? <Tag text={`${theme.icon} ${theme.label[locale]}`} /> : null}
      </View>

      <View style={{ backgroundColor: colors.surfaceAlt, borderRadius: radius.sm, padding: space.md, gap: 2 }}>
        <Txt variant="small">{entry.example.de}</Txt>
        <Txt variant="caption" tone="faint">
          {entry.example.en}
        </Txt>
      </View>
    </Card>
  );
}

function Tag({ text }: { text: string }) {
  const { colors, radius } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.surfaceAlt,
        borderRadius: radius.sm,
        paddingHorizontal: 8,
        paddingVertical: 3,
      }}
    >
      <Txt variant="caption" tone="faint">
        {text}
      </Txt>
    </View>
  );
}

const POS_LABEL: Record<VocabEntry['pos'], { de: string; en: string }> = {
  noun: { de: 'Nomen', en: 'noun' },
  verb: { de: 'Verb', en: 'verb' },
  adj: { de: 'Adjektiv', en: 'adjective' },
  adv: { de: 'Adverb', en: 'adverb' },
  phrase: { de: 'Wendung', en: 'phrase' },
  conj: { de: 'Konnektor', en: 'connector' },
  prep: { de: 'Präposition', en: 'preposition' },
};
