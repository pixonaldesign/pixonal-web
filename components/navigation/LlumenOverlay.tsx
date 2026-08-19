'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  llumenMenu,
  llumenMenuItems,
  navOverlayPanelClass,
  navOverlaySurfaceClass,
} from './nav-config';
import NavOverlayHoverPane from './NavOverlayHoverPane';

interface LlumenOverlayProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}

/**
 * Llumen dropdown — overview + product list with hover preview image.
 */
export default function LlumenOverlay({
  id,
  isOpen,
  onClose,
  onPointerEnter,
  onPointerLeave,
}: LlumenOverlayProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const activeProduct =
    llumenMenuItems.find((item) => item.id === hoveredProductId) ?? null;

  useEffect(() => {
    if (!isOpen) setHoveredProductId(null);
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
        aria-label="Llumen menu"
        aria-hidden={!isOpen}
        hidden={!isOpen}
        className={`w-full rounded-card border border-white/10 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] overflow-x-hidden overflow-y-auto overscroll-contain nav-menu-scroll ${navOverlayPanelClass} ${navOverlaySurfaceClass}`}
        tabIndex={isOpen ? 0 : -1}
      >
        <div className="flex flex-col gap-10 px-5 py-8 md:px-8">
          <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex w-full max-w-[520px] flex-col gap-2">
              <p className="text-label text-primary-100/40 uppercase">
                {llumenMenu.eyebrow}
              </p>
              <p className="text-body-tight text-white">{llumenMenu.description}</p>
            </div>

            <Image
              src="/images/nav/llumen-icon.png"
              alt="Llumen"
              width={360}
              height={90}
              className="h-10 w-auto shrink-0 self-start"
            />
          </div>

          <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
            <div className="flex w-full shrink-0 flex-col gap-5 lg:max-w-[320px]">
              <p className="text-label text-primary-100/40 uppercase">
                {llumenMenu.productsEyebrow}
              </p>
              <ul role="list" className="flex flex-col gap-4">
                {llumenMenuItems.map((item) => {
                  const isDimmed =
                    hoveredProductId !== null && hoveredProductId !== item.id;

                  return (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        onMouseEnter={() => setHoveredProductId(item.id)}
                        onFocus={() => setHoveredProductId(item.id)}
                        className={`block text-h2 text-white transition-opacity duration-200 ${
                          isDimmed ? 'opacity-50' : 'opacity-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {activeProduct ? (
              <NavOverlayHoverPane
                src={activeProduct.image}
                width={activeProduct.imageWidth}
                height={activeProduct.imageHeight}
                description={activeProduct.description}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
