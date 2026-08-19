'use client';

import { useState, type ReactNode } from 'react';
import useHideOnScrollDown from '@/hooks/useHideOnScrollDown';

interface SiteHeaderProps {
  children: ReactNode;
}

/**
 * Fixed site header. Slides off-screen while scrolling down and returns on scroll up.
 * Stays visible while hovered or focused (open menus) and when reduced motion is on.
 */
export default function SiteHeader({ children }: SiteHeaderProps) {
  const scrolledHidden = useHideOnScrollDown();
  const [pinned, setPinned] = useState(false);
  const hidden = scrolledHidden && !pinned;

  return (
    <header
      className={`flex justify-center fixed top-5 left-5 right-5 z-50 w-[calc(100%-2.5rem)] transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden
          ? '-translate-y-[calc(100%_+_var(--spacing-5))] pointer-events-none'
          : 'translate-y-0'
      }`}
      onMouseEnter={() => setPinned(true)}
      onMouseLeave={() => setPinned(false)}
      onFocusCapture={() => setPinned(true)}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        setPinned(false);
      }}
    >
      {children}
    </header>
  );
}
