import { notFound } from "next/navigation";
import { tools } from "@/lib/tools";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export async function generateMetadata({ params }: any) {
  const slug = params.slug as string;
  const tool = tools.find((t) => t.route.replace(/^\//, "") === slug);
  if (!tool) return { title: "Tool Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdfmakerai.shop";
  const url = `${siteUrl}/${slug}`.replace(/([^:]?)\/\/+/g, "$1/");

  return {
    title: `${tool.name} — Best Free ${tool.category || "PDF"} Tool | PDF Maker AI`,
    description:
      tool.longDescription ||
      tool.description ||
      `Use ${tool.name} online for free. Fast, secure, and accurate ${tool.category || "PDF"} tool to simplify your workflow.`,
    keywords: [
      `${tool.name}`,
      `${tool.category}`,
      `Free ${tool.name}`,
      `Online ${tool.name} Tool`,
      `PDF Maker AI ${tool.name}`,
      "Free PDF Tools",
      "Convert PDF Online",
    ],
    openGraph: {
      title: `${tool.name} — PDF Maker AI`,
      description: tool.longDescription || tool.description,
      url,
      images: [`${siteUrl}/og-image.svg`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} — PDF Maker AI`,
      description: tool.longDescription || tool.description,
      images: [`${siteUrl}/og-image.svg`],
    },
    alternates: { canonical: url },
  };
}

export default function ToolDescription({ params }: any) {
  const slug = params.slug as string;
  const tool = tools.find((t) => t.route.replace(/^\//, "") === slug);
  if (!tool) return notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pdfmakerai.shop";
  const toolUrl = `${siteUrl}${tool.route}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.longDescription || tool.description,
    applicationCategory: tool.category || "WebApplication",
    url: toolUrl,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pdfmakerai.shop/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://pdfmakerai.shop/tools" },
      { "@type": "ListItem", position: 3, name: tool.name, item: toolUrl },
    ],
  };

  const faqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${tool.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${tool.name} is a free online ${tool.category} tool that helps you easily process your files directly in your browser.`,
        },
      },
      {
        "@type": "Question",
        name: `Is ${tool.name} safe to use?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all files are processed securely in your browser and are never stored on our servers.",
        },
      },
      {
        "@type": "Question",
        name: `How can I use ${tool.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply open the tool, upload your file, and follow the on-screen steps. The result will be generated instantly.",
        },
      },
    ],
  };

  const IconRaw = tool.icon as string;
  const Icon = (LucideIcons as any)[IconRaw] as LucideIcon | undefined;

  return (
    <main>
      <section className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-4xl mb-3">
            {typeof Icon === "function" ? (
              <Icon className="w-10 h-10 text-blue-600" />
            ) : (
              <span className="text-3xl">{String(IconRaw)}</span>
            )}
          </div>

          <h1 className="text-3xl font-extrabold mb-2">{tool.name}</h1>
          <p className="text-slate-600 mb-4">{tool.description}</p>
          {tool.longDescription && <p className="text-slate-700 mb-6">{tool.longDescription}</p>}

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">How to use {tool.name}</h2>
            <p className="text-sm text-slate-700">
              Open this tool and follow the on-screen steps. Use it here:
              <a href={tool.route} className="text-blue-600 underline ml-2">
                {tool.name}
              </a>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-md font-semibold">Benefits</h3>
            <ul className="list-disc ml-5 text-sm text-slate-700">
              <li>Fast, browser-based — no uploads or waiting.</li>
              <li>Privacy-focused: files are processed temporarily.</li>
              <li>Completely free for basic tasks.</li>
              <li>Easy to use for anyone, no signup required.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">FAQs</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>What is {tool.name}?</strong> — A free online {tool.category} tool for fast and secure file handling.
              </li>
              <li>
                <strong>Is {tool.name} free?</strong> — Yes, it’s 100% free with no sign-up.
              </li>
              <li>
                <strong>Does it store my data?</strong> — No, everything happens in your browser securely.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
    </main>
  );
}
