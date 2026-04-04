import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";
import { computeArticleDerivedFields } from "@/lib/article-utils";
import { generateExcerpt } from "@/lib/content";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // 1. Auth check
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  let body: {
    title: string;
    contentTiptap: object;
    categories: string[];
    summary: string;
    expectedVersion: number;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { title, contentTiptap, categories, summary, expectedVersion } = body;

  if (!title || !contentTiptap || !Array.isArray(categories)) {
    return NextResponse.json(
      { error: "Missing required fields: title, contentTiptap, categories" },
      { status: 400 }
    );
  }

  try {
    // 3. Fetch current page and check optimistic concurrency
    const rows = await sql`
      SELECT id, version, content, content_tiptap
      FROM pages
      WHERE slug = ${slug}
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    const current = rows[0];
    const pageId = current.id;
    const oldVersion = current.version as number;

    if (oldVersion !== expectedVersion) {
      return NextResponse.json(
        {
          error: "Version conflict",
          message: `Expected version ${expectedVersion} but current is ${oldVersion}. Reload and try again.`,
          currentVersion: oldVersion,
        },
        { status: 409 }
      );
    }

    // 4. Save old version to page_revisions
    const oldContent = current.content;
    const oldContentTiptap = current.content_tiptap;

    await sql`
      INSERT INTO page_revisions (page_id, version, content, content_tiptap, summary, ai_assisted)
      VALUES (
        ${pageId},
        ${oldVersion},
        ${oldContent},
        ${JSON.stringify(oldContentTiptap)}::jsonb,
        ${summary},
        false
      )
      ON CONFLICT (page_id, version) DO NOTHING
    `;

    // 5. Compute derived fields
    const {
      contentHtml,
      contentPlain,
      wordCount,
      readingTimeMinutes,
      outgoingLinkSlugs,
    } = computeArticleDerivedFields(contentTiptap);

    // 6-7. Generate excerpt from plain text
    const excerpt = generateExcerpt(contentPlain);

    // 8. Update the page
    const newVersion = oldVersion + 1;

    await sql`
      UPDATE pages SET
        title = ${title},
        content = ${contentPlain},
        content_tiptap = ${JSON.stringify(contentTiptap)}::jsonb,
        content_html = ${contentHtml},
        content_plain = ${contentPlain},
        excerpt = ${excerpt},
        reading_time = ${readingTimeMinutes},
        word_count = ${wordCount},
        version = ${newVersion},
        updated_at = now()
      WHERE id = ${pageId}
    `;

    // 9. Update page_links (batch: 1 DELETE + 1 INSERT instead of N+1)
    await sql`
      DELETE FROM page_links WHERE source_page_id = ${pageId}
    `;

    if (outgoingLinkSlugs.length > 0) {
      const slugArray = Array.from(outgoingLinkSlugs);
      await sql`
        INSERT INTO page_links (source_page_id, target_slug)
        SELECT ${pageId}, unnest(${slugArray}::text[])
        ON CONFLICT DO NOTHING
      `;
    }

    // 10. Update categories (batch: 1 DELETE + 1 UPSERT + 1 INSERT instead of N*2)
    await sql`
      DELETE FROM page_categories WHERE page_id = ${pageId}
    `;

    if (categories.length > 0) {
      const catRows = await sql`
        INSERT INTO categories (name)
        SELECT unnest(${categories}::text[])
        ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
        RETURNING id
      `;

      if (catRows.length > 0) {
        const catIds = catRows.map((r) => r.id as number);
        await sql`
          INSERT INTO page_categories (page_id, category_id)
          SELECT ${pageId}, unnest(${catIds}::int[])
          ON CONFLICT DO NOTHING
        `;
      }
    }

    // 11. Revalidate paths
    revalidatePath(`/wiki/${slug}`);
    revalidatePath("/wiki");
    revalidatePath("/");

    // 12. Return success
    return NextResponse.json({ success: true, version: newVersion });
  } catch (error) {
    console.error("Failed to save wiki article:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
