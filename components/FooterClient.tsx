import Link from 'next/link';
import Image from 'next/image';
import {
  companyMenuLinks,
  industriesMenuItems,
} from '@/components/navigation/nav-config';
import NavTabUnderline from '@/components/navigation/NavTabUnderline';
import PrimaryButton from './PrimaryButton';

const LOGO_HEIGHT = 24;
const LOGO_WIDTH = Math.round((80 / 18) * LOGO_HEIGHT);

const footerSocialLinks = [
  { href: '#x', label: 'X' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#facebook', label: 'Facebook' },
  { href: '#linkedin', label: 'LinkedIn' },
] as const;

function FooterLink({ href, children }: { href: string; children: string }) {
  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const className = 'group/tab inline-flex text-body text-white';
  const label = (
    <span className="relative inline-flex">
      {children}
      <NavTabUnderline />
    </span>
  );

  if (!isInternal) {
    const isExternal =
      href.startsWith('http://') || href.startsWith('https://');
    return (
      <a
        href={href}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function FooterLinkList({
  heading,
  items,
}: {
  heading: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <nav aria-label={heading} className="flex min-w-0 flex-col gap-stack">
      <p className="text-label text-white/40 uppercase">{heading}</p>
      <ul role="list" className="flex flex-col gap-tight">
        {items.map((item) => (
          <li key={item.label}>
            <FooterLink href={item.href}>{item.label}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function FooterClient() {
  return (
    <div className="flex flex-col gap-footer">
      <div className="grid grid-cols-1 gap-section sm:grid-cols-2 lg:grid-cols-5 lg:gap-block">
        <div className="min-w-0">
          <Link href="/" aria-label="Pixonal home" className="inline-flex">
            <Image
              src="/images/logo.svg"
              alt="Pixonal"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              className="h-6 w-auto"
            />
          </Link>
        </div>

        <FooterLinkList heading="Company" items={companyMenuLinks} />
        <FooterLinkList heading="Industries" items={industriesMenuItems} />
        <FooterLinkList heading="Social" items={footerSocialLinks} />

        <div className="flex min-w-0 flex-col gap-10">
          <p className="text-label text-white/40 uppercase">
            Join our mailing list
          </p>
          <div className="flex min-w-0 flex-col gap-4">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your e-mail here"
              className="min-w-0 border-b border-white/50 bg-transparent pb-3 text-body text-white placeholder:text-white/50 focus:border-white focus:outline-none"
            />
            <PrimaryButton type="button" className="self-start normal-case">
              Submit
            </PrimaryButton>
          </div>
        </div>
      </div>

      <p className="w-full text-footer-tagline text-white">
        Agentic command rooms for the institutions the world runs on.
      </p>
    </div>
  );
}
