import type { ReactNode } from 'react';

interface HeroSectionProps {
  /** Anchor / id for in-page links. */
  id?: string;
  /** id of the h1 inside `children`, for aria-labelledby. */
  ariaLabelledBy?: string;
  /**
   * Background layer rendered absolutely behind the content.
   * Pass a `next/image` with `fill`, a video element, or any absolutely-positioned node.
   */
  background: ReactNode;
  /** Optional overlay rendered above background, below content (e.g. gradient). */
  overlay?: ReactNode;
  /**
   * Content stack. Wrapped in a `max-w-content` flex column that's centered when
   * the viewport exceeds the content cap. Pass h1, subtitle, buttons, etc.
   */
  children: ReactNode;
  /**
   * Additional classes for the inner content column.
   * Defaults to `gap-block items-start`. Override to change stack gap or alignment.
   */
  contentClassName?: string;
  /**
   * Classes for the content wrapper (vertical alignment + padding).
   * Defaults to centered content with responsive padding.
   */
  wrapperClassName?: string;
}

/**
 * Shared hero shell used by the home and llumen pages.
 * Layout contract:
 *  - Sub-lg: `h-[80dvh]` (80% of dynamic viewport height).
 *  - lg+:    strict 16:9 aspect-ratio that scales smoothly with viewport width.
 *  - 20px page gutter via `mx-5`, rounded card via `rounded-card`.
 */
export default function HeroSection({
  id,
  ariaLabelledBy,
  background,
  overlay,
  children,
  contentClassName = 'gap-block items-start',
  wrapperClassName = 'justify-center px-gutter md:px-10 lg:px-20 py-20 md:py-40',
}: HeroSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className="h-[80dvh] lg:h-auto lg:aspect-video rounded-card relative mx-5 mt-5 overflow-hidden bg-black"
    >
      {background}
      {overlay}

      <div className={`relative z-10 h-full flex flex-col ${wrapperClassName}`}>
        <div className={`w-full max-w-content mx-auto flex flex-col ${contentClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
