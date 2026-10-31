import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';
import { Modal, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnswerOption, type OptionState } from '@/components/AnswerOption';
import { GENDER_COLORS } from '@/components/Flashcard';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { Meaning } from '@/components/Meaning';
import { Button, Card, Divider, Screen, Txt } from '@/components/ui';
import { makeHaptics } from '@/lib/haptics';
import { say, stopSpeaking } from '@/lib/speech';
import { articleById, getGrammar, getVocab, headword, levels } from '@/lib/study';
import type { Token } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * One article, read with the dictionary and the grammar inside it.
 *
 * The whole point is that you never leave the sentence. A highlighted word
 * opens its entry over the text and closes again; an underlined phrase opens
 * the grammar topic the same way. The alternative - navigating away to look a
 * word up and navigating back - is what makes learners stop reading German and
 * start reading translations.
 *
 * The comprehension questions come after the text, never before. Reading the
 * questions first turns the article into a search task, which trains a
 * different and much less useful skill.
 */
export default function ArticleScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { progress, recordArticle, toggleSaved } = useProgress();
  const params = useLocalSearchParams<{ id?: string }>();

  const article = params.id ? articleById(params.id) : undefined;
  const haptics = useMemo(() => makeHaptics(settings.haptics), [settings.haptics]);

  const [lookup, setLookup] = useState<{ kind: 'word' | 'grammar'; key: string } | null>(null);
  const [quiz, setQuiz] = useState(false);
  const [picked, setPicked] = useState<Record<string, number>>({});
  const [marked, setMarked] = useState(false);

  const score = useMemo(() => {
    if (!article) return 0;
    const right = article.items.filter((item) => picked[item.id] === item.answer).length;
    return Math.round((right / article.items.length) * 100);
  }, [article, picked]);

  const mark = useCallback(() => {
    if (!article) return;
    const right = article.items.filter((item) => picked[item.id] === item.answer).length;
    const pct = Math.round((right / article.items.length) * 100);
    pct >= 60 ? haptics.success() : haptics.error();
    recordArticle(article.id, pct);
    setMarked(true);
  }, [article, picked, recordArticle, haptics]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  if (!article) {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md }}>
        <Txt variant="title">{t('noResults')}</Txt>
        <Button title={t('backHome')} onPress={() => router.back()} />
      </Screen>
    );
  }

  const levelColor = levels.find((l) => l.key === article.level)?.color ?? colors.info;
  const answeredAll = article.items.every((item) => picked[item.id] != null);

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
            onPress={() => {
              stopSpeaking();
              router.back();
            }}
            accessibilityRole="button"
            accessibilityLabel={t('backHome')}
            hitSlop={12}
          >
            <Ionicons name="chevron-back" size={28} color={colors.textFaint} />
          </Pressable>
          <Txt variant="caption" style={{ color: levelColor, flex: 1 }}>
            {article.level} · {article.minutes} {t('minutes')}
          </Txt>
          <Pressable
            onPress={() => say(article.spoken.join(' '), settings.slowAudio)}
            accessibilityRole="button"
            accessibilityLabel={t('listenWhileReading')}
            hitSlop={12}
          >
            <Ionicons name="volume-medium" size={24} color={colors.info} />
          </Pressable>
          <Pressable onPress={stopSpeaking} accessibilityRole="button" accessibilityLabel={t('stopAudio')} hitSlop={12}>
            <Ionicons name="stop" size={22} color={colors.textFaint} />
          </Pressable>
        </View>

        <Txt variant="display">{article.title[locale]}</Txt>
        <Txt variant="small" tone="muted">
          {article.teaser[locale]}
        </Txt>
        <Txt variant="caption" tone="faint">
          {t('tapWordHint')}
        </Txt>

        {article.paragraphs.map((tokens, i) => (
          <Paragraph key={i} tokens={tokens} onOpen={setLookup} />
        ))}

        <Divider />

        {!quiz ? (
          <Button
            title={t('articleQuiz')}
            size="lg"
            full
            icon={<Ionicons name="help-circle-outline" size={18} color="#FFFFFF" />}
            onPress={() => {
              stopSpeaking();
              setQuiz(true);
            }}
          />
        ) : (
          <View style={{ gap: space.lg }}>
            <Txt variant="heading">{t('articleQuiz')}</Txt>
            {article.items.map((item, n) => (
              <Card key={item.id} style={{ gap: space.sm }}>
                <Txt variant="bodyStrong">
                  {n + 1}. {item.prompt}
                </Txt>
                {item.promptEn && locale !== 'de' ? (
                  <Txt variant="caption" tone="faint">
                    {item.promptEn}
                  </Txt>
                ) : null}
                {item.options.map((option, i) => {
                  let state: OptionState = picked[item.id] === i ? 'selected' : 'idle';
                  if (marked) {
                    if (i === item.answer) state = 'correct';
                    else if (i === picked[item.id]) state = 'wrong';
                    else state = 'muted';
                  }
                  return (
                    <AnswerOption
                      key={`${item.id}.${i}`}
                      index={i}
                      label={option}
                      state={state}
                      onPress={
                        marked ? undefined : () => setPicked((p) => ({ ...p, [item.id]: i }))
                      }
                    />
                  );
                })}
                {marked ? (
                  <View style={{ backgroundColor: colors.infoBg, borderRadius: radius.sm, padding: space.md }}>
                    <Txt variant="small" style={{ color: colors.info }}>
                      {item.why[locale]}
                    </Txt>
                  </View>
                ) : null}
              </Card>
            ))}

            {marked ? (
              <>
                <Txt variant="display" tone={score >= 60 ? 'success' : 'danger'} style={{ textAlign: 'center' }}>
                  {score}%
                </Txt>
                <Button title={t('backHome')} size="lg" full onPress={() => router.back()} />
              </>
            ) : (
              <Button
                title={t('checkAnswer')}
                size="lg"
                full
                disabled={!answeredAll}
                onPress={mark}
              />
            )}
          </View>
        )}
      </ScrollView>

      {/* Lookup sits over the text rather than replacing it, so the sentence
          you were reading is still there when you close it. */}
      <Modal visible={lookup != null} animationType="slide" transparent onRequestClose={() => setLookup(null)}>
        <Pressable
          onPress={() => setLookup(null)}
          style={{ flex: 1, backgroundColor: '#00000066', justifyContent: 'flex-end' }}
        >
          <Pressable
            onPress={(e) => e.stopPropagation()}
            style={{
              backgroundColor: colors.bg,
              borderTopLeftRadius: radius.lg,
              borderTopRightRadius: radius.lg,
              padding: space.lg,
              paddingBottom: insets.bottom + space.lg,
              gap: space.md,
            }}
          >
            {lookup?.kind === 'word' ? (
              <WordSheet
                id={lookup.key}
                saved={!!progress.saved[lookup.key]}
                onSave={() => toggleSaved(lookup.key)}
                slow={settings.slowAudio}
              />
            ) : lookup ? (
              <GrammarSheet
                topicKey={lookup.key}
                onOpen={() => {
                  setLookup(null);
                  router.push(`/grammar?topic=${lookup.key}`);
                }}
              />
            ) : null}
            <Button title={t('close')} variant="secondary" full onPress={() => setLookup(null)} />
          </Pressable>
        </Pressable>
      </Modal>
    </Screen>
  );
}

