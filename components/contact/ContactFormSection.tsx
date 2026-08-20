import NoiseTexture from '@/components/NoiseTexture';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from './ContactForm';
import { contactForm } from '@/lib/contact';

/**
 * Contact form — black grain card matching the home interactive statement.
 */
export default function ContactFormSection() {
  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="relative mx-5 mt-5 scroll-mt-[88px] overflow-hidden rounded-card bg-black"
    >
      <NoiseTexture />
      <div className="relative z-10 px-gutter py-section">
        <div className="mx-auto flex w-full max-w-form flex-col gap-section">
          <SectionHeader
            id="contact-form-heading"
            title={contactForm.title}
            subtitle={contactForm.subtitle}
            titleClassName="text-figure text-white"
            subtitleClassName="text-lead text-white/70"
          />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
