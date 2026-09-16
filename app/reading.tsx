import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Comprehension } from '@/components/Comprehension';
import { LoadingScreen, useAppReady } from '@/components/Loading';
import { TaskPicker } from '@/components/TaskPicker';
import { Card, Divider, Txt } from '@/components/ui';
import { meta, readingById, tasksFor } from '@/lib/study';
import { useT } from '@/lib/useT';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Lesen. Pick a part, read the text, answer.
 *
 * The text stays on screen while you answer, exactly as it does in the real
 * exam - Lesen is not a memory test.
 */
export default function ReadingScreen() {
  const { space } = useTheme();
  const { locale } = useT();
  const router = useRouter();
  const params = useLocalSearchParams<{ task?: string }>();
  const [taskId, setTaskId] = useState<string | null>(params.task ?? null);

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  const task = taskId ? readingById(taskId) : null;
  const color = meta.areas.lesen.color;

  if (!task) {
    return <TaskPicker module="lesen" tasks={tasksFor('lesen')} onPick={setTaskId} />;
  }

  return (
    <Comprehension
      module="lesen"
      taskId={task.id}
      title={task.title[locale]}
      instructions={task.instructions[locale]}
      items={task.items}
      minutes={task.minutes}
      color={color}
      onClose={() => (params.task ? router.back() : setTaskId(null))}
    >
      <Card level={2} style={{ gap: space.md }}>
        {task.texts.map((text, i) => (
          <View key={i} style={{ gap: space.sm }}>
            {i > 0 ? <Divider /> : null}
            {text.heading ? <Txt variant="heading">{text.heading}</Txt> : null}
            <Txt variant="prose">{text.body}</Txt>
          </View>
        ))}
      </Card>
    </Comprehension>
  );
}
