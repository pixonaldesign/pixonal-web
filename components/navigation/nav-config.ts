/**
 * Single source of truth for site navigation.
 * Used by desktop bar and mobile overlay — keeps hrefs consistent for SEO and UX.
 */

export type NavItem = {
  href: string;
  label: string;
};

/** Primary routes shown inline in the nav bar at ≥lg (1024px). 150px columns. */
export const primaryNavLinks: readonly NavItem[] = [
  { href: '/llumen', label: 'Llumen' },
  { href: '/industries', label: 'Industries' },
] as const;

/** Overlay menu links (Figma Menu — 24px / text-h2 stack). */
export const overlayNavLinks: readonly NavItem[] = [
  ...primaryNavLinks,
  { href: '/newsroom', label: 'Newsroom' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact us' },
] as const;

export const LLUMEN_HREF = '/llumen' as const;
export const INDUSTRIES_HREF = '/industries' as const;
export const COMPANY_HREF = '/about' as const;

/** Flip to true to restore the Llumen hover overlay + chevron. */
export const llumenOverlayEnabled = false;

export const contactCta: NavItem = {
  href: '/contact',
  label: 'Book a Demo',
};

/**
 * Industries dropdown panel (Figma node 437:421).
 * Each entry's `image` is the hover-state background art — drop these PNG/JPGs
 * into /public/images/nav/industries/ to wire them up.
 */
export type IndustryMenuItem = NavItem & {
  id: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
};

export const industriesMenuItems: readonly IndustryMenuItem[] = [
  {
    id: 'people-workforce',
    label: 'People & Workforce',
    href: '/industries/people-workforce',
    image: '/images/industries/people-and-workforce/people-workforce.png',
    imageWidth: 16,
    imageHeight: 9,
    description:
      'See workforce capacity, skills, and deployment with the clarity leaders need to match demand and act early.',
  },
  {
    id: 'cities-infrastructure',
    label: 'Cities & Digital Twin',
    href: '/industries/cities-infrastructure',
    image:
      '/images/industries/cities-and-infrastructure/cities-infrastructure.png',
    imageWidth: 16,
    imageHeight: 9,
    description:
      'Govern the city through connected digital twin intelligence across transport, utilities, and public space.',
  },
  {
    id: 'environment-energy',
    label: 'Environment & Energy',
    href: '/industries/environment-energy',
    image: '/images/industries/environment-energy/environment-energy.png',
    imageWidth: 16,
    imageHeight: 9,
    description:
      'Strengthen oversight of environmental and energy systems where early action matters most.',
  },
  {
    id: 'commerce-operations',
    label: 'Commerce & Operations',
    href: '/industries/commerce-operations',
    image: '/images/industries/commerce-and-operations/commerce-operations.png',
    imageWidth: 16,
    imageHeight: 9,
    description:
      'Expose bottlenecks, model demand, and continuously optimize across fleets, hubs, and customer touchpoints.',
  },
  {
    id: 'trade-customs',
    label: 'Trade & Customs',
    href: '/industries/trade-customs',
    image: '/images/industries/trade-customs/trade-customs.png',
    imageWidth: 16,
    imageHeight: 9,
    description:
      'Bring clarity to production, quality, and supply chains in one governed intelligence environment.',
  },
  {
    id: 'safety-defense',
    label: 'Safety & Defense',
    href: '/industries/safety-defense',
    image: '/images/industries/safety-and-security/safety-defense.png',
    imageWidth: 16,
    imageHeight: 9,
    description:
      'Support mission decisions with trusted, real-time situational intelligence across teams and incidents.',
  },
] as const;

export const industriesMenu = {
  eyebrow: 'Overview',
  description:
    'Each sector—whether urban transit, public safety, or talent strategies—faces complex demands. Our domain-agnostic frameworks unify data experiences for immediate clarity and adaptability, aligning diverse stakeholders under one strategic vision.',
} as const;

/**
 * Llumen dropdown panel — overview + product list with preview image.
 * Product `image` paths are placeholders until final art is wired up.
 */
export type LlumenProductItem = NavItem & {
  id: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
};

export const llumenMenu = {
  eyebrow: 'Overview',
  description:
    'Semantic Governance defines how data behaves inside Llumen. It establishes shared meaning for metrics, models, and rules, creating a single, consistent layer that every dashboard, narrative, simulation, and AI output relies on.',
  productsEyebrow: 'Products',
} as const;

export const llumenMenuItems: readonly LlumenProductItem[] = [
  {
    id: 'suite',
    label: 'Llumen Suite',
    href: '/llumen',
    image: '/images/nav/llumen-mark.png',
    imageWidth: 640,
    imageHeight: 640,
    description: llumenMenu.description,
  },
  {
    id: 'connect',
    label: 'Llumen Connect',
    href: '/llumen',
    image: '/images/nav/llumen/llumen-connect.png',
    imageWidth: 640,
    imageHeight: 640,
    description:
      'Securely integrate databases, APIs, uploads, and models across on-prem, cloud, or hybrid architectures.',
  },
  {
    id: 'studio',
    label: 'Llumen Studio',
    href: '/llumen',
    image: '/images/nav/llumen/llumen-studio.png',
    imageWidth: 640,
    imageHeight: 640,
    description:
      'Build charts, geospatial layers, and decision views bound to governed metrics—without leaving the platform.',
  },
  {
    id: 'helix',
    label: 'Llumen Helix',
    href: '/llumen',
    image: '/images/nav/llumen/llumen-helix.png',
    imageWidth: 640,
    imageHeight: 640,
    description:
      'Trace where each metric comes from, how it is built, and where it is used—so every output stays trusted.',
  },
  {
    id: 'flow',
    label: 'Llumen Flow',
    href: '/llumen',
    image: '/images/nav/llumen/llumen-flow.png',
    imageWidth: 640,
    imageHeight: 640,
    description:
      'Assemble dashboards, narratives, and command views with drag-and-drop builders tied to semantic governance.',
  },
  {
    id: 'command',
    label: 'Llumen Command',
    href: '/llumen',
    image: '/images/nav/llumen/llumen-command.png',
    imageWidth: 640,
    imageHeight: 640,
    description:
      'Operate live command rooms where teams share context, run briefings, and act at the moment of decision.',
  },
] as const;

export const companyMenu = {
  eyebrow: 'Pixonal',
  description:
    'Since 2016, Pixonal has helped leaders turn scattered data into clear, purposeful direction — building living environments where data speaks through clear, confident stories.',
  contactEyebrow: 'Contact',
  socialEyebrow: 'Social',
  linksEyebrow: 'Company',
} as const;

export const companyMenuLinks: readonly NavItem[] = [
  { href: '/about', label: 'About us' },
  { href: '/newsroom', label: 'Newsroom' },
  { href: 'https://blog.pixonal.com/', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact us' },
] as const;

export const companySocialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    src: '/images/footer/LinkedinLogo.svg',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    src: '/images/footer/InstagramLogo.svg',
  },
  {
    id: 'threads',
    label: 'Threads',
    href: '#',
    src: '/images/footer/ThreadsLogo.svg',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: '#',
    src: '/images/footer/FacebookLogo.svg',
  },
] as const;

/** Inline nav links visible at ≥lg (1024px). Menu icon is always visible. */
export const NAV_DESKTOP_BREAKPOINT = 'lg' as const;

/** Nav bar + dropdown overlays — black at 60% opacity with 60px blur. */
export const navMenuSurfaceClass = 'bg-black/60 backdrop-blur-[60px]' as const;

/** Detached dropdown panels (Industries, Llumen). */
export const navOverlaySurfaceClass = navMenuSurfaceClass;

/** Overlay panel max height so it never overflows the viewport below the nav. */
export const navOverlayPanelClass =
  'max-h-[calc(100dvh-1.25rem-66px-0.5rem-1.25rem)]' as const;
