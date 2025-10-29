// app/pdf-splitter/page.tsx
import type { Metadata } from "next";
import PDFSplitterTool from "@/components/PDFSplitterTool";

const keywords: string[] = [
  "pdf splitter","split pdf","split pdf pages","extract pdf page","separate pdf",
  "pdf page extractor","pdf tools","online pdf","free pdf","private pdf",
  "client side pdf","no upload pdf","secure pdf","fast pdf","lightweight pdf",
  "ocr pdf","merge pdf","compress pdf","convert pdf","pdf to jpg",
  "jpg to pdf","html to pdf","read pdf","edit pdf","browser pdf",
  "web pdf","nextjs pdf","typescript pdf","a11y","seo",
  "core web vitals","lighthouse","mobile friendly","pwa ready","accessibility",
  "privacy first","no tracking","no signup","download pdf","document tools",
  "file utilities","productivity","toolkit","online utility","free toolkit",
  "pdf maker ai","pdfmakerai.shop","split pdf online","splitter tool","split pdf free"
].slice(0, 50);

export const metadata: Metadata = {
  title: "PDF Splitter — Split Pages Free",
  description:
    "Split a PDF into individual pages directly in your browser. Fast, private, and free—no uploads required.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-splitter" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-splitter",
    title: "PDF Splitter — Free & Private",
    description: "Split PDF into single pages in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Splitter — Free & Private",
    description: "Split PDF pages locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFSplitterTool />
    </main>
  );
}
