import { NextRequest, NextResponse } from "next/server";
import { fetchLiveClientGigs } from "@/lib/agency/liveScraper";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "all";
  const query = searchParams.get("query") || "";

  try {
    const gigs = await fetchLiveClientGigs(category, query);
    return NextResponse.json({
      success: true,
      gigs,
      totalCount: gigs.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch live gigs" }, { status: 500 });
  }
}
