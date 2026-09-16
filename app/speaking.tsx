import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { MascotSays } from '@/components/Mascot';
import { SelfCheck } from '@/components/SelfCheck';
import { TaskHeader } from '@/components/TaskHeader';
import { TaskPicker } from '@/components/TaskPicker';
import { Button, Card, Screen, Txt } from '@/components/ui';
import { meta, speakingById, tasksFor } from '@/lib/study';
import { useCountdown } from '@/lib/useCountdown';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useTheme } from '@/theme/ThemeProvider';

type Phase = 'brief' | 'prep' | 'speak' | 'mark';

/**
 * Sprechen. Prepare against the clock, speak against the clock, then mark
 * yourself against the criteria.
 *
 * The exam is taken in pairs and this app is one person, so it does the half
 * that is actually hard alone: the timing, the structure, the phrases, and a
 * model answer to compare against once you have spoken. The app deliberately
 * does not record you - a recording is a thing to avoid listening to, and the
 * value here is in speaking out loud, not in the file.
 */
export default function SpeakingScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { recordAttempt } = useProgress();
  const params = useLocalSearchParams<{ task?: string }>();

  const [taskId, setTaskId] = useState<string | null>(params.task ?? null);
  const [phase, setPhase] = useState<Phase>('brief');
  const [notes, setNotes] = useState('');
  const [showModel, setShowModel] = useState(false);

  const task = taskId ? speakingById(taskId) : null;
  const seconds = phase === 'prep' ? (task?.prepMinutes ?? 0) * 60 : Math.round((task?.minutes ?? 3) * 60);
  const { remaining } = useCountdown(seconds, phase === 'prep' || phase === 'speak', () => {
    setPhase((p) => (p === 'prep' ? 'speak' : p));
  });

  const open = useCallback((id: string) => {
    setNotes('');
    setShowModel(false);
    setPhase('brief');
    setTaskId(id);
  }, []);

  const close = useCallback(() => {
    if (params.task) router.back();
    else setTaskId(null);
  }, [params.task, router]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  if (!task) {
    return <TaskPicker module="sprechen" tasks={tasksFor('sprechen')} onPick={open} />;
  }

  const color = meta.areas.sprechen.color;

  if (phase === 'mark') {
    return (
      <SelfCheck
        module="sprechen"
        taskId={task.id}
        title={task.title[locale]}
        rows={task.checklist}
        color={color}
        onCancel={() => setPhase('speak')}
        onSaved={(score) => {
          recordAttempt({ at: Date.now(), module: 'sprechen', score, selfAssessed: true, taskId: task.id });
          close();
        }}
      />
    );
  }

  return (
    <Screen>
      <TaskHeader
        title={task.title[locale]}
        onClose={close}
        closeLabel={t('backHome')}
        remaining={phase === 'brief' ? null : remaining}
        progress={null}
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
        keyboardShouldPersistTaps="handled"
      >
        <Card level={2} style={{ gap: space.sm }}>
          <Txt variant="overline" style={{ color }}>
            {t('situation').toUpperCase()}
          </Txt>
          <Txt variant="prose">{task.situation}</Txt>
          {locale === 'en' ? (
            <Txt variant="small" tone="muted">
              {task.situationEn}
            </Txt>
          ) : null}
          <Txt variant="caption" tone="faint">
            {task.prepMinutes > 0 ? `${task.prepMinutes} ${t('minutes')} ${t('prepare').toLowerCase()} · ` : ''}
            {task.minutes} {t('minutes')}
          </Txt>
        </Card>

        <Card style={{ gap: space.sm }}>
          <Txt variant="overline" tone="faint">
            {t('leitpunkte').toUpperCase()}
          </Txt>
          {task.bullets.map((bullet, i) => (
            <View key={i} style={{ flexDirection: 'row', gap: space.sm, alignItems: 'flex-start' }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: color,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Txt variant="caption" style={{ color: '#FFFFFF' }}>
                  {i + 1}
                </Txt>
              </View>
              <Txt variant="small" style={{ flex: 1 }}>
                {bullet}
              </Txt>
            </View>
          ))}
        </Card>

        {phase === 'speak' ? (
          <MascotSays mood="happy" size={80}>
            <Txt variant="bodyStrong">{t('speakNow')}</Txt>
            <Txt variant="small" tone="muted">
              {t('recordNote')}
            </Txt>
          </MascotSays>
        ) : null}

        <View style={{ gap: space.sm }}>
          <Txt variant="overline" tone="faint">
            {t('yourNotes').toUpperCase()}
          </Txt>
          {phase === 'prep' || phase === 'brief' ? (
            <Txt variant="small" tone="muted">
              {t('prepareBody')}
            </Txt>
          ) : null}
          <TextInput
            value={notes}
            onChangeText={setNotes}
            multiline
            textAlignVertical="top"
            placeholder={t('yourNotes')}
            placeholderTextColor={colors.textFaint}
            accessibilityLabel={t('yourNotes')}
            style={{
              minHeight: 150,
              backgroundColor: colors.surface,
              borderWidth: 2,
              borderColor: colors.border,
              borderRadius: radius.lg,
              padding: space.lg,
              color: colors.text,
              fontSize: 16,
              lineHeight: 26,
            }}
          />
        </View>

        <Card style={{ gap: space.md }}>
          <Txt variant="overline" style={{ color }}>
            {t('phraseBank').toUpperCase()}
          </Txt>
          {task.phrases.map((group, i) => (
            <View key={i} style={{ gap: space.xs }}>
              <Txt variant="caption" tone="muted">
                {group.label[locale]}
              </Txt>
              {group.items.map((phrase) => (
                <View
                  key={phrase}
                  style={{
                    backgroundColor: colors.surfaceAlt,
                    borderRadius: radius.sm,
                    paddingVertical: 8,
                    paddingHorizontal: space.md,
                  }}
                >
                  <Txt variant="small">{phrase}</Txt>
                </View>
              ))}
            </View>
          ))}
        </Card>

        {/* The model is hidden until after speaking: reading it first turns
            this into a recitation exercise. */}
        {phase === 'speak' ? (
          <>
            <Pressable
              accessibilityRole="button"
              onPress={() => setShowModel((s) => !s)}
              style={({ pressed }) => ({
                flexDirection: 'row',
                alignItems: 'center',
                gap: space.sm,
                paddingVertical: space.sm,
                opacity: pressed ? 0.7 : 1,
              })}
            >
              <Ionicons name={showModel ? 'eye-off-outline' : 'eye-outline'} size={18} color={colors.textMuted} />
              <Txt variant="small" tone="muted" style={{ flex: 1 }}>
                {showModel ? t('hideModel') : t('partnerTurns')}
              </Txt>
            </Pressable>

            {showModel ? (
              <Card style={{ gap: space.sm, borderColor: color }}>
                <Txt variant="overline" style={{ color }}>
                  {t('modelAnswer').toUpperCase()}
                </Txt>
                <Txt variant="prose">{task.model}</Txt>
                <Txt variant="caption" tone="faint">
                  {t('modelNote')}
                </Txt>
              </Card>
            ) : null}
          </>
        ) : null}
      </ScrollView>

      <View style={{ padding: space.lg, paddingBottom: insets.bottom + space.lg }}>
        {phase === 'brief' ? (
          <Button
            title={task.prepMinutes > 0 ? t('prepare') : t('startSpeaking')}
            size="lg"
            full
            icon={<Ionicons name="timer-outline" size={18} color={colors.onAccent} />}
            onPress={() => setPhase(task.prepMinutes > 0 ? 'prep' : 'speak')}
          />
        ) : phase === 'prep' ? (
          <Button
            title={t('startSpeaking')}
            size="lg"
            full
            icon={<Ionicons name="mic-outline" size={18} color={colors.onAccent} />}
            onPress={() => setPhase('speak')}
          />
        ) : (
          <Button
            title={t('selfCheckSpeaking')}
            size="lg"
            full
            variant="success"
            icon={<Ionicons name="checkbox-outline" size={18} color="#FFFFFF" />}
            onPress={() => setPhase('mark')}
          />
        )}
      </View>
    </Screen>
  );
}
