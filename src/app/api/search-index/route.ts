import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllPages, generateExcerpt } from "@/lib/content";
import { NextResponse } from "next/server";

let cachedIndex: { t: string; s: string; c: string; e: string }[] | null = null;

export async function GET() {
  if (cachedIndex) {
    return NextResponse.json(cachedIndex);
  }

  const pages = getAllPages();
  const contentDir = path.join(process.cwd(), "content");

  const index = pages.map((p) => {
    let excerpt = "";
    try {
      const filePath = path.join(contentDir, `${p.slug}.md`);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { content } = matter(raw);
      excerpt = generateExcerpt(content, 200);
    } catch {
      // skip excerpt if file can't be read
    }
    return {
      t: p.title,
      s: p.slug,
      c: p.categories.join(", "),
      e: excerpt,
    };
  });

  cachedIndex = index;
  return NextResponse.json(index);
}
