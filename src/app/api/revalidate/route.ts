import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * On-demand revalidation API.
 *
 * POST /api/revalidate
 * Headers: { Authorization: Bearer <REVALIDATE_SECRET> }
 * Body: { "slug": "chatgpt" }           — revalidate one article + related pages
 *   or: { "paths": ["/wiki", "/"] }     — revalidate specific paths
 *   or: { "all": true }                 — revalidate everything
 */
export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "REVALIDATE_SECRET not configured" },
      { status: 500 }
    );
  }

  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const revalidated: string[] = [];

    if (body.all) {
      // Revalidate everything
      revalidatePath("/", "layout");
      revalidated.push("/ (layout - all pages)");
    } else if (body.slug) {
      // Revalidate a specific article and related listing pages
      const slug = body.slug as string;
      revalidatePath(`/wiki/${slug}`);
      revalidatePath("/wiki");
      revalidatePath("/");
      revalidatePath("/categories");
      revalidated.push(`/wiki/${slug}`, "/wiki", "/", "/categories");
    } else if (body.paths && Array.isArray(body.paths)) {
      for (const p of body.paths) {
        revalidatePath(p);
        revalidated.push(p);
      }
    } else {
      return NextResponse.json(
        { error: "Provide slug, paths, or all" },
        { status: 400 }
      );
    }

    return NextResponse.json({ revalidated, now: Date.now() });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
