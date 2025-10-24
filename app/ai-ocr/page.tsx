export const metadata = {
  title: "AI OCR — PDFMakerAI",
  description: "Convert scanned PDFs and images into editable text using AI-powered OCR.",
};

import AIOCRForm from "@/components/AIOCRForm";

export default function AIOCRPage() {
  return (
    <main>
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">AI OCR</h1>
          <p className="text-slate-700 mb-4">
            Use our AI-powered OCR to extract editable, searchable text from
            scanned documents and images. Supports multiple languages and
            preserves layout where possible.
          </p>

          <AIOCRForm />
        </div>
      </section>
    </main>
  );
}
