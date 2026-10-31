import React, { useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';

import { Txt } from '@/components/ui';
import { peaks, type Recording } from '@/lib/voice';
import { useT } from '@/lib/useT';
import { useTheme } from '@/theme/ThemeProvider';

const W = 320;
const H = 110;
const PAD = 6;

/**
 * What you just said, drawn.
 *
 * Two layers. The filled shape is loudness over time, which is where your
 * stressed syllables are - the peaks. The line on top is pitch, which is the
 * melody, and it breaks wherever there was no clear pitch, because consonants
 * and pauses have none and a continuous line there would be an invention.
 *
 * The markers count the loudest moments and compare that count with the number
 * of syllables the phrase expects to be stressed. That is as far as this goes:
 * it will not claim your stress was on the right syllable, because it cannot
 * align what you said to the text without the speech recognition this app
 * deliberately does not do. Counting peaks is a true statement; a percentage
 * would not be.
 */
export function PitchTrace({ recording, expected }: { recording: Recording; expected: number }) {
  const { colors, space } = useTheme();
  const { t } = useT();

  const { levelPath, pitchPaths, marks } = useMemo(() => {
    const frames = recording.frames;
    if (frames.length < 2) return { levelPath: '', pitchPaths: [] as string[], marks: [] as number[] };

    const x = (i: number) => PAD + (i / (frames.length - 1)) * (W - PAD * 2);

    // Loudness, as a filled shape sitting on the baseline.
    const top = frames.map((f, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${(H - PAD - f.level * (H - PAD * 2)).toFixed(1)}`);
    const levelPath = `${top.join(' ')} L${(W - PAD).toFixed(1)} ${H - PAD} L${PAD} ${H - PAD} Z`;

    // Pitch, as one path per voiced run so gaps stay gaps.
    const voiced = frames.map((f) => f.pitch).filter((p): p is number => p != null);
    const lo = voiced.length ? Math.min(...voiced) : 0;
    const hi = voiced.length ? Math.max(...voiced) : 1;
    const span = Math.max(1, hi - lo);

    const pitchPaths: string[] = [];
    let run: string[] = [];
    frames.forEach((f, i) => {
      if (f.pitch == null) {
        if (run.length > 1) pitchPaths.push(run.join(' '));
        run = [];
        return;
      }
      const y = PAD + (1 - (f.pitch - lo) / span) * (H - PAD * 2);
      run.push(`${run.length === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y.toFixed(1)}`);
    });
    if (run.length > 1) pitchPaths.push(run.join(' '));

    return { levelPath, pitchPaths, marks: peaks(frames, expected) };
  }, [recording, expected]);

  return (
    <View style={{ gap: space.sm }}>
      <Svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`}>
        <Rect x={0} y={0} width={W} height={H} rx={8} fill={colors.surfaceAlt} />
        {levelPath ? <Path d={levelPath} fill={`${colors.info}33`} /> : null}
        {pitchPaths.map((d, i) => (
          <Path key={i} d={d} stroke={colors.info} strokeWidth={2} fill="none" strokeLinecap="round" />
        ))}
        {marks.map((f, i) => {
          const x = PAD + f * (W - PAD * 2);
          return (
            <React.Fragment key={i}>
              <Line x1={x} y1={PAD} x2={x} y2={H - PAD} stroke={colors.success} strokeWidth={1} strokeDasharray="3 3" />
              <Circle cx={x} cy={PAD + 4} r={3} fill={colors.success} />
            </React.Fragment>
          );
        })}
      </Svg>
      <Txt variant="caption" tone="faint">
        {marks.length} / {expected} {t('pronouncePeaks')} · {recording.seconds.toFixed(1)}s
      </Txt>
    </View>
  );
}
