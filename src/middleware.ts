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

// MediaWiki Special: page mappings
const SPECIAL_PAGE_REDIRECTS: Record<string, string> = {
  search: "/search",
  allpages: "/wiki",
  recentchanges: "/",
  random: "/wiki",
  categories: "/categories",
  specialpages: "/",
  statistics: "/",
  whatlinkshere: "/",
  contributions: "/",
  log: "/",
  upload: "/",
  version: "/",
  prefixindex: "/wiki",
};

// MediaWiki query params that should be stripped (they have no meaning on the new site)
const MEDIAWIKI_PARAMS = [
  "action",
  "oldid",
  "diff",
  "curid",
  "redirect",
  "printable",
  "mobileaction",
  "variant",
  "veaction",
  "useskin",
  "safemode",
];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // ── /w/index.php?title=Page_Name (old MediaWiki short URLs) ──
  if (pathname === "/w/index.php" || pathname === "/index.php") {
    const title = searchParams.get("title");
    if (title) {
      return redirectMediaWikiTitle(title, request);
    }
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // ── /api.php (old MediaWiki API, no equivalent on new site) ──
  if (pathname === "/api.php" || pathname === "/w/api.php") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // ── /wiki/* paths ──
  if (!pathname.startsWith("/wiki/")) return;

  const rest = pathname.slice("/wiki/".length);
  if (!rest) return;

  // Skip sub-paths that belong to the new site (history, revisions, etc.)
  if (rest.includes("/")) return;

  const decoded = decodeURIComponent(rest);

  // Handle MediaWiki namespace prefixes (Category:, Special:, File:, Talk:, User:, etc.)
  const namespaceRedirect = handleMediaWikiNamespace(decoded, request);
  if (namespaceRedirect) return namespaceRedirect;

  // Normal slug normalization (handles mixed case, spaces, special chars)
  const normalized = slugify(decoded);

  // Check if any MediaWiki query params are present and should be stripped
  const hasMediaWikiParams = MEDIAWIKI_PARAMS.some((p) => searchParams.has(p));

  if (normalized !== rest || hasMediaWikiParams) {
    return NextResponse.redirect(
      new URL(`/wiki/${normalized}`, request.url),
      301
    );
  }
}

/**
 * Redirect a raw MediaWiki title string (from ?title= param) to the correct new URL.
 */
function redirectMediaWikiTitle(
  title: string,
  request: NextRequest
): NextResponse {
  const namespaceRedirect = handleMediaWikiNamespace(title, request);
  if (namespaceRedirect) return namespaceRedirect;

  const slug = slugify(title);
  return NextResponse.redirect(new URL(`/wiki/${slug}`, request.url), 301);
}

/**
 * Handle MediaWiki namespace prefixes like Category:, Special:, File:, Talk:, User:.
 * Returns a redirect response if the title matches a namespace, or null otherwise.
 */
function handleMediaWikiNamespace(
  decoded: string,
  request: NextRequest
): NextResponse | null {
  const lowerDecoded = decoded.toLowerCase();

  // Category:Name → /categories/name
  if (lowerDecoded.startsWith("category:")) {
    const catName = slugify(decoded.slice("category:".length));
    return NextResponse.redirect(
      new URL(`/categories/${catName}`, request.url),
      301
    );
  }

  // Special:PageName → mapped destination
  if (lowerDecoded.startsWith("special:")) {
    const specialPage = decoded.slice("special:".length);
    const specialSlug = slugify(specialPage);

    // Special:Search?search=query → /search?q=query
    if (specialSlug === "search") {
      const query =
        new URL(request.url).searchParams.get("search") ||
        new URL(request.url).searchParams.get("q") ||
        "";
      const dest = query ? `/search?q=${encodeURIComponent(query)}` : "/search";
      return NextResponse.redirect(new URL(dest, request.url), 301);
    }

    const destination = SPECIAL_PAGE_REDIRECTS[specialSlug];
    if (destination) {
      return NextResponse.redirect(new URL(destination, request.url), 301);
    }

    // Unknown Special: page, redirect to home
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // File: and Image: namespaces (MediaWiki file pages, no equivalent)
  if (lowerDecoded.startsWith("file:") || lowerDecoded.startsWith("image:")) {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  // Talk:, User:, User_talk:, Template:, Help:, MediaWiki: namespaces
  const discardedNamespaces = [
    "talk:",
    "user:",
    "user_talk:",
    "template:",
    "template_talk:",
    "help:",
    "help_talk:",
    "mediawiki:",
    "mediawiki_talk:",
    "module:",
    "wikipedia:",
  ];
  for (const ns of discardedNamespaces) {
    if (lowerDecoded.startsWith(ns)) {
      // Try to redirect to the base article (e.g., Talk:GPT-4 → /wiki/gpt-4)
      const articlePart = decoded.slice(ns.length);
      if (articlePart) {
        const slug = slugify(articlePart);
        return NextResponse.redirect(
          new URL(`/wiki/${slug}`, request.url),
          301
        );
      }
      return NextResponse.redirect(new URL("/", request.url), 301);
    }
  }

  return null;
}

export const config = {
  matcher: ["/wiki/:slug+", "/w/:path*", "/index.php", "/api.php"],
};
