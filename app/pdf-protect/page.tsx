// app/pdf-protect/page.tsx
import type { Metadata } from "next";
import PDFProtectTool from "@/components/PDFProtectTool";

export const metadata: Metadata = {
  title:
    "PDF Protect — Password aur Permissions ke saath Secure karein (Free, Private)",
  description:
    "PDF par user/owner password set karein aur permissions control karein (printing, copying, modifying). In-browser, bina upload, bilkul private.",
  keywords: [
    "pdf protect",
    "password protect pdf",
    "secure pdf",
    "encrypt pdf",
    "user password pdf",
    "owner password pdf",
    "pdf permissions",
    "printing permission",
    "copy restrict pdf",
    "modify restrict pdf",
    "annotate permission pdf",
    "in browser pdf protect",
    "no upload pdf security",
    "free pdf password",
    "pdf encryption",
    "set pdf password",
    "open password pdf",
    "edit password pdf",
    "client side pdf protect",
    "pdf tools online",
    "pdfmakerai pdf protect",
    "download protected pdf",
    "disable copying",
    "disable modifying",
    "forms fill permission",
    "content accessibility",
    "private pdf",
    "fast pdf protect",
    "secure sharing pdf",
    "restrict pdf usage",
    "enterprise security",
    "confidential pdf",
    "mobile friendly ui",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-protect" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-protect",
    title: "PDF Protect — Password & Permissions",
    description:
      "User/Owner password set karein, printing/copying/modifying controls ke saath. In-browser, private.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Protect — Password & Permissions",
    description: "In-browser PDF protection with permissions. No uploads.",
    images: ["/og-image.png"],
  },
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
      "In-browser, private",
    ],
  };

  // FAQ Schema (Google rich results)
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "PDF par password kaise lagaye?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PDF Maker AI me PDF upload karke password aur permissions set karein. Phir 'Protect PDF' button click karke secure version download karein — sab browser me hota hai, bina upload.",
        },
      },
      {
        "@type": "Question",
        name: "Kya PDF protection online secure hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, ye tool client-side (browser me) chalta hai. Koi bhi file server pe upload nahi hoti. Saara encryption aapke device par hota hai.",
        },
      },
      {
        "@type": "Question",
        name: "Owner aur User password me kya fark hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "User password file kholne ke liye lagta hai, jabki Owner password permissions control karta hai jaise print, copy, ya modify karna.",
        },
      },
      {
        "@type": "Question",
        name: "Kya mobile se bhi PDF protect kar sakte hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul, ye mobile friendly UI hai. Aap Android ya iPhone dono par isse use kar sakte hain bina kisi app ke.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* JSON-LD Schema */}
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

      {/* Main Tool */}
      <PDFProtectTool />

      {/* Extra SEO Content for Ranking */}
      <section className="mt-12 space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold">Why Use PDF Protect Tool?</h2>
        <p>
          PDF Maker AI aapko ek secure aur private PDF protection solution deta
          hai. Isme aap password, permissions, aur encryption control kar sakte
          hain bina kisi file upload ke. Pure process aapke browser me hoti hai.
        </p>

        <h3 className="text-xl font-semibold mt-6">Key Features</h3>
        <ul className="list-disc ml-6">
          <li>Set User aur Owner passwords</li>
          <li>Control permissions — print, copy, modify</li>
          <li>Browser me hi secure processing</li>
          <li>Fast, free aur 100% private</li>
          <li>Mobile aur Desktop dono ke liye optimized</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">How to Use PDF Protect Tool</h3>
        <ol className="list-decimal ml-6">
          <li>“Choose PDF” par click karke file select karein</li>
          <li>Password aur permission options choose karein</li>
          <li>“Protect PDF” button dabayein</li>
          <li>Secure PDF download karein</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6">Related PDF Tools</h3>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="/pdf-merge"
              className="text-blue-600 hover:underline"
            >
              Merge PDF Files
            </a>
          </li>
          <li>
            <a
              href="/pdf-split"
              className="text-blue-600 hover:underline"
            >
              Split PDF Pages
            </a>
          </li>
          <li>
            <a
              href="/pdf-organize"
              className="text-blue-600 hover:underline"
            >
              Organize PDF Order
            </a>
          </li>
          <li>
            <a
              href="/image-converter"
              className="text-blue-600 hover:underline"
            >
              Image to PDF Converter
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
