import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { SelfCheck } from '@/components/SelfCheck';
import { TaskHeader } from '@/components/TaskHeader';
import { TaskPicker } from '@/components/TaskPicker';
import { Button, Card, Screen, Txt } from '@/components/ui';
import { meta, tasksFor, writingById } from '@/lib/study';
import { useCountdown } from '@/lib/useCountdown';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useTheme } from '@/theme/ThemeProvider';

/** Counts words the way a marker does: anything separated by whitespace. */
function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
}

/**
 * Schreiben. Write against the clock, then mark your own text.
 *
 * No machine can grade a B1 text, and pretending otherwise would be worse than
 * useless - it would tell people they are ready when they are not. What the app
 * can do is enforce the clock, supply the phrases, show one good answer, and
 * make the marking criteria explicit enough to apply to your own writing.
 */
export default function WritingScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { progress, saveDraft, recordAttempt } = useProgress();
  const params = useLocalSearchParams<{ task?: string }>();

  const [taskId, setTaskId] = useState<string | null>(params.task ?? null);
  const [text, setText] = useState('');
  const [started, setStarted] = useState(false);
  const [expired, setExpired] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [marking, setMarking] = useState(false);

  const task = taskId ? writingById(taskId) : null;
  const seconds = (task?.minutes ?? 20) * 60;
  const { remaining } = useCountdown(seconds, started && !marking, () => setExpired(true));

  const words = useMemo(() => countWords(text), [text]);

  const open = useCallback(
    (id: string) => {
      const saved = progress.drafts[id];
      setText(saved?.text ?? '');
      setStarted(false);
      setExpired(false);
      setShowModel(false);
      setMarking(false);
      setTaskId(id);
    },
    [progress.drafts],
  );

  const close = useCallback(() => {
    if (task && text.trim().length > 0) saveDraft(task.id, text);
    if (params.task) router.back();
    else setTaskId(null);
  }, [task, text, saveDraft, params.task, router]);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  if (!task) {
    return <TaskPicker module="schreiben" tasks={tasksFor('schreiben')} onPick={open} />;
  }

  const color = meta.areas.schreiben.color;

  if (marking) {
    return (
      <SelfCheck
        module="schreiben"
        taskId={task.id}
        title={task.title[locale]}
        rows={task.checklist}
        color={color}
        onCancel={() => setMarking(false)}
        onSaved={(score) => {
          recordAttempt({ at: Date.now(), module: 'schreiben', score, selfAssessed: true, taskId: task.id });
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
        remaining={started ? remaining : null}
        progress={Math.min(1, words / task.minWords)}
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
            {task.register} · {task.minWords} {t('wordCount')} · {task.minutes} {t('minutes')}
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

        {!started ? (
          <Button
            title={t('startWriting')}
            size="lg"
            full
            icon={<Ionicons name="timer-outline" size={18} color={colors.onAccent} />}
            onPress={() => setStarted(true)}
          />
        ) : null}

        <View style={{ gap: space.sm }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Txt variant="overline" tone="faint" style={{ flex: 1 }}>
              {t('yourText').toUpperCase()}
            </Txt>
            <Txt variant="caption" tone={words >= task.minWords ? 'success' : 'faint'}>
              {words} / {task.minWords} {t('wordCount')}
            </Txt>
          </View>
          <TextInput
            value={text}
            onChangeText={setText}
            onBlur={() => text.trim().length > 0 && saveDraft(task.id, text)}
            multiline
            textAlignVertical="top"
            placeholder={t('writeHere')}
            placeholderTextColor={colors.textFaint}
            accessibilityLabel={t('yourText')}
            style={{
              minHeight: 240,
              backgroundColor: colors.surface,
              borderWidth: 2,
              borderColor: expired ? colors.danger : colors.border,
              borderRadius: radius.lg,
              padding: space.lg,
              color: colors.text,
              fontSize: 16,
              lineHeight: 26,
            }}
          />
          {expired ? (
            <Txt variant="caption" tone="danger">
              {t('timeUp')}
            </Txt>
          ) : null}
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
                <Pressable
                  key={phrase}
                  accessibilityRole="button"
                  accessibilityLabel={phrase}
                  onPress={() => setText((current) => (current.length ? `${current} ${phrase}` : phrase))}
                  style={({ pressed }) => ({
                    backgroundColor: colors.surfaceAlt,
                    borderRadius: radius.sm,
                    paddingVertical: 8,
                    paddingHorizontal: space.md,
                    opacity: pressed ? 0.7 : 1,
                  })}
                >
                  <Txt variant="small">{phrase}</Txt>
                </Pressable>
              ))}
            </View>
          ))}
        </Card>

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
            {showModel ? t('hideModel') : t('showModel')}
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
      </ScrollView>

      <View style={{ padding: space.lg, paddingBottom: insets.bottom + space.lg }}>
        <Button
          title={t('selfCheck')}
          size="lg"
          full
          variant="success"
          disabled={words === 0}
          icon={<Ionicons name="checkbox-outline" size={18} color="#FFFFFF" />}
          onPress={() => {
            saveDraft(task.id, text);
            setMarking(true);
          }}
        />
      </View>
    </Screen>
  );
}
