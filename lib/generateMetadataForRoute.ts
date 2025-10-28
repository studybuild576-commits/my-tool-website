import { tools } from './tools';

export function pageMetadataForRoute(route: string) {
  const tool = tools.find((t) => t.route === route);

  const defaults = {
    title: 'PDF Maker AI — AI PDF tools',
    description: 'PDF Maker AI — fast, privacy-first AI-powered PDF tools.',
    alternates: { canonical: `https://pdfmakerai.shop${route}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: 'PDF Maker AI — AI PDF tools',
      description: 'Fast, privacy-first AI-powered PDF tools: merge, split, compress and more.',
      images: ['/og-image.svg', '/logo.png'],
      url: `https://pdfmakerai.shop${route}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PDF Maker AI',
      description: 'Fast, privacy-first AI-powered PDF tools.',
      images: ['/og-image.svg', '/logo.png'],
    },
  } as const;

  if (!tool) return defaults;

  const title = `${tool.name} | PDF Maker AI`;
  const description = tool.description || tool.longDescription || defaults.description;

  return {
    title,
    description,
    alternates: { canonical: `https://pdfmakerai.shop${route}` },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description: tool.longDescription || description,
      images: ['/og-image.svg', '/logo.png'],
      url: `https://pdfmakerai.shop${route}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: tool.longDescription || description,
      images: ['/og-image.svg', '/logo.png'],
    },
  };
}
