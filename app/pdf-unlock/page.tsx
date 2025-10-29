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
  title: "PDF Unlock — Remove Password and Restrictions (Free, Private)",
  description:
    "Unlock PDFs by removing passwords and restrictions in your browser. Restore printing, copying, and editing permissions. Fast, private, and free.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-unlock" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-unlock",
    title: "PDF Unlock — Free & Private",
    description: "Remove PDF passwords and restrictions locally in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Unlock — Free & Private",
    description: "Remove PDF passwords and restrictions locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFUnlockTool />
    </main>
  );
}
