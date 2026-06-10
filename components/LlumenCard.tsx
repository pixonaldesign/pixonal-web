'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

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
    <div className="relative w-full max-w-content mx-auto rounded-card overflow-hidden bg-primary-900 p-5 flex flex-col items-center gap-6">
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

      <div className="relative z-10 w-full flex flex-col items-center gap-block lg:gap-0">
        <div className="aspect-[160/90] w-full rounded-card overflow-hidden bg-primary-700 border border-primary-700">
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

        <div className="@container relative z-10 w-full lg:-mt-[60px]">
          {/*
            At lg+ the buttons overlap the video. This gradient supplies the
            dark backing the removed buttons-bg.png used to provide, and the
            negative inset extends it past the card's p-5 padding so it meets
            the card's rounded edges cleanly.
          */}
          <div
            aria-hidden
            className="hidden lg:block absolute -inset-x-5 -bottom-5 top-0 rounded-b-card"
            style={{
              background:
                'linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.6) 55%, rgba(18,18,18,0.92) 100%)',
            }}
          />
          <div className="relative z-10 flex flex-col gap-block items-stretch lg:py-5 @[360px]:flex-row @[360px]:items-center @[360px]:justify-center">
            <PrimaryButton
              href="/llumen#demo"
              className="w-full @[360px]:w-auto @[360px]:max-sm:flex-1"
            >
              Request Demo
            </PrimaryButton>
            <SecondaryButton
              href="/llumen"
              showArrow
              className="w-full @[360px]:w-auto @[360px]:max-sm:flex-1"
            >
              Explore Llumen
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
