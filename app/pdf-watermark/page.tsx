// app/pdf-watermark/page.tsx
import type { Metadata } from "next";
import PDFWatermarkTool from "@/components/PDFWatermarkTool";

const keywords: string[] = [
  "pdf watermark","add watermark to pdf","text watermark pdf","confidential pdf",
  "draft watermark","stamp pdf","annotate pdf","branding pdf","custom watermark",
  "pdf tools","online pdf","free pdf","private pdf","client side pdf",
  "no upload pdf","fast processing","browser pdf","web pdf","nextjs pdf",
  "typescript","seo","a11y","core web vitals","lighthouse",
  "privacy first","no tracking","mobile friendly","pwa ready","document tools",
  "workflow","productivity","online utility","toolkit","pdf maker ai",
  "pdfmakerai.shop","rotate watermark","opacity watermark","repeat pattern",
  "center watermark","color watermark","large watermark","secure watermark",
  "render text pdf","pdf-lib watermark","local processing","download pdf",
  "branding overlay","company watermark","watermark generator","page overlay","page grid"
].slice(0, 50);

export const metadata: Metadata = {
  title: "PDF Watermark — Add Text Watermarks (Free, Private)",
  description:
    "Add customizable text watermarks to your PDF pages in the browser. Choose text, color, opacity, rotation, and pattern. Fast, private, and free.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-watermark" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-watermark",
    title: "PDF Watermark — Free & Private",
    description: "Add text watermarks locally in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Watermark — Free & Private",
    description: "Add text watermarks locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFWatermarkTool />
    </main>
  );
}
