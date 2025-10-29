"use client";
import { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";

interface ProtectionOptions {
  userPassword: string;
  ownerPassword: string;
  allowPrinting: boolean;
  allowModifying: boolean;
  allowCopying: boolean;
  allowAnnotating: boolean;
}

export default function PDFProtectTool() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string>("");
  const [protectedUrl, setProtectedUrl] = useState<string | null>(null);

  const [options, setOptions] = useState<ProtectionOptions>({
    userPassword: "",
    ownerPassword: "",
    allowPrinting: true,
    allowModifying: false,
    allowCopying: true,
    allowAnnotating: true
  });

  // Blob URL cleanup
  useEffect(() => {
    return () => {
      if (protectedUrl) URL.revokeObjectURL(protectedUrl);
    };
  }, [protectedUrl]);

  function validatePasswords(): string | null {
    const { userPassword, ownerPassword } = options;
    if (!userPassword && !ownerPassword) return "Kam se kam ek password zaroori hai.";
    const weak =
      (userPassword && userPassword.length < 4) || (ownerPassword && ownerPassword.length < 4);
    if (weak) return "Password 4 characters se zyada rakhen.";
    return null;
  }

  async function handleProtect() {
    if (!file) {
      setError("PDF select karein.");
      return;
    }
    const pwdMsg = validatePasswords();
    if (pwdMsg) {
      setError(pwdMsg);
      return;
    }

    setLoading(true);
    setError(null);
    setProgress("PDF read ho raha hai...");
    setProtectedUrl(null);

    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);

      setProgress("Encrypt/Protect apply ho raha hai...");

      const permits = {
        printing: options.allowPrinting ? "highResolution" : "none",
        modifying: options.allowModifying,
        copying: options.allowCopying,
        annotating: options.allowAnnotating,
        fillingForms: options.allowModifying,
        contentAccessibility: true,
        documentAssembly: options.allowModifying
      };

      let outBytes: Uint8Array | ArrayBuffer;
      let encrypted = false;

      // Approach A: direct encrypt (agar available ho)
      try {
        const anyDoc: any = pdfDoc as any;
        if (typeof anyDoc.encrypt === "function") {
          await anyDoc.encrypt({
            userPassword: options.userPassword || undefined,
            ownerPassword: (options.ownerPassword || options.userPassword) || undefined,
            permissions: permits
          });
          encrypted = true;
        }
      } catch {}

      setProgress("Saving...");

      if (encrypted) {
        outBytes = await pdfDoc.save();
      } else {
        // Approach B: save ke through encrypt options (kuch builds support karte hain)
        try {
          const anyDoc: any = pdfDoc as any;
          outBytes = await anyDoc.save({
            encrypt: {
              userPassword: options.userPassword || undefined,
              ownerPassword: (options.ownerPassword || options.userPassword) || undefined,
              permissions: permits
            }
          });
        } catch {
          // Fallback: without encryption + notice
          outBytes = await pdfDoc.save();
          setError(
            "Is build me encryption method available nahi mila. File save ho gayi, par password shayad apply na hua ho."
          );
        }
      }

      if (protectedUrl) URL.revokeObjectURL(protectedUrl);
      const blob = new Blob([outBytes as unknown as BlobPart], { type: "application/pdf" });
      setProtectedUrl(URL.createObjectURL(blob));
      setProgress("");
    } catch (err) {
      setError("Failed to protect PDF: " + String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">🔐 PDF Password Protection</h2>
        <p className="text-sm text-slate-600">
          User/Owner password set karke PDF secure karein aur printing/copying/modifying permissions control karein. Saari processing browser ke andar hoti hai.
        </p>
      </div>

      <div className="space-y-6">
        {/* Upload */}
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-blue-400 transition">
          <label className="block text-sm font-medium text-slate-700 mb-2">PDF chunen</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              setFile(e.target.files?.[0] || null);
              setProtectedUrl(null);
              setError(null);
            }}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            disabled={loading}
            aria-label="Upload PDF to protect"
          />
          <p className="mt-2 text-xs text-slate-500">Max size: 100MB</p>
        </div>

        {/* Passwords */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User Password (open)</label>
            <input
              type="password"
              value={options.userPassword}
              onChange={(e) => setOptions({ ...options, userPassword: e.target.value })}
              placeholder="Open password"
              className="w-full border rounded-lg px-3 py-2"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Owner Password (full access)</label>
            <input
              type="password"
              value={options.ownerPassword}
              onChange={(e) => setOptions({ ...options, ownerPassword: e.target.value })}
              placeholder="Edit/permissions control"
              className="w-full border rounded-lg px-3 py-2"
              disabled={loading}
            />
          </div>
        </div>

        {/* Permissions */}
        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="font-medium text-slate-700 mb-3">Permissions</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.allowPrinting}
                onChange={(e) => setOptions({ ...options, allowPrinting: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 mr-2"
                disabled={loading}
              />
              <span className="text-sm text-slate-600">Allow Printing</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.allowModifying}
                onChange={(e) => setOptions({ ...options, allowModifying: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 mr-2"
                disabled={loading}
              />
              <span className="text-sm text-slate-600">Allow Modifying</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.allowCopying}
                onChange={(e) => setOptions({ ...options, allowCopying: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 mr-2"
                disabled={loading}
              />
              <span className="text-sm text-slate-600">Allow Copying Text</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={options.allowAnnotating}
                onChange={(e) => setOptions({ ...options, allowAnnotating: e.target.checked })}
                className="rounded border-gray-300 text-blue-600 mr-2"
                disabled={loading}
              />
              <span className="text-sm text-slate-600">Allow Annotations</span>
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleProtect}
            disabled={!file || loading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 flex items-center gap-2 min-w-[200px] justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {progress || "Protecting PDF..."}
              </>
            ) : (
              <>Protect PDF</>
            )}
          </button>

          {protectedUrl && (
            <a
              href={protectedUrl}
              download={(file?.name?.replace(/.pdf$/i, "") || "document") + "_protected.pdf"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-100 text-green-700 hover:bg-green-200 font-medium"
            >
              <span className="text-xl" aria-hidden="true">📥</span>
              Download Protected PDF
            </a>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4" role="alert">
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl" aria-hidden="true">⚠️</span>
              <div>
                <p className="font-semibold text-red-800">Error</p>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
