"use client";
import { useState } from "react";
import {
  Loader2,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  Trash2,
  Download,
  Settings2,
  UploadCloud,
} from "lucide-react";

type Action = "compress" | "merge" | "convert-jpg" | "watermark";
interface Job {
  id: string;
  file: File;
  status: "pending" | "processing" | "done" | "error";
  result?: string;
}

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
    const newJobs: Job[] = files.map((f, i) => ({
      id: `job-${i}`,
      file: f,
      status: "pending",
    }));
    setJobs(newJobs);

    for (let i = 0; i < newJobs.length; i++) {
      setJobs((prev) =>
        prev.map((j, idx) =>
          idx === i ? { ...j, status: "processing" } : j
        )
      );
      await new Promise((r) => setTimeout(r, 1000)); // simulate processing delay
      setJobs((prev) =>
        prev.map((j, idx) =>
          idx === i
            ? {
                ...j,
                status: "done",
                result: `${action}-${j.file.name}`,
              }
            : j
        )
      );
    }

    setProcessing(false);
  }

  function handleClear() {
    setFiles([]);
    setJobs([]);
  }

  function handleDownloadAll() {
    jobs.forEach((j) => {
      if (j.result) {
        const blob = new Blob([`Result of ${j.result}`], {
          type: "text/plain",
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = j.result;
        link.click();
      }
    });
  }

  const actionIcon = {
    compress: <Settings2 className="w-5 h-5 text-emerald-600" />,
    merge: <FileText className="w-5 h-5 text-indigo-600" />,
    "convert-jpg": <UploadCloud className="w-5 h-5 text-blue-600" />,
    watermark: <AlertTriangle className="w-5 h-5 text-orange-600" />,
  }[action];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Settings2 className="w-6 h-6 text-emerald-600" /> Batch Processing Tool
      </h2>
      <p className="text-sm text-slate-600 mb-4">
        Select multiple files and apply bulk operations like compress, merge, or
        convert — all processed securely in your browser.
      </p>

      <label className="block text-sm font-medium mb-2">
        Select Files (PDFs)
      </label>
      <input
        type="file"
        accept="application/pdf"
        multiple
        onChange={handleFilesSelect}
        className="block w-full text-sm border rounded px-3 py-2 mb-4"
        disabled={processing}
      />

      {files.length > 0 && (
        <p className="text-sm text-slate-600 mb-3">
          {files.length} file(s) selected
        </p>
      )}

      <label className="block text-sm font-medium mb-2">Action</label>
      <div className="flex gap-3 mb-4">
        <select
          value={action}
          onChange={(e) => setAction(e.target.value as Action)}
          className="w-full border rounded px-3 py-2 text-sm"
          disabled={processing}
        >
          <option value="compress">Compress PDFs</option>
          <option value="merge">Merge into one PDF</option>
          <option value="convert-jpg">Convert to JPG</option>
          <option value="watermark">Add Watermark</option>
        </select>

        <div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-lg border">
          {actionIcon}
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <button
          onClick={startBatch}
          disabled={!files.length || processing}
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-emerald-700 disabled:opacity-50"
        >
          {processing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Processing…
            </>
          ) : (
            <>
              <Settings2 className="w-5 h-5" /> Start Batch
            </>
          )}
        </button>

        <button
          onClick={handleClear}
          disabled={!files.length || processing}
          className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-4 py-3 rounded-lg border hover:bg-gray-200"
        >
          <Trash2 className="w-5 h-5" /> Clear
        </button>
      </div>

      {jobs.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold flex items-center gap-2">
              Queue Status
            </h3>
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200"
            >
              <Download className="w-4 h-4" /> Download All
            </button>
          </div>

          <ul className="space-y-2">
            {jobs.map((j) => (
              <li
                key={j.id}
                className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2 border"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-600" />
                  <span className="text-sm text-slate-800 truncate max-w-[180px]">
                    {j.file.name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {j.status === "pending" && (
                    <>
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500 text-xs">Pending</span>
                    </>
                  )}
                  {j.status === "processing" && (
                    <>
                      <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                      <span className="text-blue-600 text-xs">Processing</span>
                    </>
                  )}
                  {j.status === "done" && (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-xs">Done</span>
                    </>
                  )}
                  {j.status === "error" && (
                    <>
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-red-600 text-xs">Error</span>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
