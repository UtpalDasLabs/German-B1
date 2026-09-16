import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProgressBar, Txt } from '@/components/ui';
import { formatClock } from '@/lib/useCountdown';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * The bar every timed task screen wears: a way out, what you are doing, the
 * clock, and how far through you are.
 *
 * The clock turns red in the last five minutes. That is the only moment a
 * timer is genuinely useful information rather than background noise.
 */
export function TaskHeader({
  title,
  onClose,
  closeLabel,
  remaining,
  progress,
  color,
}: {
  title: string;
  onClose: () => void;
  closeLabel: string;
  /** Seconds left, or null when the task is untimed or not started. */
  remaining: number | null;
  /** 0-1, or null to hide the bar. */
  progress: number | null;
  color: string;
}) {
  const { colors, space, radius } = useTheme();
  const insets = useSafeAreaInsets();
  const urgent = remaining != null && remaining < 300;

  return (
    <View
      style={{
        paddingTop: insets.top + space.sm,
        paddingHorizontal: space.lg,
        paddingBottom: space.md,
        gap: space.sm,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
        <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel={closeLabel} hitSlop={12}>
          <Ionicons name="close" size={26} color={colors.textMuted} />
        </Pressable>
        <Txt variant="bodyStrong" numberOfLines={1} style={{ flex: 1 }}>
          {title}
        </Txt>
        {remaining != null ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: radius.pill,
              backgroundColor: urgent ? colors.dangerBg : colors.surfaceAlt,
            }}
          >
            <Ionicons name="time-outline" size={14} color={urgent ? colors.danger : colors.textMuted} />
            <Txt variant="caption" tone={urgent ? 'danger' : 'muted'}>
              {formatClock(remaining)}
            </Txt>
          </View>
        ) : null}
      </View>
      {progress != null ? <ProgressBar value={progress} color={color} height={6} /> : null}
    </View>
  );
}
