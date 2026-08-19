'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  industriesMenu,
  industriesMenuItems,
  navOverlayPanelClass,
  navOverlaySurfaceClass,
} from './nav-config';
import NavOverlayHoverPane from './NavOverlayHoverPane';
import NavTabUnderline from './NavTabUnderline';

interface IndustriesOverlayProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}

/**
 * Industries dropdown — same layout and hover preview as LlumenOverlay.
 */
export default function IndustriesOverlay({
  id,
  isOpen,
  onClose,
  onPointerEnter,
  onPointerLeave,
}: IndustriesOverlayProps) {
  const [hoveredIndustryId, setHoveredIndustryId] = useState<string | null>(null);
  const activeIndustry =
    industriesMenuItems.find((item) => item.id === hoveredIndustryId) ?? null;

  useEffect(() => {
    if (!isOpen) setHoveredIndustryId(null);
  }, [isOpen]);

  return (
    <div
      className={`absolute left-0 right-0 top-full z-50 w-full pt-2 ${
        isOpen ? '' : 'pointer-events-none'
      }`}
      onMouseEnter={onPointerEnter}
      onMouseLeave={onPointerLeave}
    >
      <div
        id={id}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Industries menu"
        aria-hidden={!isOpen}
        hidden={!isOpen}
        className={`w-full rounded-card border border-white/10 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] overflow-x-hidden overflow-y-auto overscroll-contain nav-menu-scroll ${navOverlayPanelClass} ${navOverlaySurfaceClass}`}
        tabIndex={isOpen ? 0 : -1}
      >
        <div className="flex flex-col gap-10 px-5 py-8 md:px-8">
          <div className="flex w-full flex-col gap-2 sm:max-w-[520px]">
            <p className="text-label text-primary-100/40 uppercase">
              {industriesMenu.eyebrow}
            </p>
            <p className="text-body-tight text-white">
              {industriesMenu.description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
            <div className="w-full shrink-0 lg:max-w-[320px]">
              <ul role="list" className="flex flex-col gap-4">
                {industriesMenuItems.map((item) => {
                  const isDimmed =
                    hoveredIndustryId !== null && hoveredIndustryId !== item.id;

                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setHoveredIndustryId(item.id)}
                        onFocus={() => setHoveredIndustryId(item.id)}
                        className={`group/tab inline-flex text-h2 text-white transition-opacity duration-200 ${
                          isDimmed ? 'opacity-50' : 'opacity-100'
                        }`}
                      >
                        <span className="relative inline-flex">
                          {item.label}
                          <NavTabUnderline active={hoveredIndustryId === item.id} />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {activeIndustry ? (
              <NavOverlayHoverPane
                src={activeIndustry.image}
                width={activeIndustry.imageWidth}
                height={activeIndustry.imageHeight}
                description={activeIndustry.description}
                href={activeIndustry.href}
                ctaLabel="View industry"
                onCtaClick={onClose}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
