import type { FeatureCardGradient } from '@/lib/feature-card-layout';
import type { IconName } from '@/components/PixonalIcon';

export type FeatureCardSize = 'large' | 'medium' | 'small';

export type FeatureCard = {
  title: string;
  description: string;
  image?: string;
  /** Intrinsic asset size — card width = aspect fit + 20px padding per side. */
  imageWidth?: number;
  imageHeight?: number;
  gradient?: FeatureCardGradient;
  /** Full CSS `background` shorthand — overrides `gradient` when set (e.g. radial blobs). */
  cardBackground?: string;
  /** Legacy preset widths when intrinsic size is not set. */
  size?: FeatureCardSize;
  width?: number;
  /** When true, the asset covers the entire 462px frame edge-to-edge (no padding). */
  bleed?: boolean;
  /** CSS object-position for the asset (e.g. 'left center'). Applies to bleed and contained modes. */
  objectPosition?: string;
  /** Auto-detected from `image` extension when omitted. */
  mediaType?: 'image' | 'video';
};

export type SecondaryFeature = {
  title: string;
  description: string;
  image: string;
};

export type FeatureSectionContent = {
  id: string;
  title: string;
  description: string;
  descriptionLead?: string;
  cards: FeatureCard[];
  secondaryFeatures?: SecondaryFeature[];
};

export const semanticGovernance: FeatureSectionContent = {
  id: 'semantic-governance',
  title: 'Semantic Governance',
  descriptionLead: 'The foundation that keeps intelligence aligned.',
  description:
    'Semantic Governance defines how data behaves inside Llumen. It establishes shared meaning for metrics, models, and rules, creating a single, consistent layer that every dashboard, narrative, simulation, and AI output relies on. This foundation keeps intelligence trusted, unified, and ready for the moment of decision.',
  cards: [
    {
      title: 'Unified Metric Store',
      description:
        'Define each metric once and use it consistently across dashboards, narratives, and AI outputs to ensure a unified and stable meaning everywhere.',
      image: '/images/llumen/semantic-governance/semantic-governance-01.png',
      imageWidth: 2400,
      imageHeight: 1200,
      gradient: { from: '#000000', to: '#001232' },
    },
    {
      title: 'Governed AI Layer',
      description:
        'AI models operate within certified metrics and controlled semantics, keeping every result reliable and fully aligned with enterprise rules.',
      image: '/images/llumen/semantic-governance/semantic-governance-02.png',
      imageWidth: 1086,
      imageHeight: 1488,
      gradient: { from: '#000000', to: '#000000' },
    },
    {
      title: 'Global Smart Filters',
      description:
        'Filters are tied to the semantic layer and update all views instantly, so one change cascades automatically across whiteboards, dashboards, and narratives.',
      image: '/images/llumen/semantic-governance/semantic-governance-03.png',
      imageWidth: 1870,
      imageHeight: 1200,
      gradient: { from: '#000000', to: '#517ccb' },
    },
    {
      title: 'Access Control & Audit Trails',
      description:
        'Managing permissions and tracking every action across the platform delivers full compliance and clear operational accountability.',
      image: '/images/llumen/semantic-governance/semantic-governance-04.png',
      imageWidth: 1400,
      imageHeight: 1076,
      gradient: { from: '#6f6f6f', to: '#454f74' },
    },
  ],
  secondaryFeatures: [
    {
      title: 'Feature & Metric Lineage',
      description:
        "Track where each metric comes from, how it's built, and where it's used, improving transparency and strengthening trust in every output.",
      image: '/images/llumen/features/feature-lineage.png',
    },
    {
      title: 'System Observability',
      description:
        'Monitor latency, data freshness, and query performance in real time, helping teams maintain a healthy and reliable intelligence pipeline.',
      image: '/images/llumen/features/feature-system-observability.png',
    },
    {
      title: 'Enterprise Connectivity',
      description:
        'Securely integrate databases, APIs, uploads, and generative models, supporting any internal architecture—on-prem, cloud, or hybrid.',
      image: '/images/llumen/features/features-enterprise-connectivity.png',
    },
  ],
};

