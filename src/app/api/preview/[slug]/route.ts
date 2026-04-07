import { getPagePreview } from "@/lib/content";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  let preview = await getPagePreview(slug);

  // If not found, try replacing dashes with underscores (wiki convention)
  if (!preview && slug.includes("-")) {
    const underscoreSlug = slug.replace(/-/g, "_");
    if (underscoreSlug !== slug) {
      preview = await getPagePreview(underscoreSlug);
    }
  }

  if (!preview) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(preview, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
