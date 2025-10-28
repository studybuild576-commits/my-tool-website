// components/AISummarizerTool.tsx
"use client";
import { useState, useMemo } from "react";

type LengthOpt = "short" | "medium" | "long";
interface Sentence { text: string; score: number; position: number; }

export default function AISummarizerTool() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [summaryLength, setSummaryLength] = useState<LengthOpt>("medium");

  const sentences = useMemo(() => splitIntoSentences(text), [text]);

  function splitIntoSentences(str: string): string[] {
    return str.replace(/([.!?])s+/g, "$1|").split("|").map(s=>s.trim()).filter(s=>s.length>10);
  }

  function calculateSentenceScores(sentences: string[]): Sentence[] {
    const wordFreq: Record<string, number> = {};
    const all = sentences.join(" ").toLowerCase().split(/s+/).map(w=>w.replace(/[^a-z0-9'-]/gi,"")).filter(w=>w.length>3);
    for (const w of all) wordFreq[w]=(wordFreq[w]||0)+1;

    return sentences.map((text, position) => {
      const words = text.toLowerCase().split(/s+/).map(w=>w.replace(/[^a-z0-9'-]/gi,"")).filter(w=>w.length>3);
      const wordScore = words.reduce((s,w)=>s+(wordFreq[w]||0),0)/Math.max(words.length,1);
      const positionScore = position===0?1:position===sentences.length-1?0.8:1-Math.abs(0.5-position/sentences.length);
      const lengthScore = Math.min(1, text.length/150);
      const hasNumbers = /d/.test(text)?1.1:1; const hasQuotes=/["“”]/.test(text)?1.1:1;
      const score = (wordScore*0.45 + positionScore*0.3 + lengthScore*0.25)*hasNumbers*hasQuotes;
      return { text, score, position };
    });
  }

  async function handleSummarize() {
    if (!text.trim()) return;
    setLoading(true); setSummary("");
    try {
      if (sentences.length<2) { setSummary(text.trim()); return; }
      const target = summaryLength==="short"?Math.max(2,Math.ceil(sentences.length*0.2)):summaryLength==="medium"?Math.max(3,Math.ceil(sentences.length*0.3)):Math.max(4,Math.ceil(sentences.length*0.4));
      const scored = calculateSentenceScores(sentences);
      const selected = scored.sort((a,b)=>b.score-a.score).slice(0,target).sort((a,b)=>a.position-b.position);
      setSummary(selected.map(s=>s.text).join(" "));
    } finally { setLoading(false); }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Text Summarizer</h2>
      <p className="text-sm text-slate-600 mb-4">Generate concise summaries in your browser—no data leaves your device.</p>

      <label className="block text-sm font-medium text-gray-700 mb-1">Text to Summarize:</label>
      <textarea rows={8} value={text} onChange={(e)=>setText(e.target.value)} placeholder="Paste your text here…" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" disabled={loading} />

      <div className="flex items-center gap-4 mb-4">
        <label className="block text-sm font-medium text-gray-700">Summary Length:</label>
        <select value={summaryLength} onChange={(e)=>setSummaryLength(e.target.value as LengthOpt)} className="rounded border-gray-300 text-sm focus:ring-blue-500" disabled={loading}>
          <option value="short">Short (20%)</option>
          <option value="medium">Medium (30%)</option>
          <option value="long">Long (40%)</option>
        </select>
      </div>

      <button onClick={handleSummarize} disabled={!text.trim()||loading} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50">
        {loading ? "Summarizing…" : "Generate Summary"}
      </button>

      {summary && (
        <section className="mt-6 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-slate-800">Generated Summary</h3>
            <button type="button" onClick={()=>navigator.clipboard.writeText(summary)} className="text-sm bg-white px-3 py-1 rounded-lg border border-blue-300 hover:bg-blue-50 transition">📋 Copy</button>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-slate-700 whitespace-pre-wrap">{summary}</p>
          </div>
        </section>
      )}
    </section>
  );
}
