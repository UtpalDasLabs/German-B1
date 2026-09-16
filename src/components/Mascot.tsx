import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';

import { useTheme } from '@/theme/ThemeProvider';

export type MascotMood = 'idle' | 'happy' | 'celebrate' | 'sad' | 'thinking' | 'sleeping';

const FUR = '#B07A4B';
const FUR_DARK = '#8C5D36';
const MUZZLE = '#F0DCC4';
const INNER_EAR = '#D9A97F';
const EYE = '#22303F';
const TONGUE = '#E4676B';

/**
 * Bruno - a brown bear in a flag-coloured scarf.
 *
 * A bear because Berlin's is one and because a language app needs a character
 * you would not mind being corrected by. Posed by mood rather than redrawn, so
 * it stays the same animal throughout: the ears, muzzle and scarf never move,
 * only the eyes, brows, mouth and arms.
 */
export function Mascot({ mood = 'idle', size = 120 }: { mood?: MascotMood; size?: number }) {
  const { colors } = useTheme();

  const asleep = mood === 'sleeping';
  const armsUp = mood === 'celebrate';
  const pupilX = mood === 'thinking' ? 3 : 0;
  const pupilY = mood === 'sad' ? 3 : 0;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      accessibilityRole="image"
      accessibilityLabel={`Bruno the bear, looking ${mood}`}
    >
      <Ellipse cx="80" cy="150" rx="36" ry="6" fill={colors.text} opacity={0.1} />

      {/* arms */}
      {armsUp ? (
        <>
          <Path d="M44 96 C26 84 20 62 28 50 C36 40 48 48 48 64 L52 92 Z" fill={FUR_DARK} />
          <Path d="M116 96 C134 84 140 62 132 50 C124 40 112 48 112 64 L108 92 Z" fill={FUR_DARK} />
        </>
      ) : (
        <>
          <Path d="M46 96 C30 100 24 118 34 130 C44 140 56 130 56 114 Z" fill={FUR_DARK} />
          <Path d="M114 96 C130 100 136 118 126 130 C116 140 104 130 104 114 Z" fill={FUR_DARK} />
        </>
      )}

      {/* legs and body */}
      <Ellipse cx="60" cy="138" rx="13" ry="9" fill={FUR_DARK} />
      <Ellipse cx="100" cy="138" rx="13" ry="9" fill={FUR_DARK} />
      <Path
        d="M80 68 C104 68 118 88 118 110 C118 132 102 142 80 142 C58 142 42 132 42 110 C42 88 56 68 80 68 Z"
        fill={FUR}
      />

      {/* ears */}
      <Circle cx="48" cy="34" r="16" fill={FUR} />
      <Circle cx="112" cy="34" r="16" fill={FUR} />
      <Circle cx="48" cy="34" r="8" fill={INNER_EAR} />
      <Circle cx="112" cy="34" r="8" fill={INNER_EAR} />

      {/* head */}
      <Circle cx="80" cy="54" r="36" fill={FUR} />

      {/* eyes */}
      {asleep ? (
        <>
          <Path d="M58 50 C64 57 72 57 78 50" fill="none" stroke={EYE} strokeWidth={4.5} strokeLinecap="round" />
          <Path d="M82 50 C88 57 96 57 102 50" fill="none" stroke={EYE} strokeWidth={4.5} strokeLinecap="round" />
        </>
      ) : (
        <>
          <Circle cx="67" cy="48" r="9" fill="#FFFFFF" />
          <Circle cx="93" cy="48" r="9" fill="#FFFFFF" />
          <Circle cx={67 + pupilX} cy={48 + pupilY} r="4.6" fill={EYE} />
          <Circle cx={93 + pupilX} cy={48 + pupilY} r="4.6" fill={EYE} />
          <Circle cx={69 + pupilX} cy={46 + pupilY} r="1.7" fill="#FFFFFF" />
          <Circle cx={95 + pupilX} cy={46 + pupilY} r="1.7" fill="#FFFFFF" />
        </>
      )}

      {/* Brows. Inner ends raised reads as worried; lowered would read as angry. */}
      {mood === 'sad' ? (
        <>
          <Path d="M56 40 L76 34" stroke={FUR_DARK} strokeWidth={5} strokeLinecap="round" />
          <Path d="M104 40 L84 34" stroke={FUR_DARK} strokeWidth={5} strokeLinecap="round" />
        </>
      ) : mood === 'thinking' ? (
        <>
          <Path d="M56 36 L76 30" stroke={FUR_DARK} strokeWidth={5} strokeLinecap="round" />
          <Path d="M104 34 L86 34" stroke={FUR_DARK} strokeWidth={5} strokeLinecap="round" />
        </>
      ) : null}

      {/* muzzle */}
      <Ellipse cx="80" cy="68" rx="22" ry="16" fill={MUZZLE} />
      <Path d="M72 62 Q80 56 88 62 Q84 70 80 70 Q76 70 72 62 Z" fill={EYE} />

      {/* mouth */}
      {mood === 'celebrate' || mood === 'happy' ? (
        <>
          <Path d="M68 72 Q80 86 92 72" fill="none" stroke={EYE} strokeWidth={3.5} strokeLinecap="round" />
          {mood === 'celebrate' ? <Path d="M75 78 Q80 84 85 78 Z" fill={TONGUE} /> : null}
        </>
      ) : mood === 'sad' ? (
        <Path d="M70 80 Q80 71 90 80" fill="none" stroke={EYE} strokeWidth={3.5} strokeLinecap="round" />
      ) : (
        <Path d="M70 76 L90 76" stroke={EYE} strokeWidth={3.5} strokeLinecap="round" />
      )}

      {/* scarf in the flag colours */}
      <Rect x="50" y="88" width="60" height="7" rx="3.5" fill="#1A1A1A" />
      <Rect x="50" y="95" width="60" height="7" fill="#E8332A" />
      <Rect x="50" y="102" width="60" height="7" rx="3.5" fill="#FFC63D" />
      <Path d="M98 105 L112 104 L110 126 L96 122 Z" fill="#E8332A" />
      <Path d="M110 118 L112 104 L98 105 Z" fill="#1A1A1A" opacity={0.25} />

      {mood === 'celebrate' ? (
        <G>
          <Path d="M24 88 L28 98 L38 102 L28 106 L24 116 L20 106 L10 102 L20 98 Z" fill="#FFC63D" />
          <Circle cx="142" cy="90" r="5" fill="#FF4B4B" />
          <Circle cx="130" cy="112" r="4" fill="#2BB3F3" />
          <Circle cx="18" cy="62" r="4" fill="#4CC93F" />
        </G>
      ) : null}
      {asleep ? (
        <G>
          <Path
            d="M118 22 h16 l-16 18 h16"
            fill="none"
            stroke={colors.textFaint}
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M138 4 h10 l-10 12 h10"
            fill="none"
            stroke={colors.textFaint}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      ) : null}
      {mood === 'thinking' ? (
        <G>
          <Circle cx="130" cy="34" r="4" fill={colors.textFaint} />
          <Circle cx="140" cy="22" r="6" fill={colors.textFaint} />
          <Circle cx="151" cy="9" r="8" fill={colors.textFaint} />
        </G>
      ) : null}
    </Svg>
  );
}

/** Mascot plus a speech bubble - the app's voice for tips and encouragement. */
export function MascotSays({
  mood = 'idle',
  children,
  size = 88,
}: {
  mood?: MascotMood;
  children: React.ReactNode;
  size?: number;
}) {
  const { colors, radius, space } = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.sm }}>
      <Mascot mood={mood} size={size} />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.surface,
          borderWidth: 2,
          borderColor: colors.border,
          borderRadius: radius.lg,
          padding: space.md,
        }}
      >
        {children}
      </View>
    </View>
  );
}
