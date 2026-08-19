/**
 * Film grain on the statement section. Edit these and refresh.
 *
 * - `opacity` — 0–1 strength. Start here. Try 0.2 (subtle) → 0.7 (loud).
 * - `tileSizePx` — smaller = finer speckle, larger = chunkier.
 * - `contrast` — >1 makes the specks punchier.
 */
export const noiseTextureConfig = {
  opacity: 0.1,
  tileSizePx: 160,
  contrast: 1.6,
} as const;
