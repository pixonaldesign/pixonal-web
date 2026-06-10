import type { IconName } from '@/components/PixonalIcon';

/**
 * Per-industry deep-dive case studies rendered below the Key Advantages
 * carousel on /industries/[slug].
 *
 * Only a subset of industries have a case study (cities-infrastructure,
 * people-workforce, safety-defense). The page renders the section only when
 * `getIndustryCaseStudy(slug)` returns a record, so unmapped industries are
 * unaffected.
 *
 * Image assets are placeholders for now (reusing existing industry/home art);
 * swap the `image` paths once the real case-study exports are in
 * /public/images/industries/<folder>/case-study/.
 */

export type CaseStudyAspect = '16/9' | '3/4' | '1/1';

/** A single headline metric in the intro stats row. */
export interface CaseStudyStat {
  /** Large value, e.g. "70B", "92%". */
  value: string;
  /** Supporting label, e.g. "Data size". */
  label: string;
}

/** A point in a grid section (challenges, objectives, results). */
export interface CaseStudyPoint {
  title: string;
  description: string;
  /** Phosphor icon shown above the title (advisory-card style). */
  icon?: IconName;
}

/** A media + data slide rendered inside a carousel. */
export interface CaseStudyMediaSlide {
  id: string;
  image: string;
  title: string;
  description?: string;
  /** Card frame aspect ratio. Defaults to `16/9`. */
  aspect?: CaseStudyAspect;
}

/** A text-grid section. */
export interface CaseStudyPointsSection {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  points: CaseStudyPoint[];
  /** Optional banner image rendered below the card grid. */
  image?: string;
  /** Max grid columns at the largest breakpoint. Defaults to 3. */
  columns?: 2 | 3;
}

/** A closing statement — title, a lead paragraph, and an optional image. */
export interface CaseStudyClosingSection {
  id: string;
  title: string;
  body: string;
  image?: string;
}

/** A titled group of icon cards inside the Approach section. */
export interface CaseStudyApproachGroup {
  id: string;
  title: string;
  points: CaseStudyPoint[];
}

/** Approach & Methodology — a main title plus stacked icon-card groups. */
export interface CaseStudyApproachSection {
  id: string;
  title: string;
  groups: CaseStudyApproachGroup[];
}

/** A carousel section holding media + data slides. */
export interface CaseStudyMediaSection {
  id: string;
  eyebrow?: string;
  title: string;
  /** Bold lead-in sentence before the muted subtitle. */
  lead?: string;
  subtitle?: string;
  slides: CaseStudyMediaSlide[];
}

export interface IndustryCaseStudy {
  /** Matches the industry slug it belongs to. */
  slug: string;
  eyebrow: string;
  title: string;
  partner?: { label: string; name: string };
  summary: string;
  /** Short supporting line shown on the home "Impact Highlights" card. */
  subtitle: string;
  /** Banner image shown in the intro section (and the home card). */
  image?: string;
  stats: CaseStudyStat[];
  challenges: CaseStudyPointsSection;
  /** Optional objectives carousel (omitted on some case studies). */
  objectives?: CaseStudyMediaSection;
  /** Either grouped icon-card blocks or a media carousel. */
  approach: CaseStudyApproachSection | CaseStudyMediaSection;
  visualization: CaseStudyMediaSection;
  discoveries: CaseStudyPointsSection;
  /** Either a points grid or a closing title + paragraph + image block. */
  results: CaseStudyPointsSection | CaseStudyClosingSection;
}

const CASE_STUDY_ROOT =
  '/images/industries/cities-and-infrastructure/case-study';

const CASE_IMG = {
  objectives1: `${CASE_STUDY_ROOT}/project-objectives-01.jpg`,
  objectives2: `${CASE_STUDY_ROOT}/project-objectives-02.png`,
  objectives3: `${CASE_STUDY_ROOT}/project-objectives-03.png`,
  visualization1: `${CASE_STUDY_ROOT}/visualization-01.png`,
  visualization2: `${CASE_STUDY_ROOT}/visualization-02.png`,
  visualization3: `${CASE_STUDY_ROOT}/visualization-03.png`,
  keyDiscoveries: `${CASE_STUDY_ROOT}/key-discoveries.jpg`,
} as const;

