import { NextRequest, NextResponse } from "next/server";
import { list, put, del } from "@vercel/blob";
import { isAuthenticated } from "@/lib/auth";

function guessContentType(pathname: string): string {
  const ext = pathname.split(".").pop()?.toLowerCase();
  const map: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
  };
  return map[ext || ""] || "image/png";
}

// Both prefixes used in blob storage
const PREFIXES = ["wiki/images/", "images/"];

/**
 * GET /api/images - List images or get stats
 * ?mode=stats  — return aggregate stats (count, size, type breakdown)
 * ?cursor=xxx  — paginated listing
 */
export async function GET(request: NextRequest) {
  try {
    const mode = request.nextUrl.searchParams.get("mode");

    if (mode === "stats") {
      let totalCount = 0;
      let totalSize = 0;
      const typeCounts: Record<string, number> = {};
      const typeSizes: Record<string, number> = {};

      for (const prefix of PREFIXES) {
        let cursor: string | undefined;
        do {
          const result = await list({ prefix, limit: 1000, cursor });
          for (const blob of result.blobs) {
            totalCount++;
            totalSize += blob.size;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const ct = (blob as any).contentType || guessContentType(blob.pathname);
            typeCounts[ct] = (typeCounts[ct] || 0) + 1;
            typeSizes[ct] = (typeSizes[ct] || 0) + blob.size;
          }
          cursor = result.cursor;
        } while (cursor);
      }

      return NextResponse.json({
        totalCount,
        totalSize,
        typeCounts,
        typeSizes,
      });
    }

    // Regular listing — merge results from both prefixes
    const cursor = request.nextUrl.searchParams.get("cursor") || undefined;
    const limit = Number(request.nextUrl.searchParams.get("limit")) || 100;
    const prefix = request.nextUrl.searchParams.get("prefix") || undefined;

    // If a specific prefix is requested, use it; otherwise merge both
    const prefixes = prefix ? [prefix] : PREFIXES;
    const allBlobs: Array<{
      url: string;
      pathname: string;
      size: number;
      uploadedAt: string;
      contentType: string;
    }> = [];

    let nextCursor: string | undefined;
    let moreAvailable = false;

    for (const pfx of prefixes) {
      const result = await list({ prefix: pfx, limit, cursor });
      for (const blob of result.blobs) {
        allBlobs.push({
          url: blob.url,
          pathname: blob.pathname,
          size: blob.size,
          uploadedAt: blob.uploadedAt as unknown as string,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          contentType: (blob as any).contentType || guessContentType(blob.pathname),
        });
      }
      if (result.hasMore) {
        nextCursor = result.cursor;
        moreAvailable = true;
      }
    }

    // Deduplicate by filename (same file may exist under both prefixes)
    const seen = new Set<string>();
    const deduped = allBlobs.filter((b) => {
      const name = b.pathname.split("/").pop() || b.pathname;
      if (seen.has(name)) return false;
      seen.add(name);
      return true;
    });

    return NextResponse.json({
      blobs: deduped,
      cursor: nextCursor,
      hasMore: moreAvailable,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to list images";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * POST /api/images - Upload a new image
 * Expects multipart form data with a "file" field
 */
export async function POST(request: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/webp",
      "image/svg+xml",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: PNG, JPEG, GIF, WebP, SVG" },
        { status: 400 }
      );
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    // Sanitize filename
    const safeName = file.name
      .replace(/[^a-zA-Z0-9._-]/g, "_")
      .toLowerCase();

    const blob = await put(`images/${safeName}`, file, {
      access: "public",
      contentType: file.type,
    });

    return NextResponse.json({
      url: blob.url,
      pathname: blob.pathname,
      size: file.size,
      contentType: file.type,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to upload image";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * DELETE /api/images - Delete an image by URL
 * Expects JSON body with { url: "..." }
 */
export async function DELETE(request: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    await del(url);
    return NextResponse.json({ deleted: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete image";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
