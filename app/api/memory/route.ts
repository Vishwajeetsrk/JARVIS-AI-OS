import { NextRequest, NextResponse } from "next/server";
import { searchVectorMemories, storeVectorMemory } from "@/lib/memory/vectorMemory";
import { MemoryCategory } from "@/lib/memory/types";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";
  const category = (searchParams.get("category") as MemoryCategory) || undefined;
  const limit = parseInt(searchParams.get("limit") || "5", 10);

  try {
    const result = await searchVectorMemories(query, category, limit);
    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Memory search failed" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { category, content, metadata } = await req.json();
    if (!category || !content) {
      return NextResponse.json({ error: "category and content are required" }, { status: 400 });
    }

    const saved = await storeVectorMemory(category, content, metadata);
    return NextResponse.json({ success: true, memory: saved });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to store memory" }, { status: 500 });
  }
}
