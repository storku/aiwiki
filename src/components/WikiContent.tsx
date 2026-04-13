"use client";

import { useEffect, useRef, lazy, Suspense } from "react";

interface WikiContentProps {
  content: string;
  contentHtml?: string | null;
}

const MarkdownRenderer = lazy(() => import("./MarkdownRenderer"));

// ─── Pre-rendered HTML: client-side interactivity ────────────────────

function processContent(el: HTMLElement) {
  // Handle broken images - hide them gracefully
  const imgs = el.querySelectorAll("img");
  for (const img of imgs) {
    if (!img.dataset.errorHandled) {
      img.dataset.errorHandled = "1";
      img.addEventListener("error", () => {
        img.style.display = "none";
      });
      if (img.complete && img.naturalWidth === 0 && img.src) {
        img.style.display = "none";
      }
    }
  }

  // Auto-detect infobox: the first table in the article that has bold
  // label cells (e.g. **Manufacturer**) is treated as an infobox.
  const tables = el.querySelectorAll("table");
  let infoboxDetected = false;
  for (const table of tables) {
    if (table.classList.contains("infobox")) {
      infoboxDetected = true;
      continue;
    }
    // Detect infobox pattern: first table with <strong> inside <td> cells
    if (
      !infoboxDetected &&
      !table.parentElement?.classList.contains("table-wrapper") &&
      table.querySelectorAll("td > strong").length >= 3
    ) {
      table.classList.add("infobox");
      infoboxDetected = true;
      continue;
    }
    // Wrap non-infobox tables in a scrollable container for mobile
    if (table.parentElement?.classList.contains("table-wrapper")) continue;
    const wrapper = document.createElement("div");
    wrapper.className = "table-wrapper overflow-x-auto -mx-1 px-1";
    table.parentNode?.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  }
}

function useHtmlInteractivity(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Process any content already in the DOM
    processContent(el);

    // Watch for lazy-loaded content (e.g. React.lazy MarkdownRenderer)
    // so tables added after initial render still get wrapped
    const observer = new MutationObserver(() => {
      processContent(el);
    });
    observer.observe(el, { childList: true, subtree: true });

    // Handle heading anchor button clicks (copy link)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorBtn = target.closest(".heading-anchor") as HTMLButtonElement | null;
      if (anchorBtn) {
        e.preventDefault();
        const id = anchorBtn.dataset.headingId;
        if (id) {
          const url = `${window.location.origin}${window.location.pathname}#${id}`;
          navigator.clipboard.writeText(url).catch(() => {});
          // Brief visual feedback
          anchorBtn.style.opacity = "1";
          anchorBtn.style.color = "var(--color-primary)";
          setTimeout(() => {
            anchorBtn.style.opacity = "";
            anchorBtn.style.color = "";
          }, 1000);
        }
      }
    };

    el.addEventListener("click", handleClick);
    return () => {
      observer.disconnect();
      el.removeEventListener("click", handleClick);
    };
  }, [containerRef]);
}

// ─── Component ───────────────────────────────────────────────────────

export default function WikiContent({ content, contentHtml }: WikiContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useHtmlInteractivity(containerRef);

  // Pre-rendered HTML mode
  if (contentHtml) {
    return (
      <div
        ref={containerRef}
        className="wiki-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    );
  }

  // Markdown fallback (lazy-loaded to avoid bundling renderer when unused)
  return (
    <div ref={containerRef} className="wiki-content">
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
  );
}
