import { NextRequest, NextResponse } from "next/server";

function slugify(title: string): string {
  return title
    .replace(/ /g, "_")
    .replace(
      /[^a-zA-Z0-9_.\-\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff]/g,
      "_"
    )
    .replace(/_+/g, "_")
    .replace(/^[_.]|[_.]$/g, "")
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

function tokenEquals(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function siteUrl(pathWithSearch: string, request: NextRequest): URL {
  const url = request.nextUrl.clone();
  const queryStart = pathWithSearch.indexOf("?");
  const pathname = queryStart === -1 ? pathWithSearch : pathWithSearch.slice(0, queryStart);
  const search = queryStart === -1 ? "" : pathWithSearch.slice(queryStart + 1);
  url.pathname = pathname;
  url.search = search ? `?${search}` : "";

  if (url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "::1") {
    url.protocol = "http:";
  }

  return url;
}

function hasEditorOrSessionCookie(request: NextRequest): boolean {
  const editorToken = request.cookies.get("aiwiki_editor_token")?.value;
  if (
    editorToken &&
    process.env.EDITOR_SECRET &&
    tokenEquals(editorToken, process.env.EDITOR_SECRET)
  ) {
    return true;
  }
  return Boolean(request.cookies.get("aiwiki_session")?.value);
}

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // ── /w/index.php?title=Page_Name (old MediaWiki short URLs) ──
  if (pathname === "/w/index.php" || pathname === "/index.php") {
    const title = searchParams.get("title");
    if (title) {
      return redirectMediaWikiTitle(title, request);
    }
    return NextResponse.redirect(siteUrl("/", request), 301);
  }

  // ── /api.php (old MediaWiki API, no equivalent on new site) ──
  if (pathname === "/api.php" || pathname === "/w/api.php") {
    return NextResponse.redirect(siteUrl("/", request), 301);
  }

  // ── /admin/* paths — require editor auth ──
  if (pathname.startsWith("/admin")) {
    if (!hasEditorOrSessionCookie(request)) {
      const loginUrl = siteUrl("/login", request);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return;
  }

  // ── /wiki/* paths ──
  if (!pathname.startsWith("/wiki/")) return;

  const rest = pathname.slice("/wiki/".length);
  if (!rest) return;

  // Protect /wiki/*/edit routes — require editor cookie
  if (pathname.match(/^\/wiki\/[^/]+\/edit$/)) {
    if (!hasEditorOrSessionCookie(request)) {
      const loginUrl = siteUrl("/login", request);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return;
  }

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
      siteUrl(`/wiki/${normalized}`, request),
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
  return NextResponse.redirect(siteUrl(`/wiki/${slug}`, request), 301);
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
      siteUrl(`/categories/${catName}`, request),
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
      return NextResponse.redirect(siteUrl(dest, request), 301);
    }

    const destination = SPECIAL_PAGE_REDIRECTS[specialSlug];
    if (destination) {
      return NextResponse.redirect(siteUrl(destination, request), 301);
    }

    // Unknown Special: page, redirect to home
    return NextResponse.redirect(siteUrl("/", request), 301);
  }

  // File: and Image: namespaces (MediaWiki file pages, no equivalent)
  if (lowerDecoded.startsWith("file:") || lowerDecoded.startsWith("image:")) {
    return NextResponse.redirect(siteUrl("/", request), 301);
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
          siteUrl(`/wiki/${slug}`, request),
          301
        );
      }
      return NextResponse.redirect(siteUrl("/", request), 301);
    }
  }

  return null;
}

export const config = {
  matcher: ["/wiki/:slug+", "/w/:path*", "/index.php", "/api.php", "/admin/:path*"],
};
