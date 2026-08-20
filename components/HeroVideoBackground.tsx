'use client';

import { useEffect, useRef } from 'react';
import { withBasePath } from '@/lib/base-path';

interface HeroVideoBackgroundProps {
  src: string;
  /** MIME type for the source. Defaults to `video/mp4`. */
  type?: string;
  /** IntersectionObserver threshold for autoplay/pause. */
  threshold?: number;
  /** Optional poster image while the video loads. */
  poster?: string;
}

/**
 * Video background for `HeroSection`. Autoplays when in view and pauses when scrolled away.
 * Lives in its own client component so the hero shell can stay server-rendered.
 */
export default function HeroVideoBackground({
  src,
  type = 'video/mp4',
  threshold = 0.35,
  poster,
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      muted
      loop
      playsInline
      poster={poster ? withBasePath(poster) : undefined}
    >
      <source src={withBasePath(src)} type={type} />
    </video>
  );
}
