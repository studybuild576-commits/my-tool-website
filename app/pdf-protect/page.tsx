import type { Metadata } from "next";
import PDFProtectTool from "@/components/PDFProtectTool";

export const metadata: Metadata = {
  title: "PDF Protect — Password aur Permissions ke saath Secure karein (Free, Private)",
  description:
    "PDF par user/owner password set karein aur permissions control karein (printing, copying, modifying). In‑browser, bina upload, private.",
  keywords: [
    "pdf protect","password protect pdf","secure pdf","encrypt pdf","user password pdf",
    "owner password pdf","pdf permissions","printing permission","copy restrict pdf","modify restrict pdf",
    "annotate permission pdf","in browser pdf protect","no upload pdf security","free pdf password",
    "pdf encryption","set pdf password","open password pdf","edit password pdf","client side pdf protect",
    "pdf tools online","pdfmakerai pdf protect","seo metadata","json-ld software app",
    "core web vitals","lighthouse friendly","a11y friendly","download protected pdf",
    "high resolution print","disable copying","disable modifying","document assembly",
    "forms fill permission","content accessibility","private pdf","fast pdf protect",
    "browser pdf maker","secure sharing pdf","restrict pdf usage","enterprise security",
    "confidential pdf","permissions matrix","open password","owner permissions",
    "AES encryption note","version dependent encrypt","try catch fallback","password strength check",
    "min length password","safe blob url","object url cleanup","mobile friendly ui",
    "sr labels","focus rings"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-protect" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-protect",
    title: "PDF Protect — Password & Permissions",
    description:
      "User/Owner password set karein, printing/copying/modifying controls ke saath. In‑browser, private.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Protect — Password & Permissions",
    description: "In‑browser PDF protection with permissions. No uploads.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Protect",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-protect",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "User/Owner passwords",
      "Permissions control",
      "In‑browser, private"
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <PDFProtectTool />
    </main>
  );
}
