"use client";

import { useState } from "react";
import { parseHeadings, parseHeadingsFromHtml } from "@/lib/headings";

interface MobileTocProps {
  content: string;
  contentHtml?: string | null;
}

export default function MobileToc({ content, contentHtml }: MobileTocProps) {
  const [open, setOpen] = useState(false);
  const headings = contentHtml ? parseHeadingsFromHtml(contentHtml) : parseHeadings(content);

  if (headings.length < 3) return null;

  return (
    <div className="sticky top-16 z-20 xl:hidden mb-6 border border-border rounded-xl overflow-hidden bg-background shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex min-h-12 items-center justify-between w-full px-4 py-3 text-sm font-semibold text-foreground hover:bg-surface-hover transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          Article outline
          <span className="rounded-full bg-primary-light px-2 py-0.5 text-xs text-primary font-medium">
            {headings.length}
          </span>
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <nav className="max-h-[60vh] overflow-y-auto px-4 pb-3 border-t border-border animate-slide-in-down">
          <ul className="space-y-0.5 pt-2">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setOpen(false)}
                  className={`block min-h-10 rounded-lg py-2 text-sm text-muted hover:bg-surface hover:text-primary transition-colors ${
                    h.level === 2 ? "pl-0 font-medium" : h.level === 3 ? "pl-4" : "pl-8"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
