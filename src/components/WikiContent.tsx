import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";

interface WikiContentProps {
  content: string;
}

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
        rehypePlugins={[rehypeRaw, rehypeSlug]}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  );
}
