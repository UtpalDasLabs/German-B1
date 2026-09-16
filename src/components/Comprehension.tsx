import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnswerOption, type OptionState } from '@/components/AnswerOption';
import { Mascot } from '@/components/Mascot';
import { TaskHeader } from '@/components/TaskHeader';
import { Button, Card, Divider, Screen, Txt } from '@/components/ui';
import { makeHaptics } from '@/lib/haptics';
import { percent } from '@/lib/stats';
import type { Item, ModuleKey } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * The answering, scoring and reviewing half of Lesen and Hören.
 *
 * Both modules ask the same thing of the learner - read or hear something, then
 * pick from a short list - so they share this runner. What differs is what sits
 * above the questions, which the caller passes in as `children`.
 */
export function Comprehension({
  module,
  taskId,
  title,
  instructions,
  items,
  minutes,
  color,
  children,
  onClose,
  onFinished,
}: {
  module: ModuleKey;
  taskId: string;
  title: string;
  instructions: string;
  items: Item[];
  minutes: number;
  color: string;
  children?: React.ReactNode;
  onClose: () => void;
  /** Called once the attempt has been scored and recorded. */
  onFinished?: (score: number) => void;
}) {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const insets = useSafeAreaInsets();
  const { settings } = useSettings();
  const { recordAttempt } = useProgress();

  const haptics = useMemo(() => makeHaptics(settings.haptics), [settings.haptics]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reviewing, setReviewing] = useState(false);

  const correct = items.filter((item) => answers[item.id] === item.answer).length;
  const score = percent(correct, items.length);
  const answered = Object.keys(answers).length;

  const submit = useCallback(() => {
    if (submitted) return;
    const got = items.filter((item) => answers[item.id] === item.answer).length;
    const pct = percent(got, items.length);
    pct >= 60 ? haptics.success() : haptics.error();
    recordAttempt({ at: Date.now(), module, score: pct, selfAssessed: false, taskId });
    setSubmitted(true);
    onFinished?.(pct);
  }, [submitted, items, answers, haptics, recordAttempt, module, taskId, onFinished]);

  if (submitted && !reviewing) {
    const passed = score >= 60;
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center', padding: space.xl, gap: space.md }}>
        <Mascot mood={passed ? 'celebrate' : 'sad'} size={150} />
        <Txt variant="title" tone={passed ? 'success' : 'danger'}>
          {passed ? t('passed') : t('failed')}
        </Txt>
        <Txt variant="small" tone="muted">
          {t('yourScore')}
        </Txt>
        <Txt variant="display">{score}%</Txt>
        <Txt variant="caption" tone="faint">
          {correct}/{items.length} {t('correctAnswers')} · {t('passMark')}
        </Txt>
        <View style={{ gap: space.sm, marginTop: space.lg, alignSelf: 'stretch', maxWidth: 340 }}>
          <Button title={t('reviewAnswers')} size="lg" full onPress={() => setReviewing(true)} />
          <Button title={t('backHome')} variant="ghost" full onPress={onClose} />
        </View>
      </Screen>
    );
  }

  function stateFor(item: Item, i: number): OptionState {
    if (!reviewing) return answers[item.id] === i ? 'selected' : 'idle';
    if (i === item.answer) return 'correct';
    if (i === answers[item.id]) return 'wrong';
    return 'muted';
  }

  return (
    <Screen>
      <TaskHeader
        title={title}
        onClose={reviewing ? () => setReviewing(false) : onClose}
        closeLabel={t('backHome')}
        remaining={null}
        progress={reviewing ? 1 : answered / items.length}
        color={color}
      />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: space.lg,
          paddingBottom: space.xl,
          gap: space.lg,
          maxWidth: 720,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Card style={{ gap: space.xs }}>
          <Txt variant="overline" style={{ color }}>
            {t('situation').toUpperCase()}
          </Txt>
          <Txt variant="small" tone="muted">
            {instructions}
          </Txt>
          <Txt variant="caption" tone="faint">
            {items.length} {t('questions').toLowerCase()} · ~{minutes} {t('minutes')}
          </Txt>
        </Card>

        {children}

        {reviewing ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: space.sm,
              backgroundColor: score >= 60 ? colors.successBg : colors.dangerBg,
              borderRadius: radius.md,
              padding: space.md,
            }}
          >
            <Ionicons
              name={score >= 60 ? 'checkmark-circle' : 'alert-circle'}
              size={20}
              color={score >= 60 ? colors.success : colors.danger}
            />
            <Txt variant="small" style={{ color: score >= 60 ? colors.success : colors.danger, flex: 1 }}>
              {correct}/{items.length} {t('correctAnswers')} — {score}%
            </Txt>
          </View>
        ) : null}

        {items.map((item, n) => (
          <View key={item.id} style={{ gap: space.sm }}>
            {n > 0 ? <Divider /> : null}
            <Txt variant="bodyStrong">
              {n + 1}. {item.prompt}
            </Txt>
            {item.promptEn && locale === 'en' ? (
              <Txt variant="small" tone="muted">
                {item.promptEn}
              </Txt>
            ) : null}

            {item.options.map((option, i) => (
              <AnswerOption
                key={option}
                index={i}
                label={option}
                state={stateFor(item, i)}
                onPress={
                  reviewing
                    ? undefined
                    : () => {
                        haptics.tap();
                        setAnswers((a) => ({ ...a, [item.id]: i }));
                      }
                }
              />
            ))}

            {reviewing ? (
              <View style={{ backgroundColor: colors.infoBg, borderRadius: radius.md, padding: space.md, gap: 2 }}>
                <Txt variant="overline" style={{ color: colors.info }}>
                  {t('whyLabel').toUpperCase()}
                </Txt>
                <Txt variant="small" tone="muted">
                  {item.why[locale]}
                </Txt>
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>

      {!reviewing ? (
        <View style={{ padding: space.lg, paddingBottom: insets.bottom + space.lg, gap: space.xs }}>
          <Button
            title={t('submitAnswers')}
            size="lg"
            full
            variant="success"
            disabled={answered === 0}
            onPress={submit}
          />
          <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
            {answered}/{items.length}
          </Txt>
        </View>
      ) : (
        <View style={{ padding: space.lg, paddingBottom: insets.bottom + space.lg }}>
          <Button title={t('backHome')} size="lg" full onPress={onClose} />
        </View>
      )}
    </Screen>
  );
}
