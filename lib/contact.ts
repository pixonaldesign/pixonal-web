/** Hero copy for the Contact page (Figma "Video" frame with a globe still). */
export const contactHero = {
  titleLines: ['Transform your', 'Moment of Decision'],
  image: '/images/contact-hero.png',
} as const;

/** Primary organisation block (title + address / contact lines). */
export const contactOrg = {
  name: 'Pixonal',
  address: 'Area 2071, Emirates Towers, Dubai — UAE',
  phone: '+971 4 313 2802',
  email: 'hello@pixonal.com',
} as const;

export interface ContactOffice {
  region: string;
  /** External site shown above the contact (e.g. partner office). */
  link?: { label: string; href: string };
  contactName: string;
  email: string;
  /** Free-form phone string; may contain multiple numbers. */
  phone: string;
}

/** Contact form copy and options (easy to swap without touching markup). */
export const contactForm = {
  title: "Let's work together",
  subtitle:
    "Tell us about your organisation and we'll follow up with the right team.",
  topicsLegend: 'What can we help with? Select all that apply:',
  topics: [
    { id: 'demo', label: 'Llumen platform demo' },
    { id: 'industry', label: 'Industry solution' },
    { id: 'partnership', label: 'Partnership' },
    { id: 'media', label: 'Media / press' },
    { id: 'other', label: 'Other' },
  ],
  countries: [
    'United Arab Emirates',
    'Saudi Arabia',
    'Egypt',
    'Bahrain',
    'Kuwait',
    'Qatar',
    'Oman',
    'United States',
    'United Kingdom',
    'Other',
  ],
  sources: [
    'Search',
    'LinkedIn',
    'Event / conference',
    'Referral',
    'News',
    'Other',
  ],
  privacy:
    'By submitting this form, your information will be processed in accordance with our privacy practices.',
} as const;

/** Regional offices / points of contact. */
export const contactOffices: ContactOffice[] = [
  {
    region: 'Abu Dhabi/Dubai',
    contactName: 'Mohamed Said',
    email: 'm.said@pixonal.com',
    phone: '+971 4 313 2802',
  },
  {
    region: 'Riyadh/Cairo',
    contactName: 'Ahmed Moustafa',
    email: 'a.moustafa@pixonal.com',
    phone: '+966 50 631 3525',
  },
  {
    region: 'Bahrain/Kuwait',
    link: { label: 'Get Beyond Data', href: 'https://getbeyonddata.com/' },
    contactName: 'Amir Fahim',
    email: 'amir.fahim@getbeyonddata.com',
    phone: '+965 9662 0990 / +973 1617 1388',
  },
];
