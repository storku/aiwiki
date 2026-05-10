"use client";

import { useMemo, useState } from "react";
import { parseHeadings, parseHeadingsFromHtml, type TocItem } from "@/lib/headings";

interface MobileTocProps {
  content: string;
  contentHtml?: string | null;
}

export default function MobileToc({ content, contentHtml }: MobileTocProps) {
  const [open, setOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const headings = contentHtml ? parseHeadingsFromHtml(contentHtml) : parseHeadings(content);
  const outlineGroups = useMemo(() => groupHeadings(headings), [headings]);
  const sectionCount = outlineGroups.length || headings.length;

  if (headings.length < 3) return null;

  function toggleSection(id: string) {
    setExpandedSections((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

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
            {sectionCount}
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
          <ul className="space-y-1 pt-2">
            {outlineGroups.map((group) => {
              const isExpanded = expandedSections.has(group.heading.id);
              return (
                <li key={group.heading.id}>
                  <div className="flex items-center gap-1">
                    <a
                      href={`#${group.heading.id}`}
                      onClick={() => setOpen(false)}
                      className="min-h-10 min-w-0 flex-1 rounded-lg py-2 pr-2 text-sm font-medium text-muted hover:bg-surface hover:text-primary transition-colors"
                    >
                      {group.heading.text}
                    </a>
                    {group.children.length > 0 && (
                      <button
                        type="button"
                        onClick={() => toggleSection(group.heading.id)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-surface hover:text-primary"
                        aria-label={isExpanded ? "Collapse section" : "Expand section"}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                          className="transition-transform"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {isExpanded && group.children.length > 0 && (
                    <ul className="ml-3 border-l border-border pl-3">
                      {group.children.map((child) => (
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            onClick={() => setOpen(false)}
                            className={`block min-h-10 rounded-lg py-2 text-sm text-muted hover:bg-surface hover:text-primary transition-colors ${
                              child.level === 3 ? "pl-0" : "pl-4"
                            }`}
                          >
                            {child.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}

function groupHeadings(headings: TocItem[]) {
  const groups: Array<{ heading: TocItem; children: TocItem[] }> = [];

  for (const heading of headings) {
    if (heading.level === 2 || groups.length === 0) {
      groups.push({ heading, children: [] });
    } else {
      groups[groups.length - 1].children.push(heading);
    }
  }

  return groups;
}
