// app/text-to-pdf/page.tsx
import type { Metadata } from "next";
import TextToPDFTool from "@/components/TextToPDFTool";

const keywords: string[] = [
  "text to pdf","generate pdf from text","create pdf online","plain text pdf",
  "formatted pdf","pdf font select","pdf alignment","pdf color text","a4 pdf",
  "pdf tools","online pdf","free pdf","private pdf","client side pdf",
  "no upload pdf","browser pdf","web pdf","nextjs pdf","typescript",
  "seo","a11y","core web vitals","lighthouse","privacy first",
  "no tracking","mobile friendly","pwa ready","document tools","workflow",
  "productivity","online utility","toolkit","pdf maker ai","pdfmakerai.shop",
  "multi page pdf","word wrap pdf","helvetica","times roman","courier",
  "text layout","margins","line height","download pdf","fast generation",
  "local processing","secure","no signup","lightweight","instant create"
].slice(0, 50);

export const metadata: Metadata = {
  title: "Text to PDF — Create A4 PDFs from Text (Free, Private)",
  description:
    "Convert text into professionally formatted A4 PDFs in your browser. Choose font, size, color, and alignment. Fast, private, and free.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/text-to-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/text-to-pdf",
    title: "Text to PDF — Free & Private",
    description: "Create formatted A4 PDFs from text locally in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Text to PDF — Free & Private",
    description: "Create formatted A4 PDFs from text locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <TextToPDFTool />
    </main>
  );
}
