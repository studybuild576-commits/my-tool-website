import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "API is working fine 🚀" });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({
    success: true,
    received: data,
  });
}
