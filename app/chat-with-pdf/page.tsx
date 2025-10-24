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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const res = await fetch("/api/chat-pdf", { method: "POST", body: data });
              const json = await res.json();
              if (json.answer) {
                // show answer in a new window or modal
                alert(json.answer);
              } else {
                alert(json.error || "No answer returned");
              }
            }}
          >
            <input type="file" name="file" accept="application/pdf" className="mb-3" />
            <div className="mb-3">
              <label className="block text-sm mb-1">Question or request</label>
              <input name="question" className="w-full border rounded-md px-3 py-2" placeholder="Summarize the document or ask a question" />
            </div>
            <div>
              <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md">Ask PDF</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
