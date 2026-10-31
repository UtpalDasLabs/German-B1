import qrcode from 'qrcode-generator';
import React, { useMemo } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import { useTheme } from '@/theme/ThemeProvider';

/**
 * One QR code, drawn as a single SVG path.
 *
 * A path rather than one rect per module: a dense code is 117x117 modules, and
 * thirteen thousand elements is enough to make the frame-by-frame animation
 * stutter on a phone. One path draws in a single pass.
 *
 * Always black on white regardless of the app theme, because a scanner expects
 * that contrast and a dark-mode QR code is a QR code that does not scan.
 */
export function QrCode({ text, size = 280 }: { text: string; size?: number }) {
  const { radius } = useTheme();

  const { path, modules } = useMemo(() => {
    const qr = qrcode(0, 'L');
    qr.addData(text, 'Byte');
    qr.make();
    const n = qr.getModuleCount();
    let d = '';
    for (let row = 0; row < n; row += 1) {
      for (let col = 0; col < n; col += 1) {
        if (qr.isDark(row, col)) d += `M${col} ${row}h1v1h-1z`;
      }
    }
    return { path: d, modules: n };
  }, [text]);

  // A quiet zone of four modules is part of the spec; without it scanners fail
  // on exactly the codes that look fine to a human.
  const quiet = 4;
  const span = modules + quiet * 2;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${span} ${span}`} style={{ borderRadius: radius.sm }}>
      <Rect x={0} y={0} width={span} height={span} fill="#FFFFFF" />
      <Path d={path} fill="#000000" transform={`translate(${quiet} ${quiet})`} />
    </Svg>
  );
}
