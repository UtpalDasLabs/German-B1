import React from 'react';
import Svg, { Circle, G, Line, Path, Rect } from 'react-native-svg';

import { useTheme } from '@/theme/ThemeProvider';

type SceneProps = {
  /** Theme or module accent, used for the main shape fills. */
  c: string;
  /** Ink colour that adapts to light and dark mode. */
  ink: string;
  /** Muted colour for secondary detail. */
  soft: string;
};

const GOLD = '#F5B301';
const RED = '#E1462C';
const BLACK = '#20262F';

/**
 * Every scene draws inside a 120x120 box. They are deliberately flat and
 * simple: on the study path they sit inside a 78px circle, where any detail
 * finer than a stroke width of three disappears.
 */
const scenes: Record<string, (p: SceneProps) => React.ReactElement> = {
  book: ({ c, ink, soft }) => (
    <G>
      <Path d="M20 30 C34 24 48 24 60 30 L60 96 C48 90 34 90 20 96 Z" fill={c} opacity={0.25} />
      <Path d="M100 30 C86 24 72 24 60 30 L60 96 C72 90 86 90 100 96 Z" fill={c} opacity={0.4} />
      <Path d="M20 30 C34 24 48 24 60 30 C72 24 86 24 100 30 L100 96 C86 90 72 90 60 96 C48 90 34 90 20 96 Z" fill="none" stroke={c} strokeWidth={3.5} strokeLinejoin="round" />
      <Line x1="60" y1="30" x2="60" y2="96" stroke={ink} strokeWidth={3} opacity={0.5} />
      {[46, 58, 70].map((y) => (
        <Line key={y} x1="30" y1={y} x2="50" y2={y - 2} stroke={soft} strokeWidth={3} strokeLinecap="round" />
      ))}
      {[46, 58, 70].map((y) => (
        <Line key={`r${y}`} x1="70" y1={y - 2} x2="90" y2={y} stroke={soft} strokeWidth={3} strokeLinecap="round" />
      ))}
    </G>
  ),

  ear: ({ c, ink }) => (
    <G>
      <Path d="M34 44 C34 26 48 14 64 14 C82 14 94 28 94 46 C94 62 82 66 78 76 C74 86 76 96 66 100 C56 104 48 96 50 86" fill="none" stroke={c} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="64" cy="44" r="12" fill={c} opacity={0.3} />
      <Path d="M56 44 C56 38 60 34 65 35" fill="none" stroke={ink} strokeWidth={3.5} strokeLinecap="round" opacity={0.6} />
      <Path d="M100 34 C108 42 108 56 100 64" fill="none" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
      <Path d="M108 24 C122 40 122 60 108 74" fill="none" stroke={GOLD} strokeWidth={4} strokeLinecap="round" opacity={0.6} />
    </G>
  ),

  pen: ({ c, ink, soft }) => (
    <G>
      <Rect x="22" y="22" width="62" height="80" rx="8" fill={c} opacity={0.18} />
      <Rect x="22" y="22" width="62" height="80" rx="8" fill="none" stroke={c} strokeWidth={3.5} />
      {[44, 58, 72].map((y) => (
        <Line key={y} x1="34" y1={y} x2="66" y2={y} stroke={soft} strokeWidth={3} strokeLinecap="round" />
      ))}
      <Line x1="34" y1="86" x2="54" y2="86" stroke={soft} strokeWidth={3} strokeLinecap="round" />
      <Path d="M96 14 L108 26 L70 64 L54 68 L58 52 Z" fill={GOLD} stroke={ink} strokeWidth={3} strokeLinejoin="round" />
      <Path d="M54 68 L58 52 L64 58 Z" fill={ink} />
    </G>
  ),

  speech: ({ c, ink }) => (
    <G>
      <Path d="M18 26 H78 C86 26 92 32 92 40 V70 C92 78 86 84 78 84 H44 L26 100 L30 84 H18 C10 84 4 78 4 70 V40 C4 32 10 26 18 26 Z" fill={c} opacity={0.25} transform="translate(8 0)" />
      <Path d="M18 26 H78 C86 26 92 32 92 40 V70 C92 78 86 84 78 84 H44 L26 100 L30 84 H18 C10 84 4 78 4 70 V40 C4 32 10 26 18 26 Z" fill="none" stroke={c} strokeWidth={3.5} strokeLinejoin="round" transform="translate(8 0)" />
      {[38, 52].map((y, i) => (
        <Line key={y} x1="26" y1={y + 6} x2={i === 0 ? 82 : 66} y2={y + 6} stroke={ink} strokeWidth={4} strokeLinecap="round" opacity={0.45} />
      ))}
      <Circle cx="104" cy="30" r="10" fill={GOLD} />
      <Circle cx="104" cy="30" r="4" fill={ink} opacity={0.3} />
    </G>
  ),

  letters: ({ c, ink }) => (
    <G>
      <Rect x="14" y="30" width="44" height="44" rx="8" fill={c} opacity={0.3} />
      <Rect x="14" y="30" width="44" height="44" rx="8" fill="none" stroke={c} strokeWidth={3.5} />
      <Path d="M28 62 L36 42 L44 62 M31 55 H41" fill="none" stroke={ink} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <Rect x="58" y="52" width="44" height="44" rx="8" fill={GOLD} opacity={0.35} />
      <Rect x="58" y="52" width="44" height="44" rx="8" fill="none" stroke={GOLD} strokeWidth={3.5} />
      <Path d="M72 84 V62 H82 A7 7 0 0 1 82 74 H72 M82 74 A7 7 0 0 1 82 84 H72" fill="none" stroke={ink} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="98" cy="30" r="9" fill={RED} opacity={0.8} />
    </G>
  ),

  puzzle: ({ c, ink }) => (
    <G>
      <Path d="M24 24 H54 V34 A8 8 0 0 0 70 34 V24 H100 V54 H90 A8 8 0 0 0 90 70 H100 V100 H70 V90 A8 8 0 0 0 54 90 V100 H24 Z" fill={c} opacity={0.3} />
      <Path d="M24 24 H54 V34 A8 8 0 0 0 70 34 V24 H100 V54 H90 A8 8 0 0 0 90 70 H100 V100 H70 V90 A8 8 0 0 0 54 90 V100 H24 Z" fill="none" stroke={c} strokeWidth={3.5} strokeLinejoin="round" />
      <Line x1="24" y1="62" x2="54" y2="62" stroke={ink} strokeWidth={3} opacity={0.4} />
      <Circle cx="80" cy="80" r="6" fill={GOLD} />
    </G>
  ),

  people: ({ c, ink }) => (
    <G>
      <Circle cx="44" cy="40" r="16" fill={c} opacity={0.35} stroke={c} strokeWidth={3} />
      <Path d="M18 100 C18 78 30 66 44 66 C58 66 70 78 70 100 Z" fill={c} opacity={0.25} stroke={c} strokeWidth={3} strokeLinejoin="round" />
      <Circle cx="86" cy="48" r="13" fill={GOLD} opacity={0.4} stroke={GOLD} strokeWidth={3} />
      <Path d="M64 100 C64 82 74 72 86 72 C98 72 108 82 108 100 Z" fill={GOLD} opacity={0.25} stroke={GOLD} strokeWidth={3} strokeLinejoin="round" />
      <Circle cx="44" cy="40" r="3" fill={ink} opacity={0.4} />
    </G>
  ),

  house: ({ c, ink }) => (
    <G>
      <Path d="M60 18 L106 56 H14 Z" fill={RED} opacity={0.75} />
      <Rect x="26" y="56" width="68" height="46" rx="4" fill={c} opacity={0.3} />
      <Rect x="26" y="56" width="68" height="46" rx="4" fill="none" stroke={c} strokeWidth={3.5} />
      <Rect x="50" y="72" width="20" height="30" rx="2" fill={ink} opacity={0.5} />
      <Rect x="34" y="66" width="12" height="12" rx="2" fill={GOLD} />
      <Rect x="74" y="66" width="12" height="12" rx="2" fill={GOLD} />
      <Path d="M60 18 L106 56 H14 Z" fill="none" stroke={ink} strokeWidth={3} strokeLinejoin="round" opacity={0.5} />
    </G>
  ),

  briefcase: ({ c, ink }) => (
    <G>
      <Path d="M46 34 V26 A6 6 0 0 1 52 20 H68 A6 6 0 0 1 74 26 V34" fill="none" stroke={ink} strokeWidth={4} strokeLinejoin="round" />
      <Rect x="16" y="34" width="88" height="62" rx="8" fill={c} opacity={0.3} />
      <Rect x="16" y="34" width="88" height="62" rx="8" fill="none" stroke={c} strokeWidth={3.5} />
      <Line x1="16" y1="60" x2="104" y2="60" stroke={c} strokeWidth={3.5} />
      <Rect x="50" y="54" width="20" height="12" rx="3" fill={GOLD} />
    </G>
  ),

  health: ({ c, ink }) => (
    <G>
      <Path d="M60 100 C30 80 16 64 16 48 C16 34 26 24 40 24 C48 24 56 28 60 36 C64 28 72 24 80 24 C94 24 104 34 104 48 C104 64 90 80 60 100 Z" fill={RED} opacity={0.28} />
      <Path d="M60 100 C30 80 16 64 16 48 C16 34 26 24 40 24 C48 24 56 28 60 36 C64 28 72 24 80 24 C94 24 104 34 104 48 C104 64 90 80 60 100 Z" fill="none" stroke={RED} strokeWidth={3.5} strokeLinejoin="round" />
      <Path d="M22 58 H44 L50 44 L60 72 L68 54 L74 58 H98" fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="60" cy="36" r="3" fill={ink} opacity={0.3} />
    </G>
  ),

  cart: ({ c, ink }) => (
    <G>
      <Path d="M14 24 H28 L40 72 H88 L100 38 H34" fill="none" stroke={c} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M36 42 H96 L88 68 H42 Z" fill={c} opacity={0.25} />
      <Circle cx="48" cy="90" r="9" fill={GOLD} stroke={ink} strokeWidth={3} />
      <Circle cx="84" cy="90" r="9" fill={GOLD} stroke={ink} strokeWidth={3} />
    </G>
  ),

  train: ({ c, ink }) => (
    <G>
      <Rect x="22" y="24" width="76" height="62" rx="12" fill={c} opacity={0.3} />
      <Rect x="22" y="24" width="76" height="62" rx="12" fill="none" stroke={c} strokeWidth={3.5} />
      <Rect x="32" y="36" width="24" height="20" rx="4" fill={ink} opacity={0.45} />
      <Rect x="64" y="36" width="24" height="20" rx="4" fill={ink} opacity={0.45} />
      <Circle cx="40" cy="72" r="5" fill={GOLD} />
      <Circle cx="80" cy="72" r="5" fill={GOLD} />
      <Line x1="14" y1="98" x2="106" y2="98" stroke={ink} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
      <Path d="M34 86 L26 100 M86 86 L94 100" stroke={ink} strokeWidth={3.5} strokeLinecap="round" opacity={0.5} />
    </G>
  ),

  tree: ({ c, ink }) => (
    <G>
      <Path d="M60 14 L92 58 H70 L96 94 H24 L50 58 H28 Z" fill={c} opacity={0.35} />
      <Path d="M60 14 L92 58 H70 L96 94 H24 L50 58 H28 Z" fill="none" stroke={c} strokeWidth={3.5} strokeLinejoin="round" />
      <Rect x="53" y="92" width="14" height="16" rx="3" fill={ink} opacity={0.55} />
      <Circle cx="98" cy="26" r="9" fill={GOLD} />
    </G>
  ),

  city: ({ c, ink }) => (
    <G>
      <Rect x="16" y="52" width="26" height="52" rx="4" fill={c} opacity={0.3} stroke={c} strokeWidth={3} />
      <Rect x="48" y="28" width="26" height="76" rx="4" fill={c} opacity={0.45} stroke={c} strokeWidth={3} />
      <Rect x="80" y="44" width="26" height="60" rx="4" fill={c} opacity={0.3} stroke={c} strokeWidth={3} />
      {[62, 76, 90].map((y) => (
        <G key={y}>
          <Rect x="22" y={y} width="6" height="7" fill={GOLD} />
          <Rect x="54" y={y - 22} width="6" height="7" fill={GOLD} />
          <Rect x="86" y={y - 8} width="6" height="7" fill={GOLD} />
        </G>
      ))}
      <Line x1="10" y1="104" x2="110" y2="104" stroke={ink} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
    </G>
  ),

  clock: ({ c, ink }) => (
    <G>
      <Circle cx="60" cy="60" r="42" fill={c} opacity={0.22} />
      <Circle cx="60" cy="60" r="42" fill="none" stroke={c} strokeWidth={4} />
      <Path d="M60 32 V60 L80 72" fill="none" stroke={ink} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="60" cy="60" r="4" fill={GOLD} />
      {[0, 90, 180, 270].map((deg) => (
        <Line key={deg} x1="60" y1="22" x2="60" y2="28" stroke={c} strokeWidth={4} strokeLinecap="round" transform={`rotate(${deg} 60 60)`} />
      ))}
    </G>
  ),

  official: ({ c, ink }) => (
    <G>
      <Path d="M60 16 L104 38 H16 Z" fill={c} opacity={0.35} />
      <Path d="M60 22 L94 38 H26 Z" fill="none" stroke={c} strokeWidth={3} strokeLinejoin="round" />
      <Rect x="20" y="38" width="80" height="6" rx="3" fill={ink} opacity={0.6} />
      {[28, 46, 64, 82].map((x) => (
        <Rect key={x} x={x} y="46" width="10" height="42" rx="2" fill={c} opacity={0.5} />
      ))}
      <Rect x="16" y="88" width="88" height="8" rx="4" fill={ink} opacity={0.6} />
      <Circle cx="60" cy="28" r="4" fill={GOLD} />
    </G>
  ),

  screen: ({ c, ink }) => (
    <G>
      <Rect x="36" y="14" width="48" height="92" rx="10" fill={c} opacity={0.28} />
      <Rect x="36" y="14" width="48" height="92" rx="10" fill="none" stroke={c} strokeWidth={3.5} />
      <Rect x="44" y="26" width="32" height="56" rx="3" fill={ink} opacity={0.35} />
      <Circle cx="60" cy="94" r="5" fill={GOLD} />
      <Path d="M92 34 C102 44 102 60 92 70" fill="none" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
      <Path d="M28 34 C18 44 18 60 28 70" fill="none" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
    </G>
  ),

  plate: ({ c, ink }) => (
    <G>
      <Circle cx="60" cy="60" r="38" fill={c} opacity={0.25} stroke={c} strokeWidth={3.5} />
      <Circle cx="60" cy="60" r="22" fill="none" stroke={c} strokeWidth={3} opacity={0.6} />
      <Path d="M18 34 V64 M18 34 M12 34 V52 M24 34 V52" fill="none" stroke={ink} strokeWidth={3.5} strokeLinecap="round" opacity={0.6} />
      <Path d="M102 34 C108 42 106 56 102 60 V86" fill="none" stroke={ink} strokeWidth={3.5} strokeLinecap="round" opacity={0.6} />
      <Circle cx="54" cy="56" r="5" fill={GOLD} />
      <Circle cx="68" cy="66" r="4" fill={RED} opacity={0.8} />
    </G>
  ),

  suitcase: ({ c, ink }) => (
    <G>
      <Path d="M18 60 L44 48 L46 30 L54 30 L52 44 L98 22 L104 34 L28 76 Z" fill={c} opacity={0.35} />
      <Path d="M18 60 L44 48 L46 30 L54 30 L52 44 L98 22 L104 34 L28 76 Z" fill="none" stroke={c} strokeWidth={3.5} strokeLinejoin="round" />
      <Line x1="20" y1="94" x2="104" y2="94" stroke={ink} strokeWidth={4} strokeLinecap="round" opacity={0.5} />
      <Circle cx="94" cy="28" r="5" fill={GOLD} />
    </G>
  ),

  heartHands: ({ c, ink }) => (
    <G>
      <Circle cx="60" cy="42" r="24" fill={c} opacity={0.28} stroke={c} strokeWidth={3.5} />
      <Circle cx="51" cy="38" r="4" fill={ink} />
      <Circle cx="69" cy="38" r="4" fill={ink} />
      <Path d="M48 50 C54 58 66 58 72 50" fill="none" stroke={ink} strokeWidth={3.5} strokeLinecap="round" />
      <Path d="M28 100 C28 84 42 74 60 74 C78 74 92 84 92 100 Z" fill={GOLD} opacity={0.3} stroke={GOLD} strokeWidth={3} strokeLinejoin="round" />
      <Path d="M96 20 C100 14 108 14 110 20 C112 26 104 32 103 34 C102 32 94 26 96 20 Z" fill={RED} />
    </G>
  ),

  flag: ({ ink }) => (
    <G>
      <Rect x="26" y="28" width="76" height="18" rx="4" fill={BLACK} />
      <Rect x="26" y="46" width="76" height="18" fill={RED} />
      <Rect x="26" y="64" width="76" height="18" rx="4" fill={GOLD} />
      <Rect x="18" y="20" width="7" height="86" rx="3.5" fill={ink} opacity={0.45} />
    </G>
  ),
};

