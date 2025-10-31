// app/conversion-suite/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Conversion Suite — Free PDF to Word, Excel, PPT & Back | High-Fidelity Online Converter | PDF Maker AI",
  description:
    "Convert PDF to Word, Excel, or PowerPoint and vice versa with perfect layout retention. 100% free, in-browser, privacy-first conversion suite by PDF Maker AI — no signup required.",
  keywords: [
    "pdf to word converter",
    "pdf to excel converter",
    "pdf to ppt converter",
    "word to pdf",
    "excel to pdf",
    "ppt to pdf",
    "convert pdf online",
    "pdf editor",
    "layout preserved pdf converter",
    "pdf to csv",
    "pdf to html",
    "high fidelity pdf conversion",
    "in browser pdf tools",
    "no signup pdf tools",
    "best free pdf converter",
    "secure pdf conversion",
    "private pdf converter",
    "ai pdf tools",
    "smart pdf to word",
    "resume pdf to docx",
    "invoice pdf to xlsx",
    "slides pdf to pptx",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/conversion-suite" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/conversion-suite",
    title: "Conversion Suite — PDF ↔ Word/Excel/PPT | Free & Private",
    description:
      "Convert PDF files into editable Word, Excel, or PowerPoint with layout preservation. 100% browser-based, secure and free.",
    siteName: "PDF Maker AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PDF Maker AI Conversion Suite - PDF to Word, Excel, PPT"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Converter — PDF to Word/Excel/PPT | PDF Maker AI",
    description:
      "Convert PDF ↔ Word/Excel/PPT directly in your browser — secure, high-fidelity, and free.",
    images: ["/og-image.png"]
  }
};

export default function ConversionSuitePage() {
  // ✅ JSON-LD: SoftwareApplication + FAQ + Breadcrumbs
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Conversion Suite — PDF ↔ Word/Excel/PPT",
    operatingSystem: "Web",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "DocumentConversion",
    url: "https://pdfmakerai.shop/conversion-suite",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "PDF to Word (DOCX)",
      "PDF to Excel (XLSX)",
      "PDF to PowerPoint (PPTX)",
      "DOCX/XLSX/PPTX to PDF",
      "Layout Preservation",
      "In-Browser Processing",
      "Privacy-First, No Signup Required"
    ],
    publisher: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1290"
    }
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
          text: "Haan, jahaan possible ho conversion aapke browser me hota hai, bina kisi file upload ke. Kuch complex cases me secure temporary processing hoti hai, jisme files delete ho jati hain within minutes."
        }
      },
      {
        "@type": "Question",
        name: "Layout preserve hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, hum maximum layout fidelity maintain karte hain — text, tables, images, aur page structure jaise ke waise rehte hain."
        }
      },
      {
        "@type": "Question",
        name: "Kya ye tool bilkul free hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul! Core conversions 100% free hain aur aapko koi account create karne ki zarurat nahi."
        }
      },
      {
        "@type": "Question",
        name: "Kya PDF Maker AI data store karta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nahi. Saare conversions browser me local run hote hain; hum koi user data save nahi karte."
        }
      }
    ]
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pdfmakerai.shop" },
      { "@type": "ListItem", position: 2, name: "Conversion Suite", item: "https://pdfmakerai.shop/conversion-suite" }
    ]
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appLd).replace(/</g, "\\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c")
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/10 via-violet-500/10 to-rose-400/10" />
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-fuchsia-900">
            🔁 Conversion Suite — PDF ↔ Word/Excel/PPT
          </h1>
          <p className="mt-2 text-slate-700 text-sm sm:text-base">
            Convert PDF files into editable Word, Excel, or PowerPoint — and back — while preserving formatting. All inside your browser.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Start converting instantly</h2>
            <p className="text-slate-600 text-sm">
              Convert any document securely, in seconds — no signup required.
            </p>
          </div>
          <a
            href="/conversion-suite"
            className="inline-flex items-center gap-2 bg-fuchsia-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-fuchsia-700 transition"
          >
            Open Conversion Suite →
          </a>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Why choose this converter?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
          <li>✅ High-fidelity conversions with layout retention</li>
          <li>✅ Works both ways: PDF ↔ DOCX/XLSX/PPTX</li>
          <li>✅ 100% Browser-based — no uploads</li>
          <li>✅ Free forever, no signup</li>
        </ul>
      </section>

      {/* Related Tools */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related Tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm text-fuchsia-700">
          <Link prefetch={false} href="/pdf-to-word">PDF to Word</Link>
          <Link prefetch={false} href="/pdf-to-excel">PDF to Excel</Link>
          <Link prefetch={false} href="/pdf-to-ppt">PDF to PPT</Link>
          <Link prefetch={false} href="/word-to-pdf">Word to PDF</Link>
          <Link prefetch={false} href="/excel-to-pdf">Excel to PDF</Link>
          <Link prefetch={false} href="/ppt-to-pdf">PPT to PDF</Link>
        </nav>
      </aside>

      {/* FAQ Section */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2">
          <summary>Conversion fidelity kaisi hai?</summary>
          <p className="text-gray-600">
            Layout aur formatting preserve hoti hai — tables, images, fonts aur spacing ke saath.
          </p>
        </details>
        <details className="mb-2">
          <summary>Kya large files support karta hai?</summary>
          <p className="text-gray-600">
            Yes, browser memory ke limit ke andar 100MB tak files smoothly process hoti hain.
          </p>
        </details>
        <details className="mb-2">
          <summary>Kya data private rehta hai?</summary>
          <p className="text-gray-600">
            Haan, sab kuch browser me hota hai — koi file server pe store nahi hoti.
          </p>
        </details>
      </section>
    </main>
  );
}
