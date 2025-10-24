"use client";
import { useState } from "react";

export default function ChatWithPDFForm() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAnswer(null);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    try {
      const res = await fetch("/api/chat-pdf", { method: "POST", body: data });
      const json = await res.json();
      if (json.answer) setAnswer(json.answer);
      else setError(json.error || "No answer returned");
    } catch (err: any) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="file" name="file" accept="application/pdf" className="block" />
      <div>
        <label className="block text-sm mb-1">Question or request</label>
        <input name="question" className="w-full border rounded-md px-3 py-2" placeholder="Summarize the document or ask a question" />
      </div>

      <div>
        <button type="submit" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md" disabled={loading}>
          {loading ? "Asking..." : "Ask PDF"}
        </button>
      </div>

      {error && <div className="text-red-600">{error}</div>}

      {answer && (
        <div className="mt-4 bg-slate-50 border rounded p-3 text-sm whitespace-pre-wrap">
          {answer}
        </div>
      )}
    </form>
  );
}
