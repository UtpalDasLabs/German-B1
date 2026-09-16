import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MascotSays } from '@/components/Mascot';
import { Button, Card, Screen, Txt } from '@/components/ui';
import { percent } from '@/lib/stats';
import type { Bilingual, ModuleKey } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Marking your own Schreiben or Sprechen answer.
 *
 * Every row is worth the same, and the score is simply the fraction ticked.
 * That is cruder than a real examiner's band scale, and deliberately so: a
 * learner can apply "did I cover all three content points?" honestly, but not
 * "is this a band 3 or a band 4?". The rows are written so each one has a yes
 * or no answer you can check against your own text.
 */
export function SelfCheck({
  module,
  taskId,
  title,
  rows,
  color,
  onCancel,
  onSaved,
}: {
  module: ModuleKey;
  taskId: string;
  title: string;
  rows: Bilingual[];
  color: string;
  onCancel: () => void;
  onSaved: (score: number) => void;
}) {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const insets = useSafeAreaInsets();
  const [ticked, setTicked] = useState<boolean[]>(() => rows.map(() => false));

  const count = ticked.filter(Boolean).length;
  const score = percent(count, rows.length);
  const passed = score >= 60;

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + space.lg,
          paddingHorizontal: space.lg,
          paddingBottom: space.xl,
          gap: space.lg,
          maxWidth: 680,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Txt variant="title">{module === 'schreiben' ? t('selfCheck') : t('selfCheckSpeaking')}</Txt>
        <Txt variant="caption" tone="faint" accessibilityLabel={`${title} (${taskId})`}>
          {title}
        </Txt>

        <MascotSays mood="thinking" size={78}>
          <Txt variant="small" tone="muted">
            {t('selfCheckBody')}
          </Txt>
        </MascotSays>

        <View style={{ gap: space.sm }}>
          {rows.map((row, i) => {
            const on = ticked[i];
            return (
              <Pressable
                key={i}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: on }}
                accessibilityLabel={row[locale]}
                onPress={() => setTicked((list) => list.map((v, n) => (n === i ? !v : v)))}
                style={({ pressed }) => ({
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: space.md,
                  padding: space.md,
                  borderRadius: radius.md,
                  borderWidth: 2,
                  borderColor: on ? colors.success : colors.border,
                  backgroundColor: on ? colors.successBg : colors.surface,
                  opacity: pressed ? 0.85 : 1,
                })}
              >
                <Ionicons
                  name={on ? 'checkbox' : 'square-outline'}
                  size={22}
                  color={on ? colors.success : colors.textFaint}
                />
                <Txt variant="small" style={{ flex: 1 }}>
                  {row[locale]}
                </Txt>
              </Pressable>
            );
          })}
        </View>

        <Card level={2} style={{ alignItems: 'center', gap: space.xs, paddingVertical: space.lg, borderColor: color }}>
          <Txt variant="overline" tone="faint">
            {t('yourScore').toUpperCase()}
          </Txt>
          <Txt variant="display" style={{ color: passed ? colors.success : colors.danger }}>
            {score}%
          </Txt>
          <Txt variant="caption" tone="faint">
            {count}/{rows.length} · {t('passMark')}
          </Txt>
        </Card>
      </ScrollView>

      <View style={{ padding: space.lg, paddingBottom: insets.bottom + space.lg, gap: space.sm }}>
        <Button title={t('saveScore')} size="lg" full onPress={() => onSaved(score)} />
        <Button title={t('cancel')} variant="ghost" full onPress={onCancel} />
      </View>
    </Screen>
  );
}
