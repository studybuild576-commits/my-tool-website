"use client";

import { useState, useRef } from "react";
import FlexSearch from "flexsearch";
import * as stringSimilarity from "string-similarity";

interface TextChunk {
  text: string;
  pageNum: number;
}

export default function ChatWithPDFForm() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [progress, setProgress] = useState<string>("");
  const indexRef = useRef<any>(null);
  const chunksRef = useRef<TextChunk[]>([]);

  // ✅ Extract text using pdf.js (client-side only)
  async function extractTextFromPDF(file: File) {
    const pdfjsLib = (await import("pdfjs-dist")) as any;
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";

    const data = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    const numPages = pdf.numPages;

    const textChunks: TextChunk[] = [];
    for (let i = 1; i <= numPages; i++) {
      setProgress(`Reading page ${i} of ${numPages}...`);
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const text = (content.items as any[]).map((item) => item.str).join(" ");

      // ✅ Cleanup and split into 100-word chunks
      const clean = text.replace(/\s+/g, " ").trim();
      if (!clean) continue;

      const words = clean.split(/\s+/);
      for (let j = 0; j < words.length; j += 100) {
        const chunk = words.slice(j, j + 100).join(" ");
        if (chunk.trim()) textChunks.push({ text: chunk, pageNum: i });
      }
    }
    return textChunks;
  }

  // ✅ Initialize in-memory search index
  function initializeSearch(textChunks: TextChunk[]) {
    const index = new (FlexSearch as any).Document({
      document: {
        id: "id",
        index: ["text"],
        store: ["text", "pageNum"],
      },
      tokenize: "forward",
    });
    textChunks.forEach((chunk, i) =>
      index.add(i, { text: chunk.text, pageNum: chunk.pageNum })
    );
    return index;
  }

  // ✅ Find best-matching answer using text similarity
  function getAnswer(question: string, chunks: TextChunk[], index: any): string {
    const q = question.toLowerCase().trim();
    if (!q) return "Please enter a question.";

    if (q.includes("how many pages")) {
      const pages = new Set(chunks.map((c) => c.pageNum)).size;
      return `The document has ${pages} page${pages === 1 ? "" : "s"}.`;
    }

    if (q.includes("summarize") || q.includes("summary") || q.startsWith("tl;dr")) {
      const head = chunks[0]?.text || "";
      const tail = chunks[chunks.length - 1]?.text || "";
      const headShort = head.slice(0, 220);
      const tailShort = tail.slice(-220);
      return `Quick overview:\n\nStarts with: "${headShort}${
        head.length > 220 ? "..." : ""
      }"\n\nEnds with: "${tailShort}"`;
    }

    const results = index.search(q, { limit: 10, enrich: true });
    const ids: number[] = [];
    for (const r of results)
      for (const item of r.result || [])
        if (typeof item.id === "number") ids.push(item.id);

    if (!ids.length)
      return "No clearly relevant passages were found for that query.";

    const candidates = ids.slice(0, 6).map((id) => chunks[id]).filter(Boolean);
    const scored = candidates.map((chunk) => ({
      chunk,
      score: stringSimilarity.compareTwoStrings(q, chunk.text.toLowerCase()),
    }));
    scored.sort((a, b) => b.score - a.score);

    const best = scored[0]?.chunk || candidates[0];
    const next = scored[1]?.chunk;
    return `Based on page ${best.pageNum}, relevant passage:\n\n${best.text}${
      next
        ? `\n\nAnother relevant passage (page ${next.pageNum}):\n\n${next.text}`
        : ""
    }`;
  }

  // ✅ Form submit handler
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAnswer(null);
    setError(null);
    setProgress("");

    const form = e.currentTarget;
    const file = (form.elements.namedItem("file") as HTMLInputElement)?.files?.[0];
    const question =
      (form.elements.namedItem("question") as HTMLInputElement)?.value || "";

    if (!file) {
      setError("Please select a PDF file");
      return;
    }
    if (!question.trim()) {
      setError("Please enter a question");
      return;
    }

    setLoading(true);
    try {
      if (!indexRef.current) {
        setProgress("Processing PDF...");
        chunksRef.current = await extractTextFromPDF(file);
        if (!chunksRef.current.length)
          throw new Error("No readable text found. If scanned, try AI OCR.");
        setProgress("Building search index...");
        indexRef.current = initializeSearch(chunksRef.current);
      }

      setProgress("Finding relevant information...");
      const response = getAnswer(question, chunksRef.current, indexRef.current);
      setAnswer(response);
    } catch (err: any) {
      setError("Failed to process PDF: " + String(err?.message || err));
    } finally {
      setLoading(false);
      setProgress("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Decorative header */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-pink-500/15 to-rose-500/15" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-rose-400 blur-3xl opacity-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-purple-400 blur-3xl opacity-20"
        />
        <div className="relative p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-900">
            💬 Chat with PDF — No API Key Required
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Ask questions and get relevant passages using in-browser search and
            similarity — fast, private, and free.
          </p>
        </div>
      </div>

      {/* File upload */}
      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-purple-400 transition">
        <input
          type="file"
          name="file"
          accept="application/pdf"
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
          onChange={(e) => {
            setFileName(e.target.files?.[0]?.name || "");
            indexRef.current = null;
            chunksRef.current = [];
            setAnswer(null);
          }}
          disabled={loading}
        />
        <p className="mt-2 text-xs text-slate-600">
          {fileName
            ? `Selected file: ${fileName}`
            : "Upload a PDF (no upload to server; processed in your browser)"}
        </p>
      </div>

      {/* Question input */}
      <div>
        <label className="block text-sm font-medium mb-2 text-slate-700">
          Your Question
        </label>
        <textarea
          name="question"
          rows={3}
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
          placeholder="Ask anything about the document…"
          defaultValue="Summarize the document."
          disabled={loading}
        />
      </div>

      {progress && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-700">{progress}</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? progress || "Processing..." : "Ask Question"}
      </button>

      {error && (
        <div
          className="bg-red-50 border border-red-200 rounded-xl p-4"
          role="alert"
        >
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {answer && (
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-purple-800 flex items-center gap-2">
              <span>💡</span> Answer
            </h3>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(answer!)}
              className="text-sm bg-white px-3 py-1 rounded-lg border border-purple-300 hover:bg-purple-50 transition"
            >
              📋 Copy
            </button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
              {answer}
            </p>
          </div>
        </section>
      )}
    </form>
  );
}
