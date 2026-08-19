import LlumenCard from '@/components/LlumenCard';
import Partners from '@/components/Partners';
import Hero from '@/components/Hero';
import ImpactHighlightsSection from '@/components/home/ImpactHighlightsSection';
import InteractiveStatementSection from '@/components/home/InteractiveStatementSection';
import ParallaxSection from '@/components/scroll/ParallaxSection';
import { getIndustryCaseStudyCards } from '@/lib/industry-case-studies';
import { getAllNewsArticles } from '@/lib/markdown';
import { getImpactHighlightNews } from '@/lib/news';

export default async function HomePage() {
  const caseStudyCards = getIndustryCaseStudyCards();
  const newsArticles = getImpactHighlightNews(await getAllNewsArticles());

  return (
    <>
      <ParallaxSection speed="hero">
        <Hero />
      </ParallaxSection>

      <ParallaxSection speed="statement">
        <InteractiveStatementSection />
      </ParallaxSection>

      <ParallaxSection speed="caseStudies">
        <ImpactHighlightsSection
          caseStudies={caseStudyCards}
          news={newsArticles}
        />
      </ParallaxSection>

      <ParallaxSection speed="llumen">
        <LlumenCard />
      </ParallaxSection>

      <ParallaxSection speed="partners">
        <Partners />
      </ParallaxSection>
    </>
  );
}
