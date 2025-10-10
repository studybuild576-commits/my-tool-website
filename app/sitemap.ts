import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // URL को आपके नए डोमेन से अपडेट कर दिया गया है
  const baseUrl = 'https://pdfmakerai.shop';

  const pages = [
    '/',
    '/image-resizer',
    '/image-converter',
    '/jpg-to-pdf',
    '/pdf-splitter',
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
