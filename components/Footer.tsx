import { getAllNewsArticles } from '@/lib/markdown';
import FooterClient from './FooterClient';

export default async function Footer() {
  // Fetch news articles on the server side
  const allNewsArticles = await getAllNewsArticles();
  const newsArticles = allNewsArticles.slice(0, 2); // Get latest 2 articles

  return (
    <footer className="w-full flex justify-center pb-10 px-gutter">
      <div className="w-full max-w-content bg-black p-card rounded-card">
        <FooterClient newsArticles={newsArticles} />
      </div>
    </footer>
  );
}