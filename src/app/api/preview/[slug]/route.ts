import { getPageBySlug } from "@/lib/content";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(
    {
      title: page.title,
      excerpt: page.excerpt,
      categories: page.categories.slice(0, 3),
      readingTime: page.readingTime,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
      },
    }
  );
}