/**
 * One paragraph.
 *
 * Tokens are rendered as nested Text so the line still wraps as prose. A
 * tappable word inside a View would break onto its own line and the article
 * would stop reading like an article.
 */
function Paragraph({
  tokens,
  onOpen,
}: {
  tokens: Token[];
  onOpen: (l: { kind: 'word' | 'grammar'; key: string }) => void;
}) {
  const { colors } = useTheme();
  return (
    <Txt variant="body" style={{ lineHeight: 28 }}>
      {tokens.map((token, i) => {
        if (token.t === 'text') return token.s;
        if (token.t === 'word') {
          return (
            <Txt
              key={i}
              variant="body"
              onPress={() => onOpen({ kind: 'word', key: token.id })}
              accessibilityRole="button"
              style={{
                color: colors.info,
                textDecorationLine: 'underline',
                textDecorationStyle: 'dotted',
              }}
            >
              {token.s}
            </Txt>
          );
        }
        return (
          <Txt
            key={i}
            variant="body"
            onPress={() => onOpen({ kind: 'grammar', key: token.key })}
            accessibilityRole="button"
            style={{ textDecorationLine: 'underline', textDecorationColor: colors.success }}
          >
            {token.s}
          </Txt>
        );
      })}
    </Txt>
  );
}

function WordSheet({
  id,
  saved,
  onSave,
  slow,
}: {
  id: string;
  saved: boolean;
  onSave: () => void;
  slow: boolean;
}) {
  const { colors, space, radius } = useTheme();
  const { t } = useT();
  const entry = getVocab(id);
  if (!entry) return <Txt variant="body">{t('noResults')}</Txt>;

  const color = entry.article ? GENDER_COLORS[entry.article] : colors.text;
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
        <Txt variant="title" style={{ color, flex: 1 }}>
          {headword(entry)}
        </Txt>
        <Pressable onPress={() => say(headword(entry), slow)} accessibilityRole="button" hitSlop={10}>
          <Ionicons name="volume-medium-outline" size={24} color={colors.info} />
        </Pressable>
        <Pressable onPress={onSave} accessibilityRole="button" accessibilityState={{ selected: saved }} hitSlop={10}>
          <Ionicons name={saved ? 'star' : 'star-outline'} size={24} color={saved ? colors.xp : colors.textFaint} />
        </Pressable>
      </View>
      <Meaning entry={entry} />
      <Txt variant="caption" tone="faint">
        {entry.level}
        {entry.plural ? ` · Pl. ${entry.plural}` : ''}
        {entry.forms ? ` · ${entry.forms}` : ''}
      </Txt>
      <View style={{ backgroundColor: colors.surfaceAlt, borderRadius: radius.sm, padding: space.md, gap: 2 }}>
        <Txt variant="small">{entry.example.de}</Txt>
        <Txt variant="caption" tone="faint">
          {entry.example.en}
        </Txt>
      </View>
    </>
  );
}

function GrammarSheet({ topicKey, onOpen }: { topicKey: string; onOpen: () => void }) {
  const { space } = useTheme();
  const { t, locale } = useT();
  const topic = getGrammar(topicKey);
  if (!topic) return <Txt variant="body">{t('noResults')}</Txt>;

  return (
    <>
      <Txt variant="title">
        {topic.icon} {topic.title[locale]}
      </Txt>
      <Txt variant="small" tone="muted">
        {topic.summary[locale]}
      </Txt>
      {topic.examples.slice(0, 2).map((ex, i) => (
        <View key={i} style={{ gap: 2, marginTop: i === 0 ? space.sm : 0 }}>
          <Txt variant="small">{ex.de}</Txt>
          <Txt variant="caption" tone="faint">
            {ex.en}
          </Txt>
        </View>
      ))}
      <Button title={t('openGrammar')} full onPress={onOpen} />
    </>
  );
}
