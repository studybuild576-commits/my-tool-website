// app/cloud-integration/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cloud Integration — Connect Google Drive & Dropbox for PDF Tools | PDF Maker AI",
  description:
    "Easily connect Google Drive and Dropbox with PDF Maker AI to import/export your PDFs, images, and documents — 100% secure, private, and free cloud integration tool.",
  keywords: [
    "cloud integration",
    "google drive integration",
    "dropbox integration",
    "import export pdf",
    "pdf maker ai cloud",
    "connect drive with pdf",
    "connect dropbox with pdf",
    "cloud pdf tools",
    "google drive picker",
    "dropbox chooser",
    "save pdf to drive",
    "export pdf to dropbox",
    "cloud automation pdf",
    "pdf workflow cloud",
    "oauth connect drive",
    "private cloud pdf",
    "no signup cloud integration",
    "free drive dropbox connect",
    "secure pdf import export",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/cloud-integration" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/cloud-integration",
    title: "Cloud Integration — Connect Google Drive & Dropbox | PDF Maker AI",
    description:
      "Import, process, and export PDFs directly with Google Drive and Dropbox. Privacy-first, fast, and 100% free.",
    siteName: "PDF Maker AI",
    images: [
      {
        url: "https://pdfmakerai.shop/og/cloud-integration.webp",
        width: 1200,
        height: 630,
        alt: "Cloud Integration — Google Drive and Dropbox Connection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Integration — Google Drive & Dropbox | PDF Maker AI",
    description:
      "Connect Google Drive & Dropbox with PDF Maker AI to import/export PDFs securely — private, free, and in-browser.",
    images: ["https://pdfmakerai.shop/og/cloud-integration.webp"],
  },
};

export default function CloudIntegrationPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cloud Integration — Google Drive & Dropbox",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "CloudStorageIntegration",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/cloud-integration",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Connect Google Drive and Dropbox",
      "Import and export PDFs seamlessly",
      "Secure and private cloud processing",
      "OAuth-based minimal access",
      "No signup or login required",
    ],
    keywords:
      "cloud integration, google drive integration, dropbox integration, pdf import export, secure cloud pdf",
    publisher: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya main Google Drive aur Dropbox dono connect kar sakta hoon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, PDF Maker AI dono integrations support karta hai — aap Drive aur Dropbox dono se import/export kar sakte ho.",
        },
      },
      {
        "@type": "Question",
        name: "Kya mere files server par upload hoti hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nahi, saari processing in-browser hoti hai aur cloud se direct link ke through secure OAuth access hota hai.",
        },
      },
      {
        "@type": "Question",
        name: "Kya tool free hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, ye 100% free hai aur kisi account signup ki zarurat nahi padti.",
        },
      },
      {
        "@type": "Question",
        name: "Privacy kaise maintain hoti hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PDF Maker AI minimal OAuth scopes use karta hai aur koi data store nahi karta — sab kuch local processing ke sath.",
        },
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-sky-50 via-white to-emerald-50 border border-slate-200 shadow-sm">
        <div className="relative p-10">
          <h1 className="text-3xl font-extrabold text-sky-900">
            ☁️ Cloud Integration — Google Drive & Dropbox
          </h1>
          <p className="mt-2 text-slate-700 text-sm sm:text-base max-w-2xl">
            Connect your Google Drive or Dropbox to import and export PDFs
            instantly. 100% private, secure, and browser-based.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Connect your cloud storage
            </h2>
            <p className="text-slate-600 text-sm">
              Use OAuth to securely pick or save files from Google Drive or
              Dropbox — no manual download required.
            </p>
          </div>
          <a
            href="/cloud-integration"
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition"
          >
            Connect Cloud <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Why choose this?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          <li>• Secure, OAuth-based cloud integration</li>
          <li>• No signup or account required</li>
          <li>• Direct Drive/Dropbox import and export</li>
          <li>• Fully in-browser privacy model</li>
        </ul>
      </section>

      {/* Related Tools */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/batch-processing">
            Batch Processing
          </Link>
          <Link prefetch={false} href="/compress-pdf">
            Compress PDF
          </Link>
          <Link prefetch={false} href="/merge-pdf">
            Merge PDF
          </Link>
          <Link prefetch={false} href="/ai-ocr">
            AI OCR
          </Link>
          <Link prefetch={false} href="/chat-with-pdf">
            Chat with PDF
          </Link>
        </nav>
      </aside>

      {/* FAQ */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2">
          <summary>Kya files safe hain?</summary>
          <p className="text-gray-600">
            Haan, sab kuchh OAuth ke secure flow ke zariye process hota hai,
            bina kisi data storage ke.
          </p>
        </details>
        <details className="mb-2">
          <summary>Kya ye paid service hai?</summary>
          <p className="text-gray-600">Nahi, ye bilkul free hai.</p>
        </details>
      </section>
    </main>
  );
}
