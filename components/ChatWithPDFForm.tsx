// components/ChatWithPDFForm.tsx
"use client";

import { useState, useRef } from "react";
import { Document } from "flexsearch";
import * as stringSimilarity from "string-similarity";

interface TextChunk { text: string; pageNum: number; }

export default function ChatWithPDFForm() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [progress, setProgress] = useState<string>("");
  const indexRef = useRef<any>(null);
  const chunksRef = useRef<TextChunk[]>([]);

  async function extractTextFromPDF(file: File) {
    const pdfjsLib: any = await import("pdfjs-dist");
    // @ts-expect-error runtime global
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    const textChunks: TextChunk[] = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      setProgress(`Reading page ${i} of ${pdf.numPages}...`);
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const text = (content.items as any[]).map((it:any)=>it.str).join(" ");
      const words = text.split(/s+/);
      for (let j = 0; j < words.length; j += 100) {
        const chunk = words.slice(j, j + 100).join(" ");
        if (chunk.trim()) textChunks.push({ text: chunk, pageNum: i });
      }
    }
    return textChunks;
  }

  function initializeSearch(textChunks: TextChunk[]) {
    const index = new Document({
      document: { id: "id", index: ["text"], store: ["text", "pageNum"] },
      tokenize: "forward",
    } as any);
    textChunks.forEach((chunk, i) => index.add(i, { text: chunk.text, pageNum: chunk.pageNum }));
    return index;
  }

  function getAnswer(question: string, chunks: TextChunk[], index: any): string {
    const q = question.toLowerCase();
    if (q.includes("how many pages")) {
      const pages = new Set(chunks.map(c=>c.pageNum)).size;
      return `The document has ${pages} page${pages===1?"":"s"}.`;
    }
    if (q.includes("summarize") || q.includes("summary")) {
      const first = chunks[0]?.text || ""; const last = chunks[chunks.length-1]?.text || "";
      return `Here's a brief overview:

Starts with: "${first.slice(0,200)}..."

Concludes with: "${last.slice(-200)}"`;
    }

    const results = index.search(question, { limit: 8, enrich: true });
    const ids: number[] = [];
    for (const r of results) for (const item of (r.result||[])) if (typeof item.id === "number") ids.push(item.id);
    if (!ids.length) return "No clearly relevant passages were found for that query.";

    const candidates = ids.slice(0,5).map(id=>chunks[id]).filter(Boolean);
    const scored = candidates.map(chunk => ({ chunk, score: stringSimilarity.compareTwoStrings(q, chunk.text.toLowerCase()) }));
    scored.sort((a,b)=>b.score-a.score);
    const best = scored[0]?.chunk || candidates[0];
    return `Based on page ${best.pageNum}, relevant passage:

${best.text}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAnswer(null); setError(null); setProgress("");

    const file = (e.currentTarget.elements.namedItem("file") as HTMLInputElement)?.files?.[0];
    const question = (e.currentTarget.elements.namedItem("question") as HTMLInputElement)?.value || "";
    if (!file) { setError("Please select a PDF file"); return; }
    if (!question.trim()) { setError("Please enter a question"); return; }

    setLoading(true);
    try {
      if (!indexRef.current) {
        setProgress("Processing PDF...");
        chunksRef.current = await extractTextFromPDF(file);
        setProgress("Building search index...");
        indexRef.current = initializeSearch(chunksRef.current);
      }
      setProgress("Finding relevant information...");
      setAnswer(getAnswer(question, chunksRef.current, indexRef.current));
    } catch (err:any) {
      setError("Failed to process PDF: " + String(err));
    } finally {
      setLoading(false); setProgress("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-indigo-900 mb-2">💬 Chat with PDF</h2>
        <p className="text-sm text-slate-600">Ask questions, get summaries, and extract information. Everything runs in your browser—no uploads.</p>
      </div>

      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-purple-400 transition">
        <input type="file" name="file" accept="application/pdf" className="block w-full text-sm" onChange={(e)=>{ setFileName(e.target.files?.[0]?.name||""); indexRef.current=null; chunksRef.current=[]; setAnswer(null); }} disabled={loading} />
        <p className="mt-2 text-xs text-slate-600">{fileName?`Selected: ${fileName}`:"Upload a PDF to start chatting"}</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-slate-700">Your Question</label>
        <textarea name="question" rows={3} className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition" placeholder="Ask anything about the document…" defaultValue="Summarize the document." disabled={loading} />
      </div>

      {progress && <div className="bg-blue-50 border border-blue-200 rounded-xl p-4"><p className="text-sm text-blue-700">{progress}</p></div>}

      <button type="submit" className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50" disabled={loading} aria-busy={loading}>
        {loading ? (progress || "Processing...") : "Ask Question"}
      </button>

      {error && <div className="bg-red-50 border border-red-200 rounded-xl p-4"><p className="text-sm text-red-600">{error}</p></div>}

      {answer && (
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-purple-800 mb-3">Answer</h3>
          <div className="bg-white rounded-lg p-4"><p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{answer}</p></div>
        </section>
      )}
    </form>
  );
}
