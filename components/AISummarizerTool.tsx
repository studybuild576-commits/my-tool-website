"use client";
import { useState } from "react";

export default function AISummarizerTool() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  function handleSummarize() {
    if (!text.trim()) return;
    // Placeholder logic — replace with actual API call
    const words = text.trim().split(/\s+/);
    const short = words.slice(0, Math.min(30, words.length)).join(" ");
    setSummary(short + (words.length > 30 ? "..." : ""));
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🧠 AI Summarizer</h2>
      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your paragraph here..."
        className="w-full border rounded px-3 py-2 mb-4"
      />
      <button
        onClick={handleSummarize}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Summarize
      </button>

      {summary && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </section>
  );
}
