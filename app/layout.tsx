import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Free PDF, Image & Text Tools - Edit & Convert Online",
    template: "%s | Free Online Tools",
  },
  description: "A complete suite of free online tools to convert and edit PDFs, resize and convert images, count words, change text case, and much more. Fast, secure, and easy to use.",
  keywords: "pdf tools, image resizer, text tools, word counter, case converter, jpg to pdf, pdf splitter, online tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        
        {/* Your page content will be displayed here */}
        {children}

        {/* This is the Footer that will appear on every page */}
        <footer className="text-center py-8 mt-12 border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6 mb-4">
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Free Online Tools. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
