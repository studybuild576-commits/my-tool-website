import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pdfmakerai.shop";

  const pages = [
    "/", // homepage
    "/image-resizer",
    "/image-converter",
    "/jpg-to-pdf",
    "/pdf-splitter",
    "/word-counter",
    "/case-converter",
    "/about",
    "/privacy-policy",
    "/disclaimer",
    "/contact",
    "/blog",
    "/blog/seo-tips",
    "/terms-and-conditions",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: page === "/" ? 1.0 : 0.8,
  }));
}
