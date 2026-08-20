/** Hero copy for the About page. The Figma frame uses a still image. */
export const aboutHero = {
  title: 'Transforming Data into Strategic Leadership Assets',
  image: '/images/about/hero.png',
} as const;

/** Predefined card aspect ratios for the story carousels. */
export type AboutAspect = '16/9' | '3/4' | '1/1';

export interface AboutMediaSlide {
  id: string;
  image: string;
  caption: string;
  /** Predefined aspect ratio of the card frame. Defaults to `16/9`. */
  aspect?: AboutAspect;
}

/** "Where Vision Meets Innovation" — image carousel with caption overlays. */
export const aboutVisionStory = {
  title: 'Where Vision Meets Innovation',
  lead: 'Pixonal was founded in 2016 upon a simple yet profound realization:',
  subtitle:
    'organizations possess vast amounts of scattered data, yet decision-makers struggle to convert raw information into meaningful direction. Early successes in government projects and sector-wide deployments validated our approach — proving that leaders didn’t merely need more data; they needed a cohesive, living environment where data could speak to them through clear, purposeful stories.',
  slides: [
    {
      id: 'where-01',
      image: '/images/about/story/where-01.png',
      caption: 'During a workshop in UAE',
    },
    {
      id: 'where-02',
      image: '/images/about/story/where-02.png',
      caption:
        'During Launch of Fusion in the presence of HH Sheikh Khaled bin Zayed, Crown Prince of Abu Dhabi',
    },
    {
      id: 'where-03',
      image: '/images/about/story/where-03.png',
      caption:
        'During Reveal of Dubai Land Department - Mashrooi in the presence of HH Sheikh Mohamed Bin Rashid, Prime Minister',
    },
  ] satisfies AboutMediaSlide[],
} as const;

/** "Our Vision" — header + a full-width 16:9 media card. */
export const aboutVision = {
  title: 'Our Vision',
  lead: 'Pixonal was founded in 2016 upon a simple yet profound realization:',
  subtitle:
    'organizations possess vast amounts of scattered data, yet decision-makers struggle to convert raw information into meaningful direction. Early successes in government projects and sector-wide deployments validated our approach — proving that leaders didn’t merely need more data; they needed a cohesive, living environment where data could speak to them through clear, purposeful stories.',
  // Placeholder clip until the real "Our Vision" video is exported from Figma.
  video: '/videos/LlumenFeatures.mp4',
} as const;

/** "Pushing Boundaries in Narrative Intelligence" — caption-below carousel. */
export const aboutResearchStory = {
  title: 'Pushing Boundaries in Narrative Intelligence',
  lead: 'In an era of fast-evolving technology, our commitment to research and development is critical to staying ahead.',
  subtitle:
    'Pixonal’s R&D initiatives delve into advanced AI-driven storytelling, immersive 3D visualizations, and real-time simulation engines capable of processing massive data sets at speed. By partnering with academic institutions, innovation labs, and global consultancies, we develop next-generation solutions that blend automation with human insight.',
  slides: [
    {
      id: 'boundaries-01',
      image: '/images/about/story/boundaries-01.png',
      aspect: '3/4',
      caption:
        'Cofounder Mohamed Said during AI Connect 2024 Panel hosted by Dubai Future Foundation',
    },
    {
      id: 'boundaries-02',
      image: '/images/about/story/boundaries-02.png',
      aspect: '16/9',
      caption:
        'Abu Dhabi Community Dashboard, showcasing the voice of the emirate through detailed sentiment analysis of various sectors relating to Quality of Life',
    },
    {
      id: 'boundaries-03',
      image: '/images/about/story/boundaries-03.png',
      aspect: '16/9',
      caption:
        'Abu Dhabi Executive Office Dashboard, providing a 360 degree overview of the Emirate',
    },
  ] satisfies AboutMediaSlide[],
} as const;

export interface AboutLogo {
  src: string;
  name: string;
}

/** "Collaborations & Accelerators" logo row. */
export const aboutCollaborations = {
  title: 'Collaborations & Accelerators',
  logos: [
    { src: '/images/about/logos/collab-01.png', name: 'Collaboration partner' },
    { src: '/images/about/logos/collab-02.png', name: 'Collaboration partner' },
    { src: '/images/about/logos/collab-03.png', name: 'Collaboration partner' },
    { src: '/images/about/logos/collab-04.png', name: 'Collaboration partner' },
  ] satisfies AboutLogo[],
} as const;

/** "Media Recognition & Thought Leadership" — feature image + logo grid. */
export const aboutMedia = {
  title: 'Media Recognition & Thought Leadership',
  image: '/images/about/media-hero.png',
  logos: [
    { src: '/images/about/logos/media-01.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-02.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-03.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-04.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-05.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-06.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-07.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-08.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-09.png', name: 'Media outlet' },
    { src: '/images/about/logos/media-10.png', name: 'Media outlet' },
  ] satisfies AboutLogo[],
} as const;
