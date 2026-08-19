'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { NewsArticle } from '@/lib/news';
import { useLenis } from '@/components/SmoothScrollProvider';
import NavBarShell from './NavBarShell';
import NavOverlay from './NavOverlay';
import IndustriesOverlay from './IndustriesOverlay';
import LlumenOverlay from './LlumenOverlay';
import CompanyOverlay from './CompanyOverlay';
import { llumenOverlayEnabled } from './nav-config';

interface NavigationBarProps {
  newsArticles: NewsArticle[];
}

type OpenPanel = 'menu' | 'llumen' | 'industries' | 'company' | null;
type HoverPanel = 'llumen' | 'industries' | 'company';

const HOVER_CLOSE_DELAY_MS = 120;

export default function NavigationBar({ newsArticles }: NavigationBarProps) {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overlayId = useId().replace(/:/g, '');
  const menuPanelId = `site-nav-overlay-${overlayId}`;
  const llumenPanelId = `site-nav-llumen-${overlayId}`;
  const industriesPanelId = `site-nav-industries-${overlayId}`;
  const companyPanelId = `site-nav-company-${overlayId}`;
  const lenis = useLenis();

  const isMenuOpen = openPanel === 'menu';
  const isLlumenOpen = openPanel === 'llumen';
  const isIndustriesOpen = openPanel === 'industries';
  const isCompanyOpen = openPanel === 'company';
  const isAnyOpen = openPanel !== null;

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeAll = useCallback(() => {
    clearCloseTimer();
    setOpenPanel(null);
  }, [clearCloseTimer]);

  const openHoverPanel = useCallback(
    (panel: HoverPanel) => {
      clearCloseTimer();
      setOpenPanel(panel);
    },
    [clearCloseTimer]
  );

  const toggleHoverPanel = useCallback((panel: HoverPanel) => {
    clearCloseTimer();
    setOpenPanel((current) => (current === panel ? null : panel));
  }, [clearCloseTimer]);

  const dismissHoverPanels = useCallback(() => {
    clearCloseTimer();
    setOpenPanel((current) =>
      current === 'llumen' || current === 'industries' || current === 'company'
        ? null
        : current
    );
  }, [clearCloseTimer]);

  const scheduleHoverClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenPanel((current) =>
        current === 'llumen' || current === 'industries' || current === 'company'
          ? null
          : current
      );
    }, HOVER_CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  const toggleMenu = useCallback(
    () => setOpenPanel((p) => (p === 'menu' ? null : 'menu')),
    []
  );

  useEffect(() => {
    if (!isAnyOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll();
    };

    document.addEventListener('keydown', onKeyDown);
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isAnyOpen, isMenuOpen, closeAll]);

  useEffect(() => {
    if (
      openPanel !== 'llumen' &&
      openPanel !== 'industries' &&
      openPanel !== 'company'
    )
      return;

    const onScroll = () => closeAll();

    if (lenis) {
      lenis.on('scroll', onScroll);
      return () => {
        lenis.off('scroll', onScroll);
      };
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [openPanel, lenis, closeAll]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  return (
    <div
      className={`relative w-full flex flex-col ${isMenuOpen ? '' : 'gap-tight'}`}
      onMouseEnter={clearCloseTimer}
    >
      <NavBarShell
        isMenuOpen={isMenuOpen}
        isLlumenOpen={isLlumenOpen}
        isIndustriesOpen={isIndustriesOpen}
        isCompanyOpen={isCompanyOpen}
        onMenuToggle={toggleMenu}
        onLlumenOpen={() => {
          if (llumenOverlayEnabled) openHoverPanel('llumen');
        }}
        onIndustriesOpen={() => openHoverPanel('industries')}
        onCompanyOpen={() => openHoverPanel('company')}
        onLlumenToggle={() => {
          if (llumenOverlayEnabled) toggleHoverPanel('llumen');
        }}
        onIndustriesToggle={() => toggleHoverPanel('industries')}
        onCompanyToggle={() => toggleHoverPanel('company')}
        onHoverDismiss={dismissHoverPanels}
        llumenPanelId={llumenPanelId}
        industriesPanelId={industriesPanelId}
        companyPanelId={companyPanelId}
        menuPanelId={menuPanelId}
      />

      <NavOverlay
        id={menuPanelId}
        isOpen={isMenuOpen}
        onClose={closeAll}
        newsArticles={newsArticles}
      />

      <LlumenOverlay
        id={llumenPanelId}
        isOpen={llumenOverlayEnabled && isLlumenOpen}
        onClose={closeAll}
        onPointerEnter={() => {
          if (llumenOverlayEnabled) openHoverPanel('llumen');
        }}
        onPointerLeave={scheduleHoverClose}
      />

      <IndustriesOverlay
        id={industriesPanelId}
        isOpen={isIndustriesOpen}
        onClose={closeAll}
        onPointerEnter={() => openHoverPanel('industries')}
        onPointerLeave={scheduleHoverClose}
      />

      <CompanyOverlay
        id={companyPanelId}
        isOpen={isCompanyOpen}
        onClose={closeAll}
        onPointerEnter={() => openHoverPanel('company')}
        onPointerLeave={scheduleHoverClose}
      />
    </div>
  );
}
