'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

export interface TabItem {
  /** Stable, URL-safe identifier. Used as the active key and the
   *  generated `tab` / `tabpanel` ids. */
  id: string;
  /** Visible label — keep short, the strip is single-line. */
  label: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  /**
   * Prefix for auto-generated tab / tabpanel ids so the caller can wire
   * `aria-labelledby` / `aria-controls` correctly:
   *
   *   tab    →  `${idPrefix}-tab-${item.id}`
   *   panel  →  `${idPrefix}-panel-${item.id}`
   *
   * Pick a value that's unique on the page (e.g. `roles`, `newsroom`).
   */
  idPrefix: string;
  /** Accessible label for the tablist. Required for screen readers. */
  ariaLabel: string;
  /**
   * Outer wrapper — typically sets sizing / alignment. Default centers
   * the strip from `lg+` and stretches it full-width below `lg`.
   */
  className?: string;
}

/**
 * Pill-shaped tab strip used across the site (Llumen by roles, Newsroom,
 * …). One source of truth for the design — `bg-[#343434]` pill container
 * with `rounded-card`, two-state buttons (`bg-white text-black` active,
 * `text-primary-50/40` inactive), horizontal scroll with edge fades
 * below `lg`, and click-to-center scroll behavior on the tab strip
 * itself (never the page).
 *
 * Tabs share the row equally below `lg` (`flex-1 min-w-[180px]`) and
 * hug their content with a `min-w-[220px]` floor at `lg+`.
 *
 * Wire up the matching tab panel like this:
 *
 *   <div
 *     id={`${idPrefix}-panel-${activeId}`}
 *     role="tabpanel"
 *     aria-labelledby={`${idPrefix}-tab-${activeId}`}
 *   >
 *     ...content for the active tab...
 *   </div>
 */
export default function Tabs({
  items,
  activeId,
  onChange,
  idPrefix,
  ariaLabel,
  className = 'flex lg:justify-center w-full',
}: TabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateOverflow = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateOverflow();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateOverflow);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateOverflow]);

  return (
    <div className={className}>
      <div className="relative bg-[#343434] rounded-[16px] p-1 h-14 w-full lg:w-auto overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={updateOverflow}
          role="tablist"
          aria-label={ariaLabel}
          className="flex h-full flex-nowrap items-stretch overflow-x-auto lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${idPrefix}-panel-${item.id}`}
                id={`${idPrefix}-tab-${item.id}`}
                onClick={(event) => {
                  onChange(item.id);
                  const button = event.currentTarget;
                  const container = scrollRef.current;
                  if (!container) return;
                  // Scroll only the tab strip — not the page — so a
                  // horizontally-overflowing ancestor (or the document)
                  // can't get dragged along by scrollIntoView.
                  const target =
                    button.offsetLeft -
                    (container.clientWidth - button.offsetWidth) / 2;
                  const max =
                    container.scrollWidth - container.clientWidth;
                  container.scrollTo({
                    left: Math.max(0, Math.min(target, max)),
                    behavior: 'smooth',
                  });
                }}
                className={`flex-1 min-w-[180px] lg:flex-none lg:min-w-[220px] h-full px-4 rounded-[12px] text-label uppercase text-center whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-primary-50/40 hover:text-primary-50/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        {/* Edge fades — only the overflowing side is visible. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 w-12 rounded-l-[16px] bg-gradient-to-r from-black to-transparent transition-opacity duration-150 lg:hidden ${
            canScrollLeft ? 'opacity-40' : 'opacity-0'
          }`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 right-0 w-12 rounded-r-[16px] bg-gradient-to-l from-black to-transparent transition-opacity duration-150 lg:hidden ${
            canScrollRight ? 'opacity-40' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
