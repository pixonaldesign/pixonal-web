'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './SecondaryButton';

export default function GetInTouchHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay was prevented, user interaction required
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-content mx-auto flex flex-col justify-start items-start gap-tight">
      <div className="w-full h-[790px] px-5 rounded-card flex flex-col justify-center items-center gap-block relative overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source src="/videos/getintouchbg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col justify-center items-center gap-12">
          <h2 className="text-center text-white">
            <span className="text-display-accent block">Transform your</span>
            <span className="text-display block">Moment of Decision.</span>
          </h2>

          <SecondaryButton
            href="/contact"
            showArrow
            className="shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)]"
          >
            Get in Touch
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
