/**
 * The B1-Trainer app mark: a speech bubble reading "B1", set inside a
 * black/red/gold ring.
 *
 * The bubble is the point. This exam is not a quiz about a country, it is a
 * language certificate, and three of its four modules are about understanding
 * and producing speech. The ring is the only national reference, and it is
 * deliberately abstract: this is an original mark, not a state emblem and not
 * connected to the Goethe-Institut, telc or the BAMF.
 */

export const COLOURS = {
  black: '#141414',
  ink: '#1B2029',
  red: '#E2001A',
  gold: '#FFCC00',
  cream: '#FFFFFF',
};

const { black: BLACK, ink: INK, red: RED, gold: GOLD, cream: CREAM } = COLOURS;

/**
 * A bold geometric "B", drawn in a 114x150 box with the counters as holes.
 * `fill-rule="evenodd"` is what turns the two inner loops into openings.
 */
const B_PATH =
  'M0 0 L58 0 C88 0 108 16 108 40 C108 56 99 68 84 74 ' +
  'C102 79 114 92 114 111 C114 137 93 150 60 150 L0 150 Z ' +
  'M30 26 L56 26 C70 26 78 32 78 42 C78 52 70 58 56 58 L30 58 Z ' +
  'M30 90 L58 90 C74 90 83 97 83 108 C83 119 74 125 58 125 L30 125 Z';

/** A bold "1" with an angled flag, drawn on the same 150-unit baseline. */
const ONE_PATH = 'M8 46 L50 18 L74 18 L74 150 L42 150 L42 56 L20 68 Z';

/** The wordmark: cream "B", gold "1" - the flag colours doing the work. */
function wordmark() {
  return `
  <path d="${B_PATH}" fill="${CREAM}" fill-rule="evenodd"/>
  <g transform="translate(140 0)"><path d="${ONE_PATH}" fill="${GOLD}"/></g>`;
}

/**
 * The bubble with the wordmark inside it.
 *
 * Everything is drawn full size and then scaled around the canvas centre, so
 * the tail never pokes out of the ring on the badge version.
 */
export function bubble() {
  return `
  <g transform="translate(256 256) scale(0.82) translate(-256 -256)">
    <path d="M132 120 H380 C405 120 426 141 426 166 V294 C426 319 405 340 380 340
             H252 L166 412 L186 340 H132 C107 340 86 319 86 294 V166
             C86 141 107 120 132 120 Z" fill="${INK}"/>
    <g transform="translate(144 151)">${wordmark()}</g>
  </g>`;
}

/** Full badge, used for the app icon and favicon. */
export function badge() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${CREAM}"/>
  <circle cx="256" cy="256" r="250" fill="${BLACK}"/>
  <circle cx="256" cy="256" r="233" fill="${RED}"/>
  <circle cx="256" cy="256" r="216" fill="${GOLD}"/>
  <circle cx="256" cy="256" r="199" fill="${CREAM}"/>
  ${bubble()}
</svg>`;
}

/** Android adaptive foreground: bubble only, inset for the system mask. */
export function foreground() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <g transform="translate(256 256) scale(0.68) translate(-256 -256)">${bubble()}</g>
</svg>`;
}

/** Android monochrome layer: one flat silhouette for themed icons. */
export function monochrome() {
  let body = bubble();
  for (const c of [INK, GOLD, CREAM, RED]) body = body.split(c).join('#000000');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <g transform="translate(256 256) scale(0.68) translate(-256 -256)">${body}</g>
</svg>`;
}

/** Splash: the bubble on a plain field, no ring. */
export function splash() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <g transform="translate(256 256) scale(0.92) translate(-256 -256)">${bubble()}</g>
</svg>`;
}
