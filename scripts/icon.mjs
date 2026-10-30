/**
 * The Deutsch-Trainer app mark: a speech bubble reading "DE", set inside a
 * black/red/gold ring.
 *
 * The bubble is the point. What this app teaches is not a quiz about a country,
 * it is a language, and most of what a learner has to do with it is understand
 * and produce speech. The mark says "DE" rather than a level, because the app
 * covers A1 to C1 and an icon that named one of them would be wrong on four
 * screens out of five. The ring is the only national reference, and it is
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
 * A bold geometric "D", drawn in a 110x150 box with the counter as a hole.
 * `fill-rule="evenodd"` is what turns the inner loop into an opening.
 */
const D_PATH =
  'M0 0 L50 0 C92 0 110 30 110 75 C110 120 92 150 50 150 L0 150 Z ' +
  'M30 27 L48 27 C72 27 80 44 80 75 C80 106 72 123 48 123 L30 123 Z';

/** A bold "E" with three bars, drawn on the same 150-unit baseline. */
const E_PATH = 'M0 0 L90 0 L90 27 L30 27 L30 60 L82 60 L82 86 L30 86 L30 123 L92 123 L92 150 L0 150 Z';

/** The wordmark: cream "D", gold "E" - the flag colours doing the work. */
function wordmark() {
  return `
  <path d="${D_PATH}" fill="${CREAM}" fill-rule="evenodd"/>
  <g transform="translate(134 0)"><path d="${E_PATH}" fill="${GOLD}"/></g>`;
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
