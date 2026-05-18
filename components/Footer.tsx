import { getAllNewsArticles } from '@/lib/markdown';
import FooterClient from './FooterClient';

export default async function Footer() {
  // Fetch news articles on the server side
  const allNewsArticles = await getAllNewsArticles();
  const newsArticles = allNewsArticles.slice(0, 2); // Get latest 2 articles

  return (
    <footer className="w-full max-w-content flex justify-center pb-10">
      <div className="bg-black p-card rounded-[20px] flex flex-col gap-section">
        <FooterClient newsArticles={newsArticles} />
      </div>
    </footer>
  );
}