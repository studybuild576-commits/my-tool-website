import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const poppins = Poppins({ weight: ["600","700","800"], subsets: ["latin"], display: "swap", variable: "--font-poppins" });

const siteUrl = "https://pdfmakerai.shop";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PDF Maker AI: Advanced AI-Powered Online PDF Tools Suite",
    template: "%s | PDF Maker AI",
  },
  description:
    "PDF Maker AI is the ultimate online suite for PDF lovers. Use our powerful AI OCR, Merge, Split, Compress, Office to PDF, PDF to JPG tools and more—completely free and easy to use.",
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
    "office to pdf",
    "pdf to word converter",
  ],
  authors: [{ name: "PDF Maker AI" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: siteUrl,
    title: "PDF Maker AI — Online PDF Tools for PDF Lovers",
    description:
      "PDF Maker AI is the ultimate online suite for PDF lovers. Merge, Split, Compress, Convert and Edit PDFs using AI — secure, fast, and 100% free.",
    images: [
      { url: `${siteUrl}/og-image.svg`, width: 1200, height: 630 },
      { url: `${siteUrl}/logo.png`, width: 512, height: 512 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pdfmakerai",
    title: "PDF Maker AI — Smart PDF Tools for Everyone",
    description:
      "Merge, Split, Compress, Convert and Edit PDFs using AI — secure, fast, and 100% free.",
    images: [`${siteUrl}/og-image.svg`, `${siteUrl}/logo.png`],
  },
  manifest: "/manifest.json",
  themeColor: "#2563EB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* ✅ Mobile Friendly Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V0R7FENN5V" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if (!window.__gaInitialized) {
              gtag('js', new Date());
              gtag('config', 'G-V0R7FENN5V', { anonymize_ip: true });
              window.__gaInitialized = true;
            }
          `}
        </Script>

        {/* ✅ Combined Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "url": `${siteUrl}/`,
                  "name": "PDF Maker AI",
                  "description": "AI-powered PDF tools: merge, split, compress, OCR, convert, and edit PDFs easily.",
                  "publisher": { "@id": `${siteUrl}/#organization` }
                },
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  "name": "PDF Maker AI",
                  "url": `${siteUrl}/`,
                  "logo": `${siteUrl}/logo.png`,
                  "sameAs": [
                    "https://twitter.com/pdfmakerai",
                    "https://www.facebook.com/pdfmakerai",
                    "https://www.linkedin.com/company/pdfmakerai"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How can I merge PDFs using PDF Maker AI?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Simply upload your PDF files to the Merge PDF tool and click 'Merge Now'. It combines your PDFs instantly in high quality."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is PDF Maker AI completely free?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, all PDF Maker AI tools are 100% free with no registration or hidden charges."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does PDF Maker AI support AI-based OCR?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, it supports advanced AI OCR to extract text from scanned documents accurately."
                      }
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
                    { "@type": "ListItem", "position": 2, "name": "Tools", "item": `${siteUrl}/tools` },
                    { "@type": "ListItem", "position": 3, "name": "Merge PDF", "item": `${siteUrl}/merge-pdf` }
                  ]
                }
              ]
            }).replace(/</g, "\\u003c")
          }}
        />
      </head>

      <body className="bg-gray-50 text-slate-900 font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
