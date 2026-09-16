import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { AudioPlayer } from '@/components/AudioPlayer';
import { Comprehension } from '@/components/Comprehension';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { TaskPicker } from '@/components/TaskPicker';
import { Card, Txt } from '@/components/ui';
import { listeningById, meta, tasksFor } from '@/lib/study';
import { useT } from '@/lib/useT';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Hören. Pick a part, play the recording the allowed number of times, answer.
 *
 * The transcript exists but is folded away behind a warning, because reading it
 * first turns the hardest module into the easiest one. It is there for after
 * you have answered, and for devices with no German voice at all.
 */
export default function ListeningScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const { settings } = useSettings();
  const params = useLocalSearchParams<{ task?: string }>();
  const [taskId, setTaskId] = useState<string | null>(params.task ?? null);
  const [showScript, setShowScript] = useState(false);
  const [played, setPlayed] = useState(false);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  const task = taskId ? listeningById(taskId) : null;
  const color = meta.areas.hoeren.color;

  if (!task) {
    return (
      <TaskPicker
        module="hoeren"
        tasks={tasksFor('hoeren')}
        onPick={(id) => {
          setShowScript(false);
          setPlayed(false);
          setTaskId(id);
        }}
      />
    );
  }

  return (
    <Comprehension
      module="hoeren"
      taskId={task.id}
      title={task.title[locale]}
      instructions={task.instructions[locale]}
      items={task.items}
      minutes={task.minutes}
      color={color}
      onClose={() => (params.task ? router.back() : setTaskId(null))}
    >
      <AudioPlayer
        lines={task.script}
        plays={task.plays}
        slow={settings.slowAudio}
        onFinished={() => setPlayed(true)}
        labels={{
          play: t('playAudio'),
          playAgain: t('playAgain'),
          stop: t('stopAudio'),
          playsLeft: t('playsLeft'),
          noVoice: t('noVoice'),
          done: t('audioDone'),
        }}
      />

      {!played ? (
        <Txt variant="caption" tone="faint" style={{ textAlign: 'center' }}>
          {t('listenFirst')}
        </Txt>
      ) : null}

      <View style={{ gap: space.sm }}>
        <Pressable
          accessibilityRole="button"
          onPress={() => setShowScript((s) => !s)}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            gap: space.sm,
            paddingVertical: space.sm,
            opacity: pressed ? 0.7 : 1,
          })}
        >
          <Ionicons name={showScript ? 'eye-off-outline' : 'eye-outline'} size={18} color={colors.textMuted} />
          <Txt variant="small" tone="muted" style={{ flex: 1 }}>
            {showScript ? t('hideTranscript') : t('showTranscript')}
          </Txt>
        </Pressable>

        {showScript ? (
          <Card style={{ gap: space.md }}>
            <View style={{ backgroundColor: colors.dangerBg, borderRadius: radius.md, padding: space.md }}>
              <Txt variant="caption" tone="danger">
                {t('transcriptWarning')}
              </Txt>
            </View>
            {task.script.map((line, i) => (
              <View key={i} style={{ gap: 2 }}>
                <Txt variant="caption" tone="faint">
                  {line.speaker}
                </Txt>
                <Txt variant="prose">{line.text}</Txt>
              </View>
            ))}
          </Card>
        ) : null}
      </View>
    </Comprehension>
  );
}
