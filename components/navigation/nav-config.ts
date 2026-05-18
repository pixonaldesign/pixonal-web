/**
 * Single source of truth for site navigation.
 * Used by desktop bar and mobile overlay — keeps hrefs consistent for SEO and UX.
 */

export type NavItem = {
  href: string;
  label: string;
};

/** Primary routes shown in the desktop bar (Figma Nav 4 — 150px columns). */
export const primaryNavLinks: readonly NavItem[] = [
  { href: '/llumen', label: 'Llumen®' },
  { href: '/industries', label: 'Industries' },
  { href: '/advisory', label: 'Advisory' },
  { href: '/newsroom', label: 'Newsroom' },
] as const;

/** Overlay menu links (Figma Menu — 24px / text-h2 stack). */
export const overlayNavLinks: readonly NavItem[] = [
  ...primaryNavLinks,
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact us' },
] as const;

export const contactCta: NavItem = {
  href: '/contact',
  label: 'Get In Touch',
};

/**
 * Industries dropdown panel (Figma node 437:421).
 * Each entry's `image` is the hover-state background art — drop these PNG/JPGs
 * into /public/images/nav/industries/ to wire them up.
 */
export type IndustryMenuItem = NavItem & { image: string };

export const industriesMenuItems: readonly IndustryMenuItem[] = [
  {
    label: 'People & Workforce',
    href: '/industries',
    image: '/images/nav/industries/people-workforce.png',
  },
  {
    label: 'Cities & Infrastructure',
    href: '/industries',
    image: '/images/nav/industries/cities-infrastructure.png',
  },
  {
    label: 'Environment & Energy',
    href: '/industries',
    image: '/images/nav/industries/environment-energy.png',
  },
  {
    label: 'Commerce & Operations',
    href: '/industries',
    image: '/images/nav/industries/commerce-operations.png',
  },
  {
    label: 'Trade & Customs',
    href: '/industries',
    image: '/images/nav/industries/trade-customs.png',
  },
  {
    label: 'Safety & Defense',
    href: '/industries',
    image: '/images/nav/industries/safety-defense.png',
  },
] as const;

export const industriesMenu = {
  eyebrow: 'Industries',
  description:
    'Each sector—whether urban transit, public safety, or talent strategies—faces complex demands. Our domain-agnostic frameworks unify data experiences for immediate clarity and adaptability, aligning diverse stakeholders under one strategic vision.',
} as const;

/** Inline nav links visible at xl (1440px Figma artboard). Menu icon is always visible. */
export const NAV_DESKTOP_BREAKPOINT = 'xl' as const;

/** Open menu surface — solid primary-900 (#1A1A1A) + 30px blur, shared by nav bar and overlay so both read as one opaque panel */
export const navMenuSurfaceClass =
  'bg-primary-900 backdrop-blur-[30px]' as const;
