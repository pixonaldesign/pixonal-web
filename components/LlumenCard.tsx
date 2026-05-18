'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GradientButton from './GradientButton';
import PixonalIcon from './PixonalIcon';

export default function LlumenCard() {
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
    <div className="relative w-full max-w-content mx-auto rounded-[20px] overflow-hidden bg-primary-900 p-5 flex flex-col items-center gap-6">
      {/* Background layers: gradient + image + bottom fade */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/llumen/card-bg.png"
          alt=""
          fill
          className="object-cover opacity-80"
          sizes="(max-width: 1400px) 100vw, 1400px"
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(18,18,18,0) 0%, #121212 100%)',
          }}
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 w-full max-w-[770px] px-4 pt-2">
        <h2 className="text-primary-50 text-h1">
          Llumen —
          <br />
          The Operating System for Critical Decisions
        </h2>
        <p className="text-primary-50 opacity-80 text-body">
          Governs how data, analytics, and AI are structured, operated, and consumed at the moment of decision
        </p>
      </div>

      {/* Video + overlapping button bar */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="aspect-[160/90] w-full rounded-[20px] overflow-hidden bg-primary-700 border border-primary-700">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            poster="/images/llumen-preview.png"
          >
            <source src="/videos/LlumenFeatures.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Button bar overlaps bottom of video */}
        <div className="relative w-full -mt-[60px] sm:-mt-[80px] rounded-b-[20px] overflow-hidden">
          <Image
            src="/images/llumen/buttons-bg.png"
            alt=""
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div className="relative flex flex-wrap gap-5 items-center justify-center px-2.5 py-5">
            <GradientButton href="/llumen#demo">Request Demo</GradientButton>
            <Link
              href="/llumen"
              className="h-[52px] px-4 rounded-xl border border-white inline-flex items-center justify-center gap-2 text-white text-button whitespace-nowrap bg-black/20 backdrop-blur-[10px] hover:bg-white/10 transition-colors"
            >
              Explore Llumen
              <PixonalIcon name="arrow-right" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