/** Which scene each vocabulary theme and study area uses. */
const SCENE_BY_KEY: Record<string, string> = {
  // areas
  wortschatz: 'letters',
  grammatik: 'puzzle',
  lesen: 'book',
  hoeren: 'ear',
  schreiben: 'pen',
  sprechen: 'speech',
  // vocabulary themes
  familie: 'people',
  wohnen: 'house',
  arbeit: 'briefcase',
  bildung: 'book',
  gesundheit: 'health',
  essen: 'plate',
  einkaufen: 'cart',
  reisen: 'suitcase',
  verkehr: 'train',
  freizeit: 'heartHands',
  medien: 'screen',
  umwelt: 'tree',
  behoerden: 'official',
  gefuehle: 'heartHands',
  kommunikation: 'speech',
  stadt: 'city',
  zeit: 'clock',
  verben: 'puzzle',
  adjektive: 'letters',
  praepositionen: 'puzzle',
  konnektoren: 'letters',
  nomenverben: 'speech',
};

export function Illustration({
  name,
  color,
  size = 120,
}: {
  /** A scene name, a theme key, or an area key. */
  name: string | null;
  color: string;
  size?: number;
}) {
  const { colors } = useTheme();
  const key = name == null ? 'flag' : (SCENE_BY_KEY[name] ?? (name in scenes ? name : 'flag'));
  const scene = scenes[key] ?? scenes.flag;

  return (
    <Svg width={size} height={size} viewBox="0 0 120 120" accessibilityRole="image">
      {scene({ c: color, ink: colors.text, soft: colors.textFaint })}
    </Svg>
  );
}
