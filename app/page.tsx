import GetInTouch from '@/components/GetInTouch';
import PixonalIcon from '@/components/PixonalIcon';
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel';
import LlumenCard from '@/components/LlumenCard';
import WhitepaperHero from '@/components/WhitepaperHero';
import Partners from '@/components/Partners';
import GetInTouchHero from '@/components/GetInTouchHero';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/markdown';

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Impact Highlights Carousel */}
      <CaseStudiesCarousel caseStudies={caseStudies} />

      {/* Llumen Card Section */}
      <section className="py-20 bg-primary-900 mx-5">
        <div className="px-4 flex justify-center">
          <LlumenCard />
        </div>
      </section>

      {/* Whitepaper Hero Section */}
      <section className="py-20 bg-primary-900 mx-5">
        <div className="mx-auto flex justify-center">
          <WhitepaperHero />
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Get In Touch Hero Section */}
      <section className="pt-20 bg-primary-900 mx-5">
        <div className="mx-auto flex justify-center">
          <GetInTouchHero />
        </div>
      </section>

        </>
      );
    }