import { getAllPages } from "@/lib/content";
import { NextResponse } from "next/server";

export async function GET() {
  const pages = getAllPages();
  const index = pages.map((p) => ({
    t: p.title,
    s: p.slug,
    c: p.categories.join(", "),
  }));
  return NextResponse.json(index);
}
