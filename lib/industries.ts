/**
 * Source of truth for the 6 industry pages.
 *
 * Each industry drives a dynamic route at /industries/[slug] built from the
 * same set of section components (hero, overview, key-advantages carousel,
 * impact-case). Commerce & Operations has the real Figma copy; the other
 * five carry placeholder copy that follows the same shape — swap in real
 * content per-industry without changing any structure.
 *
 * Image assets live under /public/images/industries/<folder>/ (kebab-case,
 * note the existing folder spelling). Per-industry the assets are:
 *   <slug>.png         — hero + nav-tab background
 *   advantage-01.png   — Key Advantages tab 1 card image
 *   advantage-02.png   — Key Advantages tab 2 card image
 *   advantage-03.png   — Key Advantages tab 3 card image
 *   impact.png         — Impact Case background
 */

/** One sub-tab in the "Key Advantages" carousel. */
export type KeyAdvantageTab = {
  id: string;
  label: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  /**
   * Optional per-tab gradient applied to the outer card while this tab is
   * active. Falls back to `Industry.keyAdvantagesGradient` when omitted, so
   * older industries with a single gradient still work unchanged.
   */
  gradient?: string;
  /**
   * Optional solid background colour rendered behind the image. When set the
   * image is inset (`object-contain` with figma-matched margins) instead of
   * full-bleed `object-cover`. Use this when the source asset is a UI
   * screenshot meant to float on a coloured backdrop rather than fill the
   * card edge-to-edge.
   */
  imageBackground?: string;
};

/** Impact case / whitepaper call-out below the carousel. */
export type IndustryImpactCase = {
  eyebrow: string;
  title: string;
  image: string;
  href: string;
  cta?: string;
};

/** Full industry record consumed by /industries/[slug]. */
export type Industry = {
  slug: string;
  label: string;
  description: string;
  hero: {
    title: string;
    image?: string;
    video?: string;
  };
  overview: string;
  keyAdvantagesEyebrow: string;
  keyAdvantagesGradient: string;
  keyAdvantages: KeyAdvantageTab[];
  impactCase: IndustryImpactCase;
};

// ---------------------------------------------------------------------------
// Image asset helpers — keeps paths in one place so a folder rename is a
// single-edit change.
// ---------------------------------------------------------------------------

const ASSETS_ROOT = '/images/industries';

type AssetFolder =
  | 'commerce-and-operations'
  | 'people-and-workforce'
  | 'cities-and-infrastructure'
  | 'environment-energy'
  | 'trade-customs'
  | 'safety-and-security';