const citiesInfrastructureCaseStudy: IndustryCaseStudy = {
  slug: 'cities-infrastructure',
  eyebrow: 'Case Study',
  title: 'Abu Dhabi Mobility',
  partner: { label: 'In partnership with', name: 'Aimsun' },
  subtitle:
    'How Pixonal and Aimsun unified 70B+ data points into a single, governed decision platform for Abu Dhabi’s mobility network.',
  image: '/images/industries/cities-and-infrastructure/case-study/hero.png',
  summary:
    'Abu Dhabi’s transportation system amassed over 70 billion data points—from IoT sensors and police reports to public transport logs—yet these volumes were scattered across isolated silos. Pixonal led a sweeping data overhaul, partnering with Aimsun to merge historical metrics, real-time feeds, and future simulations into a single, centralized platform. The result? Analysis times plummeted, diverse agencies united under a unified viewpoint, and 950+ powerful insights now guide everything from daily traffic management to strategic urban planning.',
  stats: [
    { value: '70B', label: 'Data size' },
    { value: '1000x', label: 'AI/ML inferred data' },
    { value: '950+', label: 'Curated insights' },
    { value: '92%', label: 'Reduced reporting time' },
  ],
  challenges: {
    id: 'case-study-challenges',
    title: 'Context & Key Challenges',
    points: [
      {
        title: 'Diverse Data Streams',
        icon: 'git-fork',
        description:
          'Multiple organizations—transport, police, aviation, school buses—collected large volumes of information, each using unique formats and tools.',
      },
      {
        title: 'Decision Blind Spots',
        icon: 'eye',
        description:
          'With no cohesive view of daily, seasonal, or event-driven patterns, leadership found it difficult to spot unusual trends or respond swiftly to emerging issues.',
      },
      {
        title: 'Technical Barriers to Access',
        icon: 'hand-palm',
        description:
          'Combining data from legacy databases, sensor APIs, and simulation platforms required specialized alignment, making correlation slow and cumbersome.',
      },
    ],
  },
  objectives: {
    id: 'case-study-objectives',
    title: 'Project Objectives',
    slides: [
      {
        id: 'unified-data-infrastructure',
        image: CASE_IMG.objectives1,
        title: 'Unified Data Infrastructure',
        description:
          'Consolidate all mobility-related data into a governed architecture with consistent naming conventions and time references.',
      },
      {
        id: 'accelerated-analysis',
        image: CASE_IMG.objectives2,
        title: 'Accelerated Analysis & Reporting',
        description:
          'Reduce the integration and reporting cycle from weeks to hours or minutes, enabling real-time decision-making.',
      },
      {
        id: 'cross-agency-collaboration',
        image: CASE_IMG.objectives3,
        title: 'Cross-Agency Collaboration',
        description:
          'Encourage shared data usage among multiple departments through role-based access, fostering aligned strategies and transparent governance.',
      },
    ],
  },
  approach: {
    id: 'case-study-approach',
    title: 'Approach & Methodology',
    groups: [
      {
        id: 'research-benchmarking',
        title: 'Research & Benchmarking',
        points: [
          {
            title: 'User Studies & Workshops',
            icon: 'users',
            description:
              'Conducted detailed sessions with stakeholders to document current processes, pain points, and desired outcomes.',
          },
          {
            title: 'Global Mobility Models',
            icon: 'magnifying-glass',
            description:
              'Compared best practices from leading international transit authorities to devise an optimal architecture for Abu Dhabi.',
          },
        ],
      },
      {
        id: 'data-ecosystem-revamp',
        title: 'Data Ecosystem Revamp',
        points: [
          {
            title: 'Strategic Partnership',
            icon: 'strategy',
            description:
              'Teamed with Aimsun for AI-driven data preparation, while Pixonal managed the overall design of the unified platform.',
          },
          {
            title: 'Holistic Framework',
            icon: 'intersect',
            description:
              'Integrated historical logs, real-time sensor data, and simulation outputs into a standardized environment—enabling seamless layering and cross-comparison.',
          },
          {
            title: 'Robust Governance Protocols',
            icon: 'seal-check',
            description:
              'Implemented a flexible permission model for secure data sharing without compromising ownership or confidentiality.',
          },
        ],
      },
    ],
  },
  visualization: {
    id: 'case-study-visualization',
    title: 'Advanced Correlation & Visualization',
    slides: [
      {
        id: 'map-based-dashboards',
        image: CASE_IMG.visualization1,
        title: 'Immersive Map-Based Dashboards',
        description:
          'Merged speed, accident, and ridership data onto interactive 2D/3D maps, making complex patterns easier to grasp.',
      },
      {
        id: 'time-series-analysis',
        image: CASE_IMG.visualization2,
        title: 'Dynamic Time-Series Analysis',
        description:
          'Equipped users with “time machine” features that jump between past records, current stats, and simulated predictions for future scenarios.',
      },
      {
        id: 'storytelling-framework',
        image: CASE_IMG.visualization3,
        title: 'Storytelling Framework',
        description:
          'Provided narrative-building tools that assemble correlated data into clear, actionable presentations—for example, exploring the chain reaction of an accident on surrounding junctions.',
      },
    ],
  },
  discoveries: {
    id: 'case-study-discoveries',
    title: 'Key Discoveries & Milestones',
    image: CASE_IMG.keyDiscoveries,
    points: [
      {
        title: 'Instant Normal vs. Anomalous Detection',
        icon: 'bell-ringing',
        description:
          'Agencies can quickly identify whether traffic issues stem from seasonal fluctuations, events, or sudden disruptions—all in one interface.',
      },
      {
        title: 'Accident Analysis as a Model',
        icon: 'graph',
        description:
          'By fusing location, time, and environment data, teams uncovered patterns that would have been invisible with siloed reporting—paving the way for similar approaches to other KPIs.',
      },
      {
        title: '950+ Curated Insights',
        icon: 'clipboard-text',
        description:
          'Standardized definitions and a shared architecture now produce a rich catalog of analytics, revealing everything from commuter trends to multi-agency collaboration opportunities.',
      },
    ],
  },
  results: {
    id: 'case-study-results',
    title: 'Tangible Results',
    points: [
      {
        title: 'Rapid Turnaround',
        icon: 'lightning',
        description:
          'Preparing data-driven briefs and maps once took weeks of manual merging; it now takes minutes—boosting operational agility.',
      },
      {
        title: 'Elevated Collaboration',
        icon: 'users',
        description:
          'Police, transport, and aviation departments align their strategies more effectively, avoiding duplicate work and fragmented policies.',
      },
      {
        title: 'Informed Leadership',
        icon: 'monitor',
        description:
          'Senior decision-makers see real-time dashboards that offer context on whether spikes or dips are part of normal trends, ensuring swift, well-grounded directives.',
      },
    ],
  },
};

