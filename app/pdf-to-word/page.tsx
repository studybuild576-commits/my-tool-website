// app/pdf-to-word/page.tsx
import type { Metadata } from "next";
import PDFToWordTool from "@/components/PDFToWordTool";

const keywords: string[] = [
  "pdf to word","convert pdf to word","pdf to docx","export pdf as word",
  "pdf text to word","pdf image to word","online pdf converter","free pdf converter",
  "private converter","client side pdf","no upload pdf","fast pdf conversion",
  "docx generator","word document","text extraction","image extraction","pdfjs",
  "docx library","browser pdf","web pdf","nextjs pdf","typescript","seo",
  "a11y","core web vitals","lighthouse","privacy first","no tracking","mobile friendly",
  "pwa ready","high quality docx","document tools","workflow","productivity",
  "online utility","toolkit","pdf maker ai","pdfmakerai.shop","ocr optional",
  "preserve layout","keep images","page by page","multi page pdf","batch convert",
  "file utilities","secure pdf","no signup","download docx","convert locally"
].slice(0, 50);

export const metadata: Metadata = {
  title: "PDF to Word (DOCX) — Free, Private",
  description:
    "Convert PDFs to editable Word (DOCX) documents directly in your browser. Preserves text and embedded images. Fast, private, and free.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-to-word" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-to-word",
    title: "PDF to Word (DOCX) — Free & Private",
    description: "Convert PDF to editable DOCX locally in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to Word (DOCX) — Free & Private",
    description: "Convert PDF to editable DOCX locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFToWordTool />
    </main>
  );
}
