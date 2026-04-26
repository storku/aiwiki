"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useHover,
  useDismiss,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";

interface PreviewData {
  title: string;
  excerpt: string;
  categories: string[];
  readingTime: number;
}

const previewCache = new Map<string, PreviewData | null>();

export default function WikiLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState<PreviewData | null>(null);
  const [loading, setLoading] = useState(false);
  const fetchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [offset(8), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });
  const { setReference, setFloating } = refs;

  const hover = useHover(context, { delay: { open: 400, close: 100 } });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, dismiss]);

  const slug = href.replace("/wiki/", "");

  useEffect(() => {
    let cancelled = false;

    if (!isOpen) {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
      return;
    }

    fetchTimeoutRef.current = setTimeout(() => {
      if (cancelled) return;

      if (previewCache.has(slug)) {
        setPreview(previewCache.get(slug)!);
        setLoading(false);
        return;
      }

      setLoading(true);
      fetch(`/api/preview/${encodeURIComponent(slug)}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (cancelled) return;
          previewCache.set(slug, data);
          setPreview(data);
          setLoading(false);
        })
        .catch(() => {
          if (!cancelled) setLoading(false);
        });
    }, 100);

    return () => {
      cancelled = true;
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
    };
  }, [isOpen, slug]);

  return (
    <>
      <Link
        href={href}
        ref={setReference}
        {...getReferenceProps()}
        {...props}
      >
        {children}
      </Link>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="wiki-preview-card z-50 w-72 max-w-[calc(100vw-2rem)] p-4 rounded-xl border border-border bg-background shadow-xl animate-fade-in"
          >
            {loading && !preview && (
              <div className="space-y-2">
                <div className="skeleton h-4 w-40" />
                <div className="skeleton h-3 w-56" />
              </div>
            )}
            {preview && (
              <>
                <h4 className="font-semibold text-sm mb-1.5 leading-snug">{preview.title}</h4>
                <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-2">
                  {preview.excerpt}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {preview.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border text-muted"
                    >
                      {cat.replace(/_/g, " ")}
                    </span>
                  ))}
                  <span className="text-[10px] text-muted ml-auto">{preview.readingTime} min</span>
                </div>
              </>
            )}
            {!loading && !preview && (
              <p className="text-xs text-muted">Article not found</p>
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