// People & Workforce assets — placeholders reusing the existing industry art.
// Swap these for real exports under
// /public/images/industries/people-and-workforce/case-study/ when available.
const PW_ROOT = '/images/industries/people-and-workforce';

const PW_IMG = {
  hero: `${PW_ROOT}/case-study/hero.png`,
  approach1: `${PW_ROOT}/case-study/approach-01.jpeg`,
  approach2: `${PW_ROOT}/case-study/approach-02.png`,
  approach3: `${PW_ROOT}/case-study/approach-03.png`,
  approach4: `${PW_ROOT}/case-study/approach-04.jpeg`,
  features1: `${PW_ROOT}/case-study/key-features-01.png`,
  features2: `${PW_ROOT}/case-study/key-features-02.png`,
  features3: `${PW_ROOT}/case-study/key-features-03.png`,
  features4: `${PW_ROOT}/case-study/key-features-04.png`,
  footer: `${PW_ROOT}/case-study/footer.jpeg`,
} as const;

const peopleWorkforceCaseStudy: IndustryCaseStudy = {
  slug: 'people-workforce',
  eyebrow: 'Case Study',
  title: 'Takamol Holding',
  subtitle:
    'Unifying 2000+ workforce dashboards into a single, narrative-first decision ecosystem for Saudi Arabia’s Qiwa platform.',
  image: PW_IMG.hero,
  summary:
    'Takamol Holding in Saudi Arabia launched Qiwa as a central hub for labor-market insights, connecting billions of data points across public and private sectors. Despite this wealth of information, leadership and external stakeholders faced an uphill battle: data remained scattered across thousands of dashboards, creating fragmented views and an overreliance on technical teams. Pixonal stepped in to unify these isolated silos through a narrative-first, time-and-location-based platform—enabling leaders to seamlessly navigate workforce trends, seasonal events (like Hajj), and national initiatives under a single, coherent framework.',
  stats: [
    { value: '2000+', label: 'Dashboards unified' },
    { value: '16', label: 'Source entities' },
  ],
  challenges: {
    id: 'case-study-challenges',
    title: 'Challenge: Unifying Thousands of Dashboards',
    lead: 'Qiwa’s existing setup forced users to switch between numerous dashboards for even the simplest questions. Departments operated in silos—each with its own metrics, visualizations, and naming conventions.',
    points: [
      {
        title: 'Excessive Reliance on IT',
        icon: 'stack',
        description:
          'Non-technical teams constantly requested tweaks or fresh analyses, slowing business responsiveness.',
      },
      {
        title: 'Disconnected Insights',
        icon: 'link-break',
        description:
          'Seasonal phenomena (e.g., Hajj workforce influx) remained buried in separate dashboards, preventing holistic understanding.',
      },
      {
        title: 'Complicated Showcases',
        icon: 'presentation',
        description:
          'Visiting delegations or leadership found it cumbersome to get unified workforce overviews—undermining Saudi Arabia’s ability to highlight its labor-market achievements.',
      },
    ],
  },
  approach: {
    id: 'case-study-approach',
    title: 'Our Approach: A Narrative-First, Topic-Based Platform',
    slides: [
      {
        id: 'location-time-integration',
        image: PW_IMG.approach1,
        title: 'Location & Time Integration',
        description:
          'Users filter data by city, region, or time period—annual, monthly, or event-specific—in a single click, from national distribution down to a region’s seasonal workforce.',
      },
      {
        id: 'topic-driven-ecosystem',
        image: PW_IMG.approach2,
        title: 'Topic-Driven Ecosystem',
        description:
          'Rigid dashboards were replaced with a browser of narratives organized by topic, each connecting seamlessly to relevant metrics to turn raw data into a guided storyline.',
      },
      {
        id: 'unified-governance',
        image: PW_IMG.approach3,
        title: 'Unified Governance & Automated Ingestion',
        description:
          'Hundreds of sources now flow into an automated ingestion pipeline, with token-based metadata controls ensuring consistent definitions and security across all narratives.',
      },
      {
        id: 'command-center',
        image: PW_IMG.approach4,
        title: 'Command-Center & Executive Briefings',
        description:
          'A command-center experience visually travels through time, place, and workforce categories—pivoting from KSA-wide overviews to local stats or event-driven insights without waiting on IT.',
      },
    ],
  },
  visualization: {
    id: 'case-study-visualization',
    title: 'Key Features & Highlights',
    slides: [
      {
        id: 'seasonal-focus',
        image: PW_IMG.features1,
        title: 'Seasonal Focus',
        description:
          'Highlights workforce fluctuations and event-driven impacts—Hajj, national holidays—in a single narrative flow.',
      },
      {
        id: 'non-technical-experience',
        image: PW_IMG.features2,
        title: 'Immersive, Non-Technical Experience',
        description:
          'Automated workflows mean no coding is required—departments add, edit, or explore data in an interactive storytelling format.',
      },
      {
        id: 'initiatives-alignment',
        image: PW_IMG.features3,
        title: 'Initiatives Alignment',
        description:
          'Narratives map data to Saudi’s workforce programs, showing progress, gaps, and future targets on one screen.',
      },
      {
        id: 'location-sector-synergy',
        image: PW_IMG.features4,
        title: 'Location & Sector Synergy',
        description:
          'Data can be viewed by nationality, region, or industry—fostering cross-department understanding and strategic alignment.',
      },
    ],
  },
  discoveries: {
    id: 'case-study-discoveries',
    title: 'Impact: A Unified Ecosystem for Rapid, Meaningful Insights',
    columns: 2,
    points: [
      {
        title: 'Leadership-Centric Showcases',
        icon: 'presentation',
        description:
          'Decision-makers now have a dynamic story-driven interface, allowing them to visualize workforce distribution, link it to active initiatives, and easily spot operational gaps.',
      },
      {
        title: 'Reduced IT Bottlenecks',
        icon: 'lightning',
        description:
          'By migrating from thousands of static dashboards to a single, narrative-based environment, data teams are free to focus on higher-value tasks—predictive analytics, advanced modeling, and long-term innovation.',
      },
      {
        title: 'Streamlined Collaboration',
        icon: 'users',
        description:
          'Ministries, private-sector entities, and external visitors experience consistent definitions and data quality—minimizing confusion and duplicative reporting. Seasonal trends, time-based fluctuations, and city-level specifics become part of a single shared language.',
      },
      {
        title: 'Immersive Command-Center Experience',
        icon: 'monitor',
        description:
          'A centralized command room fosters on-the-spot engagement for high-profile visits, showcasing the workforce ecosystem in a visually compelling manner—strengthening global partnerships and increasing transparency about Saudi Arabia’s labor environment.',
      },
    ],
  },
  results: {
    id: 'case-study-results',
    title: 'The Road Ahead: Shaping a Future-Ready Labor Platform',
    body: 'With Qiwa’s workforce data consolidated into one cohesive storytelling framework, Takamol Holding can scale seamlessly as new initiatives and policy directives emerge. By integrating time, place, and narratives, Saudi Arabia’s labor market becomes more accessible—empowering leaders to address challenges proactively, capitalize on emerging opportunities, and deliver a strategic, adaptable ecosystem that sets new benchmarks in how labor data is understood and leveraged.',
    image: PW_IMG.footer,
  },
};

