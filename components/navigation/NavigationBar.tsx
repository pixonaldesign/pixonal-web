'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import { NewsArticle } from '@/lib/markdown';
import NavBarShell from './NavBarShell';
import NavOverlay from './NavOverlay';
import IndustriesOverlay from './IndustriesOverlay';

interface NavigationBarProps {
  newsArticles: NewsArticle[];
}

type OpenPanel = 'menu' | 'industries' | null;

export default function NavigationBar({ newsArticles }: NavigationBarProps) {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const overlayId = useId().replace(/:/g, '');
  const menuPanelId = `site-nav-overlay-${overlayId}`;
  const industriesPanelId = `site-nav-industries-${overlayId}`;

  const isMenuOpen = openPanel === 'menu';
  const isIndustriesOpen = openPanel === 'industries';
  const isAnyOpen = openPanel !== null;

  const closeAll = useCallback(() => setOpenPanel(null), []);
  const toggleMenu = useCallback(
    () => setOpenPanel((p) => (p === 'menu' ? null : 'menu')),
    []
  );
  const toggleIndustries = useCallback(
    () => setOpenPanel((p) => (p === 'industries' ? null : 'industries')),
    []
  );

  useEffect(() => {
    if (!isAnyOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAll();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isAnyOpen, closeAll]);

  return (
    <div className={`relative w-full flex flex-col ${isMenuOpen ? '' : 'gap-tight'}`}>
      <NavBarShell
        isMenuOpen={isMenuOpen}
        isIndustriesOpen={isIndustriesOpen}
        onMenuToggle={toggleMenu}
        onIndustriesToggle={toggleIndustries}
        menuPanelId={menuPanelId}
        industriesPanelId={industriesPanelId}
      />

      <NavOverlay
        id={menuPanelId}
        isOpen={isMenuOpen}
        onClose={closeAll}
        newsArticles={newsArticles}
      />

      <IndustriesOverlay
        id={industriesPanelId}
        isOpen={isIndustriesOpen}
        onClose={closeAll}
      />
    </div>
  );
}
