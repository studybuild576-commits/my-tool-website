import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: {
    default: "PDF Maker AI — Online PDF Tools for PDF Lovers",
    template: "%s | PDF Maker AI",
  },
  description:
    "PDF Maker AI is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, office to PDF, PDF to JPG and more!",
  keywords: [
    "pdf tools",
    "pdf converter",
    "merge pdf",
    "split pdf",
    "compress pdf",
    "pdf maker",
    "ai pdf tools",
    "online pdf editor",
  ],
  authors: [{ name: "PDF Maker AI" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "PDF Maker AI — Online PDF Tools for PDF Lovers",
    description:
      "PDF Maker AI is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, office to PDF, PDF to JPG and more!",
    images: ["/favicon.svg"],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Maker AI — Online PDF Tools for PDF Lovers",
    description:
      "PDF Maker AI is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, office to PDF, PDF to JPG and more!",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-slate-800">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
        <Footer />

        {/* Structured data (JSON-LD) for Organization and Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PDF Maker AI",
              url: "https://pdfmakerai.shop/",
              description:
                "PDF Maker AI is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, office to PDF, PDF to JPG and more!",
            }),
          }}
        />
      </body>
    </html>
  );
}
