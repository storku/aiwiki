import { getSearchIndex } from "@/lib/content";
import { NextResponse } from "next/server";

export async function GET() {
  const pages = await getSearchIndex();
  const index = pages.map((p) => ({
    t: p.title,
    s: p.slug,
    c: p.categories,
    e: p.excerpt,
  }));
  return NextResponse.json(index, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