export const aiPoweredInteraction: FeatureSectionContent = {
  id: 'ai-interaction',
  title: 'AI-Powered Interaction',
  descriptionLead: 'An active environment for exploring and shaping intelligence.',
  description:
    "Interaction in Llumen is built for clarity and depth. Users dive into metrics, run simulations, explore spatial layers, and build views through intuitive actions. Everything in the interface responds to the user's intent, enabling real-time exploration, fast iteration, and decision-making without leaving the platform or switching tools.",
  cards: [
    {
      title: 'Predictive Simulation',
      description:
        'Define metrics once and use them everywhere to ensure consistent meaning across all dashboards, narratives, and AI outputs.',
      image: '/images/llumen/ai-powered-interaction/ai-powered-interaction-01.png',
      imageWidth: 4096,
      imageHeight: 3039,
      width: 821,
      cardBackground:
        'radial-gradient(60% 80% at 0% 0%, rgba(106, 90, 205, 0.55), transparent 70%), radial-gradient(50% 70% at 0% 100%, rgba(214, 78, 154, 0.45), transparent 70%), #29283c',
    },
    {
      title: 'Generative Visualization Agents',
      description:
        'AI models operate within certified metrics and controlled semantics, ensuring reliable, rule-aligned results.',
      image: '/images/llumen/ai-powered-interaction/ai-powered-interaction-02.png',
      width: 383,
      bleed: true,
    },
    {
      title: 'Command Room Builder',
      description:
        'Design video walls for operations centers that effectively coordinate live events using integrated, real-time feeds: data, CCTV, timers, and spatial layers.',
      image: '/images/llumen/ai-powered-interaction/ai-powered-interaction-03.png',
      width: 821,
      bleed: true,
    },
    {
      title: 'Contextual Alerts',
      description:
        'Alerts instantly generate situational views explaining the event, its importance, and recommended next steps.',
      image: '/images/llumen/ai-powered-interaction/ai-powered-interaction-04.png',
      imageWidth: 750,
      imageHeight: 510,
      width: 383,
      gradient: { from: '#4d4d4d', to: '#220000' },
    },
    {
      title: 'Personalized Intelligence Feed',
      description:
        "The dynamic landing page adapts to the user's role and behavior, automatically surfacing critical reports, anomalies, and updates.",
      image: '/images/llumen/ai-powered-interaction/ai-powered-interaction-05.mp4',
      width: 821,
      bleed: true,
    },
    {
      title: 'Interactive Whiteboard',
      description:
        'Drag metrics, maps, and components onto a canvas to group insights, annotate findings, and explore scenarios collaboratively.',
      image: '/images/llumen/ai-powered-interaction/ai-powered-interaction-06.mp4',
      width: 383,
      bleed: true,
    },
  ],
  secondaryFeatures: [
    {
      title: 'Drag-and-Drop Builders',
      description:
        'Visually assemble custom dashboards, narratives, and command views where every component is automatically bound to pre-defined semantic governance.',
      image: '/images/llumen/features/feature-drag-and-drop.png',
    },
    {
      title: 'Visualization Library',
      description:
        'Access charts, geospatial layers, and domain-specific visuals optimized for operational, tactical, and executive decision-making.',
      image: '/images/llumen/features/feature-visualization-library.png',
    },
  ],
};

