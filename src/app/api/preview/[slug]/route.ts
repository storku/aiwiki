import { getPagePreview } from "@/lib/content";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const preview = await getPagePreview(slug);

  if (!preview) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(preview, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
