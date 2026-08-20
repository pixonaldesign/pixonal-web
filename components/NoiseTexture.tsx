import { withBasePath } from '@/lib/base-path';
import { noiseTextureConfig } from '@/lib/noise-texture-config';

interface NoiseTextureProps {
  /** Overrides `noiseTextureConfig.opacity` for this instance only. */
  opacity?: number;
}

/**
 * White grain over a dark surface. Tune in `lib/noise-texture-config.ts`.
 * Uses `screen` so specks stay visible on black (`overlay` on #000 is invisible).
 */
export default function NoiseTexture({ opacity }: NoiseTextureProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1]"
      style={{
        opacity: opacity ?? noiseTextureConfig.opacity,
        mixBlendMode: 'screen',
        filter: `contrast(${noiseTextureConfig.contrast})`,
        backgroundImage: `url(${withBasePath('/images/textures/noise.png')})`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${noiseTextureConfig.tileSizePx}px`,
      }}
    />
  );
}

