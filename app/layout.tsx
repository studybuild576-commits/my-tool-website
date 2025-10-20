import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "My Tools",
  description: "All-in-one PDF and text tools by Rahul",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
