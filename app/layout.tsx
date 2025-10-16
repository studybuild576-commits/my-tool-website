"use client";

import { useState } from "react";
import { BookOpen, Copy, XCircle } from "lucide-react";

export default function AISummarizerPage() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;

    // Example: Simple client-side summarization (replace with AI API call)
    const sentences = text.split(/[.!?]\s/).filter((s) => s.trim().length > 0);
    const summarySentences = sentences.slice(0, Math.ceil(sentences.length / 3));
    setSummary(summarySentences.join(". ") + ".");
  };

  const handleCopy = () => {
    if (!summary) return;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setText("");
    setSummary("");
    setCopied(false);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 font-sans min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold flex justify-center items-center gap-3 text-gray-800">
          <BookOpen className="w-10 h-10 text-blue-600" />
          AI Text Summarizer
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Summarize your content instantly using AI-powered logic.
        </p>
      </header>

      <section className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border-4 border-blue-400/50 mb-12">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter or paste your content here..."
          className="w-full min-h-[200px] p-4 border-2 border-blue-300 rounded-xl resize-none focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-inner mb-4"
        />

        <div className="flex gap-3 flex-wrap mb-4">
          <button
            onClick={handleSummarize}
            disabled={!text.trim()}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition ${
              text.trim()
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Summarize
          </button>

          <button
            onClick={handleCopy}
            disabled={!summary}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition ${
              summary
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {copied ? "Copied!" : "Copy Summary"}
          </button>

          <button
            onClick={handleClear}
            className="px-4 py-2 rounded-lg font-semibold text-white bg-red-500 hover:bg-red-600 transition"
          >
            <XCircle className="w-4 h-4 inline mr-1" /> Clear
          </button>
        </div>

        {summary && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4 shadow-inner">
            <h2 className="font-bold text-lg mb-2 text-gray-700">Summary:</h2>
            <p className="text-gray-800">{summary}</p>
          </div>
        )}
      </section>
    </main>
  );
}
