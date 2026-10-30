/**
 * The "Ich kann" app mark: a ticked speech bubble inside a black/red/gold ring.
 *
 * The two halves each carry one word of the name. The bubble is "sprechen" -
 * what this app teaches is a language, and most of what a learner has to do
 * with it is understand and produce speech. The tick is "ich kann" - every goal
 * in the app is a can-do statement you tick off yourself.
 *
 * It replaced a mark reading "DE", which was legible at 512px and a smudge at
 * 16px. A tick survives being shrunk to a favicon, which letters inside a
 * bubble do not. The ring is the only national reference and is deliberately
 * abstract: this is an original mark, not a state emblem and not connected to
 * the Goethe-Institut, telc or the BAMF.
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
 * A bold tick, drawn as one outline in a 206x150 box.
 *
 * One path rather than two strokes: two coloured strokes meeting at the vertex
 * leave a visible seam at small sizes, and the seam is exactly where the eye
 * lands.
 */
const TICK_PATH = 'M180 0 L206 30 L78 150 L0 76 L27 48 L80 98 Z';

/** The mark inside the bubble. Cream on the dark bubble, for contrast at 16px. */
function wordmark() {
  return `<path d="${TICK_PATH}" fill="${CREAM}"/>`;
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
    <g transform="translate(157 151)">${wordmark()}</g>
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
