import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pdf-macker-ai.vercel.app';

  const pages = [
    '/',
    '/image-resizer',
    '/image-converter',
    '/jpg-to-pdf',
    '/pdf-splitter',
    '/pdf-unlocker',
    '/word-counter',
    '/case-converter',
    '/about',
    '/privacy-policy',
    '/blog',
    '/blog/seo-tips'
  ];

  const sitemapEntries = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  return sitemapEntries;
}
