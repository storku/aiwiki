import { notFound, redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { canEditWiki } from "@/lib/auth";
import WikiEditor from "@/components/WikiEditor";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Editing: ${slug.replace(/-/g, " ")}`,
    robots: { index: false, follow: false },
  };
}

export default async function EditWikiPage({ params }: Props) {
  const authed = await canEditWiki();
  const { slug } = await params;

  if (!authed) {
    redirect(`/login?redirect=/wiki/${slug}/edit`);
  }

  const rows = await sql`
    SELECT p.id, p.slug, p.title, p.content_tiptap, p.version,
           COALESCE(array_agg(c.name ORDER BY c.name) FILTER (WHERE c.name IS NOT NULL), '{}') as categories
    FROM pages p
    LEFT JOIN page_categories pc ON pc.page_id = p.id
    LEFT JOIN categories c ON c.id = pc.category_id
    WHERE p.slug = ${slug}
    GROUP BY p.id
  `;

  if (rows.length === 0) {
    notFound();
  }

  const page = rows[0];

  return (
    <WikiEditor
      slug={page.slug as string}
      title={page.title as string}
      contentTiptap={page.content_tiptap}
      categories={(page.categories as string[]) ?? []}
      version={(page.version as number) ?? 1}
    />
  );
}
