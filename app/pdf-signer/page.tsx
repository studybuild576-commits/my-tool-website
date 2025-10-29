// app/pdf-signer/page.tsx
import type { Metadata } from "next";
import PDFSignerTool from "@/components/PDFSignerTool";

export const metadata: Metadata = {
  title: "PDF Signer — Draw Signature aur PDF par lagayein (Free, Private)",
  description:
    "Browser me hi apni signature draw karke PDF par place karein. Client‑side processing, bina upload — fast aur private.",
  keywords: [
    "pdf signer","sign pdf online","draw signature pdf","add signature pdf","embed signature pdf",
    "png signature pdf","pdf-lib sign image","client side pdf sign","in browser pdf tools","no upload",
    "free pdf signer","private pdf signer","download signed pdf","last page signature","bottom right sign",
    "touch support signature","mobile signature pad","canvas signature","clear signature","undo not needed",
    "a11y labels","seo metadata","json-ld app","lighthouse friendly","core web vitals","blob url cleanup",
    "file validation","error handling","pdfmakerai pdf signer","nextjs app router"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-signer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-signer",
    title: "PDF Signer — Free, Private",
    description: "Draw and place your signature on PDFs in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Signer — Free, Private",
    description: "Sign PDFs with a drawn signature — client‑side, no uploads.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Signer",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-signer",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <PDFSignerTool />
    </main>
  );
}
