// components/ESignatureTool.tsx
"use client";

import { useEffect, useRef, useState } from "react";

// Load pdf.js in client
async function loadPdfJs() {
  const pdfjsLib = await import("pdfjs-dist");
  (pdfjsLib as any).GlobalWorkerOptions = (pdfjsLib as any).GlobalWorkerOptions || {};
  (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";
  return pdfjsLib;
}

type SignatureMode = "draw" | "type" | "upload";
interface PlacedSignature { page: number; x: number; y: number; w: number; h: number; dataUrl: string; }

export default function ESignatureTool() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [mode, setMode] = useState<SignatureMode>("draw");
  const [typedSig, setTypedSig] = useState("John Doe");
  const [sigColor, setSigColor] = useState("#111111");
  const [sigThickness, setSigThickness] = useState(2);
  const [sigUpload, setSigUpload] = useState<string | null>(null);
  const [signatures, setSignatures] = useState<PlacedSignature[]>([]);
  const [loading, setLoading] = useState(false);

  const overlayRef = useRef<HTMLCanvasElement | null>(null);
  const pageRef = useRef<HTMLCanvasElement | null>(null);
  const drawCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    (async () => {
      if (!pdfFile) return;
      setLoading(true);
      try {
        const pdfjs = await loadPdfJs();
        const data = await pdfFile.arrayBuffer();
        const doc = await pdfjs.getDocument({ data }).promise;
        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setPageNum(1);
      } finally { setLoading(false); }
    })();
  }, [pdfFile]);

  useEffect(() => {
    (async () => {
      if (!pdfDoc) return;
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 });

      const pageCanvas = pageRef.current!;
      const ctx = pageCanvas.getContext("2d")!;
      const dpr = window.devicePixelRatio || 1;

      pageCanvas.width = Math.floor(viewport.width * dpr);
      pageCanvas.height = Math.floor(viewport.height * dpr);
      pageCanvas.style.width = `${Math.floor(viewport.width)}px`;
      pageCanvas.style.height = `${Math.floor(viewport.height)}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      await page.render({ canvasContext: ctx, canvas: pageCanvas, viewport } as any).promise;

      const overlay = overlayRef.current!;
      overlay.width = pageCanvas.width;
      overlay.height = pageCanvas.height;
      overlay.style.width = pageCanvas.style.width;
      overlay.style.height = pageCanvas.style.height;
      const drawCtx = overlay.getContext("2d")!;
      drawCtxRef.current = drawCtx;
      drawCtx.clearRect(0, 0, overlay.width, overlay.height);

      // Repaint signatures on current page
      const current = signatures.filter(s => s.page === pageNum);
      for (const s of current) {
        await drawImageToCtx(drawCtx, s.dataUrl, s.x, s.y, s.w, s.h);
      }
    })();
  }, [pdfDoc, pageNum, signatures]);

  function generateSignatureDataUrl(): string | null {
    if (mode === "draw") {
      const pad = document.getElementById("sig-pad") as HTMLCanvasElement | null;
      return pad?.toDataURL("image/png") || null;
    }
    if (mode === "type") {
      const temp = document.createElement("canvas");
      temp.width = 600; temp.height = 150;
      const ctx = temp.getContext("2d")!;
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, temp.width, temp.height);
      ctx.fillStyle = sigColor;
      ctx.font = "48px 'Brush Script MT', cursive";
      ctx.textBaseline = "middle";
      ctx.fillText(typedSig || "Signature", 20, temp.height / 2);
      return temp.toDataURL("image/png");
    }
    if (mode === "upload") return sigUpload;
    return null;
  }

  function onPlaceSignature(e: React.MouseEvent<HTMLCanvasElement>) {
    const dataUrl = generateSignatureDataUrl();
    if (!dataUrl) return;

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const scaleX = target.width / rect.width;
    const scaleY = target.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const w = 220, h = 70;
    const ctx = drawCtxRef.current!;
    drawImageToCtx(ctx, dataUrl, x, y, w, h).then(() => {
      setSignatures(prev => prev.concat([{ page: pageNum, x, y, w, h, dataUrl }]));
    });
  }

  async function drawImageToCtx(ctx: CanvasRenderingContext2D, dataUrl: string, x: number, y: number, w: number, h: number) {
    return new Promise<void>((res) => {
      const img = new Image();
      img.onload = () => { ctx.drawImage(img, x, y, w, h); res(); };
      img.src = dataUrl;
    });
  }

  function onSigUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => setSigUpload(String(reader.result));
    reader.readAsDataURL(f);
  }

  function computeVisualHash(): string {
    const payload = JSON.stringify(signatures.map(s => [s.page, Math.round(s.x), Math.round(s.y), Math.round(s.w), Math.round(s.h)]));
    let h = 0; for (let i=0;i<payload.length;i++) h = (h*31 + payload.charCodeAt(i)) | 0;
    return `VIS-HASH:${(h>>>0).toString(16)}`;
  }

  async function downloadCurrentPagePNG() {
    if (!pdfDoc) return;
    const canvas = document.createElement("canvas");
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.5 });
    const dpr = window.devicePixelRatio || 1;

    const ctx = canvas.getContext("2d")!;
    canvas.width = Math.floor(viewport.width * dpr);
    canvas.height = Math.floor(viewport.height * dpr);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    await page.render({ canvasContext: ctx, canvas, viewport } as any).promise;

    // flatten placed signatures
    const current = signatures.filter(s => s.page === pageNum);
    for (const s of current) await drawImageToCtx(ctx, s.dataUrl, s.x, s.y, s.w, s.h);

    const png = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = png;
    a.download = `signed-page-${pageNum}.png`;
    a.click();
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">E‑Signature Tool</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Upload PDF</label>
        <input type="file" accept="application/pdf" onChange={(e)=>setPdfFile(e.target.files?.[0]||null)} className="block w-full text-sm" />
      </div>

      {!pdfDoc && <p className="text-sm text-slate-600">Upload a PDF to start signing.</p>}

      {pdfDoc && (
        <>
          <div className="flex items-center gap-3 mb-3">
            <button className="px-3 py-1 rounded border" onClick={()=>setPageNum(p=>Math.max(1,p-1))} disabled={pageNum<=1}>Prev</button>
            <span className="text-sm text-slate-700">Page {pageNum} / {totalPages}</span>
            <button className="px-3 py-1 rounded border" onClick={()=>setPageNum(p=>Math.min(totalPages,p+1))} disabled={pageNum>=totalPages}>Next</button>
          </div>

          <div className="relative inline-block">
            <canvas ref={pageRef} className="border rounded" />
            <canvas ref={overlayRef} className="absolute left-0 top-0 cursor-crosshair" onClick={onPlaceSignature} />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="bg-slate-50 p-4 rounded border">
              <h3 className="font-semibold mb-2">Signature Source</h3>
              <div className="flex gap-3 mb-3">
                <label className="text-sm"><input type="radio" name="mode" checked={mode==="draw"} onChange={()=>setMode("draw")} /> Draw</label>
                <label className="text-sm"><input type="radio" name="mode" checked={mode==="type"} onChange={()=>setMode("type")} /> Type</label>
                <label className="text-sm"><input type="radio" name="mode" checked={mode==="upload"} onChange={()=>setMode("upload")} /> Upload</label>
              </div>

              {mode==="draw" && <SignaturePad color={sigColor} thickness={sigThickness} />}
              {mode==="type" && (
                <div>
                  <label className="block text-sm mb-2">Your name/signature text</label>
                  <input value={typedSig} onChange={(e)=>setTypedSig(e.target.value)} className="w-full border rounded px-3 py-2 mb-2" />
                  <label className="text-sm">Color <input type="color" value={sigColor} onChange={(e)=>setSigColor(e.target.value)} className="ml-2" /></label>
                </div>
              )}
              {mode==="upload" && (
                <div>
                  <label className="block text-sm mb-2">Upload signature image (PNG/SVG preferred)</label>
                  <input type="file" accept="image/*" onChange={onSigUpload} />
                  {sigUpload && <p className="text-xs text-slate-600 mt-1">Signature image loaded.</p>}
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-4 rounded border">
              <h3 className="font-semibold mb-2">Actions</h3>
              <p className="text-sm text-slate-600 mb-3">Click on the PDF to place the selected signature, then download.</p>
              <button onClick={downloadCurrentPagePNG} className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Apply & Download Current Page</button>
              <div className="mt-3">
                <h4 className="font-semibold text-sm mb-1">Verification hash (visual)</h4>
                <pre className="text-xs bg-white border rounded p-2">{computeVisualHash()}</pre>
                <p className="text-xs text-slate-500 mt-1">Note: For embedded cryptographic signatures (PAdES), integrate a PKI library server-side; this tool provides visible signatures and local verification hints.</p>
              </div>
            </div>
          </div>
        </>
      )}

      {loading && <p className="text-sm text-slate-600 mt-3">Loading PDF…</p>}
    </section>
  );
}

function SignaturePad({ color, thickness }: { color: string; thickness: number }) {
  const padRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const last = useRef<{x:number;y:number}|null>(null);

  useEffect(() => {
    const c = padRef.current!;
    const dpr = window.devicePixelRatio || 1;
    c.width = 600 * dpr; c.height = 150 * dpr;
    c.style.width = "600px"; c.style.height = "150px";
    const ctx = c.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "white"; ctx.fillRect(0, 0, 600, 150);
  }, []);

  useEffect(() => {
    const ctx = padRef.current!.getContext("2d")!;
    ctx.strokeStyle = color; ctx.lineWidth = thickness; ctx.lineCap = "round";
  }, [color, thickness]);

  function pos(e: React.MouseEvent<HTMLCanvasElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }
  function down(e: React.MouseEvent<HTMLCanvasElement>) { drawing.current = true; last.current = pos(e); }
  function up() { drawing.current = false; last.current = null; }
  function move(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const ctx = padRef.current!.getContext("2d")!;
    const p = pos(e); const l = last.current!;
    ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    last.current = p;
  }
  function clearPad() {
    const c = padRef.current!; const ctx = c.getContext("2d")!;
    ctx.fillStyle = "white"; ctx.fillRect(0, 0, c.width, c.height);
  }

  return (
    <div>
      <canvas id="sig-pad" ref={padRef} className="border rounded w-full"
        onMouseDown={down} onMouseUp={up} onMouseLeave={up} onMouseMove={move} />
      <button type="button" className="mt-2 text-xs bg-white px-3 py-1 rounded border border-slate-300 hover:bg-slate-100" onClick={clearPad}>Clear</button>
    </div>
  );
}
