import { fullTextSearch } from "@/lib/content";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim();

  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const results = await fullTextSearch(query, 30);
    return NextResponse.json(results, {
      headers: {
        "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
