"use client";
import { useState } from "react";

export default function AIOCRForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    try {
      const res = await fetch("/api/ocr", { method: "POST", body: data });
      const json = await res.json();
      if (json.text) setResult(json.text);
      else setError(json.error || "No text returned");
    } catch (err: any) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="file" name="file" accept="application/pdf,image/*" className="block" />
      <div>
        <button
          type="submit"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Running..." : "Run OCR"}
        </button>
      </div>

      {error && <div className="text-red-600">{error}</div>}

      {result && (
        <div className="mt-4 bg-slate-50 border rounded p-3 text-sm whitespace-pre-wrap">
          {result}
        </div>
      )}
    </form>
  );
}
