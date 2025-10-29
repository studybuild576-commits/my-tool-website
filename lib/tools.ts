// lib/tools.ts
import * as Lucide from "lucide-react";

export type LucideIconName = keyof typeof Lucide;
export type ToolCategory = "PDF" | "Image" | "Document" | "Utilities" | "AI" | "Productivity" | "UX";

export interface Tool {
  name: string;
  route: string;
  icon: LucideIconName | string; // lucide icon name or emoji
  description: string;
  longDescription: string;
  blogContent?: string;
  category: ToolCategory;
  keywords?: string[];
}

function normRoute(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function toolSlug(route: string) {
  return normRoute(route).replace(/^//, "");
}

export const tools: Tool[] = [
  {
    name: "JPG to PDF",
    route: "/jpg-to-pdf",
    icon: "FileText",
    description: "Convert JPG images into a single PDF.",
    longDescription:
      "Quickly merge multiple JPG images into one high‑quality PDF. Ideal for combining scans or creating printable documents.",
    category: "Image",
    keywords: ["jpg to pdf","image to pdf","merge images"]
  },
  {
    name: "PDF Splitter",
    route: "/pdf-splitter",
    icon: "Scissors",
    description: "Split a PDF into individual pages.",
    longDescription:
      "Extract specific pages or ranges from multi‑page PDFs to get exactly what you need — fast and reliable.",
    blogContent: "pdf-tools-guide.md",
    category: "PDF",
    keywords: ["split pdf","extract pages","separate pdf"]
  },
  {
    name: "Merge PDF",
    route: "/pdf-merge",
    icon: "Link2",
    description: "Combine multiple PDFs into one.",
    longDescription:
      "Merge several PDF files into a single, organized document with instant download and preserved quality.",
    category: "PDF",
    keywords: ["merge pdf","combine pdf","join pdf"]
  },
  {
    name: "Compress PDF",
    route: "/pdf-compress",
    icon: "BarChart2",
    description: "Reduce PDF file size.",
    longDescription:
      "Shrink large PDFs for easier sharing and email while keeping text crisp and readable.",
    category: "PDF",
    keywords: ["compress pdf","reduce size","optimize pdf"]
  },
  {
    name: "PDF to JPG",
    route: "/pdf-to-jpg",
    icon: "Printer",
    description: "Convert PDF pages into JPG images.",
    longDescription:
      "Export PDF pages as high‑quality JPG images for sharing, slides, or web use.",
    category: "PDF",
    keywords: ["pdf to jpg","pdf images","page snapshot"]
  },
  {
    name: "PDF to Word",
    route: "/pdf-to-word",
    icon: "FileText",
    description: "Convert PDF to editable DOCX.",
    longDescription:
      "Turn PDFs into editable Word documents while preserving layout as much as possible.",
    category: "Document",
    keywords: ["pdf to word","pdf to docx","editable"]
  },
  {
    name: "Word to PDF",
    route: "/word-to-pdf",
    icon: "FilePlus",
    description: "Convert Word documents to PDF.",
    longDescription:
      "Generate consistent, shareable PDFs from Word files with preserved fonts and layout.",
    category: "Document",
    keywords: ["word to pdf","docx to pdf","export"]
  },
  {
    name: "Image Converter",
    route: "/image-converter",
    icon: "RefreshCw",
    description: "Convert images across formats.",
    longDescription:
      "Transform images between common formats with control over quality and transparency.",
    blogContent: "image-conversion-guide.md",
    category: "Image",
    keywords: ["jpg png webp","image convert","format"]
  },
  {
    name: "Image Resizer",
    route: "/image-resizer",
    icon: "Crop",
    description: "Resize images to custom dimensions.",
    longDescription:
      "Set exact pixel sizes or scale proportionally for thumbnails, social posts, or web optimization.",
    category: "Image",
    keywords: ["resize image","scale image","dimensions"]
  },
  {
    name: "Word Counter",
    route: "/word-counter",
    icon: "Hash",
    description: "Count words and characters.",
    longDescription:
      "Get accurate counts for words, characters, lines, and paragraphs with estimated reading time.",
    category: "Utilities",
    keywords: ["counter","characters","reading time"]
  },
  {
    name: "Case Converter",
    route: "/case-converter",
    icon: "Type",
    description: "UPPERCASE, lowercase, Title Case.",
    longDescription:
      "Convert text casing for content cleanup, code, or editorial standards — including sentence/title case.",
    category: "Utilities",
    keywords: ["uppercase","lowercase","title case"]
  },
  {
    name: "AI Summarizer",
    route: "/ai-summarizer",
    icon: "Brain",
    description: "Summarize long text with AI.",
    longDescription:
      "Create concise summaries of long documents and notes with key points and action items.",
    category: "Utilities",
    keywords: ["summarize","ai","key points"]
  },
  {
    name: "PDF Watermark",
    route: "/pdf-watermark",
    icon: "Droplet",
    description: "Add text watermarks to PDF.",
    longDescription:
      "Apply customizable watermarks with color, opacity, rotation, and patterns.",
    category: "PDF",
    keywords: ["watermark","overlay","branding"]
  },
  {
    name: "PDF Signer",
    route: "/pdf-signer",
    icon: "Edit2",
    description: "Digitally sign PDF files.",
    longDescription:
      "Add electronic signatures by drawing or uploading images; ideal for approvals and contracts.",
    category: "PDF",
    keywords: ["e-sign","signature","sign pdf"]
  },
  {
    name: "PDF Unlock",
    route: "/pdf-unlock",
    icon: "Unlock",
    description: "Remove passwords/restrictions.",
    longDescription:
      "Remove PDF restrictions when you have the rights — restore printing, copying, and editing.",
    category: "PDF",
    keywords: ["unlock pdf","remove password","permissions"]
  },
  {
    name: "PDF Protect",
    route: "/pdf-protect",
    icon: "Lock",
    description: "Add password protection.",
    longDescription:
      "Secure PDFs with passwords and permission controls to stop unauthorized changes.",
    blogContent: "document-security-guide.md",
    category: "PDF",
    keywords: ["protect pdf","encrypt","password"]
  },
  {
    name: "Rotate PDF",
    route: "/pdf-rotate",
    icon: "RotateCw",
    description: "Rotate PDF pages.",
    longDescription:
      "Rotate selected pages or whole documents to correct orientation.",
    category: "PDF",
    keywords: ["rotate","orientation","fix"]
  },
  {
    name: "Organize PDF",
    route: "/pdf-organize",
    icon: "BookOpen",
    description: "Reorder or delete pages.",
    longDescription:
      "Reorder, remove, or extract pages with an intuitive, visual workflow.",
    category: "PDF",
    keywords: ["reorder","delete pages","extract"]
  },
  {
    name: "PDF Reader",
    route: "/pdf-reader",
    icon: "File",
    description: "Read and extract text.",
    longDescription:
      "View PDFs, search text, and copy content within the browser.",
    category: "PDF",
    keywords: ["reader","search","copy text"]
  },
  {
    name: "AI OCR",
    route: "/ai-ocr",
    icon: "FileSearch",
    description: "AI‑powered OCR for scans.",
    longDescription:
      "Turn scanned documents into editable text with high accuracy and language support.",
    blogContent: "ocr-advanced-guide.md",
    category: "AI",
    keywords: ["ocr","scans","recognition"]
  },
  {
    name: "Chat with PDF",
    route: "/chat-with-pdf",
    icon: "MessageCircle",
    description: "Ask questions with AI.",
    longDescription:
      "Chat over long PDFs to extract answers, summaries, and action items quickly.",
    blogContent: "chat-pdf-guide.md",
    category: "AI",
    keywords: ["chat","qa","summaries"]
  },
  {
    name: "Batch Processing",
    route: "/batch-processing",
    icon: "Folder",
    description: "Run actions on multiple files.",
    longDescription:
      "Automate repetitive tasks like convert, compress, or watermark across many files at once.",
    category: "Productivity",
    keywords: ["batch","automation","multi-file"]
  },
  {
    name: "Conversion Suite",
    route: "/conversion-suite",
    icon: "Repeat",
    description: "PDF ⇄ Word/Excel/PPT and more.",
    longDescription:
      "End‑to‑end conversion toolkit for professionals with layout preservation.",
    category: "Productivity",
    keywords: ["suite","excel","powerpoint","word"]
  },
  {
    name: "E-Signature",
    route: "/e-signature",
    icon: "PenTool",
    description: "Request and verify signatures.",
    longDescription:
      "Request signatures from others, sign yourself, and verify signed PDFs.",
    category: "Productivity",
    keywords: ["esign","verify","workflow"]
  },
  {
    name: "Cloud Integration",
    route: "/cloud-integration",
    icon: "Cloud",
    description: "Use Google Drive/Dropbox.",
    longDescription:
      "Import from and export to Google Drive or Dropbox for a smooth workflow.",
    category: "UX",
    keywords: ["drive","dropbox","cloud"]
  }
];
