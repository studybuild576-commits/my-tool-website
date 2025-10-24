"use client";
import { useState } from "react";

export default function ChatWithPDFForm() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAnswer(null);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    
    const fileInput = form.elements.namedItem("file") as HTMLInputElement;
    if (!fileInput?.files?.[0]) {
      setError("Please select a PDF file");
      return;
    }
    
    const questionInput = form.elements.namedItem("question") as HTMLInputElement;
    if (!questionInput?.value?.trim()) {
      setError("Please enter a question");
      return;
    }
    
    setLoading(true);
    try {
      const res = await fetch("/api/chat-pdf", { method: "POST", body: data });
      const json = await res.json();
      
      if (res.ok && json.answer) {
        setAnswer(json.answer);
      } else {
        setError(json.error || "Failed to process PDF");
      }
    } catch (err: any) {
      setError("Network error: " + (err.message || String(err)));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-purple-400 transition">
        <input 
          type="file" 
          name="file" 
          accept="application/pdf"
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-purple-50 file:text-purple-700
            hover:file:bg-purple-100"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
        <p className="mt-2 text-xs text-slate-500">
          Upload a PDF document to chat with it using AI
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-slate-700">
          Your Question
        </label>
        <textarea 
          name="question" 
          rows={3}
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition" 
          placeholder="Ask anything about the document... (e.g., 'Summarize the main points' or 'What is this document about?')"
          defaultValue="Summarize the document."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Thinking...
          </span>
        ) : "💬 Ask PDF"}
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">⚠️</span>
            <div>
              <p className="font-semibold text-red-800">Error</p>
              <p className="text-sm text-red-600">{error}</p>
              {error.includes("OPENAI_API_KEY") && (
                <p className="text-xs text-red-500 mt-2">
                  ℹ️ This feature requires an OpenAI API key to be configured.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {answer && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-purple-800 flex items-center gap-2">
              <span>🤖</span>
              AI Response
            </h3>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(answer)}
              className="text-sm bg-white px-3 py-1 rounded-lg border border-purple-300 hover:bg-purple-50 transition"
            >
              📋 Copy
            </button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </form>
  );
}
