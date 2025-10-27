export const metadata = {
  title: "Chat with PDF — PDFMakerAI",
  description: "Interact with PDF documents: ask questions and get summaries using AI.",
  alternates: { canonical: "https://pdfmakerai.shop/chat-with-pdf" },
  robots: { index: true, follow: true },
  openGraph: { title: "Chat with PDF — PDFMakerAI", description: "Interact with PDF documents: ask questions and get summaries using AI.", url: "https://pdfmakerai.shop/chat-with-pdf", images: ["/og-image.png"] },
};

import ChatWithPDFForm from "@/components/ChatWithPDFForm";

export default function ChatWithPDFPage() {
  return (
    <main>
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Chat with PDF</h1>
          <p className="text-slate-700 mb-4">
            Upload a PDF and ask questions or request summaries. Instantly
            extract key points and navigate long documents with AI assistance.
          </p>
              <ChatWithPDFForm />
        </div>
      </section>
    </main>
  );
}
