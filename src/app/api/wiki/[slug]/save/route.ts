import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";
import { canEditWiki } from "@/lib/auth";
import { computeArticleDerivedFields } from "@/lib/article-utils";
import { generateExcerpt } from "@/lib/content";
import { dedupeCategoryNames } from "@/lib/categories";

const MAX_TITLE_LENGTH = 180;
const MAX_SUMMARY_LENGTH = 500;
const MAX_CATEGORIES = 30;
const MAX_CATEGORY_LENGTH = 80;

/**
 * Extract text present in oldText but missing from newText.
 * Splits into sentences, finds those removed in the new version.
 */
function extractDeletedText(oldText: string, newText: string): string {
  // Split into sentences (rough heuristic)
  const oldSentences = oldText.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 10);
  const newLower = newText.toLowerCase();

  const deleted = oldSentences.filter((sentence) => {
    const normalized = sentence.trim().toLowerCase();
    return !newLower.includes(normalized);
  });

  if (deleted.length === 0) return oldText;
  return deleted.join(" ");
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  // 1. Auth check
  const authed = await canEditWiki();
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

  if (
    typeof title !== "string" ||
    !contentTiptap ||
    typeof contentTiptap !== "object" ||
    Array.isArray(contentTiptap) ||
    !Array.isArray(categories) ||
    !Number.isInteger(expectedVersion)
  ) {
    return NextResponse.json(
      { error: "Missing or invalid fields: title, contentTiptap, categories, expectedVersion" },
      { status: 400 }
    );
  }

  const normalizedTitle = title.trim();
  const editSummary = typeof summary === "string" ? summary.trim() : "";
  const normalizedCategories = Array.from(
    dedupeCategoryNames(
      categories
        .filter((category): category is string => typeof category === "string")
        .map((category) => category.trim())
        .filter(Boolean)
    )
  );

  if (!normalizedTitle || normalizedTitle.length > MAX_TITLE_LENGTH) {
    return NextResponse.json(
      { error: `Title must be between 1 and ${MAX_TITLE_LENGTH} characters.` },
      { status: 400 }
    );
  }

  if (editSummary.length > MAX_SUMMARY_LENGTH) {
    return NextResponse.json(
      { error: `Edit summary must be ${MAX_SUMMARY_LENGTH} characters or fewer.` },
      { status: 400 }
    );
  }

  if (!editSummary) {
    return NextResponse.json(
      { error: "Please describe what changed before saving." },
      { status: 400 }
    );
  }

  if (
    normalizedCategories.length > MAX_CATEGORIES ||
    normalizedCategories.some((category) => category.length > MAX_CATEGORY_LENGTH)
  ) {
    return NextResponse.json(
      {
        error: `Use at most ${MAX_CATEGORIES} categories, each ${MAX_CATEGORY_LENGTH} characters or fewer.`,
      },
      { status: 400 }
    );
  }

  try {
    // 3. Fetch current page and check optimistic concurrency
    const rows = await sql`
      SELECT id, version, content, content_tiptap, content_plain, word_count, title
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

    const {
      contentHtml,
      contentPlain,
      wordCount,
      readingTimeMinutes,
      outgoingLinkSlugs,
    } = computeArticleDerivedFields(contentTiptap);

    const excerpt = generateExcerpt(contentPlain);
    const newVersion = oldVersion + 1;
    const oldWordCount = (current.word_count as number) || 0;
    const wordsDeleted = oldWordCount - wordCount;
    const deletionRatio = oldWordCount > 0 ? wordsDeleted / oldWordCount : 0;
    const shouldCreateDeletionAlert =
      wordsDeleted > 0 &&
      oldWordCount >= 100 &&
      deletionRatio >= 0.1;
    const oldPlain = (current.content_plain as string) || "";
    const deletedContent = shouldCreateDeletionAlert
      ? extractDeletedText(oldPlain, contentPlain).slice(0, 50000)
      : "";
    const outgoingLinkArray = Array.from(new Set(outgoingLinkSlugs));

    const saveRows = await sql`
      WITH current AS (
        SELECT id, version, content, content_tiptap
        FROM pages
        WHERE slug = ${slug} AND version = ${expectedVersion}
      ),
      revision AS (
        INSERT INTO page_revisions (page_id, version, content, content_tiptap, summary, ai_assisted)
        SELECT id, version, content, content_tiptap, ${editSummary}, false
        FROM current
        ON CONFLICT (page_id, version) DO NOTHING
        RETURNING 1
      ),
      updated AS (
        UPDATE pages p SET
          title = ${normalizedTitle},
          content = ${contentPlain},
          content_tiptap = ${JSON.stringify(contentTiptap)}::jsonb,
          content_html = ${contentHtml},
          content_plain = ${contentPlain},
          excerpt = ${excerpt},
          reading_time = ${readingTimeMinutes},
          word_count = ${wordCount},
          version = ${newVersion},
          updated_at = now()
        FROM current
        WHERE p.id = current.id
        RETURNING p.id, p.version
      ),
      alert AS (
        INSERT INTO deletion_alerts (
          page_id,
          page_slug,
          page_title,
          deleted_content,
          old_word_count,
          new_word_count,
          words_deleted,
          edit_summary
        )
        SELECT
          updated.id,
          ${slug},
          ${normalizedTitle},
          ${deletedContent},
          ${oldWordCount},
          ${wordCount},
          ${wordsDeleted},
          ${editSummary}
        FROM updated
        WHERE ${shouldCreateDeletionAlert}
        RETURNING 1
      ),
      deleted_links AS (
        DELETE FROM page_links
        WHERE source_page_id IN (SELECT id FROM updated)
        RETURNING 1
      ),
      links_ready AS (
        SELECT id
        FROM updated
        WHERE (SELECT COUNT(*) FROM deleted_links) >= 0
      ),
      inserted_links AS (
        INSERT INTO page_links (source_page_id, target_slug)
        SELECT links_ready.id, links.link_slug
        FROM links_ready
        CROSS JOIN unnest(${outgoingLinkArray}::text[]) AS links(link_slug)
        ON CONFLICT DO NOTHING
        RETURNING 1
      ),
      deleted_categories AS (
        DELETE FROM page_categories
        WHERE page_id IN (SELECT id FROM updated)
        RETURNING 1
      ),
      categories_ready AS (
        SELECT id
        FROM updated
        WHERE (SELECT COUNT(*) FROM deleted_categories) >= 0
      ),
      input_categories AS (
        SELECT DISTINCT NULLIF(trim(name), '') AS name
        FROM unnest(${normalizedCategories}::text[]) AS input(name)
        WHERE NULLIF(trim(name), '') IS NOT NULL
      ),
      upserted_categories AS (
        INSERT INTO categories (name)
        SELECT name
        FROM input_categories
        ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name
        RETURNING id
      ),
      inserted_categories AS (
        INSERT INTO page_categories (page_id, category_id)
        SELECT categories_ready.id, upserted_categories.id
        FROM categories_ready
        CROSS JOIN upserted_categories
        ON CONFLICT DO NOTHING
        RETURNING 1
      )
      SELECT id, version FROM updated
    `;

    if (saveRows.length === 0) {
      const latest = await sql`SELECT version FROM pages WHERE id = ${pageId}`;
      const currentVersion = (latest[0]?.version as number | undefined) ?? oldVersion;
      return NextResponse.json(
        {
          error: "Version conflict",
          message: `Expected version ${expectedVersion} but current is ${currentVersion}. Reload and try again.`,
          currentVersion,
        },
        { status: 409 }
      );
    }

    // 11. Revalidate paths (page, OG image, listings, categories)
    revalidatePath(`/wiki/${slug}`);
    revalidatePath(`/wiki/${slug}/opengraph-image`);
    revalidatePath("/wiki");
    revalidatePath("/");
    revalidatePath("/categories");
    for (const cat of normalizedCategories) {
      revalidatePath(`/categories/${encodeURIComponent(cat)}`);
    }

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
