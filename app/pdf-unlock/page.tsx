// app/pdf-unlock/page.tsx
import type { Metadata } from "next";
import PDFUnlockTool from "@/components/PDFUnlockTool";

const keywords: string[] = [
  "pdf unlock","unlock pdf","remove pdf password","decrypt pdf","remove restrictions",
  "unlock printing","unlock copying","unlock editing","pdf permissions","pdf security",
  "pdf tools","online pdf","free pdf","private pdf","client side pdf",
  "no upload pdf","fast pdf processing","browser pdf","web pdf","nextjs pdf",
  "typescript","seo","a11y","core web vitals","lighthouse",
  "privacy first","no tracking","mobile friendly","pwa ready","document tools",
  "workflow","productivity","online utility","toolkit","pdf maker ai",
  "pdfmakerai.shop","unlock protected pdf","remove owner password","remove user password",
  "read locked pdf","copy from pdf","print locked pdf","annotate locked pdf","fill forms pdf",
  "content accessibility","document assembly","metadata preserve","safe unlock","local processing"
].slice(0, 50);

export const metadata: Metadata = {
  title: "PDF Unlock — Remove Password & Restrictions (Free, Private)",
  description:
    "Unlock PDFs instantly by removing passwords and editing restrictions in your browser. Restore printing, copying, and form-filling access — free and 100% private.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-unlock" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-unlock",
    title: "PDF Unlock — Free & Private",
    description:
      "Remove passwords and restrictions from PDF files directly in your browser — no upload, fully secure, and free.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Unlock — Free & Private",
    description: "Unlock password-protected PDFs directly in your browser.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  // ✅ Structured Data: Software Application Schema
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Unlock Tool",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-unlock",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Remove passwords, restrictions, and permission locks from PDFs directly in your browser. 100% secure and private — no uploads or tracking.",
    creator: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
    },
  };

  // ✅ Structured Data: FAQ Schema for Google
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this PDF Unlock tool secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all unlocking happens locally in your browser. No file uploads — ensuring complete data privacy and security.",
        },
      },
      {
        "@type": "Question",
        name: "Can I remove any type of PDF password?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can remove owner passwords and editing restrictions. However, opening a file locked with a user password requires you to know that password first.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to install software to unlock a PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No installation is required. PDF Unlock runs entirely in your browser — fast, private, and works on all devices.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Inject SEO Structured Data */}
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

      {/* ✅ Main Tool Component */}
      <PDFUnlockTool />
    </main>
  );
}
