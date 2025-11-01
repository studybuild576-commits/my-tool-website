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
  title: "Word to PDF Converter — Convert DOCX to PDF Online | PDF Maker AI",
  description:
    "Easily convert Word (DOCX) files to PDF directly in your browser. Preserve text formatting, images, and layout — 100% private, no upload required.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/word-to-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/word-to-pdf",
    title: "Word to PDF Converter — Free, Fast, and Private",
    description:
      "Convert DOCX to PDF directly in your browser with perfect formatting. Fast, free, and privacy-focused.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word to PDF Converter — Free, Fast, and Private",
    description:
      "Convert DOCX to PDF directly in your browser. Keep fonts, images, and layout intact.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this Word to PDF tool free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Word to PDF converter is completely free and runs in your browser without uploading files to a server."
        }
      },
      {
        "@type": "Question",
        "name": "Will my document formatting and images be preserved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this converter preserves original fonts, images, margins, and page layout during conversion."
        }
      },
      {
        "@type": "Question",
        "name": "Does this tool work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Since it runs entirely in your browser, you can use it offline once loaded — no internet required."
        }
      }
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <WordToPDFTool />

      {/* ✅ SEO FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ✅ Hidden SEO-Enhanced Content Section */}
      <section className="mt-10 text-sm text-gray-700 leading-6">
        <h2 className="text-lg font-semibold mb-2">
          About Word to PDF Converter by PDF Maker AI
        </h2>
        <p>
          The Word to PDF converter allows you to turn any DOCX file into a high-quality PDF
          without uploading your data to any server. Your files remain secure and private as
          everything runs directly in your browser.
        </p>
        <p className="mt-2">
          This converter retains the original layout, fonts, images, and page structure, ensuring
          that your document looks exactly the same in PDF format. It supports various page sizes,
          including A4 and Letter, making it ideal for resumes, reports, and professional documents.
        </p>
        <p className="mt-2">
          Built using cutting-edge technologies like <strong>Next.js</strong> and <strong>TypeScript</strong>,
          PDF Maker AI’s tools are optimized for speed, privacy, and accessibility — helping users
          process files instantly with zero data tracking.
        </p>
      </section>
    </main>
  );
}
