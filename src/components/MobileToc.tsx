"use client";

import { useState } from "react";
import { parseHeadings } from "@/lib/headings";

export default function MobileToc({ content }: { content: string }) {
  const [open, setOpen] = useState(false);
  const headings = parseHeadings(content);

  if (headings.length < 3) return null;

  return (
    <div className="xl:hidden mb-6 border border-border rounded-xl overflow-hidden bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground"
      >
        <span className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          Table of Contents
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
        <nav className="px-4 pb-3 border-t border-border">
          <ul className="space-y-0.5 pt-2">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-1 text-[13px] text-muted hover:text-primary transition-colors ${
                    h.level === 2 ? "pl-0" : h.level === 3 ? "pl-4" : "pl-8"
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
