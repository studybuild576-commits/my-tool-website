"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

interface PDFPermissions {
  printing: boolean;
  modifying: boolean;
  copying: boolean;
  annotating: boolean;
  fillingForms: boolean;
  contentAccessibility: boolean;
  documentAssembly: boolean;
}

interface UnlockResult {
  success: boolean;
  isEncrypted: boolean;
  permissions: PDFPermissions | null;
  error?: string;
}

const MAX_MB = 25;

export default function PDFUnlockTool() {
  const [file, setFile] = useState<File | null>(null);
  const [unlockedUrl, setUnlockedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [pdfInfo, setPdfInfo] = useState<UnlockResult | null>(null);

  async function analyzePDF(bytes: ArrayBuffer): Promise<UnlockResult> {
    try {
      // Try without password
      const pdfDoc = await PDFDocument.load(bytes).catch(() => null);
      if (!pdfDoc) {
        return {
          success: false,
          isEncrypted: true,
          permissions: null,
          error: "This PDF is password protected. Please enter the password."
        };
      }

      const pdoc: any = pdfDoc as any;
      const permissions: PDFPermissions = {
        printing: true,
        modifying: true,
        copying: true,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
      };

      // If lib exposes flags, try to read them
      try {
        if (typeof pdoc.isEncrypted === "boolean" && pdoc.isEncrypted) {
          permissions.printing = pdoc.canPrint ? !!pdoc.canPrint() : permissions.printing;
          permissions.modifying = pdoc.canModify ? !!pdoc.canModify() : permissions.modifying;
          permissions.copying = pdoc.canCopy ? !!pdoc.canCopy() : permissions.copying;
          permissions.annotating = pdoc.canAnnotate ? !!pdoc.canAnnotate() : permissions.annotating;
          permissions.fillingForms = pdoc.canFillForms ? !!pdoc.canFillForms() : permissions.fillingForms;
          permissions.contentAccessibility = pdoc.canAccessContent ? !!pdoc.canAccessContent() : permissions.contentAccessibility;
          permissions.documentAssembly = pdoc.canAssembleDocument ? !!pdoc.canAssembleDocument() : permissions.documentAssembly;
        }
      } catch {}

      return {
        success: true,
        isEncrypted: (pdfDoc as any).isEncrypted ?? false,
        permissions
      };
    } catch (err) {
      return {
        success: false,
        isEncrypted: true,
        permissions: null,
        error: String(err)
      };
    }
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newFile = e.target.files?.[0] || null;
    setUnlockedUrl(null);
    setError(null);
    setPdfInfo(null);
    setPassword("");

    if (!newFile) {
      setFile(null);
      return;
    }

    if (newFile.type !== "application/pdf") {
      setFile(null);
      setError("Please select a valid PDF file.");
      return;
    }
    if (newFile.size > MAX_MB * 1024 * 1024) {
      setFile(null);
      setError(`File too large. Max ${MAX_MB} MB allowed.`);
      return;
    }

    setFile(newFile);
    setAnalyzing(true);
    try {
      const bytes = await newFile.arrayBuffer();
      const info = await analyzePDF(bytes);
      setPdfInfo(info);
      if (info.error) setError(info.error);
    } catch (err) {
      setError("Failed to analyze PDF: " + String(err));
    } finally {
      setAnalyzing(false);
    }
  }

  async function handleUnlock() {
    if (!file) return;
    setLoading(true);
    setError(null);

    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(
        bytes,
        (password ? { password } : undefined) as any
      );

      const newPdfDoc = await PDFDocument.create();
      const pages = await newPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
      pages.forEach((p) => newPdfDoc.addPage(p));

      // Attempt to copy metadata (optional, best-effort)
      try {
        const anyDoc: any = pdfDoc;
        const setters: Array<[string, string]> = [
          ["getTitle", "setTitle"],
          ["getAuthor", "setAuthor"],
          ["getSubject", "setSubject"],
          ["getCreator", "setCreator"],
          ["getProducer", "setProducer"]
        ];
        for (const [get, set] of setters) {
          try {
            const val = anyDoc[get] && anyDoc[get]();
            if (val) (newPdfDoc as any)[set](val);
          } catch {}
        }
        try {
          const k = anyDoc.getKeywords && anyDoc.getKeywords();
          if (k) (newPdfDoc as any).setKeywords(k);
        } catch {}
        try {
          const cd = anyDoc.getCreationDate && anyDoc.getCreationDate();
          if (cd) (newPdfDoc as any).setCreationDate(cd as Date);
        } catch {}
        try {
          const md = anyDoc.getModificationDate && anyDoc.getModificationDate();
          if (md) (newPdfDoc as any).setModificationDate(md as Date);
        } catch {}
      } catch {}

      const unlockedBytes = await newPdfDoc.save({ addDefaultPage: false } as any);

      if (unlockedUrl) URL.revokeObjectURL(unlockedUrl);
      const blob = new Blob([unlockedBytes], { type: "application/pdf" });
      setUnlockedUrl(URL.createObjectURL(blob));

      setPdfInfo({
        success: true,
        isEncrypted: false,
        permissions: {
          printing: true,
          modifying: true,
          copying: true,
          annotating: true,
          fillingForms: true,
          contentAccessibility: true,
          documentAssembly: true
        }
      });
    } catch (err) {
      let msg = String(err);
      if (msg.toLowerCase().includes("password")) msg = "Incorrect password. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">🔓 PDF Unlock Tool</h2>
        <p className="text-sm text-slate-600">
          Remove passwords and restrictions locally in your browser. Restore printing, copying, editing, and more.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-purple-400 transition">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
              file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700
              hover:file:bg-purple-100"
          />
        </div>

        {analyzing && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-700">Analyzing PDF...</p>
          </div>
        )}

        {pdfInfo && !analyzing && (
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-medium text-slate-800 mb-3">PDF Security Status:</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`text-lg ${pdfInfo.isEncrypted ? "text-red-500" : "text-green-500"}`}>
                  {pdfInfo.isEncrypted ? "🔒" : "🔓"}
                </span>
                <span className="text-sm">
                  {pdfInfo.isEncrypted ? "This PDF is encrypted/password-protected" : "This PDF has no password protection"}
                </span>
              </div>
              {pdfInfo.permissions && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {Object.entries(pdfInfo.permissions).map(([k, v]) => (
                    <div key={k} className="flex items-center gap-2">
                      <span className={v ? "text-green-500" : "text-red-500"}>{v ? "✓" : "✕"}</span>
                      <span className="text-slate-600">{k.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {pdfInfo?.isEncrypted && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">PDF Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <button
          onClick={handleUnlock}
          disabled={!file || loading || analyzing}
          className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "Unlocking PDF..." : `Unlock ${pdfInfo?.isEncrypted ? "& Remove Password" : "PDF"}`}
        </button>

        {unlockedUrl && (
          <div className="text-center">
            <a
              href={unlockedUrl}
              download={`unlocked-${file?.name || "document"}.pdf`}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              <span>📥</span>
              <span>Download Unlocked PDF</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
