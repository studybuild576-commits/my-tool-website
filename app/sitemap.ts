import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // यह अपने-आप पता लगाएगा कि वेबसाइट का URL क्या है
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  const pages = [
    '/',
    '/word-counter',
    '/case-converter',
    '/jpg-to-pdf',
    '/pdf-splitter',
    '/pdf-unlocker',
    '/image-resizer',
    '/image-converter',
    '/about',
    '/privacy-policy'
  ];

  const sitemapEntries = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  return sitemapEntries;
}
