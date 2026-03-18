# AI Wiki (aiwiki.ai)

## About

AI Wiki is a comprehensive encyclopedia of artificial intelligence with 2,000+ articles covering AI concepts, models, tools, and applications. The site is built with Next.js and hosted on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Content:** Markdown files with gray-matter frontmatter (in `content/`)
- **Search:** Fuse.js (client-side fuzzy search)
- **Markdown rendering:** react-markdown + remark-gfm + rehype-raw + rehype-slug
- **Hosting:** Vercel

## Project Structure

- `content/` — 2,000+ markdown article files + `_index.json` master index
- `src/app/` — Next.js App Router pages (home, wiki/[slug], categories, search)
- `src/components/` — Header, Footer, WikiContent, TableOfContents, SearchResults, ThemeToggle
- `src/lib/content.ts` — Content loading utilities (getAllPages, getPageBySlug, etc.)
- `scripts/fetch-wiki-content.mjs` — Script to fetch content from the old MediaWiki API

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
