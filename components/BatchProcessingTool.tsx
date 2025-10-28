// components/BatchProcessingTool.tsx
"use client";
import { useState } from "react";

type Action = "compress" | "merge" | "convert-jpg" | "watermark";
interface Job { id: string; file: File; status: "pending"|"processing"|"done"|"error"; result?: string; }

export default function BatchProcessingTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [action, setAction] = useState<Action>("compress");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [processing, setProcessing] = useState(false);

  function handleFilesSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files || []);
    setFiles(selected);
    setJobs([]);
  }

  async function startBatch() {
    if (!files.length) return;
    setProcessing(true);
    const newJobs: Job[] = files.map((f,i) => ({ id: `job-${i}`, file: f, status: "pending" }));
    setJobs(newJobs);

    for (let i=0; i<newJobs.length; i++) {
      setJobs(prev => prev.map((j,idx) => idx===i ? {...j, status:"processing"} : j));
      await new Promise(r => setTimeout(r, 800)); // simulate processing
      setJobs(prev => prev.map((j,idx) => idx===i ? {...j, status:"done", result:`${action}-${j.file.name}`} : j));
    }
    setProcessing(false);
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Batch Processing Tool</h2>
      <p className="text-sm text-slate-600 mb-4">Select multiple files and an operation to apply—results download individually.</p>

      <label className="block text-sm font-medium mb-2">Select Files (PDFs)</label>
      <input type="file" accept="application/pdf" multiple onChange={handleFilesSelect} className="block w-full text-sm border rounded px-3 py-2 mb-4" disabled={processing} />
      {files.length>0 && <p className="text-sm text-slate-600 mb-4">{files.length} file(s) selected</p>}

      <label className="block text-sm font-medium mb-2">Action</label>
      <select value={action} onChange={(e)=>setAction(e.target.value as Action)} className="block w-full border rounded px-3 py-2 mb-4" disabled={processing}>
        <option value="compress">Compress PDFs</option>
        <option value="merge">Merge into one PDF</option>
        <option value="convert-jpg">Convert to JPG</option>
        <option value="watermark">Add Watermark</option>
      </select>

      <button onClick={startBatch} disabled={!files.length||processing} className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 disabled:opacity-50">
        {processing ? "Processing..." : "Start Batch"}
      </button>

      {jobs.length>0 && (
        <div className="mt-6 border-t pt-4">
          <h3 className="font-semibold mb-2">Queue</h3>
          <ul className="space-y-2">
            {jobs.map(j => (
              <li key={j.id} className="flex items-center justify-between text-sm p-2 bg-slate-50 rounded">
                <span>{j.file.name}</span>
                <span className={j.status==="done"?"text-green-600":j.status==="processing"?"text-blue-600":"text-slate-500"}>
                  {j.status==="done"?"✅ Done":j.status==="processing"?"⏳ Processing...":"⏸️ Pending"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
