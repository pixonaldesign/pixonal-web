import { contactOffices, contactOrg, type ContactOffice } from '@/lib/contact';

/** First phone number in a free-form string, digits/`+` only — for `tel:`. */
function telHref(phone: string): string {
  const first = phone.split('/')[0] ?? phone;
  return `tel:${first.replace(/[^+\d]/g, '')}`;
}

function OfficeCard({ office }: { office: ContactOffice }) {
  return (
    <div className="flex flex-col gap-stack">
      <h2 className="text-h2 font-semibold text-white capitalize">{office.region}</h2>
      <div className="flex flex-col text-body text-white/70">
        {office.link && (
          <a
            href={office.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            {office.link.label}
          </a>
        )}
        <span>{office.contactName}</span>
        <a
          href={`mailto:${office.email}`}
          className="hover:text-white transition-colors"
        >
          {office.email}
        </a>
        <a
          href={telHref(office.phone)}
          className="hover:text-white transition-colors"
        >
          {office.phone}
        </a>
      </div>
    </div>
  );
}

/**
 * Contact details — a two-column org block (title left, address right) above a
 * responsive grid of regional offices. Mirrors the home/About content rhythm.
 */
export default function ContactDetails() {
  return (
    <section
      id="contact-details"
      className="py-section px-gutter"
      aria-labelledby="contact-org-heading"
    >
      <div className="mx-auto flex max-w-content flex-col gap-feature">
        <div className="grid grid-cols-1 gap-block sm:grid-cols-2 lg:grid-cols-3 lg:items-center">
          <h2
            id="contact-org-heading"
            className="text-h1 text-white capitalize"
          >
            {contactOrg.name}
          </h2>
          <div className="flex flex-col text-body text-white/80 sm:col-span-1 lg:col-span-2">
            <span>{contactOrg.address}</span>
            <a
              href={telHref(contactOrg.phone)}
              className="hover:text-white transition-colors"
            >
              {contactOrg.phone}
            </a>
            <a
              href={`mailto:${contactOrg.email}`}
              className="hover:text-white transition-colors"
            >
              {contactOrg.email}
            </a>
          </div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-block sm:grid-cols-2 lg:grid-cols-3"
        >
          {contactOffices.map((office) => (
            <li key={office.region}>
              <OfficeCard office={office} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
