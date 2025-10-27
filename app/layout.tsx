import "./globals.css";
import Layout from "@/components/Layout";
import type { ReactNode } from "react";

export const metadata = {
	metadataBase: new URL("https://pdfmakerai.shop"),
	title: {
		default: "PDF Maker AI: Advanced AI-Powered Online PDF Tools Suite",
		template: "%s | PDF Maker AI",
	},
	description:
		"PDF Maker AI is the ultimate online suite for PDF lovers. Use our powerful AI OCR, Merge, Split, Compress, Office to PDF, PDF to JPG tools and more—completely free and easy to use.",
	keywords: [
		"ai pdf tools",
		"ai ocr",
		"chat with pdf",
		"pdf tools free",
		"pdf maker online",
		"merge pdf",
		"split pdf",
		"compress pdf",
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
		icon: "/logo.png",
		shortcut: "/logo.png",
		apple: "/logo.png",
		other: {
			rel: "apple-touch-icon",
			url: "/logo.png"
		}
	},
		openGraph: {
			title: "PDF Maker AI — Online PDF Tools for PDF Lovers",
			description:
				"PDF Maker AI is the ultimate online suite for PDF lovers. Use our powerful AI OCR, Merge, Split, Compress, Office to PDF, PDF to JPG tools and more—completely free and easy to use.",
			images: ["/og-image.svg", "/logo.png"],
			siteName: "PDF Maker AI",
		},
		twitter: {
			card: "summary_large_image",
			title: "PDF Maker AI — Online PDF Tools for PDF Lovers",
			description:
				"PDF Maker AI is the ultimate online suite for PDF lovers. Use our powerful AI OCR, Merge, Split, Compress, Office to PDF, PDF to JPG tools and more—completely free and easy to use.",
			images: ["/og-image.svg", "/logo.png"],
		},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-50 text-slate-900 font-sans">
				{/* wrap children in new Layout for consistent UI */}
				<Layout>{children}</Layout>

				{/* Structured data (JSON-LD) for WebSite + Organization */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@graph": [
								{
									"@type": "WebSite",
									"url": "https://pdfmakerai.shop/",
									"name": "PDF Maker AI",
									"description":
										"PDF Maker AI is the ultimate online suite for PDF tools. Featuring AI-powered OCR, Chat with PDF, Merging, Splitting, and more.",
								},
								{
									"@type": "Organization",
									"name": "PDF Maker AI",
									"url": "https://pdfmakerai.shop/",
									"logo": "https://pdfmakerai.shop/logo.png",
									"sameAs": [],
								},
							],
						}),
					}}
				/>
			</body>
		</html>
	);
}
