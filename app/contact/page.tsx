import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';

export const metadata: Metadata = {
  title: 'Contact Pixonal — Transform your Moment of Decision',
  description:
    'Get in touch with Pixonal. Offices across Abu Dhabi, Dubai, Riyadh, Cairo, Bahrain and Kuwait — email hello@pixonal.com or call +971 4 313 2802.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Pixonal — Transform your Moment of Decision',
    description:
      'Get in touch with Pixonal. Offices across Abu Dhabi, Dubai, Riyadh, Cairo, Bahrain and Kuwait.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}
