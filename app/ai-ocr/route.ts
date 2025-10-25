import { NextResponse } from "next/server";
import Tesseract from "tesseract.js";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("file") as File;
    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());
    const { data: { text } } = await Tesseract.recognize(buffer, "eng");

    return NextResponse.json({ text });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "OCR failed" }, { status: 500 });
  }
}
