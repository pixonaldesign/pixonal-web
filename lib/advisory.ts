import type { IconName } from '@/components/PixonalIcon';

/** Hero copy + background art for the Advisory page. */
export const advisoryHero = {
  eyebrow: 'Advisory',
  title: 'The Modern Blueprint of Decision-Making',
  subtitle:
    'We help institutions build the conditions for confident decision-making in environments defined by complexity, velocity, and accelerating AI.',
  image: '/images/advisory/hero.png',
} as const;

/** Large centered statements that bookend the services grid. */
export const advisoryServicesIntro =
  'Our integrated suite of strategic advisory services grounds intelligence on a formalized foundation of business understanding, to enable both humans and AI to make more confident decisions.';

export const advisoryServicesOutro =
  'We align business intent with disciplined governance and decision architecture, shaping how intelligence is encountered across moments and audiences. The result is decision confidence at scale, where human judgment and advanced analytics operate from the same coherent ground truth.';

export interface AdvisoryService {
  number: string;
  title: string;
  description: string;
  image: string;
  /** `wide` spans 3 of 4 columns at lg+, `narrow` spans 1. */
  span: 'wide' | 'narrow';
}

export const advisoryServices: AdvisoryService[] = [
  {
    number: '01',
    title: 'Decision Intelligence & Advanced Analytics',
    description:
      'Define the decisions, flows, and evidentiary thresholds that sustain leadership judgment.',
    image: '/images/advisory/services/service-01.jpg',
    span: 'wide',
  },
  {
    number: '02',
    title: 'Experience & Product Vision',
    description:
      'Shape how intelligence is encountered across moments and audiences so clarity survives scale.',
    image: '/images/advisory/services/service-02.jpg',
    span: 'narrow',
  },
  {
    number: '03',
    title: 'Data Strategy & Governance',
    description:
      'Codify meaning, ownership, and provenance so analytics is disciplined, trusted, and defensible.',
    image: '/images/advisory/services/service-03.jpg',
    span: 'narrow',
  },
  {
    number: '04',
    title: 'Sector-Specific Consultancy',
    description:
      'Anchor every engagement in expert-validated domain truth ensuring relevance, fit, and impact.',
    image: '/images/advisory/services/service-04.jpg',
    span: 'wide',
  },
];

/** "Move faster, govern better" banner above the execution-engine grid. */
export const advisoryMethodologyBanner = {
  title: 'Move faster, Govern better, & Decide with Clarity.',
  subtitle:
    'Our methodologies, experts, and frameworks establish the underlying logic and governance that allow human judgment and machine intelligence to operate as one system—grounded in shared meaning and trusted evidence.',
  image: '/images/advisory/methodology.png',
} as const;

export const advisoryEngine = {
  title: 'The execution engine that powers outcomes',
  descriptionLead:
    'Our engagements are relentlessly focused on outcomes that hold.',
  description:
    'We combine design thinking, structured discovery, expert validation, and pragmatic analysis to ensure what emerges is usable, auditable, and ready to sustain execution.',
} as const;

export interface AdvisoryEngineStep {
  icon: IconName;
  title: string;
  description: string;
}

export const advisoryEngineSteps: AdvisoryEngineStep[] = [
  {
    icon: 'magnifying-glass',
    title: 'Discovery & User Research',
    description:
      'Defining scope, stakeholders, decision focus, and evidence requirements to align direction early.',
  },
  {
    icon: 'arrow-up-right',
    title: 'Current & Desired State Assessment',
    description:
      'Establishing the current baseline and defining the target capability state across decisions, governance, experience, and sector fit.',
  },
  {
    icon: 'intersect',
    title: 'Gap Analysis & Thematic Findings',
    description:
      'Synthesizing evidence into structured themes explaining what is missing, why it matters, and what to address.',
  },
  {
    icon: 'flag-banner-fold',
    title: 'Capabilities Roadmap & Adoption Phasing',
    description:
      'Sequencing capabilities, dependencies, and adoption into an achievable plan linked to impact.',
  },
  {
    icon: 'strategy',
    title: 'Workshops & Facilitation Programs',
    description:
      'Aligning stakeholders through structured sessions for decisions, use cases, and requirements.',
  },
  {
    icon: 'seal-check',
    title: 'Expert Validation & Specialist Review',
    description:
      'Reinforcing credibility through structured reviews with domain experts and decision owners.',
  },
];

/** "Informed by diversity" industry mosaic. */
export const advisoryIndustriesIntro = {
  title: 'Informed by Diversity, Anchored in Domain Expertise',
  description:
    'Across a wide range of institutional contexts, our work has sharpened a clear sense of what transfers across domains and what must remain specific. The result is a specialist approach that adapts with clarity, grounded in expert validation and leadership-grade standards.',
} as const;

export interface AdvisoryIndustryTile {
  label: string;
  href: string;
  image: string;
  /** `wide` spans 2 of 4 columns at lg+. */
  span: 'wide' | 'narrow';
}

export const advisoryIndustryTiles: AdvisoryIndustryTile[] = [
  {
    label: 'People & Workforce',
    href: '/industries/people-workforce',
    image: '/images/industries/people-and-workforce/people-workforce.png',
    span: 'narrow',
  },
  {
    label: 'Cities & Infrastructure',
    href: '/industries/cities-infrastructure',
    image:
      '/images/industries/cities-and-infrastructure/cities-infrastructure.png',
    span: 'wide',
  },
  {
    label: 'Environment & Energy',
    href: '/industries/environment-energy',
    image: '/images/industries/environment-energy/environment-energy.png',
    span: 'narrow',
  },
  {
    label: 'Commerce & Operations',
    href: '/industries/commerce-operations',
    image: '/images/industries/commerce-and-operations/commerce-operations.png',
    span: 'wide',
  },
  {
    label: 'Trade & Customs',
    href: '/industries/trade-customs',
    image: '/images/industries/trade-customs/trade-customs.png',
    span: 'narrow',
  },
  {
    label: 'Safety & Defense',
    href: '/industries/safety-defense',
    image: '/images/industries/safety-and-security/safety-defense.png',
    span: 'narrow',
  },
];

/** "Architects of decision confidence" team grid. */
export const advisoryTeamIntro = {
  title: 'The Architects of Decision Confidence',
  description:
    'Domain experts with deep exposure to leadership decision-making—bringing context, capability, and confidence to the moments that matter.',
} as const;

export interface AdvisoryTeamMember {
  name: string;
  role: string;
  image: string;
}

const TEAM_IMAGE = '/images/advisory/team/advisor.png';

export const advisoryTeam: AdvisoryTeamMember[] = [
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
  { name: 'Mark Rashford', role: 'Principal Advisor, Decision Intelligence', image: TEAM_IMAGE },
];

export const advisoryBlogHeading = 'Know More From our Blog';