function assets(folder: AssetFolder, file: string) {
  return `${ASSETS_ROOT}/${folder}/${file}`;
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const industries: Industry[] = [
  // -------------------------------------------------------------------------
  // Commerce & Operations  — real Figma copy
  // -------------------------------------------------------------------------
  {
    slug: 'commerce-operations',
    label: 'Commerce & Operations',
    description:
      'Bring operational clarity to fast-moving supply and service ecosystems with Llumen — expose bottlenecks, model demand, and continuously optimize across fleets, hubs, and customer touchpoints.',
    hero: {
      title:
        'Bring operational clarity to fast-moving supply and service ecosystems',
      image: assets('commerce-and-operations', 'commerce-operations.png'),
      video: assets('commerce-and-operations', 'hero-video.mp4'),
    },
    overview:
      'Commercial operations rely on the precise movement of goods, services, and tasks across fleets, hubs, warehouses, and customer touchpoints. Llumen exposes how bottlenecks form, how demand behaves, and how operational choices affect downstream performance—enabling continuous optimization without relying on scattered systems or static reporting.',
    keyAdvantagesEyebrow: 'Key Advantages',
    // Fallback only — every tab below carries its own gradient.
    keyAdvantagesGradient:
      'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
    keyAdvantages: [
      {
        id: 'throughput-insight',
        label: 'Throughput Insight',
        number: '01',
        title:
          'Understand how goods and tasks move across hubs and fulfillment steps',
        description:
          'Llumen structures operational metrics so teams see where queues grow, where performance drifts, and how these patterns affect delivery targets and SLAs.',
        image: assets('commerce-and-operations', 'advantage-01.png'),
        gradient:
          'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
        imageBackground: '#a5cdbf',
      },
      {
        id: 'operational-continuity',
        label: 'Operational Continuity',
        number: '02',
        title:
          'Coordinate fast around delays, disruptions, or sudden demand shifts',
        description:
          'When a slowdown emerges at a route, hub, or fleet segment, Llumen frames the impact so teams act decisively rather than reactively.',
        image: assets('commerce-and-operations', 'advantage-02.png'),
        gradient:
          'linear-gradient(180deg, rgba(23, 93, 239, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(167, 159, 157, 0.8) 66.346%, rgba(242, 179, 150, 0.8) 98.558%)',
      },
      {
        id: 'optimization-drivers',
        label: 'Optimization Drivers',
        number: '03',
        title:
          'Identify the levers that improve cost, speed, and service reliability',
        description:
          'Leaders explore how routing, workforce allocation, batching, or capacity adjustments influence performance—all through governed, interpretable intelligence.',
        image: assets('commerce-and-operations', 'advantage-03.png'),
        gradient:
          'linear-gradient(180deg, rgba(94, 42, 0, 0.8) 1.4423%, rgba(188, 146, 93, 0.8) 33.654%, rgba(208, 225, 227, 0.8) 67.788%, rgba(43, 62, 154, 0.8) 100%)',
      },
    ],
    impactCase: {
      eyebrow: 'Impact Case',
      title: 'Revolutionizing Traffic Data & Insights for Abu Dhabi Mobility',
      image: assets('commerce-and-operations', 'impact.png'),
      href: '/case-studies',
      cta: 'Explore',
    },
  },

  // -------------------------------------------------------------------------
  // People & Workforce — PLACEHOLDER, replace with real copy
  // -------------------------------------------------------------------------
  {
    slug: 'people-workforce',
    label: 'People & Workforce Intelligence',
    description:
      'See workforce capacity, skills, and deployment with the clarity leaders need.',
    hero: {
      title:
        'See workforce capacity, skills, and deployment with the clarity leaders need',
      image: assets('people-and-workforce', 'people-workforce.png'),
      video: assets('people-and-workforce', 'hero-video.mp4'),
    },
    overview:
      'Effective workforce management depends on understanding skills, scheduling, demand, and performance. Llumen creates a unified intelligence layer that links deployment decisions with operational and strategic outcomes.',
    keyAdvantagesEyebrow: 'Key Advantages',
    // Fallback only — every tab below carries its own gradient.
    keyAdvantagesGradient:
      'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
    keyAdvantages: [
      {
        id: 'capacity-mapping',
        label: 'Capacity Mapping',
        number: '01',
        title:
          'Understand where teams are stretched and where capacity is underused',
        description:
          'Llumen connects demand signals with workforce availability to highlight mismatches before they create service issues.',
        image: assets('people-and-workforce', 'advantage-01.png'),
        gradient:
          'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
      },
      {
        id: 'skills-alignment',
        label: 'Skills Alignment',
        number: '02',
        title:
          'Match the right skills to the right tasks as priorities shift',
        description:
          'Teams use structured intelligence to deploy specialists, support critical functions, and rebalance workloads quickly.',
        image: assets('people-and-workforce', 'advantage-02.png'),
        gradient:
          'linear-gradient(180deg, rgba(23, 93, 239, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(167, 159, 157, 0.8) 66.346%, rgba(242, 179, 150, 0.8) 98.558%)',
      },
      {
        id: 'workforce-planning',
        label: 'Workforce Planning',
        number: '03',
        title:
          'Build long-term hiring and training strategies from governed insight',
        description:
          'Leaders identify emerging gaps and performance trends using consistent definitions that avoid subjective interpretation.',
        image: assets('people-and-workforce', 'advantage-03.png'),
        gradient:
          'linear-gradient(180deg, rgba(94, 42, 0, 0.8) 1.4423%, rgba(188, 146, 93, 0.8) 33.654%, rgba(208, 225, 227, 0.8) 67.788%, rgba(43, 62, 154, 0.8) 100%)',
      },
    ],
    impactCase: {
      eyebrow: 'Impact Case',
      title: 'Workforce intelligence for a multi-entity public-sector employer',
      image: assets('people-and-workforce', 'impact.png'),
      href: '/case-studies',
      cta: 'Explore',
    },
  },

  // -------------------------------------------------------------------------
  // Cities & Infrastructure — real Figma copy (node 2435:10241)
  // Each Key Advantages tab has its own gradient applied to the outer card.
  // -------------------------------------------------------------------------
  {
    slug: 'cities-infrastructure',
    label: 'Cities & Infrastructure',
    description:
      'Govern the city through connected, cross-department intelligence',
    hero: {
      title: 'Govern the city through connected, cross-department intelligence',
      image: assets('cities-and-infrastructure', 'cities-infrastructure.png'),
      video: assets('cities-and-infrastructure', 'hero-video.mp4'),
    },
    overview:
      'City operations depend on coordination between transport, utilities, public works, planning, and citizen services. Llumen gives agencies a shared intelligence layer that reveals how conditions in one sector influence another. It supports both daily operations and long-range planning with structured, governed insight built for the complexity of modern cities.',
    keyAdvantagesEyebrow: 'Key Advantages',
    // Fallback only — every tab below carries its own gradient.
    keyAdvantagesGradient:
      'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
    keyAdvantages: [
      {
        id: 'urban-coordination',
        label: 'Urban Coordination',
        number: '01',
        title:
          'Synchronize transport, utilities, and public services during shifting city conditions',
        description:
          'Llumen highlights emerging pressure points across roads, assets, and service networks so operations teams can coordinate in real time without reconciling fragmented reports.',
        image: assets('cities-and-infrastructure', 'advantage-01.png'),
        gradient:
          'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
      },
      {
        id: 'public-service-responsiveness',
        label: 'Public Service Responsiveness',
        number: '02',
        title:
          'Link demand patterns, complaints, and service performance to guide interventions',
        description:
          'Leaders understand where service gaps form and what drives citizen sentiment, enabling data-backed decisions across departments.',
        image: assets('cities-and-infrastructure', 'advantage-02.png'),
        gradient:
          'linear-gradient(180deg, rgba(23, 93, 239, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(167, 159, 157, 0.8) 66.346%, rgba(242, 179, 150, 0.8) 98.558%)',
      },
      {
        id: 'planning-intelligence',
        label: 'Planning Intelligence',
        number: '03',
        title:
          'Evaluate long-term development using behavioral, spatial, and operational insight',
        description:
          'Planning teams explore growth scenarios and infrastructure stress using governed, multi-dimensional intelligence rather than scattered tools.',
        image: assets('cities-and-infrastructure', 'advantage-03.png'),
        gradient:
          'linear-gradient(180deg, rgba(94, 42, 0, 0.8) 1.4423%, rgba(188, 146, 93, 0.8) 33.654%, rgba(208, 225, 227, 0.8) 67.788%, rgba(43, 62, 154, 0.8) 100%)',
      },
    ],
    impactCase: {
      eyebrow: 'Impact Case',
      title: 'Unified Situational Awareness Across A Metropolitan Authority',
      image: assets('cities-and-infrastructure', 'impact.png'),
      href: '/case-studies',
      cta: 'Explore',
    },
  },

  // -------------------------------------------------------------------------
  // Environment & Energy — PLACEHOLDER, replace with real copy
  // -------------------------------------------------------------------------
  {
    slug: 'environment-energy',
    label: 'Environment & Energy',
    description:
      'Strengthen oversight of systems where early action matters most.',
    hero: {
      title:
        'Strengthen oversight of systems where early action matters most',
      image: assets('environment-energy', 'environment-energy.png'),
      video: assets('environment-energy', 'hero-video.mp4'),
    },
    overview:
      'Hospitals, environmental systems, and energy networks operate under constant pressure. Llumen integrates clinical indicators, environmental signals, and infrastructure telemetry into an intelligence layer built to catch problems early and support coordinated action.',
    keyAdvantagesEyebrow: 'Key Advantages',
    // Fallback only — every tab below carries its own gradient.
    keyAdvantagesGradient:
      'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
    keyAdvantages: [
      {
        id: 'early-signals',
        label: 'Early Signals',
        number: '01',
        title:
          'Detect shifts in clinical load, environmental readings, or grid performance',
        description:
          'Llumen highlights meaningful deviations without overwhelming teams with raw alerts.',
        image: assets('environment-energy', 'advantage-01.png'),
        gradient:
          'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
      },
      {
        id: 'impact-framing',
        label: 'Impact Framing',
        number: '02',
        title:
          'Reveal who or what is affected and how conditions might escalate',
        description:
          'Response teams understand dependencies and can prioritize interventions more effectively.',
        image: assets('environment-energy', 'advantage-02.png'),
        gradient:
          'linear-gradient(180deg, rgba(23, 93, 239, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(167, 159, 157, 0.8) 66.346%, rgba(242, 179, 150, 0.8) 98.558%)',
      },
      {
        id: 'stabilization-support',
        label: 'Stabilization Support',
        number: '03',
        title:
          'Coordinate operational steps across teams using shared intelligence',
        description:
          'Actions become clearer and more aligned when everyone sees the same structured context.',
        image: assets('environment-energy', 'advantage-03.png'),
        gradient:
          'linear-gradient(180deg, rgba(94, 42, 0, 0.8) 1.4423%, rgba(188, 146, 93, 0.8) 33.654%, rgba(208, 225, 227, 0.8) 67.788%, rgba(43, 62, 154, 0.8) 100%)',
      },
    ],
    impactCase: {
      eyebrow: 'Impact Case',
      title: 'Real-time emissions intelligence for a national utility',
      image: assets('environment-energy', 'impact.png'),
      href: '/case-studies',
      cta: 'Explore',
    },
  },

  // -------------------------------------------------------------------------
  // Trade & Customs — PLACEHOLDER, replace with real copy
  // -------------------------------------------------------------------------
  {
    slug: 'trade-customs',
    label: 'Trade & Customs',
    description:
      'Bring clarity to production, quality, and supply chains in one governed environment.',
    hero: {
      title:
        'Bring clarity to production, quality, and supply chains in one governed environment',
      image: assets('trade-customs', 'trade-customs.png'),
      video: assets('trade-customs', 'hero-video.mp4'),
    },
    overview:
      'Factories, production lines, and supply networks create complex operational signals—machine performance, quality trends, throughput stages, inventory movement, vendor reliability. Llumen connects these signals into an intelligence layer that supports both daily line management and long-horizon planning.',
    keyAdvantagesEyebrow: 'Key Advantages',
    // Fallback only — every tab below carries its own gradient.
    keyAdvantagesGradient:
      'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
    keyAdvantages: [
      {
        id: 'production-flow',
        label: 'Production Flow',
        number: '01',
        title:
          'See how materials, tasks, and batches progress through each stage of manufacturing',
        description:
          'Llumen helps teams understand cycle times, bottlenecks, and shifts in production rhythm without relying on manual dashboards.',
        image: assets('trade-customs', 'advantage-01.png'),
        gradient:
          'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
      },
      {
        id: 'quality-variance',
        label: 'Quality & Variance',
        number: '02',
        title:
          'Trace defects, deviations, and root causes across processes and suppliers',
        description:
          'Governed intelligence clarifies where issues emerge and how they propagate across production lines or batches.',
        image: assets('trade-customs', 'advantage-02.png'),
        gradient:
          'linear-gradient(180deg, rgba(23, 93, 239, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(167, 159, 157, 0.8) 66.346%, rgba(242, 179, 150, 0.8) 98.558%)',
      },
      {
        id: 'supply-chain-alignment',
        label: 'Supply Chain Alignment',
        number: '03',
        title:
          'Connect inbound supply, inventory levels, and production capacity',
        description:
          'Llumen highlights mismatches early, helping planners protect continuity, reduce downtime, and optimize resource allocation.',
        image: assets('trade-customs', 'advantage-03.png'),
        gradient:
          'linear-gradient(180deg, rgba(94, 42, 0, 0.8) 1.4423%, rgba(188, 146, 93, 0.8) 33.654%, rgba(208, 225, 227, 0.8) 67.788%, rgba(43, 62, 154, 0.8) 100%)',
      },
    ],
    impactCase: {
      eyebrow: 'Impact Case',
      title: 'Risk-targeted clearance for a national customs authority',
      image: assets('trade-customs', 'impact.png'),
      href: '/case-studies',
      cta: 'Explore',
    },
  },

  // -------------------------------------------------------------------------
  // Safety & Defense — PLACEHOLDER, replace with real copy
  // -------------------------------------------------------------------------
  {
    slug: 'safety-defense',
    label: 'Safety & Defense',
    description:
      'Support mission decisions with trusted, real-time situational intelligence.',
    hero: {
      title:
        'Support mission decisions with trusted, real-time situational intelligence',
      image: assets('safety-and-security', 'safety-defense.png'),
      video: assets('safety-and-security', 'hero-video.mp4'),
    },
    overview:
      'Security and defense environments demand precision and alignment. Llumen centralizes missions, patrols, incidents, investigations, and threat signals into an intelligence layer designed for the moment of decision.',
    keyAdvantagesEyebrow: 'Key Advantages',
    // Fallback only — every tab below carries its own gradient.
    keyAdvantagesGradient:
      'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
    keyAdvantages: [
      {
        id: 'mission-picture',
        label: 'Mission Picture',
        number: '01',
        title:
          'Give commanders a structured view of evolving operations',
        description:
          'Llumen brings patrols, alerts, and mission updates into live, drillable context so teams operate from a single understanding of the situation.',
        image: assets('safety-and-security', 'advantage-01.png'),
        gradient:
          'linear-gradient(180deg, rgba(2, 83, 153, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(19, 34, 81, 0.8) 100%)',
      },
      {
        id: 'tactical-coordination',
        label: 'Tactical Coordination',
        number: '02',
        title:
          'Align field units and command centers during fast-moving events',
        description:
          'Teams share the same intelligence framing, reducing miscommunication during time-sensitive operations.',
        image: assets('safety-and-security', 'advantage-02.png'),
        gradient:
          'linear-gradient(180deg, rgba(23, 93, 239, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(167, 159, 157, 0.8) 66.346%, rgba(242, 179, 150, 0.8) 98.558%)',
      },
      {
        id: 'investigative-insight',
        label: 'Investigative Insight',
        number: '03',
        title:
          'Trace timelines, signals, and relationships through governed data',
        description:
          'Investigators explore cases with structured lineage, reducing ambiguity and improving analytical confidence.',
        image: assets('safety-and-security', 'advantage-03.png'),
        gradient:
          'linear-gradient(180deg, rgba(94, 42, 0, 0.8) 1.4423%, rgba(188, 146, 93, 0.8) 33.654%, rgba(208, 225, 227, 0.8) 67.788%, rgba(43, 62, 154, 0.8) 100%)',
        imageBackground: '#a4b9ab',
      },
    ],
    impactCase: {
      eyebrow: 'Impact Case',
      title: 'A unified intelligence environment for a federal security command',
      image: assets('safety-and-security', 'impact.png'),
      href: '/case-studies',
      cta: 'Explore',
    },
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
