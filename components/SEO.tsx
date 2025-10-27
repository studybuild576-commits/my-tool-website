"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export default function SEO({ title, description, image = "/og-image.svg", canonical }: SEOProps) {
  const pathname = usePathname();
  const url = `https://pdfmakerai.shop${canonical ?? pathname ?? "/"}`;
  const pageTitle = title ? `${title} | PDF Maker AI` : "PDF Maker AI — AI PDF tools";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description ?? "PDF Maker AI — fast, privacy-first AI-powered PDF tools."} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <link rel="manifest" href="/manifest.json" />
  {/* favicons / touch icons (use provided PNG for broad compatibility) */}
  <link rel="icon" href="/logo.png" />
  <link rel="shortcut icon" href="/logo.png" />
  <link rel="apple-touch-icon" href="/logo.png" />
      <meta name="theme-color" content="#2563EB" />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description ?? "PDF Maker AI — fast, privacy-first AI-powered PDF tools."} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pdfmakerai" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description ?? "PDF Maker AI — fast, privacy-first AI-powered PDF tools."} />
      <meta name="twitter:image" content={image} />

      {/* Structured data: Organization + WebSite (helps indexing & rich results) */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "url": "https://pdfmakerai.shop/",
                "name": "PDF Maker AI",
                "description": "AI-powered PDF tools: merge, split, compress, OCR and more.",
                "publisher": {
                  "@id": "https://pdfmakerai.shop/#organization"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://pdfmakerai.shop/#organization",
                "name": "PDF Maker AI",
                "url": "https://pdfmakerai.shop/",
                "logo": "https://pdfmakerai.shop/logo.png",
                "sameAs": []
              }
            ]
          })
        }}
      />
    </Head>
  );
}
