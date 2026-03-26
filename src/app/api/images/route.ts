import { NextRequest, NextResponse } from "next/server";
import { list, put, del } from "@vercel/blob";

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

/**
 * GET /api/images - List all uploaded images
 * Supports pagination via ?cursor=xxx
 */
export async function GET(request: NextRequest) {
  try {
    const cursor = request.nextUrl.searchParams.get("cursor") || undefined;
    const limit = Number(request.nextUrl.searchParams.get("limit")) || 100;
    const prefix = request.nextUrl.searchParams.get("prefix") || "images/";

    const result = await list({
      prefix,
      limit,
      cursor,
    });

    return NextResponse.json({
      blobs: result.blobs.map((blob) => ({
        url: blob.url,
        pathname: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        contentType: (blob as any).contentType || guessContentType(blob.pathname),
      })),
      cursor: result.cursor,
      hasMore: result.hasMore,
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
