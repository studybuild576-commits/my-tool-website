// components/CaseConverterTool.tsx
"use client";
import { useMemo, useState } from "react";

export default function CaseConverterTool() {
  const [text, setText] = useState("");

  const counts = useMemo(() => {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/s+/).length : 0;
    const lines = text ? text.split(/
?
/).length : 0;
    return { chars, words, lines };
  }, [text]);

  const transform = {
    UPPER: text.toUpperCase(),
    lower: text.toLowerCase(),
    Capitalized: text.replace(/\bw/g, (c) => c.toUpperCase()),
    "Title Case": text
      .toLowerCase()
      .replace(/\bw+/g, (w) => w.charAt(0).toUpperCase() + w.slice(1)),
    "Sentence case": text
      .toLowerCase()
      .replace(/(^s*[a-z])|([.?!]s+[a-z])/g, (m) => m.toUpperCase()),
    "tOGGLE cASE": text
      .split("")
      .map((ch) => (ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()))
      .join(""),
    "snake_case": text
      .trim()
      .replace(/[^ws]|_/g, "")
      .replace(/s+/g, "_")
      .toLowerCase(),
    "kebab-case": text
      .trim()
      .replace(/[^ws]|_/g, "")
      .replace(/s+/g, "-")
      .toLowerCase(),
    "camelCase": text
      .toLowerCase()
      .replace(/[^ws]|_/g, "")
      .split(/s+/)
      .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
      .join(""),
    "PascalCase": text
      .toLowerCase()
      .replace(/[^ws]|_/g, "")
      .split(/s+/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(""),
  };

  async function copy(val: string) {
    try {
      await navigator.clipboard.writeText(val);
    } catch {
      // no-op
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">Case Converter</h2>
        <div className="text-xs text-slate-600">
          <span className="mr-3">Chars: {counts.chars}</span>
          <span className="mr-3">Words: {counts.words}</span>
          <span>Lines: {counts.lines}</span>
        </div>
      </div>

      <label className="block text-sm font-medium text-slate-700 mb-2">Enter text</label>
      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text…"
        className="w-full border rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        aria-label="Input text to convert case"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {Object.entries(transform).map(([label, val]) => (
          <div key={label} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-800">{label}</h3>
              <button
                type="button"
                onClick={() => copy(val)}
                className="text-xs bg-white px-3 py-1 rounded border border-slate-300 hover:bg-slate-100"
                aria-label={`Copy ${label} text`}
              >
                📋 Copy
              </button>
            </div>
            <pre className="whitespace-pre-wrap text-sm text-slate-700">{val}</pre>
          </div>
        ))}
      </div>
    </section>
  );
}
