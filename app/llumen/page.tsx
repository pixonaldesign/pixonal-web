import { Metadata } from 'next';
import GetInTouchHero from '@/components/GetInTouchHero';
import KeyHighlightsCarousel from '@/components/llumen/KeyHighlightsCarousel';
import LlumenHero from '@/components/llumen/LlumenHero';
import LlumenFeatureSection from '@/components/llumen/LlumenFeatureSection';
import LlumenImpactSection from '@/components/llumen/LlumenImpactSection';
import LlumenLicensesTable from '@/components/llumen/LlumenLicensesTable';
import LlumenRolesSection from '@/components/llumen/LlumenRolesSection';
import {
  aiPoweredInteraction,
  semanticGovernance,
  seamlessCommunication,
} from '@/lib/llumen-content';

export const metadata: Metadata = {
  title: 'Llumen — The Operating System for Critical Decisions',
  description:
    'Llumen governs how data, analytics, and AI are structured, operated, and consumed at the moment of decision. Explore semantic governance, AI-powered interaction, and seamless communication.',
  openGraph: {
    title: 'Llumen — The Operating System for Critical Decisions',
    description:
      'Governs how data, analytics, and AI are structured, operated, and consumed at the moment of decision.',
  },
  alternates: {
    canonical: '/llumen',
  },
};

export default function LlumenPage() {
  return (
    <>
      <LlumenHero />

      <KeyHighlightsCarousel />

      <LlumenFeatureSection section={semanticGovernance} />
      <LlumenFeatureSection section={aiPoweredInteraction} />
      <LlumenFeatureSection section={seamlessCommunication} />

      <LlumenRolesSection />
      <LlumenImpactSection />
      <LlumenLicensesTable />

      <GetInTouchHero />
    </>
  );
}
