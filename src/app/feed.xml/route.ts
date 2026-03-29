import { sql } from "@/lib/db";

export const revalidate = 86400;

export async function GET() {
  const rows = await sql`
    SELECT slug, title, excerpt, updated_at
    FROM pages
    ORDER BY updated_at DESC
    LIMIT 50
  `;

  const items = rows
    .map((r) => {
      const date = new Date(r.updated_at as string);
      return `    <item>
      <title><![CDATA[${r.title}]]></title>
      <link>https://aiwiki.ai/wiki/${r.slug}</link>
      <guid isPermaLink="true">https://aiwiki.ai/wiki/${r.slug}</guid>
      <description><![CDATA[${r.excerpt || ""}]]></description>
      <pubDate>${date.toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Wiki</title>
    <link>https://aiwiki.ai</link>
    <description>The free encyclopedia of artificial intelligence. 2,500+ articles on AI concepts, models, tools, and applications.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://aiwiki.ai/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
