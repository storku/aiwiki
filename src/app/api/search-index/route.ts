import { getSearchIndex } from "@/lib/content";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
      "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=3600",
    },
  });
}
