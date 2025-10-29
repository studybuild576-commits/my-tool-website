// components/PDFSignerTool.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function PDFSignerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  // Cleanup blob URL on unmount or replace
  useEffect(() => {
    return () => {
      if (signedUrl) URL.revokeObjectURL(signedUrl);
    };
  }, [signedUrl]);

  function getCtx() {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#111827";
    return ctx;
  }

  function getOffsetPos(e: MouseEvent | TouchEvent) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    let clientX = 0, clientY = 0;
    if (e instanceof TouchEvent) {
      const t = e.touches[0] || e.changedTouches[0];
      clientX = t.clientX; clientY = t.clientY;
    } else {
      const m = e as MouseEvent;
      clientX = m.clientX; clientY = m.clientY;
    }
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function startDraw(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    const ctx = getCtx();
    if (!ctx) return;
    drawingRef.current = true;
    const { x, y } = getOffsetPos(e.nativeEvent as any);
    ctx.beginPath();
    ctx.moveTo(x, y);
    lastPosRef.current = { x, y };
  }

  function draw(e: React.MouseEvent | React.TouchEvent) {
    if (!drawingRef.current) return;
    e.preventDefault();
    const ctx = getCtx();
    if (!ctx) return;
    const { x, y } = getOffsetPos(e.nativeEvent as any);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastPosRef.current = { x, y };
  }

  function endDraw(e?: React.MouseEvent | React.TouchEvent) {
    if (!drawingRef.current) return;
    e?.preventDefault();
    drawingRef.current = false;
    lastPosRef.current = null;
  }

  function clearCanvas() {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, c.width, c.height);
  }

  function isCanvasBlank(canvas: HTMLCanvasElement) {
    const blank = document.createElement("canvas");
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
  }

  async function handleSign() {
    if (!file) { setError("Please choose a PDF file first."); return; }
    const canvas = canvasRef.current;
    if (!canvas) { setError("Signature canvas not ready."); return; }
    if (isCanvasBlank(canvas)) { setError("Please draw your signature first."); return; }

    setLoading(true);
    setError(null);

    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);

      // PNG bytes from canvas
      const sigDataUrl = canvas.toDataURL("image/png");
      const sigBytes = await (await fetch(sigDataUrl)).arrayBuffer();
      const sigImage = await pdfDoc.embedPng(sigBytes);

      // Place signature on last page, bottom-right
      const lastPage = pdfDoc.getPage(pdfDoc.getPageCount() - 1);
      const { width, height } = lastPage.getSize();
      const sigWidth = Math.min(180, Math.max(120, Math.round(width * 0.25)));
      const sigHeight = (sigImage.height / sigImage.width) * sigWidth;

      lastPage.drawImage(sigImage, {
        x: width - sigWidth - 40,
        y: 40,
        width: sigWidth,
        height: sigHeight
      });

      const out = await pdfDoc.save();
      if (signedUrl) URL.revokeObjectURL(signedUrl);
      const blob = new Blob([out as unknown as BlobPart], { type: "application/pdf" });
      setSignedUrl(URL.createObjectURL(blob));
    } catch (err) {
      setError("Failed to sign PDF: " + String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">✍️ PDF Signer</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">PDF File</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full border rounded px-3 py-2"
          aria-label="Select PDF to sign"
        />
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm text-slate-600">Draw signature below:</p>
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={500}
            height={150}
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={endDraw}
            className="border rounded w-full touch-none bg-white"
            aria-label="Signature canvas"
          />
          <button
            type="button"
            onClick={clearCanvas}
            className="absolute top-2 right-2 px-2 py-1 text-xs bg-slate-100 hover:bg-slate-200 rounded"
          >
            Clear
          </button>
        </div>
        <div className="mt-3">
          <button
            onClick={handleSign}
            disabled={!file || loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Signing..." : "Sign PDF"}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      {signedUrl && (
        <div className="mt-4">
          <a
            href={signedUrl}
            download={(file?.name?.replace(/.pdf$/i, "") || "signed") + ".pdf"}
            className="inline-flex items-center gap-1 text-green-700 hover:underline"
          >
            <span aria-hidden="true">📥</span>
            Download Signed PDF
          </a>
        </div>
      )}
    </section>
  );
}
