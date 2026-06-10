import { getAllNewsArticles } from '@/lib/markdown';
import NavigationBar from '@/components/navigation/NavigationBar';

export default async function Navigation() {
  const newsArticles = (await getAllNewsArticles()).filter((article) => article.slug);

  return (
    <nav
      aria-label="Main navigation"
      className="w-full lg:max-w-[1400px] mx-auto"
    >
      <NavigationBar newsArticles={newsArticles} />
    </nav>
  );
}
