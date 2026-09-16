import { useEffect, useRef, useState } from 'react';

/**
 * A countdown in seconds that starts when `running` turns true and calls
 * `onExpire` exactly once when it reaches zero.
 *
 * The callback lives in a ref because callers build it inline; without that the
 * interval would be torn down and restarted on every render, and the clock
 * would drift by up to a second per keystroke on the writing screen.
 */
export function useCountdown(seconds: number, running: boolean, onExpire?: () => void) {
  const [remaining, setRemaining] = useState(seconds);
  const expire = useRef(onExpire);
  expire.current = onExpire;

  useEffect(() => {
    setRemaining(seconds);
  }, [seconds]);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(id);
          expire.current?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  return { remaining, setRemaining };
}

export function formatClock(seconds: number): string {
  const m = Math.floor(Math.max(0, seconds) / 60);
  const s = Math.max(0, seconds) % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}
