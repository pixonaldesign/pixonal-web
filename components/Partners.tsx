import Image from 'next/image';

interface PartnerCard {
  description: string;
  logo: string;
  textLogo?: string;
  backgroundImage: string;
  /** Optional override for the logo's max-height utilities. */
  logoClassName?: string;
}

interface PartnerLogo {
  logo: string;
  name: string;
}

const featuredPartners: PartnerCard[] = [
  {
    description: 'Consolidation and visualization of data from XX departments',
    logo: '/images/partners/zatcalogo.png',
    textLogo: '/images/partners/zatcatext.png',
    backgroundImage: '/images/partners/partner-1.png'
  },
  {
    description: 'Providing a bird-eye view of entire communities\' quality of life',
    logo: '/images/partners/adeologo.png',
    textLogo: '/images/partners/adeotext.png',
    backgroundImage: '/images/partners/partner-2.png'
  },
  {
    description: 'Strategic data solutions for executive leadership',
    logo: '/images/partners/executiveoffice.png',
    backgroundImage: '/images/partners/partner-3.png',
    logoClassName: 'w-[200px] lg:w-[260px] h-auto max-h-none'
  }
];

const partnerLogos: PartnerLogo[] = [
  { logo: '/images/partners/govofdubai.png', name: 'Government of Dubai' },
  { logo: '/images/partners/uaecabinet.png', name: 'United Arab Emirates The Cabinet' },
  { logo: '/images/partners/qol.png', name: 'Quality of Life Program' },
  { logo: '/images/partners/deloitte.png', name: 'Deloitte' },
  { logo: '/images/partners/jacobs.png', name: 'Jacobs' },
  { logo: '/images/partners/pwc.png', name: 'PwC' },
  { logo: '/images/partners/moep.png', name: 'Ministry of Economy & Planning' },
  { logo: '/images/partners/wef.png', name: 'World Economic Forum' },
  { logo: '/images/partners/det.png', name: 'Dubai Economy and Tourism' },
  { logo: '/images/partners/takamol.png', name: 'Takamol' },
  { logo: '/images/partners/ead.png', name: 'Environment Agency - Abu Dhabi' },
  { logo: '/images/partners/itc.png', name: 'Integrated Transport Centre' }
];

interface PartnersProps {
  /** Section heading. Defaults to the home-page two-line title. */
  title?: string;
}

export default function Partners({ title }: PartnersProps) {
  return (
    <section className="bg-primary-900 py-section px-gutter">
      <div className="w-full mx-auto flex flex-col gap-6 items-center max-w-content pb-12">
        {/* Title */}
        <div className="flex flex-col gap-block items-start w-full pb-6">
          <h2 className="text-h1 text-white whitespace-pre">
            {title ?? (
              <>
                Partnered with Visionary <br />
                Decision-Makers
              </>
            )}
          </h2>
        </div>

        {/*
          Featured Partner Cards.
          - < sm: 1 column, square card, vertical content (logo on top, description below).
          - sm – lg: 1 column, auto height, horizontal content (logo on the
            left, description on the right) — avoids the oversized square at
            single-column widths.
          - >= lg: 3 columns, square card, vertical content (original).
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {featuredPartners.map((partner, index) => (
            <div
              key={index}
              className="border border-stone-300/16 relative rounded-card overflow-hidden group w-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={partner.backgroundImage}
                  alt="Partner background"
                  fill
                  className="object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              </div>

              {/* Content. aspect-square below sm and at lg+; horizontal flow between. */}
              <div className="relative z-10 aspect-[3/2] sm:aspect-auto lg:aspect-square sm:min-h-[220px] lg:min-h-0 p-6 flex flex-col sm:flex-row lg:flex-col justify-between sm:justify-center lg:justify-between items-center gap-4 sm:gap-8 lg:gap-4">
                {/* Logo cluster */}
                <div className="flex-1 sm:flex-none sm:w-2/5 lg:flex-1 lg:w-auto flex flex-col justify-center items-center gap-4 min-h-0">
                  <div className="flex items-center justify-center shrink-0">
                    <Image
                      src={partner.logo}
                      alt="Partner logo"
                      width={120}
                      height={120}
                      className={`${partner.logoClassName ?? 'max-h-[88px] lg:max-h-[120px]'} max-w-full object-contain`}
                    />
                  </div>

                  {partner.textLogo && (
                    <div className="flex items-center justify-center shrink-0">
                      <Image
                        src={partner.textLogo}
                        alt="Partner text logo"
                        width={200}
                        height={40}
                        className="max-h-[28px] lg:max-h-[40px] max-w-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-body-relaxed text-white text-center sm:text-left lg:text-center sm:flex-1 lg:flex-none shrink-0">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Grid */}
        <div className="w-full border border-stone-300/16 rounded-card px-6 py-8 md:px-10 md:py-[60px]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 md:gap-x-12 md:gap-y-12 lg:gap-x-[78px] lg:gap-y-[71px] items-center justify-items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-[60px] md:h-[75px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={75}
                  className="max-h-full max-w-full object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

