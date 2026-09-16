import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { interpolate, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';

import { Txt } from '@/components/ui';
import { getTheme, headword } from '@/lib/study';
import type { Language, VocabEntry } from '@/lib/types';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Gender colours.
 *
 * Learners who colour-code der/die/das remember genders noticeably better than
 * learners who do not, and the habit costs nothing. The three hues are the flag
 * hues so they sit inside the app's palette rather than next to it.
 */
export const GENDER_COLORS: Record<string, string> = {
  der: '#2BB3F3',
  die: '#FF4B4B',
  das: '#4CC93F',
};

const POS_LABEL: Record<string, { de: string; en: string }> = {
  noun: { de: 'Nomen', en: 'noun' },
  verb: { de: 'Verb', en: 'verb' },
  adj: { de: 'Adjektiv', en: 'adjective' },
  adv: { de: 'Adverb', en: 'adverb' },
  phrase: { de: 'Wendung', en: 'phrase' },
  conj: { de: 'Konnektor', en: 'connector' },
  prep: { de: 'Präposition', en: 'preposition' },
};

/**
 * A two-sided vocabulary card. The front shows the German word; the back gives
 * the meaning, the forms that have to be learned with it, and a sentence that
 * puts it somewhere real. Flipping is a 3D Y-rotation with each face hidden
 * past 90 degrees so they never bleed through one another.
 */
export function Flashcard({
  entry,
  flipped,
  language,
  labels,
  onSpeak,
}: {
  entry: VocabEntry;
  flipped: boolean;
  language: Language;
  labels: { tapToFlip: string; answer: string; example: string; playWord: string };
  onSpeak?: (text: string) => void;
}) {
  const { colors, radius, space } = useTheme();
  const theme = getTheme(entry.theme);
  const tint = entry.article ? GENDER_COLORS[entry.article] : (theme?.color ?? colors.accent);
  const locale = language === 'de' ? 'de' : 'en';

  const spin = useDerivedValue(() => withTiming(flipped ? 1 : 0, { duration: 380 }), [flipped]);

  const frontStyle = useAnimatedStyle(() => ({
    transform: [{ perspective: 1200 }, { rotateY: `${interpolate(spin.value, [0, 1], [0, 180])}deg` }],
    opacity: spin.value < 0.5 ? 1 : 0,
  }));
  const backStyle = useAnimatedStyle(() => ({
    transform: [{ perspective: 1200 }, { rotateY: `${interpolate(spin.value, [0, 1], [180, 360])}deg` }],
    opacity: spin.value >= 0.5 ? 1 : 0,
  }));

  const face = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    borderWidth: 3,
    borderColor: colors.border,
    padding: space.lg,
    overflow: 'hidden' as const,
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[face, frontStyle]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
          <Badge label={theme?.label[locale] ?? ''} color={theme?.color ?? colors.accent} icon={theme?.icon ?? ''} />
          <View style={{ flex: 1 }} />
          {onSpeak ? <SpeakButton label={labels.playWord} onPress={() => onSpeak(headword(entry))} /> : null}
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', gap: space.md, paddingVertical: space.md }}
          showsVerticalScrollIndicator={false}
        >
          {entry.article ? (
            <Txt variant="title" style={{ textAlign: 'center', color: tint }}>
              {entry.article}
            </Txt>
          ) : null}
          <Txt variant="display" style={{ textAlign: 'center' }}>
            {entry.de}
          </Txt>
          <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
            {(POS_LABEL[entry.pos] ?? POS_LABEL.phrase)[locale].toUpperCase()}
          </Txt>
        </ScrollView>

        <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
          {labels.tapToFlip}
        </Txt>
      </Animated.View>

      <Animated.View style={[face, backStyle, { backgroundColor: colors.bgElevated }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
          <Badge label={labels.answer} color={colors.success} icon="✅" />
          <View style={{ flex: 1 }} />
          {onSpeak ? <SpeakButton label={labels.playWord} onPress={() => onSpeak(entry.example.de)} /> : null}
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', gap: space.md, paddingVertical: space.md }}
          showsVerticalScrollIndicator={false}
        >
          {/* The word again, small. Without it there is no way to check what
              you were actually recalling once the card has turned. */}
          <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
            {headword(entry)}
          </Txt>
          <Txt variant="title" style={{ textAlign: 'center', color: colors.success }}>
            {entry.en}
          </Txt>

          {entry.plural || entry.forms ? (
            <View
              style={{
                alignSelf: 'center',
                paddingVertical: 6,
                paddingHorizontal: space.md,
                borderRadius: radius.pill,
                backgroundColor: colors.surfaceAlt,
              }}
            >
              <Txt variant="caption" tone="muted">
                {entry.plural ? `Plural: ${entry.plural}` : entry.forms}
              </Txt>
            </View>
          ) : null}

          <View style={{ backgroundColor: colors.infoBg, borderRadius: radius.md, padding: space.md, gap: space.xs }}>
            <Txt variant="overline" style={{ color: colors.info }}>
              {labels.example.toUpperCase()}
            </Txt>
            <Txt variant="bodyStrong">{entry.example.de}</Txt>
            {language !== 'de' ? (
              <Txt variant="small" tone="muted">
                {entry.example.en}
              </Txt>
            ) : null}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}

function SpeakButton({ label, onPress }: { label: string; onPress: () => void }) {
  const { colors, radius } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={10}
      style={({ pressed }) => ({
        width: 38,
        height: 38,
        borderRadius: radius.pill,
        backgroundColor: colors.surfaceAlt,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Ionicons name="volume-high" size={20} color={colors.textMuted} />
    </Pressable>
  );
}

function Badge({ label, color, icon }: { label: string; color: string; icon: string }) {
  const { radius, space } = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        gap: space.xs,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: radius.pill,
        backgroundColor: `${color}22`,
      }}
    >
      <Txt variant="caption">{icon}</Txt>
      <Txt variant="caption" style={{ color }}>
        {label}
      </Txt>
    </View>
  );
}
