export const metadata = {
  title: "Chat with PDF — PDFMakerAI",
  description: "Interact with PDF documents: ask questions and get summaries using AI.",
};

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

          <div className="mt-6">
            <a href="/chat-with-pdf" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md">Try Chat with PDF</a>
          </div>
        </div>
      </section>
    </main>
  );
}
