import { getAllPages } from "@/lib/content";
import { NextResponse } from "next/server";

export async function GET() {
  const pages = await getAllPages();
  const index = pages.map((p) => ({
    t: p.title,
    s: p.slug,
    c: p.categories.join(", "),
    e: p.excerpt || "",
  }));
  return NextResponse.json(index, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
