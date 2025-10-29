'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import PixonalIcon from './PixonalIcon';

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
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full px-5 flex flex-col justify-start items-start gap-2.5">
      <div className="w-full h-[790.59px] px-5 py-60 rounded-[20px] flex flex-col justify-center items-center gap-12 relative overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source src="/videos/getintouchbg.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-12">
          {/* Title */}
          <div className="text-center text-8xl text-white leading-[1.1]">
            <span className="font-light italic font-ibm-plex font-mono">
              Transform your
            </span>
            <br />
            <span className="font-normal font-untitled-sans">
              Moment of Decision.
            </span>
          </div>

          {/* Button */}
          <Link
            href="/contact"
            className="h-12 px-5 py-4 rounded-xl shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)] outline-1 -outline-offset-1 outline-white backdrop-blur-2xl flex flex-col justify-center items-start gap-2.5 hover:opacity-90 transition-opacity"
          >
            <div className="inline-flex justify-start items-center gap-3">
              <span className="text-white text-base font-normal font-untitled-sans capitalize leading-4">
                Get in Touch
              </span>
              <PixonalIcon name="arrow-right" size={24} className="text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

