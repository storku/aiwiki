import { NextRequest, NextResponse } from "next/server";

function slugify(title: string): string {
  return title
    .replace(/ /g, "_")
    .replace(
      /[^a-zA-Z0-9_\-\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/g,
      "_"
    )
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only handle /wiki/SLUG paths
  if (!pathname.startsWith("/wiki/")) return;

  const raw = pathname.slice("/wiki/".length);
  if (!raw) return;

  // Decode any percent-encoded characters (e.g. %28 → (, spaces, etc.)
  const decoded = decodeURIComponent(raw);
  const normalized = slugify(decoded);

  // If the slug changed after normalization, redirect to the canonical URL
  if (normalized !== raw) {
    const url = request.nextUrl.clone();
    url.pathname = `/wiki/${normalized}`;
    return NextResponse.redirect(url, 301);
  }
}

export const config = {
  matcher: "/wiki/:slug+",
};
