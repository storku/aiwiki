import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { canManageAdmin } from "@/lib/auth";

/**
 * GET /api/admin/deletions - List deletion alerts
 * ?dismissed=true/false  — filter by dismissed status (default: false)
 * ?limit=N               — number of alerts (default: 50)
 * ?offset=N              — pagination offset (default: 0)
 */
export async function GET(request: NextRequest) {
  const authed = await canManageAdmin();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const dismissed = searchParams.get("dismissed") === "true";
  const limit = Math.min(Number(searchParams.get("limit")) || 50, 200);
  const offset = Number(searchParams.get("offset")) || 0;

  const alerts = await sql`
    SELECT id, page_id, page_slug, page_title, deleted_content,
           old_word_count, new_word_count, words_deleted,
           edit_summary, dismissed, created_at
    FROM deletion_alerts
    WHERE dismissed = ${dismissed}
    ORDER BY created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `;

  const countResult = await sql`
    SELECT COUNT(*)::int AS total FROM deletion_alerts WHERE dismissed = ${dismissed}
  `;

  return NextResponse.json({
    alerts,
    total: countResult[0].total,
    limit,
    offset,
  });
}

/**
 * PATCH /api/admin/deletions - Dismiss or restore an alert
 * Body: { id: number, dismissed: boolean }
 */
export async function PATCH(request: NextRequest) {
  const authed = await canManageAdmin();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, dismissed } = await request.json();

  if (!id || typeof dismissed !== "boolean") {
    return NextResponse.json(
      { error: "Required: id (number), dismissed (boolean)" },
      { status: 400 }
    );
  }

  await sql`
    UPDATE deletion_alerts SET dismissed = ${dismissed} WHERE id = ${id}
  `;

  return NextResponse.json({ success: true });
}
