// app/conversion-suite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conversion Suite: PDF ↔ Word/Excel/PPT (High‑Fidelity, Free) | PDF Maker AI",
  description:
    "Convert PDFs to editable Word, Excel, or PowerPoint and back to PDF with layout preservation. Free, in‑browser, privacy‑first, no signup.",
  keywords: [
    "pdf to word converter","pdf to excel converter","pdf to ppt converter","word to pdf","excel to pdf","ppt to pdf",
    "high fidelity pdf conversion","layout preservation converter","pdf tables to excel","pdf text to word",
    "image heavy pdf to ppt","bulk pdf conversion","batch pdf to word","free pdf converter online","private pdf conversion",
    "in-browser pdf converter","no signup pdf tools","accurate pdf extraction","ocr pdf to word","form fields pdf export",
    "styles preserved pdf","fonts preserved pdf","tables preserved","headings preserved","page layout preserved",
    "export pdf content","import office to pdf","office docs to pdf","docx to pdf","xlsx to pdf","pptx to pdf",
    "vector graphics to ppt","images to word","excel formatting retain","pdf to csv","pdf to html","html to pdf",
    "best pdf converter","fast pdf converter","secure pdf converter","enterprise pdf conversion","student pdf tools",
    "resume pdf to word","invoice pdf to excel","slides pdf to ppt","research pdf to word","report word to pdf",
    "compliance friendly","gdpr friendly","local processing","no data upload","browser based conversion"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/conversion-suite" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/conversion-suite",
    title: "Conversion Suite — PDF ↔ Word/Excel/PPT",
    description:
      "Professional‑grade PDF conversions with layout preservation. Convert both ways—free and private.",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Suite — PDF to Word/Excel/PPT (and back)",
    description: "High‑fidelity conversions in your browser—no signup, privacy‑first."
  }
};

export default function ConversionSuitePage() {
  // SoftwareApplication + FAQPage JSON‑LD
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Conversion Suite — PDF ↔ Word/Excel/PPT",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "DocumentConversion",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/conversion-suite",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "PDF to Word (DOCX)",
      "PDF to Excel (XLSX)",
      "PDF to PowerPoint (PPTX)",
      "DOCX/XLSX/PPTX to PDF",
      "Layout preservation",
      "In‑browser, no signup"
    ],
    keywords:
      "pdf to word, pdf to excel, pdf to ppt, word to pdf, excel to pdf, ppt to pdf, layout preservation, high-fidelity pdf conversion",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya conversion local browser me hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, jahaan possible hoga conversion browser me hota hai; kuch advanced cases ke liye temporary server jobs ho sakti hain with quick deletion."
        }
      },
      {
        "@type": "Question",
        name: "Layout preserve hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Goal maximum fidelity hai—text, tables, headings, images, aur page layout ko preserve karne ki koshish hoti hai."
        }
      },
      {
        "@type": "Question",
        name: "Kya tool free aur bina signup hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, core conversions free aur bina account ke available hain."
        }
      }
    ]
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

      {/* Inline SVG hero (no external images) */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-fuchsia-500/15 to-rose-500/15" />
        <div aria-hidden className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-violet-400/30 blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="High-fidelity PDF conversion to Word, Excel, and PowerPoint"
        >
          <defs>
            <pattern id="dots-conv" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient id="stroke-conv" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="fill-conv" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#fecdd3" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-conv)" className="text-fuchsia-400/20" />
          <path
            d="M120,240 C190,170 310,160 390,210 C470,260 640,280 700,220 C740,180 720,130 660,110 C600,95 530,120 470,140 C410,160 350,170 270,160 C210,150 150,170 120,200 C100,220 110,240 120,240 Z"
            fill="url(#fill-conv)"
            stroke="url(#stroke-conv)"
            strokeWidth="2"
          />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-fuchsia-900">
            🔁 Conversion Suite — PDF ↔ Word/Excel/PPT
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Convert PDFs to DOCX/XLSX/PPTX and back with layout preservation—fast, private, and free.
          </p>
        </div>
      </div>

      {/* Intro + CTA */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Start converting</h2>
            <p className="text-slate-600 text-sm">
              Choose your source format and convert with high fidelity—no signup required.
            </p>
          </div>
          <a href="/conversion-suite" className="inline-flex items-center gap-2 bg-fuchsia-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-fuchsia-700 transition">
            Open Conversion Suite <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Why choose this */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Why choose this converter?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>• High‑fidelity conversion with layout preservation</li>
          <li>• Works both ways: PDF ↔ DOCX/XLSX/PPTX</li>
          <li>• In‑browser processing for privacy</li>
          <li>• Free and no signup required</li>
        </ul>
      </section>

      {/* Related tools */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/pdf-to-word">PDF to Word</Link>
          <Link prefetch={false} href="/pdf-to-excel">PDF to Excel</Link>
          <Link prefetch={false} href="/pdf-to-ppt">PDF to PPT</Link>
          <Link prefetch={false} href="/word-to-pdf">Word to PDF</Link>
          <Link prefetch={false} href="/excel-to-pdf">Excel to PDF</Link>
          <Link prefetch={false} href="/ppt-to-pdf">PPT to PDF</Link>
        </nav>
      </aside>

      {/* FAQs */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2">
          <summary>Fidelity kaisi milegi?</summary>
          <p className="text-gray-600">
            Text, tables, headings, images, aur page layout preserve karne ki koshish hoti hai; complex documents me minor tweaks ki zaroorat ho sakti hai.
          </p>
        </details>
        <details className="mb-2">
          <summary>Kya large files support hain?</summary>
          <p className="text-gray-600">
            Haan, browser memory par depend karta hai; recommended hai 50–100MB tak per file for smooth experience.
          </p>
        </details>
        <details className="mb-2">
          <summary>Free aur privacy‑first?</summary>
          <p className="text-gray-600">
            Haan, core conversions free hain; processing jahaan possible hoga browser me hoti hai.
          </p>
        </details>
      </section>
    </main>
  );
}
