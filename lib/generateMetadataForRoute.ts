// lib/metadata.ts
import { tools } from "./tools";

export function pageMetadataForRoute(route: string) {
  const cleanRoute = route.replace(/^\//, ""); // remove leading slash
  const tool = tools.find(
    (t) => t.route.replace(/^\//, "") === cleanRoute
  );

  const defaults = {
    title: "PDF Maker AI — Free Online PDF Tools",
    description:
      "PDF Maker AI offers free, fast, and privacy-focused online PDF tools. Convert, compress, split, merge, and protect your PDFs instantly.",
    alternates: { canonical: `https://pdfmakerai.shop${route}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: "PDF Maker AI — Free Online PDF Tools",
      description:
        "All-in-one AI-powered PDF tools: convert images to PDF, merge, compress, protect, and more. 100% secure and privacy-first.",
      images: ["/og-image.svg", "/logo.png"],
      type: "website",
      url: `https://pdfmakerai.shop${route}`,
      siteName: "PDF Maker AI",
    },
    twitter: {
      card: "summary_large_image",
      title: "PDF Maker AI",
      description:
        "Free, fast, and privacy-first AI PDF tools. Merge, split, and convert PDFs instantly.",
      images: ["/og-image.svg", "/logo.png"],
    },
    keywords: [
      "PDF Maker AI",
      "AI PDF tools",
      "free PDF converter",
      "merge PDF",
      "compress PDF",
      "split PDF",
      "PDF to JPG",
      "JPG to PDF",
      "AI PDF Editor",
    ],
  } as const;

  if (!tool) return defaults;

  const title = `${tool.name} | PDF Maker AI`;
  const description =
    tool.longDescription ||
    tool.description ||
    defaults.description;

  return {
    title,
    description,
    alternates: { canonical: `https://pdfmakerai.shop${route}` },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      images: ["/og-image.svg", "/logo.png"],
      type: "article",
      url: `https://pdfmakerai.shop${route}`,
      siteName: "PDF Maker AI",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg", "/logo.png"],
    },
    keywords: [
      tool.name,
      `${tool.name} guide`,
      `${tool.name} tutorial`,
      "AI PDF Maker",
      "Online PDF tool",
      "Free PDF editor",
      "Convert files to PDF",
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: title,
      description,
      author: {
        "@type": "Organization",
        name: "PDF Maker AI",
      },
      publisher: {
        "@type": "Organization",
        name: "PDF Maker AI",
        logo: {
          "@type": "ImageObject",
          url: "https://pdfmakerai.shop/logo.png",
        },
      },
      url: `https://pdfmakerai.shop${route}`,
      datePublished: new Date().toISOString(),
    },
  };
}
