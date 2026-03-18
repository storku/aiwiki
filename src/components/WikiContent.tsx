import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import WikiLink from "./WikiLink";

interface WikiContentProps {
  content: string;
}

const components: Components = {
  a: ({ href, children, ...props }) => {
    // Internal wiki links with hover preview
    if (href && href.startsWith("/wiki/")) {
      return (
        <WikiLink href={href} {...props}>
          {children}
        </WikiLink>
      );
    }
    // External links open in a new tab
    if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return <a href={href} {...props}>{children}</a>;
  },
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;
    return (
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={450}
        className="rounded-xl border border-border my-5"
        style={{ width: "100%", height: "auto" }}
        loading="lazy"
        unoptimized={src.startsWith("http")}
      />
    );
  },
};

export default function WikiContent({ content }: WikiContentProps) {
  // Clean up common MediaWiki artifacts
  let cleaned = content;

  // Fix broken image refs that point to old wiki
  cleaned = cleaned.replace(
    /!\[([^\]]*)\]\(\/images\//g,
    "![$1](https://aiwiki.ai/images/"
  );

  // Remove red link edit URLs, keeping the text
  cleaned = cleaned.replace(
    /\[([^\]]+)\]\(\/index\.php\?title=[^)]+&action=edit&redlink=1\)/g,
    "$1"
  );

  // Clean up citation references like [&#91;1&#93;](#cite_note-...)
  cleaned = cleaned.replace(
    /\[&#91;(\d+)&#93;\]\(#cite_note[^)]*\)/g,
    '<sup class="text-xs text-muted">[$1]</sup>'
  );

  // Clean up HTML entities that didn't get decoded
  cleaned = cleaned.replace(/&#160;/g, " ");
  cleaned = cleaned.replace(/&#91;/g, "[");
  cleaned = cleaned.replace(/&#93;/g, "]");

  return (
    <div className="wiki-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeHighlight, { ignoreMissing: true }]]}
        components={components}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  );
}
