// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PDF Maker AI",
  description:
    "Privacy policy explaining how PDF Maker AI handles your files, analytics, and personal data securely. We do not sell or track your information.",
  alternates: { canonical: "https://pdfmakerai.shop/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    title: "Privacy Policy — PDF Maker AI",
    description:
      "Learn how PDF Maker AI protects your data, deletes uploaded files automatically, and ensures complete privacy for every user.",
    url: "https://pdfmakerai.shop/privacy",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — PDF Maker AI",
    description:
      "Understand how PDF Maker AI handles and protects your personal and uploaded file data.",
    images: ["/og-image.png"],
  },
};

// ✅ Add FAQ Schema for better SEO ranking
const metadataScript = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does PDF Maker AI store my files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, uploaded files are processed temporarily and automatically deleted within 24 hours. PDF Maker AI never stores your files permanently."
        }
      },
      {
        "@type": "Question",
        "name": "Does PDF Maker AI share my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we never sell or share your data. Your uploaded files and activity remain private and are not shared with third parties."
        }
      },
      {
        "@type": "Question",
        "name": "Does PDF Maker AI use cookies or analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use minimal, privacy-friendly analytics to monitor performance. You can opt out using browser settings or extensions."
        }
      }
    ]
  }),
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Inject FAQ Schema for Google Rich Snippets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={metadataScript} />

      <section className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-extrabold mb-3">Privacy Policy</h1>
        <p className="text-slate-700 mb-3">
          We take your privacy seriously. Files you upload are processed
          temporarily and automatically deleted after processing. We do not sell
          your data or use it for targeted advertising. This policy explains what
          we collect, how we use it, and how you can contact us.
        </p>

        <h2 className="text-lg font-semibold mt-4">What We Collect</h2>
        <p className="text-sm text-slate-700">
          We may collect non-identifying usage data (page views, errors)
          to improve performance. Files are only used for the requested operation
          and deleted afterward. No content is stored permanently.
        </p>

        <h2 className="text-lg font-semibold mt-4">Data Retention</h2>
        <p className="text-sm text-slate-700">
          Uploaded files are retained only long enough to complete the requested
          task and are automatically deleted within 24 hours. Debug logs are
          temporary and regularly purged. For business retention policies,
          contact support@pdfmakerai.shop.
        </p>

        <h2 className="text-lg font-semibold mt-4">Cookies & Analytics</h2>
        <p className="text-sm text-slate-700">
          We may use minimal, privacy-friendly analytics to understand traffic
          trends. All analytics are anonymized and aggregated. You can opt out
          via browser privacy settings.
        </p>

        <h2 className="text-lg font-semibold mt-4">Third-Party Services</h2>
        <p className="text-sm text-slate-700">
          We may use hosting, analytics, or payment services — each with their
          own privacy policies. Uploaded files are not shared with third parties
          except as necessary to complete your requested operation.
        </p>

        <h2 className="text-lg font-semibold mt-4">Ads & Partners</h2>
        <p className="text-sm text-slate-700">
          If ads appear (e.g., Google AdSense), third-party networks may use cookies.
          PDF Maker AI itself does not use personal data for targeting.
        </p>

        <h2 className="text-lg font-semibold mt-4">Your Rights</h2>
        <p className="text-sm text-slate-700">
          You can request data deletion or clarification anytime by contacting
          support@pdfmakerai.shop or visiting our Contact page.
        </p>

        <p className="text-xs text-slate-500 mt-4">Last updated: 24 Oct 2025</p>
      </section>
    </main>
  );
}
