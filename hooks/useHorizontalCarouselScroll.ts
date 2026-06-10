'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useHorizontalCarouselScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateScrollState]);

  const scrollByDirection = (direction: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 860);
    el.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
    window.setTimeout(updateScrollState, 350);
  };

  return {
    scrollRef,
    canScrollPrev,
    canScrollNext,
    scrollByDirection,
    updateScrollState,
  };
}
