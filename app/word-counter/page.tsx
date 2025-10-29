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
  title: "Word Counter — Fast, Private Text Stats",
  description:
    "Count words, characters, lines, and paragraphs instantly in your browser. Private, fast, and free — no uploads.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/word-counter" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/word-counter",
    title: "Word Counter — Fast & Private",
    description: "Instant word and character counts in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter — Fast & Private",
    description: "Instant word and character counts in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <WordCounterTool />
    </main>
  );
}
