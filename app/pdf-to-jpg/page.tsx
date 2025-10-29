// app/pdf-to-jpg/page.tsx
import type { Metadata } from "next";
import PDFToJPGTool from "@/components/PDFToJPGTool";

const keywords: string[] = [
  "pdf to jpg","convert pdf to jpg","export pdf as image","pdf to image",
  "pdf page to jpg","online pdf converter","free pdf converter","private converter",
  "client side pdf","no upload pdf","fast pdf conversion","lightweight",
  "pdf tools","image tools","browser pdf","web pdf","nextjs pdf",
  "typescript","seo","a11y","core web vitals","lighthouse",
  "privacy first","no tracking","mobile friendly","pwa ready","image download",
  "jpeg export","optimize image","batch convert","multi page pdf","page rendering",
  "pdfjs","canvas render","high quality jpeg","lossy compression","quality 85",
  "document tools","workflow","productivity","online utility","toolkit",
  "pdf maker ai","pdfmakerai.shop","jpg converter","image extractor","pdf rendering"
].slice(0, 50);

export const metadata: Metadata = {
  title: "PDF to JPG — Free, Private Converter",
  description:
    "Convert PDF pages to high‑quality JPG images directly in your browser. Fast, private, and free—no uploads required.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-to-jpg" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-to-jpg",
    title: "PDF to JPG — Free & Private",
    description: "Convert PDF pages to JPG locally in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG — Free & Private",
    description: "Convert PDF pages to JPG locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFToJPGTool />
    </main>
  );
}
