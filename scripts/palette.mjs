/**
 * Theme colours, kept in step with src/theme/tokens.ts.
 *
 * The build script runs in plain node and cannot import the TypeScript token
 * file, so the list lives here too. There are only nine values and they are
 * checked by eye against tokens.ts; duplicating them beats adding a TypeScript
 * loader to a data build.
 */
export const themeColors = [
  '#2BB3F3',
  '#A472F0',
  '#0FA3B1',
  '#FF9F1C',
  '#FF4B4B',
  '#18B98A',
  '#F45D9C',
  '#5B7CF5',
  '#4CC93F',
];
