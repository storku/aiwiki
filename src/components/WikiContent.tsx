import { Suspense } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import WikiContentEnhancer from "./WikiContentEnhancer";

interface WikiContentProps {
  content: string;
  contentHtml?: string | null;
}

export default function WikiContent({ content, contentHtml }: WikiContentProps) {
  if (contentHtml) {
    return (
      <>
        <div
          data-wiki-content
          className="wiki-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <WikiContentEnhancer processDomContent />
      </>
    );
  }

  return (
    <>
      <div data-wiki-content className="wiki-content">
        <Suspense
          fallback={
            <div className="space-y-4">
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-3/4" />
              <div className="skeleton h-4 w-5/6" />
              <div className="skeleton h-4 w-2/3" />
            </div>
          }
        >
          <MarkdownRenderer content={content} />
        </Suspense>
      </div>
      <WikiContentEnhancer />
    </>
  );
}
