import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: {
    default: "My Tools",
    template: "%s | My Tools",
  },
  description:
    "All-in-one PDF & text utilities — convert, merge, split, compress and edit files quickly and privately.",
  keywords: [
    "pdf tools",
    "pdf converter",
    "pdf merge",
    "pdf split",
    "online tools",
    "text tools",
  ],
  authors: [{ name: "Rahul" }],
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
    title: "My Tools — Fast online PDF & text utilities",
    description:
      "Convert, merge, split, compress and edit PDFs and text fast and privately. No signup required.",
    images: ["/favicon.svg"],
    siteName: "My Tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Tools — Online PDF & text utilities",
    description:
      "Convert, merge, split, compress and edit PDFs and text fast and privately.",
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
              name: "My Tools",
              url: "https://pdfmakerai.shop/",
              description:
                "All-in-one PDF & text utilities — convert, merge, split, compress and edit files quickly and privately.",
            }),
          }}
        />
      </body>
    </html>
  );
}
