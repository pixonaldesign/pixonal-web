import CaseStudiesCarousel from '@/components/CaseStudiesCarousel';
import LlumenCard from '@/components/LlumenCard';
import BlogHero from '@/components/BlogHero';
import Partners from '@/components/Partners';
import GetInTouchHero from '@/components/GetInTouchHero';
import Hero from '@/components/Hero';
import { getIndustryCaseStudyCards } from '@/lib/industry-case-studies';

export default function HomePage() {
  const caseStudyCards = getIndustryCaseStudyCards();
  return (
    <>
      <Hero />

      <CaseStudiesCarousel cards={caseStudyCards} />

      <section className="bg-primary-900 py-section">
        <LlumenCard />
      </section>

      <section className="bg-primary-900 py-section px-gutter">
        <div className="mx-auto flex justify-center">
          <BlogHero />
        </div>
      </section>

      <Partners />

      <section className="bg-primary-900 pt-section px-gutter">
        <div className="mx-auto flex justify-center">
          <GetInTouchHero />
        </div>
      </section>
    </>
  );
}
