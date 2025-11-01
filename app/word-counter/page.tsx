// app/word-counter/page.tsx
import type { Metadata } from "next";
import WordCounterTool from "@/components/WordCounterTool";

const keywords: string[] = [
  "word counter","count words online","character counter","text stats","reading time",
  "word count tool","characters with spaces","characters without spaces","line count","paragraph count",
  "writing assistant","content length","essay counter","blog counter","seo text length",
  "private tool","client side tool","no upload","fast","lightweight",
  "browser tool","nextjs","typescript","seo","a11y",
  "core web vitals","lighthouse","privacy first","no tracking","mobile friendly",
  "pwa ready","productivity","online utility","toolkit","pdf maker ai",
  "pdfmakerai.shop","word frequency","live counter","paste text","copy safe",
  "count words accurately","instant results","real time count","simple ui","free tool",
  "text editor helper","writer tool","counter app","character limit","twitter length"
].slice(0, 50);

export const metadata: Metadata = {
  title: "Word Counter — Count Words, Characters & Reading Time | PDF Maker AI",
  description:
    "Use our free Word Counter tool to count words, characters, lines, and paragraphs instantly in your browser. 100% private, no upload, and lightning-fast results.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/word-counter" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/word-counter",
    title: "Word Counter — Count Words, Characters & Reading Time",
    description: "Free and private word counter tool that works instantly in your browser — no upload needed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter — Fast, Private, and Free",
    description: "Instantly count words, characters, lines, and reading time online. 100% private.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this Word Counter free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Word Counter tool on PDF Maker AI is completely free and works directly in your browser."
        }
      },
      {
        "@type": "Question",
        "name": "Does this tool upload my text to the server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. This tool runs 100% locally in your browser, ensuring total privacy and data security."
        }
      },
      {
        "@type": "Question",
        "name": "Can I count both words and characters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this tool counts words, characters (with or without spaces), lines, and paragraphs instantly."
        }
      }
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <WordCounterTool />

      {/* ✅ SEO FAQ Schema for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ✅ Hidden SEO Section for extra context */}
      <section className="mt-10 text-sm text-gray-600 leading-6">
        <h2 className="text-lg font-semibold mb-2">About Word Counter Tool</h2>
        <p>
          Our Word Counter helps you analyze your text in real-time. It counts words, characters, lines,
          and paragraphs instantly, showing live updates as you type. Ideal for writers, bloggers,
          students, and professionals checking SEO text length or character limits.
        </p>
        <p className="mt-2">
          Built by <strong>PDF Maker AI</strong>, this tool works entirely in your browser, ensuring your
          text is never uploaded or stored. You can use it offline too with our PWA-ready design.
        </p>
      </section>
    </main>
  );
}
