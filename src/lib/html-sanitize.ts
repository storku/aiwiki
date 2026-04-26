import sanitizeHtml from "sanitize-html";

const articleAllowedTags = [
  ...sanitizeHtml.defaults.allowedTags,
  "article",
  "section",
  "figure",
  "figcaption",
  "img",
  "picture",
  "source",
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "iframe",
  "mark",
  "sup",
  "sub",
];

const articleAllowedAttributes: sanitizeHtml.IOptions["allowedAttributes"] = {
  ...sanitizeHtml.defaults.allowedAttributes,
  "*": ["id", "class", "title", "aria-label", "aria-describedby"],
  a: ["href", "name", "target", "rel", "class", "id", "title"],
  img: [
    "src",
    "srcset",
    "sizes",
    "alt",
    "title",
    "width",
    "height",
    "loading",
    "decoding",
    "fetchpriority",
    "class",
  ],
  source: ["src", "srcset", "sizes", "type"],
  iframe: [
    "src",
    "title",
    "width",
    "height",
    "allow",
    "allowfullscreen",
    "loading",
    "referrerpolicy",
  ],
  th: ["scope", "colspan", "rowspan", "class", "id"],
  td: ["colspan", "rowspan", "class", "id"],
};

export function sanitizeArticleHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: articleAllowedTags,
    allowedAttributes: articleAllowedAttributes,
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: {
      img: ["http", "https", "data"],
      source: ["http", "https"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
    allowProtocolRelative: false,
  });
}

export function sanitizeSearchHeadline(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ["mark"],
    allowedAttributes: {},
    disallowedTagsMode: "discard",
  });
}
