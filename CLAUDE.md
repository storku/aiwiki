# AI Wiki (aiwiki.ai)

## About

AI Wiki is a comprehensive encyclopedia of artificial intelligence with 2,000+ articles covering AI concepts, models, tools, and applications. The site is built with Next.js and hosted on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Content:** Stored in a Neon (PostgreSQL) database. Wiki pages are NOT saved locally; you must fetch content from the Neon database.
- **Search:** Fuse.js (client-side fuzzy search)
- **Markdown rendering:** react-markdown + remark-gfm + rehype-raw + rehype-slug
- **Hosting:** Vercel (team: `ai-team-fad7938b` / "ai team", user: `coolsloth`)

## Project Structure

- **Neon database** — 2,000+ wiki articles stored in PostgreSQL (not saved locally)
- `src/app/` — Next.js App Router pages (home, wiki/[slug], categories, search)
- `src/components/` — Header, Footer, WikiContent, TableOfContents, SearchResults, ThemeToggle
- `src/lib/content.ts` — Content loading utilities (getAllPages, getPageBySlug, etc.)
- `scripts/fetch-wiki-content.mjs` — Script to fetch content from the old MediaWiki API

## Images

All wiki images are stored in **Vercel Blob Storage** (not in the git repo). They are served via a Next.js rewrite that proxies `aiwiki.ai/images/*` to the blob store.

- **Never bulk-delete images from Vercel Blob** without first checking which articles reference them. Images may be shared across multiple articles. Always cross-reference the database (`content` and `content_html` fields) before deleting any blob.
- **Company/product logos** (e.g., `anthropic_logo1.png`, `openai_logo1.png`, `deepseek_logo1.png`) are used in article infoboxes. Do not delete these when cleaning up unrelated images.
- When deleting pages, do not assume their images are safe to delete. Other articles may reference the same images (e.g., the GPT Store article uses 50px icons from individual GPT pages).
- The blob store has two prefixes: `wiki/images/` and `images/`. The rewrite rule points to `wiki/images/`. Both prefixes may contain copies of the same file.
- If images are accidentally deleted, originals can be recovered from the EC2 server at `/var/www/html/mediawiki/images/`.

## Old Wiki (MediaWiki)

The original site was built with MediaWiki and hosted on AWS EC2.

**SSH access:**

```
ssh -i "AWS1.pem" ubuntu@ec2-3-208-57-25.compute-1.amazonaws.com
```

The PEM key is located at `/Users/chenyudai/Documents/aws_keys/AWS1.pem`.

**MediaWiki API:** `https://aiwiki.ai/api.php`

To re-fetch content from the old wiki, run:

```
node scripts/fetch-wiki-content.mjs
```

This fetches all pages via the MediaWiki API with rate limiting (200ms delay) and saves them as markdown files in `content/`.

## Workflow: Multiple Wiki Articles

When researching and writing multiple different wiki article pages/topics, create **1 agent per page/topic**. Each agent should independently research and write its assigned article. This allows all articles to be worked on in parallel rather than sequentially.

## Research & Writing Quality

- When **researching** wiki article topics, be as thorough as possible. Use `ultrathink` to deeply analyze sources, cross-reference facts, and identify all relevant subtopics before writing.
- When **writing** wiki articles, be as thorough as possible. Use `ultrathink` to plan article structure, ensure comprehensive coverage, and produce detailed, high-quality content.

## Wiki Content Guidelines

When creating or improving wiki pages:

- Make pages as **long and detailed as possible**.
- Use **web search** to gather accurate, up-to-date information.
- If web pages cannot be opened directly, use **Playwright** to fetch their content (install Playwright if not already installed).
- Follow the writing style in `humanizer.md` to ensure content reads naturally and sounds human-written.
- **Never use em dashes** (`—`) in wiki article text. This is an absolute rule, not a suggestion. Em dashes are a strong signal of AI-generated writing. Replace every em dash based on context:
  - **Parenthetical aside:** use commas or parentheses instead.
  - **Abrupt break:** use a period and start a new sentence.
  - **Introducing a list or explanation:** use a colon.
  - **Connecting related clauses:** use a semicolon.
- When reading or reviewing wiki articles, always **query the database for the latest version**. Do not rely on cached data, old script outputs, or previously read content. The database is the single source of truth and articles may have been updated since last read.
- All wiki content must be **100% accurate and factual**. Never hallucinate or fabricate information. If something cannot be verified, omit it.
- **Always use `scripts/upsert-article.mjs` to create or update wiki articles.** This script is mandatory for every article write because it:
  1. Saves the previous version to `page_revisions` (revision history).
  2. Increments the version number.
  3. Triggers on-demand revalidation so the live site reflects the change immediately (pages are cached for 24 hours via ISR, so without revalidation visitors would see stale content).

  Run it with: `node --env-file=.env.local scripts/upsert-article.mjs <json-file>`

  Never write directly to the `pages` table with raw SQL. Always go through this script.
- **When updating existing wiki articles, enhance rather than replace.** Always read and understand the full existing article content before making changes. Merge new information into the existing structure, preserving the original text, tables, wikilinks, and formatting. Do not overwrite an entire article with new content unless the existing content is factually wrong. Specific rules:
  - **Read first:** Query the database for the article's current TipTap JSON content and plain text before writing any update script.
  - **Preserve existing content:** Keep all existing sections, tables, and paragraphs that are accurate. Add new sections, rows, or paragraphs alongside them.
  - **Insert, don't replace:** When adding new data (e.g., new recipes, new Pokemon, new habitats), insert the new content into the appropriate existing section or add new sections before the Tips/closing section.
  - **Fix inaccuracies surgically:** If specific data is wrong (e.g., incorrect ingredient names, wrong Pokemon), fix only the incorrect parts. Do not rewrite surrounding accurate content.
  - **Only fully replace when necessary:** A complete article rewrite is acceptable only when the existing content is fundamentally wrong, outdated beyond repair, or the article structure needs a total reorganization that cannot be achieved incrementally.
- Insert **internal links** (wikilinks) to relevant terms for that specific game (linking to the wiki page for that term). Add the internal links even if the wiki page for that term does not exist yet (broken link is acceptable). Follow these rules:
  - **One link per term per article (body text)** — in paragraphs, lists, and headings, each unique term should be linked at most once. Do not repeat the same wikilink in every section.
  - Link the **first meaningful occurrence** of the term in body text. Subsequent mentions of the same term in body text should remain plain text.
  - **Longer matches take priority** — prefer linking "Green Pasture Ranch" over just "Ranch". Sort term patterns by length descending before matching.
  - **Tables are exempt from the one-link-per-article rule** — terms inside table cells **should** be linked even if they are already linked elsewhere in the article body. Tables are read row-by-row, so readers may not see the earlier link. Each table row gets its own dedup set: link each term at most once per row, but the same term can be linked again in other rows.
  - Missing wikilinks (pointing to non-existent articles) are automatically rendered in red on the article page via server-side checking.
- Use **tables** for structured data instead of bullet lists. When content follows a consistent "Label : Description" pattern (items, skills, stats, characters, locations, etc.), convert it to a table for better readability.
- Include **citations and references** for claims and facts. List all references in a **References** section at the bottom of each wiki article.
