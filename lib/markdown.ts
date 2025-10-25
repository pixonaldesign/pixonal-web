import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const newsDirectory = path.join(process.cwd(), 'content/news');

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  source?: string;
  excerpt: string;
  image?: string;
  content: string;
  readingTime?: number;
}

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  try {
    const fileNames = fs.readdirSync(newsDirectory);
    const allArticlesData = fileNames
      .filter(name => name.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(newsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Process markdown content to HTML
        const processedContent = await remark()
          .use(remarkHtml)
          .process(content);
        const contentHtml = processedContent.toString();

        // Calculate reading time (average 200 words per minute)
        const wordCount = content.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);

        return {
          slug,
          title: data.title || '',
          date: data.date || '',
          category: data.category || 'News',
          source: data.source || '',
          excerpt: data.excerpt || '',
          image: data.image || '',
          content: contentHtml,
          readingTime,
        };
      });

    const articles = await Promise.all(allArticlesData);
    
    // Sort by date (newest first)
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading news articles:', error);
    return [];
  }
}

export async function getNewsArticle(slug: string): Promise<NewsArticle | null> {
  try {
    const fullPath = path.join(newsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await remark()
      .use(remarkHtml)
      .process(content);
    const contentHtml = processedContent.toString();

    // Calculate reading time
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      category: data.category || 'News',
      source: data.source || '',
      excerpt: data.excerpt || '',
      image: data.image || '',
      content: contentHtml,
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading news article ${slug}:`, error);
    return null;
  }
}

export function getNewsArticlesByCategory(category: string, articles: NewsArticle[]): NewsArticle[] {
  return articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedArticles(articles: NewsArticle[]): NewsArticle[] {
  return articles.filter(article => 
    article.category.toLowerCase() === 'featured'
  );
}

export function groupArticlesByYear(articles: NewsArticle[]): { [year: string]: NewsArticle[] } {
  return articles.reduce((groups, article) => {
    const year = new Date(article.date).getFullYear().toString();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(article);
    return groups;
  }, {} as { [year: string]: NewsArticle[] });
}
