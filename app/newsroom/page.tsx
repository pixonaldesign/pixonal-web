import type { Metadata } from 'next';
import GetInTouchHero from '@/components/GetInTouchHero';
import NewsroomHero from '@/components/newsroom/NewsroomHero';
import NewsroomTabs from '@/components/newsroom/NewsroomTabs';
import { getAllNewsArticles } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Newsroom — Pixonal',
  description:
    'Explore our latest updates, innovations, and milestones. Stay informed as we shape the future of data communication.',
  alternates: { canonical: '/newsroom' },
  openGraph: {
    title: 'Newsroom — Pixonal',
    description:
      'Explore our latest updates, innovations, and milestones. Stay informed as we shape the future of data communication.',
    url: '/newsroom',
  },
};

export default async function NewsroomPage() {
  const articles = await getAllNewsArticles();

  return (
    <>
      <NewsroomHero />

      <NewsroomTabs articles={articles} />

      <GetInTouchHero />
    </>
  );
}