// Safety & Defense — Dubai Police IT monitoring case study assets.
const SD_ROOT = '/images/industries/safety-and-security/case-study';

const SD_IMG = {
  hero: `${SD_ROOT}/hero.png`,
  approach1: `${SD_ROOT}/approach-01.png`,
  approach2: `${SD_ROOT}/approach-02.png`,
  approach3: `${SD_ROOT}/approach-03.png`,
  approach4: `${SD_ROOT}/approach-04.png`,
  highlights1: `${SD_ROOT}/key-highlights-01.png`,
  highlights2: `${SD_ROOT}/key-highlights-02.png`,
  highlights3: `${SD_ROOT}/key-highlights-03.png`,
  highlights4: `${SD_ROOT}/key-highlights-04.png`,
  footer: `${SD_ROOT}/footer.png`,
} as const;

const safetyDefenseCaseStudy: IndustryCaseStudy = {
  slug: 'safety-defense',
  eyebrow: 'Case Study',
  title: 'Securing IT Oversight: Transforming Infrastructure Data into a Unified Ecosystem',
  subtitle:
    'Uniting fragmented IT monitoring into a single, narrative-first command center for Dubai Police’s Department of AI.',
  image: SD_IMG.hero,
  summary:
    'Dubai Police’s Department of AI had to juggle hardware health, network stability, software uptime, cyber threats, and other IT metrics—each tracked in disconnected monitoring platforms. This lack of coordination made it difficult for both operations teams and leadership to detect service center issues promptly, let alone visualize critical trends over time. Pixonal stepped in with a narrative-first, threshold-based platform that unites all data streams under one time-sensitive lens, enabling rapid problem detection and strategic IT insights.',
  stats: [],
  challenges: {
    id: 'case-study-challenges',
    title: 'Challenge: Fragmented Monitoring & Slow Alerts',
    points: [
      {
        title: 'Multi-System Chaos',
        icon: 'git-fork',
        description:
          'The department managed multiple tools for hardware metrics, cyber intrusion detection, software uptime, and more—leading to manual data consolidation and reactive decision-making.',
      },
      {
        title: 'Visibility Gaps',
        icon: 'eye',
        description:
          'Without a centralized overview, the operations team struggled to see how performance issues in one service center impacted others. Meanwhile, top leadership lacked real-time indicators for system-critical events.',
      },
      {
        title: 'Manual Processes',
        icon: 'hammer',
        description:
          'Cleansing and aggregating data from 10+ sources devoured time and resources, reducing the IT team’s capacity to proactively plan or respond to emerging threats.',
      },
    ],
  },
  approach: {
    id: 'case-study-approach',
    title: 'Our Approach: A Narrative Ecosystem for Infrastructure',
    slides: [
      {
        id: 'unified-ingestion',
        image: SD_IMG.approach1,
        title: 'Unified Ingestion & Automated Cleansing',
        description:
          'We integrated six major data streams—from network load to cyberattack logs—into a single automated pipeline, eliminating manual merges so each KPI reflects the current state of every service center.',
      },
      {
        id: 'threshold-logic',
        image: SD_IMG.approach2,
        title: 'Threshold Logic & Proactive Alerts',
        description:
          'Key metrics like bandwidth utilization or CPU load trigger color-coded alerts when they exceed predefined thresholds, so the operations team sees at a glance which centers need attention.',
      },
      {
        id: 'command-center',
        image: SD_IMG.approach4,
        title: 'Command-Center & Leadership Briefings',
        description:
          'An immersive command-center experience reveals all IT metrics through an easy-to-navigate interface—drilling into hardware details, comparing baselines, or linking device health to departmental goals in one click.',
      },
      {
        id: 'contextual-overlays',
        image: SD_IMG.approach3,
        title: 'Contextual Overlays & Time-Based Analysis',
        description:
          'Each indicator is visualized alongside customer volumes, strategic importance, and historical trends—letting leadership correlate a spike in utilization with an influx of transactions or an ongoing event.',
      },
    ],
  },
  visualization: {
    id: 'case-study-visualization',
    title: 'Key Highlights',
    slides: [
      {
        id: 'multiple-sources',
        image: SD_IMG.highlights1,
        title: 'Multiple Sources, One Lens',
        description:
          'From hardware health to cyberattack logs, everything merges seamlessly—ending siloed monitoring across tens of systems.',
      },
      {
        id: 'time-location',
        image: SD_IMG.highlights2,
        title: 'Time & Location',
        description:
          'Metrics for each service center, including network coverage and device distribution, are mapped to both time and operational context, enabling faster root-cause analysis.',
      },
      {
        id: 'adaptive-thresholds',
        image: SD_IMG.highlights3,
        title: 'Adaptive Thresholds',
        description:
          'KPIs evolve with usage patterns, flagging anomalies before they become full-blown crises.',
      },
      {
        id: 'scalable-architecture',
        image: SD_IMG.highlights4,
        title: 'Scalable Architecture',
        description:
          'Designed to accommodate new data feeds or emerging domains—laying the groundwork for further expansions across Dubai Police.',
      },
    ],
  },
  discoveries: {
    id: 'case-study-discoveries',
    title: 'Impact: Streamlined Decisions & Proactive Readiness',
    columns: 2,
    points: [
      {
        title: 'Holistic Oversight',
        icon: 'monitor',
        description:
          'A single vantage point now surfaces everything from hardware failures to suspicious IP traffic, giving the operations team confidence in real-time action and leadership a consolidated, command-center perspective.',
      },
      {
        title: 'Reduced IT Bottlenecks',
        icon: 'lightning',
        description:
          'Automated ingestion and cleansing free the data team from repetitive tasks—allowing them to concentrate on strategic improvements and innovation in the department’s AI initiatives.',
      },
      {
        title: 'Strategic Indicators for Leadership',
        icon: 'presentation',
        description:
          'By correlating system performance with usage levels and event timelines, leadership can gauge how an IT disruption might affect service centers, prioritize resources, and communicate decisions clearly up the chain of command.',
      },
      {
        title: 'Future-Ready Platform',
        icon: 'strategy',
        description:
          'The new ecosystem is a scalable, forward-looking structure capable of ingesting more data sources and integrating additional departments—extending the model beyond IT infrastructure to other operational facets.',
      },
    ],
  },
  results: {
    id: 'case-study-results',
    title: 'A Blueprint for Comprehensive IT Governance',
    body: 'With Pixonal’s narrative-first approach, Dubai Police successfully transcended disconnected tools and manual reporting. The department now harnesses a unified, real-time view of all infrastructure metrics, enabling swift intervention and intelligent, data-driven strategies. By centering on thresholds, context, and intuitive navigation, the platform ensures everyone—from operations teams to top leadership—can act decisively and confidently in safeguarding the organization’s mission-critical IT assets.',
    image: SD_IMG.footer,
  },
};

const caseStudies: IndustryCaseStudy[] = [
  citiesInfrastructureCaseStudy,
  peopleWorkforceCaseStudy,
  safetyDefenseCaseStudy,
];

/** DOM id of the case study start on an industry page (smooth-scroll target). */
export const CASE_STUDY_ANCHOR_ID = 'case-study';

export function getIndustryCaseStudy(
  slug: string,
): IndustryCaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/** Card summary used by the home "Impact Highlights" carousel. */
export interface IndustryCaseStudyCard {
  industrySlug: string;
  title: string;
  subtitle: string;
  image: string;
  /** Link to the industry page, deep-linked to the case study section. */
  href: string;
}

export function getIndustryCaseStudyCards(): IndustryCaseStudyCard[] {
  return caseStudies.map((study) => ({
    industrySlug: study.slug,
    title: study.title,
    subtitle: study.subtitle,
    image: study.image ?? '',
    href: `/industries/${study.slug}#${CASE_STUDY_ANCHOR_ID}`,
  }));
}
