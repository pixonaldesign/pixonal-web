'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from '@/components/PrefixedImage';
import { contactOrg } from '@/lib/contact';
import {
  companyMenu,
  companyMenuLinks,
  companySocialLinks,
  navOverlayPanelClass,
  navOverlaySurfaceClass,
} from './nav-config';
import NavTabUnderline from './NavTabUnderline';

interface CompanyOverlayProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
}

function OverlayLink({
  href,
  children,
  onClose,
  isDimmed,
  onHover,
}: {
  href: string;
  children: string;
  onClose: () => void;
  isDimmed: boolean;
  onHover: () => void;
}) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  const className = `group/tab inline-flex text-h2 text-white transition-opacity duration-200 ${
    isDimmed ? 'opacity-50' : 'opacity-100'
  }`;
  const label = (
    <span className="relative inline-flex">
      {children}
      <NavTabUnderline />
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClose}
        onMouseEnter={onHover}
        onFocus={onHover}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClose}
      onMouseEnter={onHover}
      onFocus={onHover}
      className={className}
    >
      {label}
    </Link>
  );
}

/**
 * Company dropdown — overview, socials, and site links from the former menu overlay.
 */
export default function CompanyOverlay({
  id,
  isOpen,
  onClose,
  onPointerEnter,
  onPointerLeave,
}: CompanyOverlayProps) {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) setHoveredHref(null);
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
        aria-label="Company menu"
        aria-hidden={!isOpen}
        hidden={!isOpen}
        className={`w-full rounded-card border border-white/10 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] overflow-x-hidden overflow-y-auto overscroll-contain nav-menu-scroll ${navOverlayPanelClass} ${navOverlaySurfaceClass}`}
        tabIndex={isOpen ? 0 : -1}
      >
        <div className="grid grid-cols-1 gap-10 px-5 py-8 md:grid-cols-4 md:gap-10 md:px-8">
          <div className="flex flex-col gap-8 md:col-span-2">
            <div className="flex flex-col gap-2">
              <p className="text-label text-primary-100/40 uppercase">
                {companyMenu.eyebrow}
              </p>
              <p className="text-body-tight text-white">
                {companyMenu.description}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-label text-primary-100/40 uppercase">
                {companyMenu.contactEyebrow}
              </p>
              <a
                href={`mailto:${contactOrg.email}`}
                className="text-body text-white transition-opacity hover:opacity-80"
              >
                {contactOrg.email}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-label text-primary-100/40 uppercase">
                {companyMenu.socialEyebrow}
              </p>
              <ul className="flex items-center gap-3" role="list">
                {companySocialLinks.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      className="block transition-opacity hover:opacity-70"
                      aria-label={social.label}
                    >
                      <Image
                        src={social.src}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <nav aria-label="Company" className="flex flex-col gap-5 md:col-span-1">
            <p className="text-label text-primary-100/40 uppercase">
              {companyMenu.linksEyebrow}
            </p>
            <ul role="list" className="flex flex-col gap-4">
              {companyMenuLinks.map((item) => (
                <li key={item.href}>
                  <OverlayLink
                    href={item.href}
                    onClose={onClose}
                    isDimmed={hoveredHref !== null && hoveredHref !== item.href}
                    onHover={() => setHoveredHref(item.href)}
                  >
                    {item.label}
                  </OverlayLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
