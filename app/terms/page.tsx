// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — PDF Maker AI",
  description:
    "Read the Terms of Service for using PDF Maker AI’s free, private, and secure online tools. Understand your rights, usage limits, and liability disclaimers.",
  alternates: { canonical: "https://pdfmakerai.shop/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    title: "Terms of Service — PDF Maker AI",
    description:
      "Official Terms of Service outlining user responsibilities, acceptable use, and limitations when using PDF Maker AI tools.",
    url: "https://pdfmakerai.shop/terms",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — PDF Maker AI",
    description:
      "Review the Terms of Service for PDF Maker AI’s online utilities and tools.",
    images: ["/og-image.png"],
  },
};

// ✅ Add FAQ Schema for Google rich results
const metadataScript = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use PDF Maker AI for commercial projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can use PDF Maker AI for both personal and commercial purposes as long as your use complies with the Terms of Service and applicable laws."
        }
      },
      {
        "@type": "Question",
        "name": "Does PDF Maker AI store uploaded files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All files processed through PDF Maker AI are handled locally or temporarily and automatically deleted after processing is complete."
        }
      },
      {
        "@type": "Question",
        "name": "Who do I contact for legal or DMCA issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact support@pdfmakerai.shop for legal notices, DMCA takedowns, or disputes related to your content."
        }
      }
    ]
  }),
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Inject FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={metadataScript} />

      <section className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-extrabold mb-3">Terms of Service</h1>
        <p className="text-slate-700 mb-3">
          By using PDF Maker AI, you agree that the service is provided “as is.”
          You are responsible for ensuring you have the rights to process any
          files you upload. These Terms govern your use of the website and tools.
        </p>

        <h2 className="text-lg font-semibold mt-4">Acceptable Use</h2>
        <p className="text-sm text-slate-700">
          You must not use the service to process content that infringes
          intellectual property rights, is illegal, defamatory, or contains
          malware. We reserve the right to suspend or remove content or users
          that violate these terms.
        </p>

        <h2 className="text-lg font-semibold mt-4">Limitation of Liability</h2>
        <p className="text-sm text-slate-700">
          To the extent permitted by law, the service is provided without
          warranties. PDF Maker AI and its team are not liable for any indirect,
          incidental, or consequential damages. Always keep backups of important files.
        </p>

        <h2 className="text-lg font-semibold mt-4">DMCA and Copyright</h2>
        <p className="text-sm text-slate-700">
          If you believe your copyrighted work has been posted or processed in
          violation of copyright law, please email a DMCA notice to
          support@pdfmakerai.shop. We will review and respond promptly.
        </p>

        <h2 className="text-lg font-semibold mt-4">Termination and Suspension</h2>
        <p className="text-sm text-slate-700">
          We reserve the right to suspend or terminate accounts that misuse the
          service, violate the law, or harm other users or the platform.
        </p>

        <h2 className="text-lg font-semibold mt-4">Contact and Disputes</h2>
        <p className="text-sm text-slate-700">
          For questions, disputes, or legal concerns regarding these Terms,
          contact <a href="mailto:support@pdfmakerai.shop" className="text-blue-600 underline">support@pdfmakerai.shop</a>.
        </p>

        <p className="text-xs text-slate-500 mt-4">Last updated: 24 Oct 2025</p>
      </section>
    </main>
  );
}
