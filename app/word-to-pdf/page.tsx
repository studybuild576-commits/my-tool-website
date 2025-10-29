// app/word-to-pdf/page.tsx
import type { Metadata } from "next";
import WordToPDFTool from "@/components/WordToPDFTool";

const keywords: string[] = [
  "word to pdf","docx to pdf","convert word to pdf","export docx","save as pdf",
  "preserve formatting","keep images","online converter","free converter","private converter",
  "client side","no upload","pdf tools","nextjs","typescript",
  "seo","a11y","core web vitals","lighthouse","privacy first",
  "mobile friendly","pwa ready","document tools","workflow","productivity",
  "online utility","toolkit","pdf maker ai","pdfmakerai.shop","mammoth",
  "pdf-lib","font embed","image quality","page margins","line spacing",
  "a4 pages","fast conversion","local processing","download pdf","docx parser",
  "rich text","headings","paragraphs","text extraction","image extraction"
].slice(0, 50);

export const metadata: Metadata = {
  title: "Word to PDF (DOCX→PDF) — Free, Private",
  description:
    "Convert Word (.docx) to PDF directly in your browser while preserving text formatting and images. Fast, private, and free.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/word-to-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/word-to-pdf",
    title: "Word to PDF — Free & Private",
    description: "Convert DOCX to PDF locally in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Word to PDF — Free & Private",
    description: "Convert DOCX to PDF locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <WordToPDFTool />
    </main>
  );
}