export const seamlessCommunication: FeatureSectionContent = {
  id: 'seamless-communication',
  title: 'Seamless Communication',
  descriptionLead: 'Clear, shared intelligence delivered at the moment of decision.',
  description:
    'Communication is where intelligence becomes alignment. Llumen turns insights into interactive briefings, mobile reports, and collaborative spaces—each one connected to live data. Teams share context, not screenshots, and stay aligned across meetings, operations, and rapid decision cycles.',
  cards: [
    {
      title: 'Interactive Narratives',
      description:
        'Create story-driven briefings for reviews and presentations, featuring charts that remain live and drillable for data exploration.',
      image: '/images/llumen/seamless-communication/seamless-communication-01.mp4',
      width: 821,
      bleed: true,
    },
    {
      title: 'Automated Mobile Briefings',
      description:
        'Deliver scheduled or event-triggered updates directly to mobile devices, ensuring leaders remain fully informed even when they are away from their primary workstation.',
      image: '/images/llumen/seamless-communication/seamless-communication-02.mp4',
      width: 383,
      bleed: true,
    },
    {
      title: 'Event-Driven Dashboards',
      description:
        'Alerts automatically generate contextual dashboards with the right components, ideal for monitoring incidents, data spikes, anomalies, and live operations.',
      image: '/images/llumen/seamless-communication/seamless-communication-03.mp4',
      width: 821,
      bleed: true,
    },
    {
      title: 'In-Platform Collaboration',
      description:
        'Comment, tag colleagues, and share views without exporting, keeping the conversation attached to the live data source.',
      image: '/images/llumen/seamless-communication/seamless-communication-04.mp4',
      width: 383,
      bleed: true,
    },
    {
      title: 'Analytical Whiteboard',
      description:
        'Collaborate on a shared canvas featuring charts, maps, annotations, and interactive scenarios, effectively transforming traditional meetings into actionable insight sessions.',
      image: '/images/llumen/seamless-communication/seamless-communication-05.png',
      imageWidth: 3840,
      imageHeight: 2160,
      width: 711,
      bleed: true,
    },
  ],
  secondaryFeatures: [
    {
      title: 'Unified Workspaces',
      description:
        'Visually assemble custom dashboards, narratives, and command views where every component is automatically bound to pre-defined semantic governance.',
      image: '/images/llumen/features/feature-unified-workspaces.png',
    },
    {
      title: 'Link-Based Sharing',
      description:
        'A centralized repository providing access to charts, geospatial layers, and domain-specific visuals, all optimized to support operational, tactical, and executive decision-making.',
      image: '/images/llumen/features/feature-link-based-sharing.png',
    },
  ],
};

export type RoleTab = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  cards: FeatureCard[];
};

export const llumenRolesIntroLead =
  'A versatile platform for every role.';

export const llumenRolesIntro =
  'Llumen empowers executives, analysts, IT, and operations teams alike — giving each role the insights, controls, and shared context they need to move from data to confident decisions.';

