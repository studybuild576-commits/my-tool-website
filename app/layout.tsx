import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free PDF & Text Tools - Edit, Convert & Analyze Online",
  description: "A collection of free online tools to edit PDF files, convert images, count words, change text case, and more. All tools are fast, free, and easy to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
