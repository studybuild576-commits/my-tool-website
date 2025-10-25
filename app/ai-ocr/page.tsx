import { NextResponse } from "next/server";
import Tesseract from "tesseract.js";
import { promises as fs } from "fs";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Temporary file save
    const tempPath = `/tmp/${Date.now()}-${file.name}`;
    await fs.writeFile(tempPath, buffer);

    // Run OCR
    const { data } = await Tesseract.recognize(tempPath, "eng+hin", {
      logger: (info) => console.log(info), // optional: see progress
    });

    // Delete temp file
    await fs.unlink(tempPath);

    if (!data.text.trim()) {
      return NextResponse.json({ error: "No text detected" }, { status: 422 });
    }

    return NextResponse.json({ text: data.text.trim() });
  } catch (error: any) {
    console.error("OCR error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
