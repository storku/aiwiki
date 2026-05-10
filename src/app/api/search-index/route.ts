import { getSearchIndex } from "@/lib/content";
import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  const pages = await getSearchIndex();
  const index = pages.map((p) => ({
    t: p.title,
    s: p.slug,
    c: p.categories,
  }));
  return NextResponse.json(index, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
