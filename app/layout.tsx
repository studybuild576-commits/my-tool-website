import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: {
    default: "PDF Maker AI: Advanced AI-Powered Online PDF Tools Suite", // Updated for AI focus
    template: "%s | PDF Maker AI",
  },
  description:
    "PDF Maker AI is the ultimate online suite for PDF lovers. Use our powerful AI OCR, Merge, Split, Compress, Office to PDF, PDF to JPG tools and more—completely free and easy to use.", // Updated description
  keywords: [
    "ai pdf tools",
    "ai ocr",
    "chat with pdf",
    "pdf tools free",
    "pdf maker online",
    "merge pdf",
    "split pdf",
    "compress pdf",
    "online pdf editor",
  ],
  authors: [{ name: "PDF Maker AI" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "PDF Maker AI — Online PDF Tools for PDF Lovers",
    description:
      "PDF Maker AI is the ultimate online suite for PDF lovers. Use our powerful AI OCR, Merge, Split, Compress, Office to PDF, PDF to JPG tools and more—completely free and easy to use.",
    images: ["/favicon.svg"],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Maker AI — Online PDF Tools for PDF Lovers",
    description:
      "PDF Maker AI is the ultimate online suite for PDF lovers. Use our powerful AI OCR, Merge, Split, Compress, Office to PDF, PDF to JPG tools and more—completely free and easy to use.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* Text color ko thoda darker (900) kiya for better contrast */}
      <body className="bg-gray-50 text-slate-900 font-sans">
        <Navbar />
        {/* MAIN CONTENT AREA: Padding (py) ko 10 se 12/16 kiya for better spacing/UX */}
        <main className="max-w-6xl mx-auto px-4 py-12 md:py-16">{children}</main> 
        <Footer />

        {/* Structured data (JSON-LD) for Organization and Website - Same as original */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PDF Maker AI",
              url: "https://pdfmakerai.shop/",
              description:
                "PDF Maker AI is the ultimate online suite for PDF tools. Featuring AI-powered OCR, Chat with PDF, Merging, Splitting, and more.",
            }),
          }}
        />
      </body>
    </html>
  );
}
