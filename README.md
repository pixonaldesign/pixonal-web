# Pixonal Website

A modern, static website for Pixonal built with Next.js 16, featuring intelligent data solutions and strategic advisory services.

## Features

- **Static Site Generation (SSG)** - Fully static website for optimal performance
- **SEO Optimized** - Complete metadata, sitemap, and robots.txt
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Markdown Newsroom** - Dynamic news articles from markdown files
- **Industry Pages** - Dynamic pages for different industry sectors
- **Contact Forms** - Formspree integration for contact form handling
- **Azure Ready** - Configured for Azure Static Web Apps and Docker deployment

## Pages

- **Landing Page** (`/`) - Homepage with hero, features, and CTAs
- **Llumen** (`/llumen`) - Product page for the Llumen platform
- **Industries** (`/industries`) - Overview and detail pages for 6 industry sectors
- **Advisory** (`/advisory`) - Strategic advisory services information
- **Newsroom** (`/newsroom`) - News articles and insights
- **Contact** (`/contact`) - Contact information and form

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Content**: Markdown files for news articles
- **Forms**: Formspree integration
- **Deployment**: Azure Static Web Apps / Docker

## Getting Started

### Prerequisites

- Node.js 20+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pixonal-web
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
bun run build
# or
npm run build
```

The static files will be generated in the `out` directory.

## Content Management

### Adding News Articles

1. Create a new markdown file in `content/news/`
2. Use the following frontmatter format:

```markdown
---
title: "Article Title"
date: "2025-01-15"
category: "featured" # or "press releases", "in-the-news"
source: "Source Name"
excerpt: "Brief description..."
image: "/images/news/article-image.jpg"
---

Article content in markdown...
```

3. The article will automatically appear in the newsroom

### Updating Industry Information

Edit the `lib/industries.ts` file to update industry data, metrics, and case studies.

## Deployment

### Azure Static Web Apps

1. Build the project:
```bash
bun run build
```

2. Deploy the `out` directory to Azure Static Web Apps

3. The `staticwebapp.config.json` file is already configured for proper routing

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t pixonal-web .
```

2. Run the container:
```bash
docker run -p 80:80 pixonal-web
```

### Environment Variables

For production deployment, set the following environment variables:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - Formspree form endpoint URL
- `NEXT_PUBLIC_SITE_URL` - Your website URL for sitemap generation

## Project Structure

```
pixonal-web/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── llumen/            # Llumen product page
│   ├── industries/        # Industries pages
│   ├── advisory/          # Advisory services page
│   ├── newsroom/          # Newsroom pages
│   ├── contact/           # Contact page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # React components
│   ├── Navigation.tsx     # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── GetInTouch.tsx     # CTA section component
│   └── NewsCard.tsx       # News article card
├── content/               # Content files
│   └── news/              # Markdown news articles
├── lib/                   # Utility functions
│   ├── markdown.ts        # Markdown parsing
│   └── industries.ts      # Industry data
├── public/                # Static assets
├── staticwebapp.config.json # Azure Static Web Apps config
├── Dockerfile             # Docker configuration
├── nginx.conf             # Nginx configuration
└── tailwind.config.ts     # Tailwind CSS config
```

## SEO Features

- Complete metadata for all pages
- Open Graph and Twitter Card tags
- XML sitemap generation
- Robots.txt configuration
- Structured data for articles and organization
- Mobile-first responsive design

## Performance

- Static site generation for fast loading
- Image optimization with Next.js Image component
- Gzip compression
- Browser caching for static assets
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Pixonal. All rights reserved.

## Support

For technical support or questions, contact:
- Email: hello@pixonal.com
- Website: https://pixonal.com