export const llumenRoles: RoleTab[] = [
  {
    id: 'decision-maker',
    label: 'Decision Maker',
    title: 'Decision Maker',
    subtitle: 'Instant clarity at the moment of decision',
    description:
      'Decision Makers get a clear, real-time view of what matters most. Llumen delivers situational intelligence in formats built for speed and confidence. Every view is governed, live, and structured for immediate understanding, whether in a boardroom, command room, or on mobile.',
    cards: [
      {
        title: 'Situational Views',
        description:
          'Live, governed dashboards are built for high-level awareness, clearly showing what is currently happening and detailing the corresponding impact on key operational areas.',
        image: '/images/llumen/llumen-by-roles/decision-maker/decision-maker-01.png',
        imageWidth: 1422,
        imageHeight: 924,
        width: 711,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Mobile Briefings',
        description:
          'Automated, concise updates deliver mobile information, keeping leaders informed without requiring them to log in.',
        image: '/images/llumen/llumen-by-roles/decision-maker/decision-maker-02.mp4',
        width: 383,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Interactive Narratives',
        description:
          'Story-style briefings are created with every element remaining live and drillable, providing the perfect format for detailed leadership updates and strategic discussions.',
        image: '/images/llumen/llumen-by-roles/decision-maker/decision-maker-03.png',
        width: 821,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Contextual Alerts',
        description:
          'Alerts are designed to fully explain the event while simultaneously recommending next steps, making them ideal for accelerating operational and other time-sensitive decisions.',
        image: '/images/llumen/llumen-by-roles/decision-maker/decision-maker-04.mp4',
        width: 383,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Command-Room Ready Layouts',
        description:
          'Data views are optimized for large operations center displays, making information visible and actionable during live coordination.',
        image: '/images/llumen/llumen-by-roles/decision-maker/decision-maker-05.png',
        width: 383,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Aligned Definitions',
        description:
          'All metrics strictly adhere to semantic governance, ensuring every leader consistently views the same meaning, underlying structure, and definitive values for all data.',
        image: '/images/llumen/llumen-by-roles/decision-maker/decision-maker-06.mp4',
        width: 821,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
    ],
  },
  {
    id: 'data-analyst',
    label: 'Data Analyst',
    title: 'Data Analyst',
    subtitle: 'A governed environment for deep analysis and fast creation',
    description:
      'Analysts explore, test, and build inside a unified intelligence environment. Llumen reduces tool switching, keeps data consistent, and transforms analysis into interactive intelligence that can be shared instantly across teams.',
    cards: [
      {
        title: 'Interactive Whiteboard',
        description:
          'Users can drag metrics, maps, and components onto a canvas to visually explore scenarios, annotate insights, and construct analytical logic.',
        image: '/images/llumen/llumen-by-roles/data-analyst/data-analyst-01.mp4',
        width: 821,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'AI-Assisted Metric Creation',
        description:
          'AI helps analysts define or refine metrics and models, accelerating transformation work while strictly adhering to semantic governance.',
        image: '/images/llumen/llumen-by-roles/data-analyst/data-analyst-02.png',
        imageWidth: 1076,
        imageHeight: 1482,
        width: 383,
        gradient: { from: '#000000', to: '#84b1f5' },
      },
      {
        title: 'Predictive Simulation',
        description:
          'Trigger models inside Llumen to visualize outcomes immediately, ideal for testing scenarios without exporting the data.',
        image: '/images/llumen/llumen-by-roles/data-analyst/data-analyst-03.png',
        imageWidth: 2782,
        imageHeight: 1860,
        width: 821,
        gradient: { from: '#5f6792', to: '#000001' },
      },
      {
        title: 'Governed Diving & Filtering',
        description:
          'Users can drill into specific data segments or outliers using a consistent set of unified filters, ensuring that every resulting deep dive is governed and fully reproducible.',
        image: '/images/llumen/llumen-by-roles/data-analyst/data-analyst-04.png',
        width: 821,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Dashboard & Narrative Builders',
        description:
          'Dashboards and stories can be easily built using drag-and-drop simplicity, ensuring the final outputs remain live and instantly ready for immediate sharing.',
        image: '/images/llumen/llumen-by-roles/data-analyst/data-analyst-05.png',
        width: 383,
        bleed: true,
        cardBackground:
          'linear-gradient(to bottom, #1c1c1c 46.753%, #3362b7 100%)',
      },
    ],
  },
  {
    id: 'business-teams',
    label: 'Business Teams',
    title: 'Business Teams',
    subtitle: 'Self-service intelligence without technical barriers',
    description:
      'Business users engage with intelligence through simple, interactive flows. Llumen empowers non-technical teams to understand, explore, and share insights without relying on analysts or exporting into slides.',
    cards: [
      {
        title: 'Personalized Intelligence Feed',
        description:
          "The dynamic landing page adapts to the user's role and behavior, automatically surfacing critical reports, anomalies, and updates.",
        image: '/images/llumen/llumen-by-roles/business-teams/business-teams-01.png',
        imageWidth: 1086,
        imageHeight: 1364,
        width: 383,
        cardBackground:
          'radial-gradient(120% 90% at 100% 100%, #93b3f0 0%, transparent 60%), radial-gradient(110% 90% at 0% 0%, #b6c0e6 0%, transparent 65%), linear-gradient(180deg, #8aa6e0 0%, #b8c6ec 50%, #8ba8e3 100%)',
      },
      {
        title: 'Live Dashboards',
        description:
          'Clear, actionable, and always up-to-date views are powered by governed metrics to ensure fast understanding.',
        image: '/images/llumen/llumen-by-roles/business-teams/business-teams-02.png',
        width: 821,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Interactive Narratives',
        description:
          'Story-style holdings are created with every element remaining live and drillable, providing the perfect format for industrial leadership updates and strategic discussions.',
        image: '/images/llumen/llumen-by-roles/business-teams/business-teams-03.png',
        width: 383,
        bleed: true,
        objectPosition: 'left center',
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Topic Library',
        description:
          'Browse intelligence organized by themes or operational areas to make complex information easy to find.',
        image: '/images/llumen/llumen-by-roles/business-teams/business-teams-04.png',
        imageWidth: 2400,
        imageHeight: 1200,
        width: 383,
        cardBackground: 'linear-gradient(to bottom, #000000, #132251)',
      },
      {
        title: 'Event-Driven Updates',
        description:
          'Dashboards and views are triggered by alerts or thresholds, helping teams react to changes quickly.',
        image: '/images/llumen/llumen-by-roles/business-teams/business-teams-05.png',
        width: 821,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'In-Platform Collaboration',
        description:
          'Comment, tag colleagues, and share views without exporting, keeping the conversation attached to the live data source.',
        image: '/images/llumen/llumen-by-roles/business-teams/business-teams-06.png',
        width: 821,
        bleed: true,
        cardBackground: '#000000',
      },
    ],
  },
  {
    id: 'data-engineers',
    label: 'Data Engineers',
    title: 'Data Engineers',
    subtitle: 'A governed platform that lets technical teams focus on what matters',
    description:
      'Data Engineers manage the backbone of intelligence. Llumen gives them the structure to define metrics, rules, and connections once, so they can focus on quality, pipelines, and semantics while the rest of the organization self-serves intelligence.',
    cards: [
      {
        title: 'Semantic Governance Layer',
        description:
          'Defining and managing metrics, models, and data rules centrally ensures every output relies on aligned definitions.',
        image: '/images/llumen/llumen-by-roles/data-engineers/data-engineers-01.mp4',
        width: 383,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Enterprise Connectivity',
        description:
          'Secure integrations with databases, APIs, uploads, and AI models support any internal architecture including on-prem, cloud, or hybrid.',
        image: '/images/llumen/llumen-by-roles/data-engineers/data-engineers-02.png',
        imageWidth: 2804,
        imageHeight: 2004,
        width: 821,
        cardBackground: 'linear-gradient(to bottom, #000000, #84b1f5)',
      },
      {
        title: 'Access Control & Permissions',
        description:
          'Assigning granular visibility and creation rights protects sensitive data while enabling self-service.',
        image: '/images/llumen/llumen-by-roles/data-engineers/data-engineers-03.mp4',
        width: 711,
        bleed: true,
        gradient: { from: '#242424', to: '#414141' },
      },
      {
        title: 'Audit Trails',
        description:
          'Filters are tied to the semantic layer and update all views instantly, so one change cascades automatically across whiteboards, dashboards, and narratives.',
        image: '/images/llumen/llumen-by-roles/data-engineers/data-engineers-04.png',
        imageWidth: 1986,
        imageHeight: 560,
        width: 711,
        cardBackground: 'linear-gradient(to bottom, #000000, #2b3e9a)',
      },
      {
        title: 'LLM-Agnostic Foundation',
        description:
          'Utilizing any internal or external AI model securely ensures flexibility while preventing exposure of sensitive data.',
        image: '/images/llumen/llumen-by-roles/data-engineers/data-engineers-05.png',
        width: 462,
        // The icon export is now a standalone graphic; render it centered (no
        // bleed) on top of the Figma gradient (two soft radial highlights over
        // a deep navy base — Figma node 2656:9551).
        cardBackground:
          'radial-gradient(64% 51% at 11% 57%, rgba(200, 205, 230, 0.35) 0%, rgba(200, 205, 230, 0) 70%), radial-gradient(83% 66% at 34% 14%, rgba(50, 60, 170, 0.75) 0%, rgba(50, 60, 170, 0) 70%), #0a0a30',
      },
    ],
  },
];

export const impactIndustries = [
  'Mobility and Transportation',
  'Real-Estate And Assets',
  'Citizen & Service Experience',
  'Technology Infrastructure',
  'Military & Defense',
  'Safety & Law Enforcement',
] as const;

export type IndustrySlide = {
  id: string;
  /** Tab label (rendered uppercase). */
  label: string;
  /** Slide ordinal e.g. '01'. */
  number: string;
  title: string;
  impact: string;
  benefits: string;
  image: string;
  /** Full CSS `background` shorthand applied to the panel + tabs surface. */
  gradient: string;
};

export const llumenIndustriesIntroLead =
  'Llumen brings governed intelligence to the systems that run cities, businesses, and society.';

export const llumenIndustriesIntro =
  'Turning fragmented data into coordinated decisions across every industry — Llumen aligns operations, policy, and citizen-facing services around one shared, verifiable picture of the truth.';

export const llumenIndustries: IndustrySlide[] = [
  {
    id: 'cities-infrastructure',
    label: 'Cities & Digital Twin',
    number: '01',
    title: 'Plan, manage, and monitor the city from one live interface',
    impact:
      'Llumen brings transport, utilities, and municipal systems into one live view so cities can understand what is happening across roads, services, and public spaces.',
    benefits:
      'Faster coordination, clearer situational awareness, and reliable insight for command rooms and daily operations.',
    image: '/images/llumen/impact/impact-01.png',
    gradient:
      'linear-gradient(180deg, rgba(59, 58, 158, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(173, 148, 136, 0.8) 56.731%, rgba(5, 5, 21, 0.8) 100%)',
  },
  {
    id: 'commerce-operations',
    label: 'Commerce & Operations',
    number: '02',
    title: 'Run, track, and optimize operations from one connected view',
    impact:
      'Llumen connects delivery fleets, warehouses, logistics networks, and ground operations into one operational picture.',
    benefits:
      'Teams can spot delays, predict disruptions, and improve service quality without jumping between systems.',
    image: '/images/llumen/impact/impact-02.jpg',
    gradient:
      'linear-gradient(180deg, rgba(23, 93, 239, 0.8) 0%, rgba(208, 225, 227, 0.8) 32.212%, rgba(167, 159, 157, 0.8) 66.346%, rgba(242, 179, 150, 0.8) 98.558%)',
  },
  {
    id: 'people-workforce',
    label: 'People & Workforce Intelligence',
    number: '03',
    title: 'Understand, deploy, and support your workforce in real time',
    impact:
      'Llumen unifies workforce data, performance, skills, and deployment into a clear, real-time view.',
    benefits:
      'Leaders can match demand with capacity, identify gaps early, and make workforce decisions with confidence.',
    image: '/images/llumen/impact/impact-03.jpg',
    gradient:
      'linear-gradient(180deg, rgba(49, 113, 236, 0.8) 0%, rgba(255, 229, 174, 0.8) 32.212%, rgba(147, 116, 158, 0.8) 66.346%, rgba(202, 131, 169, 0.8) 98.558%)',
  },
  {
    id: 'safety-security-defense',
    label: 'Safety, Security & Defense',
    number: '04',
    title:
      'Assess, coordinate, and respond through a unified intelligence environment',
    impact:
      'Llumen centralizes missions, patrols, incidents, and investigations into a trusted, live intelligence environment.',
    benefits:
      'Commanders gain instant visibility to coordinate teams, assess risk, and respond quickly.',
    image: '/images/llumen/impact/impact-04.jpg',
    gradient:
      'linear-gradient(180deg, rgba(37, 74, 145, 0.8) 0%, rgba(137, 164, 209, 0.8) 32.212%, rgba(120, 116, 158, 0.8) 66.346%, rgba(101, 60, 82, 0.8) 98.558%)',
  },
  {
    id: 'health-environment-energy',
    label: 'Health, Environment & Energy',
    number: '05',
    title:
      'Detect, diagnose, and act on critical signals before they escalate',
    impact:
      'Llumen integrates hospital systems, environmental signals, and energy networks into one monitored ecosystem.',
    benefits:
      'Organizations detect anomalies earlier, reduce downtime, and act before issues escalate.',
    image: '/images/llumen/impact/impact-05.png',
    gradient:
      'linear-gradient(180deg, rgba(242, 179, 150, 0.8) 1.4423%, rgba(137, 127, 171, 0.8) 33.654%, rgba(2, 83, 153, 0.8) 100%)',
  },
  {
    id: 'real-time-monitoring',
    label: 'Real-time situation monitoring',
    number: '06',
    title: 'See, predict, and manage events as they unfold',
    impact:
      'Llumen brings crowd movement, mobility, operations, and safety data together for real-time event oversight.',
    benefits:
      'Teams can manage flow, prevent congestion, and coordinate responses during large events or complex venues.',
    image: '/images/llumen/impact/impact-06.jpg',
    gradient:
      'linear-gradient(180deg, rgba(151, 128, 255, 0.8) 1.4423%, rgba(188, 146, 93, 0.8) 33.654%, rgba(208, 225, 227, 0.8) 67.788%, rgba(43, 62, 154, 0.8) 100%)',
  },
];

export type LicenseTier = 'signal' | 'core' | 'command' | 'castle';

export type LicenseRow = {
  icon: IconName;
  label: string;
  values: Record<LicenseTier, string>;
};

export const licenseTiers: { id: LicenseTier; label: string; image: string }[] = [
  { id: 'signal', label: 'signal', image: '/images/llumen/licenses/signal.png' },
  { id: 'core', label: 'core', image: '/images/llumen/licenses/core.png' },
  { id: 'command', label: 'command', image: '/images/llumen/licenses/command.png' },
  { id: 'castle', label: 'castle', image: '/images/llumen/licenses/castle.png' },
];

export const licenseRows: LicenseRow[] = [
  {
    icon: 'eye',
    label: 'view users',
    values: {
      signal: 'Unlimited within Domain',
      core: 'Unlimited',
      command: 'Unlimited',
      castle: 'Unlimited',
    },
  },
  {
    icon: 'hammer',
    label: 'build users',
    values: {
      signal: 'Unlimited within Domain',
      core: 'Unlimited within Domain',
      command: 'Unlimited within Domain',
      castle: 'Unlimited within Domain',
    },
  },
  {
    icon: 'hard-drives',
    label: 'Hosting',
    values: {
      signal: 'Multi-tenant cloud (Pixonal Cloud)',
      core: 'Multi-tenant cloud (Pixonal Cloud)',
      command: 'Sovereign cloud single-tenant',
      castle: 'On-prem / air-gapped',
    },
  },
  {
    icon: 'git-fork',
    label: 'Data sources',
    values: {
      signal: '5 included',
      core: '25 Included',
      command: 'Unlimited',
      castle: 'Unlimited',
    },
  },
  {
    icon: 'bell-ringing',
    label: 'Alerts',
    values: { signal: 'No', core: 'Yes', command: 'Yes', castle: 'Yes' },
  },
  {
    icon: 'monitor',
    label: 'command rooms',
    values: { signal: 'No', core: 'No', command: 'Unlimited', castle: 'Unlimited' },
  },
  {
    icon: 'graph',
    label: 'Predictive models',
    values: { signal: 'No', core: 'Yes', command: 'Yes', castle: 'Yes' },
  },
  {
    icon: 'head-circuit',
    label: 'Llumen Agents Builder',
    values: { signal: 'No', core: 'No', command: 'Yes', castle: 'Yes' },
  },
  {
    icon: 'hand-palm',
    label: 'Access control',
    values: {
      signal: 'Role-based',
      core: 'Role + attribute',
      command: 'Full with BYOK',
      castle: 'Full identity integration',
    },
  },
  {
    icon: 'clipboard-text',
    label: 'Audit logging',
    values: {
      signal: 'Access logging',
      core: 'Access logging',
      command: 'Extended retention',
      castle: 'Logs stored on client servers',
    },
  },
];
