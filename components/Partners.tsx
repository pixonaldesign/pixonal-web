import Image from 'next/image';

interface PartnerCard {
  description: string;
  logo: string;
  textLogo?: string;
  backgroundImage: string;
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
    backgroundImage: '/images/partners/partner-3.png'
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

export default function Partners() {
  return (
    <section className="bg-primary-900 py-[184px] px-5">
      <div className="w-full mx-auto flex flex-col gap-6 items-center max-w-[1360px] pb-12">
        {/* Title */}
        <div className="flex flex-col gap-12 items-start w-full pb-6">
          <h2 className="capitalize font-untitled-sans leading-[1.2] text-[36px] text-white tracking-[-0.792px] whitespace-pre">
          Partnered with Visionary <br />
          Decision-Makers
          </h2>
        </div>

        {/* Featured Partner Cards */}
        <div className="flex gap-6 justify-center max-w-[1360px]">
          {featuredPartners.map((partner, index) => (
            <div
              key={index}
              className="border border-stone-300/16 relative rounded-[12px] overflow-hidden group w-[calc((95vw-48px)/3)] aspect-square"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={partner.backgroundImage}
                  alt="Partner background"
                  fill
                  className="object-cover blur-sm"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors p-6 flex flex-col justify-between items-center">
                {/* Flexible top section - allows logos to be centered */}
                <div className="flex-1 flex flex-col justify-center items-center gap-4">
                  {/* Logo */}
                  <div className="flex items-center justify-center shrink-0">
                    <Image
                      src={partner.logo}
                      alt="Partner logo"
                      width={120}
                      height={120}
                      className="max-h-[120px] max-w-full object-contain"
                    />
                  </div>
                  
                  {/* Text Logo (if available) */}
                  {partner.textLogo && (
                    <div className="flex items-center justify-center shrink-0">
                      <Image
                        src={partner.textLogo}
                        alt="Partner text logo"
                        width={200}
                        height={40}
                        className="max-h-[40px] max-w-full object-contain"
                      />
                    </div>
                  )}
                </div>
                
                {/* Bottom - Description anchored */}
                <p className="text-white text-base font-normal font-untitled-sans leading-relaxed text-center shrink-0">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Grid */}
        <div className="border border-stone-300/16 rounded-[20px] max-w-[1360px]">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 bg-transparent hover:bg-primary-800 rounded-lg transition-colors h-[200px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={100}
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

