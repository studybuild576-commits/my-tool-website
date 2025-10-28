// app/image-resizer/page.tsx
import type { Metadata } from "next";
import ImageResizerTool from "@/components/ImageResizerTool";

export const metadata: Metadata = {
  title: "Free Image Resizer: Exact, % Scale, Max Size (In‑Browser)",
  description:
    "Resize images by exact dimensions, percentage, or maximum size. High quality smoothing, aspect ratio control, and private in‑browser processing.",
  keywords: [
    "image resizer","resize image online","resize jpg","resize png","resize webp",
    "scale image percentage","resize by dimensions","max size resize","maintain aspect ratio",
    "batch image resize","high quality resize","image smoothing","client side image resize",
    "in browser image resizer","no signup image tool","free image resizer","compress and resize",
    "png resize","jpeg resize","webp resize","width height resize","responsive images",
    "social media image size","thumbnail generator","avatar resizer","banner resizer",
    "large image to web size","retina to standard dpi","image quality control","lossy resize",
    "lossless resize","image to canvas","canvas drawImage","mobile image resize","exif safe resize",
    "photo resizer","graphic resizer","fast image resizer","private image tool","no upload image",
    "optimize image size","reduce image dimensions","web performance images","lighthouse images",
    "a11y images","seo images","download resized","object url cleanup","memory safe resize",
    "safari smoothing","firefox image smoothing","chromium canvas quality","transparent png",
    "jpeg quality range","webp quality range"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/image-resizer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/image-resizer",
    title: "Image Resizer — Dimensions, % Scale, Max Size",
    description:
      "Resize images with precision and quality. Aspect ratio control, smoothing, and private in‑browser processing.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Resizer — Exact, % Scale, Max Size",
    description: "Quality resizing with aspect control, fully private, in‑browser.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Image Resizer",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/image-resizer",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Exact dimensions resize",
      "Percentage scaling",
      "Max side resize",
      "High-quality smoothing",
      "In‑browser, no signup"
    ],
    keywords:
      "image resizer, percentage scale, exact dimensions, max size, high quality smoothing, canvas resize",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appLd).replace(/</g, "\\u003c"),
        }}
      />
      <ImageResizerTool />
    </main>
  );
}
