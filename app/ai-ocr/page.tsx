"use client";
import AIOCRForm from "@/components/AIOCRForm";
import PDFReaderTool from "@/components/PDFReaderTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/ai-ocr');

export default function AIOCRPage() {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 AI OCR Tool</h1>
      <AIOCRForm />
    </section>
  );
}
