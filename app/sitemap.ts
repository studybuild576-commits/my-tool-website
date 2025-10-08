import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pdf-macker-ai.vercel.app'; // यहाँ अपनी वेबसाइट का सही URL डालें

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
