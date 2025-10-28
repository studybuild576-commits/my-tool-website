// app/cloud-integration/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Integration: Connect Google Drive & Dropbox (Import/Export) | PDF Maker AI",
  description:
    "Seamlessly connect Google Drive and Dropbox to import PDFs/images and export processed files back to cloud—free, secure, and privacy‑first.",
  keywords: [
    "cloud integration","google drive integration","dropbox integration","connect google drive","connect dropbox",
    "import from google drive","import from dropbox","export to google drive","export to dropbox","pdf cloud workflow",
    "cloud file picker","drive file picker","dropbox chooser","cloud export","google drive picker",
    "dropbox saver","in-browser cloud connect","private cloud integration","no signup cloud tools","secure cloud pdf",
    "batch cloud processing","sync pdf to cloud","automate pdf to cloud","pdf to drive","pdf to dropbox",
    "drive to pdf tools","dropbox to pdf tools","document cloud workflow","cloud uploader","cloud downloader",
    "oauth cloud connect","scoped permissions cloud","read-only connect","export-only connect","pick and save cloud",
    "one-click connect","pdf pipeline to cloud","privacy-first cloud","free cloud integration","cloud import export",
    "connect storage accounts","google workspace pdf","dropbox business pdf","team drive support","shared drive support",
    "drive mime types","cloud file limits","cloud rate limits","pdf maker ai cloud","fast cloud sync"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/cloud-integration" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/cloud-integration",
    title: "Cloud Integration — Google Drive & Dropbox",
    description:
      "Import from Google Drive/Dropbox and export results back—fast, secure, privacy‑first.",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary",
    title: "Cloud Integration — Connect Drive & Dropbox",
    description: "Import/Export with Google Drive and Dropbox in your browser—no signup."
  }
};

export default function CloudIntegrationPage() {
  // SoftwareApplication + FAQPage JSON‑LD for richer snippets
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
      "Connect Google Drive",
      "Connect Dropbox",
      "Import files from cloud",
      "Export results to cloud",
      "In‑browser, privacy‑first",
      "No signup"
    ],
    keywords:
      "cloud integration, google drive integration, dropbox integration, import from drive, export to dropbox, cloud file picker, private cloud connect",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya files server par upload hoti hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Import/Export directly cloud se hota hai aur processing in‑browser tools ke saath privacy‑first design follow kiya jata hai.",
        }
      },
      {
        "@type": "Question",
        name: "Kya Google Drive aur Dropbox dono supported hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Haan, Google Drive aur Dropbox dono connect kiye ja sakte hain pick (import) aur save (export) flows ke liye.",
        }
      },
      {
        "@type": "Question",
        name: "Kya ye free aur bina signup ke hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Haan, cloud connect free hai; OAuth consent ke alawa alag account signup ki zaroorat nahi hoti.",
        }
      }
    ]
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* JSON‑LD (XSS‑safe) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      {/* Decorative hero (inline SVG, no external images) */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/15 via-cyan-500/15 to-emerald-500/15" />
        <div aria-hidden className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Cloud integration for Google Drive and Dropbox"
        >
          <defs>
            <pattern id="dots-cloud" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient id="stroke-cloud" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="fill-cloud" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#86efac" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-cloud)" className="text-sky-400/20" />
          <path
            d="M120,240 C180,170 300,160 380,200 C460,240 620,260 680,210 C720,180 700,130 640,110 C580,90 520,115 460,135 C400,155 330,165 260,155 C200,145 150,165 120,195 C100,215 110,240 120,240 Z"
            fill="url(#fill-cloud)"
            stroke="url(#stroke-cloud)"
            strokeWidth="2"
          />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-sky-900">
            ☁️ Cloud Integration — Google Drive & Dropbox
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Import from Google Drive/Dropbox and export results back to cloud—fast, secure, and private.
          </p>
        </div>
      </div>

      {/* Primary CTA */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Connect your cloud</h2>
            <p className="text-slate-600 text-sm">
              Use OAuth to grant minimal, scoped access for picking/saving files from your storage.
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

      {/* How it works */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">How it works</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>• Sign in with Google Drive or Dropbox using OAuth (scoped permissions)</li>
          <li>• Pick files directly from your cloud folders (no manual download)</li>
          <li>• Process files in your browser with our tools</li>
          <li>• Save results back to Drive/Dropbox in one click</li>
        </ul>
      </section>

      {/* Related tools */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/batch-processing">Batch Processing</Link>
          <Link prefetch={false} href="/compress-pdf">Compress PDF</Link>
          <Link prefetch={false} href="/merge-pdf">Merge PDF</Link>
          <Link prefetch={false} href="/ai-ocr">AI OCR</Link>
          <Link prefetch={false} href="/chat-with-pdf">Chat with PDF</Link>
        </nav>
      </aside>

      {/* FAQs */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2">
          <summary>Data privacy kaise ensure hoti hai?</summary>
          <p className="text-gray-600">
            Minimal scopes, in‑browser processing wherever possible, aur result save ke baad local cleanup kiya jata hai.
          </p>
        </details>
        <details className="mb-2">
          <summary>Drive/Dropbox par write access kyun chahiye?</summary>
          <p className="text-gray-600">
            Export/save results ke liye write access jaruri hota hai; aap read‑only flow bhi choose kar sakte hain.
          </p>
        </details>
        <details className="mb-2">
          <summary>Free aur bina signup?</summary>
          <p className="text-gray-600">Haan, 100% free—sirf OAuth consent required hota hai.</p>
        </details>
      </section>
    </main>
  );
}
