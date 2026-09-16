import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { Button, Txt } from '@/components/ui';
import { createPlayer, hasGermanVoice, type Line } from '@/lib/speech';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * Plays a listening script with the device's German voice.
 *
 * The number of plays is limited to what the real exam allows, because the
 * whole difficulty of Hören is that you cannot rewind. When the device has no
 * German voice the component says so plainly and the caller falls back to the
 * transcript - a wrong answer caused by a silent player would be the app's
 * fault, not the learner's.
 */
export function AudioPlayer({
  lines,
  plays,
  slow,
  labels,
  onFinished,
}: {
  lines: Line[];
  plays: number;
  slow: boolean;
  labels: { play: string; playAgain: string; stop: string; playsLeft: string; noVoice: string; done: string };
  /** Fires when a play reaches the end, so the caller can reveal the questions. */
  onFinished?: () => void;
}) {
  const { colors, space, radius } = useTheme();
  const [voiceOk, setVoiceOk] = useState<boolean | null>(null);
  const [playing, setPlaying] = useState(false);
  const [used, setUsed] = useState(0);
  const [line, setLine] = useState(-1);
  const [finished, setFinished] = useState(false);
  const player = useRef<ReturnType<typeof createPlayer> | null>(null);

  useEffect(() => {
    let alive = true;
    void hasGermanVoice().then((ok) => alive && setVoiceOk(ok));
    return () => {
      alive = false;
      player.current?.stop();
    };
  }, []);

  const stop = useCallback(() => {
    player.current?.stop();
    player.current = null;
    setPlaying(false);
    setLine(-1);
  }, []);

  const start = useCallback(() => {
    player.current?.stop();
    const p = createPlayer(lines, slow, {
      onLine: setLine,
      onDone: () => {
        setPlaying(false);
        setLine(-1);
        setFinished(true);
        onFinished?.();
      },
      onError: () => {
        setPlaying(false);
        setVoiceOk(false);
      },
    });
    player.current = p;
    setUsed((n) => n + 1);
    setPlaying(true);
    setFinished(false);
    p.start();
  }, [lines, slow, onFinished]);

  if (voiceOk === false) {
    return (
      <View style={{ backgroundColor: colors.dangerBg, borderRadius: radius.md, padding: space.lg, gap: space.xs }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
          <Ionicons name="volume-mute" size={20} color={colors.danger} />
          <Txt variant="bodyStrong" tone="danger">
            {labels.noVoice.split('.')[0]}.
          </Txt>
        </View>
        <Txt variant="small" tone="muted">
          {labels.noVoice}
        </Txt>
      </View>
    );
  }

  const left = Math.max(0, plays - used);

  return (
    <View style={{ gap: space.md }}>
      <View
        style={{
          backgroundColor: colors.surfaceAlt,
          borderRadius: radius.lg,
          padding: space.lg,
          gap: space.md,
          alignItems: 'center',
        }}
      >
        {/* A bar per line of the script, filling as the recording plays. It is
            the only honest progress indicator available: speech synthesis
            reports no duration until it has spoken. */}
        <View style={{ flexDirection: 'row', gap: 3, alignSelf: 'stretch', height: 26, alignItems: 'flex-end' }}>
          {lines.map((_, i) => (
            <View
              key={i}
              style={{
                flex: 1,
                height: i === line ? 26 : 12,
                borderRadius: 3,
                backgroundColor: i < line || (finished && !playing) ? colors.accent : i === line ? colors.accent : colors.track,
                opacity: i === line ? 1 : i < line ? 0.7 : 1,
              }}
            />
          ))}
        </View>

        {playing ? (
          <Button
            title={labels.stop}
            variant="secondary"
            full
            icon={<Ionicons name="stop" size={18} color={colors.text} />}
            onPress={stop}
          />
        ) : (
          <Button
            title={used === 0 ? labels.play : labels.playAgain}
            size="lg"
            full
            disabled={left === 0 || voiceOk == null}
            icon={<Ionicons name="play" size={18} color={colors.onAccent} />}
            onPress={start}
          />
        )}

        <Txt variant="caption" tone="faint">
          {left} {labels.playsLeft}
          {finished && !playing ? ` · ${labels.done}` : ''}
        </Txt>
      </View>
    </View>
  );
}
