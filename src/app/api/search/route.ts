import { fullTextSearch } from "@/lib/content";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim();

  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const results = await fullTextSearch(query, 30);
    return NextResponse.json(results, {
      headers: {
        "Cache-Control": "public, max-age=30, s-maxage=300, stale-while-revalidate=3600",
      },
    });
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
