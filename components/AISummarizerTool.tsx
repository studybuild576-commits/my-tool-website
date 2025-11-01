"use client";
import { useState, useMemo } from "react";
import { Download, Clipboard, Loader2, Trash2, FileText } from "lucide-react";

type LengthOpt = "short" | "medium" | "long";
interface Sentence {
  text: string;
  score: number;
  position: number;
}

export default function AISummarizerTool() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [summaryLength, setSummaryLength] = useState<LengthOpt>("medium");

  const sentences = useMemo(() => splitIntoSentences(text), [text]);

  function splitIntoSentences(str: string): string[] {
    return str
      .replace(/([.!?])\s+/g, "$1|")
      .split("|")
      .map((s) => s.trim())
      .filter((s) => s.length > 10);
  }

  function calculateSentenceScores(sentences: string[]): Sentence[] {
    const wordFreq: Record<string, number> = {};
    const all = sentences
      .join(" ")
      .toLowerCase()
      .split(/\s+/)
      .map((w) => w.replace(/[^a-z0-9'-]/gi, ""))
      .filter((w) => w.length > 3);
    for (const w of all) wordFreq[w] = (wordFreq[w] || 0) + 1;

    return sentences.map((text, position) => {
      const words = text
        .toLowerCase()
        .split(/\s+/)
        .map((w) => w.replace(/[^a-z0-9'-]/gi, ""))
        .filter((w) => w.length > 3);
      const wordScore =
        words.reduce((s, w) => s + (wordFreq[w] || 0), 0) /
        Math.max(words.length, 1);
      const positionScore =
        position === 0
          ? 1
          : position === sentences.length - 1
          ? 0.8
          : 1 - Math.abs(0.5 - position / sentences.length);
      const lengthScore = Math.min(1, text.length / 150);
      const hasNumbers = /\d/.test(text) ? 1.1 : 1;
      const hasQuotes = /["“”]/.test(text) ? 1.1 : 1;
      const score =
        (wordScore * 0.45 + positionScore * 0.3 + lengthScore * 0.25) *
        hasNumbers *
        hasQuotes;
      return { text, score, position };
    });
  }

  async function handleSummarize() {
    if (!text.trim()) return;
    setLoading(true);
    setSummary("");
    try {
      if (sentences.length < 2) {
        setSummary(text.trim());
        return;
      }
      const target =
        summaryLength === "short"
          ? Math.max(2, Math.ceil(sentences.length * 0.2))
          : summaryLength === "medium"
          ? Math.max(3, Math.ceil(sentences.length * 0.3))
          : Math.max(4, Math.ceil(sentences.length * 0.4));
      const scored = calculateSentenceScores(sentences);
      const selected = scored
        .sort((a, b) => b.score - a.score)
        .slice(0, target)
        .sort((a, b) => a.position - b.position);
      setSummary(selected.map((s) => s.text).join(" "));
    } finally {
      setLoading(false);
    }
  }

  function handleDownload() {
    const blob = new Blob([summary], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "summary.txt";
    link.click();
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-600" /> AI Text Summarizer
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        Generate concise summaries directly in your browser — privacy safe.
      </p>

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Text to Summarize:
      </label>
      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here…"
        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        disabled={loading}
      />

      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">
            Summary Length:
          </label>
          <select
            value={summaryLength}
            onChange={(e) =>
              setSummaryLength(e.target.value as LengthOpt)
            }
            className="rounded border-gray-300 text-sm focus:ring-blue-500"
            disabled={loading}
          >
            <option value="short">Short (20%)</option>
            <option value="medium">Medium (30%)</option>
            <option value="long">Long (40%)</option>
          </select>
        </div>

        <button
          onClick={() => {
            setText("");
            setSummary("");
          }}
          type="button"
          className="flex items-center gap-2 text-sm px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <Trash2 className="w-4 h-4" /> Clear
        </button>
      </div>

      <button
        onClick={handleSummarize}
        disabled={!text.trim() || loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Summarizing…
          </>
        ) : (
          <>
            <FileText className="w-5 h-5" /> Generate Summary
          </>
        )}
      </button>

      {summary && (
        <section className="mt-6 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-slate-800">
              Generated Summary
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(summary)}
                className="flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-lg border border-blue-300 hover:bg-blue-50 transition"
              >
                <Clipboard className="w-4 h-4" /> Copy
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-lg border border-blue-300 hover:bg-blue-50 transition"
              >
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-slate-700 whitespace-pre-wrap">{summary}</p>
          </div>
        </section>
      )}
    </section>
  );
}
