import type { VideoHTMLAttributes } from 'react';
import { withBasePath } from '@/lib/base-path';
import { videoPosterSrc } from '@/lib/video-poster';

type PrefixedVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  'src' | 'poster'
> & {
  src: string;
  /** Override the auto first-frame poster. */
  poster?: string;
};

/**
 * `<video>` that prefixes `src` / `poster` for GitHub Pages and defaults
 * `poster` to the sibling first-frame JPEG (`foo.mp4` → `foo.jpg`).
 */
export default function PrefixedVideo({
  src,
  poster,
  children,
  ...rest
}: PrefixedVideoProps) {
  return (
    <video
      src={withBasePath(src)}
      poster={withBasePath(poster ?? videoPosterSrc(src))}
      {...rest}
    >
      {children}
    </video>
  );
}
