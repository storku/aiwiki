"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { formatDate, timeAgo } from "@/lib/date-utils";

interface DeletionAlert {
  id: number;
  page_id: number | null;
  page_slug: string;
  page_title: string;
  deleted_content: string;
  old_word_count: number;
  new_word_count: number;
  words_deleted: number;
  edit_summary: string | null;
  dismissed: boolean;
  created_at: string;
}

function SeverityBadge({ ratio }: { ratio: number }) {
  let label: string;
  let classes: string;

  if (ratio >= 0.8) {
    label = "Critical";
    classes =
      "bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-300 border-red-200 dark:border-red-800";
  } else if (ratio >= 0.5) {
    label = "Major";
    classes =
      "bg-orange-100 text-orange-800 dark:bg-orange-950/40 dark:text-orange-300 border-orange-200 dark:border-orange-800";
  } else if (ratio >= 0.3) {
    label = "Warning";
    classes =
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800";
  } else {
    label = "Minor";
    classes =
      "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800";
  }

  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${classes}`}
    >
      {label}
    </span>
  );
}

function AlertCard({
  alert,
  onDismiss,
  onRestore,
}: {
  alert: DeletionAlert;
  onDismiss: (id: number) => void;
  onRestore: (id: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const ratio =
    alert.old_word_count > 0
      ? alert.words_deleted / alert.old_word_count
      : 0;
  const pct = Math.round(ratio * 100);

  return (
    <div className="border border-border rounded-xl bg-surface overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 flex items-start gap-4">
        {/* Icon */}
        <div className="shrink-0 mt-0.5">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              ratio >= 0.8
                ? "bg-red-100 dark:bg-red-950/40"
                : ratio >= 0.5
                ? "bg-orange-100 dark:bg-orange-950/40"
                : ratio >= 0.3
                ? "bg-yellow-100 dark:bg-yellow-950/40"
                : "bg-blue-100 dark:bg-blue-950/40"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={
                ratio >= 0.8
                  ? "text-red-600 dark:text-red-400"
                  : ratio >= 0.5
                  ? "text-orange-600 dark:text-orange-400"
                  : ratio >= 0.3
                  ? "text-yellow-600 dark:text-yellow-400"
                  : "text-blue-600 dark:text-blue-400"
              }
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href={`/wiki/${alert.page_slug}`}
              className="font-semibold text-primary hover:underline truncate max-w-[300px]"
            >
              {alert.page_title}
            </Link>
            <SeverityBadge ratio={ratio} />
          </div>

          <div className="flex items-center gap-3 text-sm text-muted mt-1 flex-wrap">
            <span className="font-medium text-red-600 dark:text-red-400">
              -{alert.words_deleted.toLocaleString()} words ({pct}%)
            </span>
            <span>
              {alert.old_word_count.toLocaleString()} &rarr;{" "}
              {alert.new_word_count.toLocaleString()} words
            </span>
            <span title={formatDate(alert.created_at)}>
              {timeAgo(alert.created_at)}
            </span>
          </div>

          {alert.edit_summary && (
            <p className="text-sm text-muted mt-1.5 italic">
              &quot;{alert.edit_summary}&quot;
            </p>
          )}

          {/* Deleted content preview */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-xs font-medium text-primary hover:underline flex items-center gap-1"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform ${expanded ? "rotate-90" : ""}`}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {expanded ? "Hide" : "Show"} deleted content
          </button>

          {expanded && (
            <div className="mt-2 p-3 rounded-lg bg-red-50/50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-800/50 max-h-80 overflow-y-auto">
              <pre className="text-xs text-red-900 dark:text-red-200 whitespace-pre-wrap break-words font-sans leading-relaxed">
                {alert.deleted_content}
              </pre>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="shrink-0 flex items-center gap-2">
          <Link
            href={`/wiki/${alert.page_slug}/history`}
            className="px-3 py-1.5 text-xs font-medium border border-border rounded-lg hover:bg-surface-hover transition-colors"
          >
            History
          </Link>
          {alert.dismissed ? (
            <button
              onClick={() => onRestore(alert.id)}
              className="px-3 py-1.5 text-xs font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors"
            >
              Restore
            </button>
          ) : (
            <button
              onClick={() => onDismiss(alert.id)}
              className="px-3 py-1.5 text-xs font-medium text-muted border border-border rounded-lg hover:bg-surface-hover transition-colors"
            >
              Dismiss
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DeletionsPage() {
  const [alerts, setAlerts] = useState<DeletionAlert[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDismissed, setShowDismissed] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 50;

  const fetchAlerts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams({
        dismissed: String(showDismissed),
        limit: String(limit),
        offset: String(offset),
      });
      const res = await fetch(`/api/admin/deletions?${params}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load alerts");
      setAlerts(data.alerts);
      setTotal(data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load alerts");
    } finally {
      setLoading(false);
    }
  }, [showDismissed, offset]);

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  async function handleDismiss(id: number) {
    try {
      const res = await fetch("/api/admin/deletions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, dismissed: true }),
      });
      if (!res.ok) throw new Error("Failed to dismiss alert");
      setAlerts((prev) => prev.filter((a) => a.id !== id));
      setTotal((t) => t - 1);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to dismiss");
    }
  }

  async function handleRestore(id: number) {
    try {
      const res = await fetch("/api/admin/deletions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, dismissed: false }),
      });
      if (!res.ok) throw new Error("Failed to restore alert");
      setAlerts((prev) => prev.filter((a) => a.id !== id));
      setTotal((t) => t - 1);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to restore");
    }
  }

  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Deletion Alerts
          </h1>
          <p className="text-sm text-muted mt-1">
            Alerts when large amounts of content are removed from wiki articles.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex items-center border border-border rounded-lg overflow-hidden text-sm">
          <button
            onClick={() => {
              setShowDismissed(false);
              setOffset(0);
            }}
            className={`px-4 py-1.5 transition-colors ${
              !showDismissed ? "bg-primary text-white" : "hover:bg-surface"
            }`}
          >
            Active
            {!showDismissed && total > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full bg-white/20">
                {total}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              setShowDismissed(true);
              setOffset(0);
            }}
            className={`px-4 py-1.5 transition-colors ${
              showDismissed ? "bg-primary text-white" : "hover:bg-surface"
            }`}
          >
            Dismissed
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-sm text-red-700 dark:text-red-300">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-xl bg-surface animate-pulse border border-border"
            />
          ))}
        </div>
      ) : alerts.length === 0 ? (
        /* Empty state */
        <div className="text-center py-16 border border-border rounded-xl bg-surface">
          <svg
            className="mx-auto text-muted mb-4"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p className="text-muted font-medium">
            {showDismissed
              ? "No dismissed alerts."
              : "No active deletion alerts."}
          </p>
          <p className="text-sm text-muted/60 mt-1">
            {showDismissed
              ? "Dismissed alerts will appear here."
              : "Alerts appear when large amounts of content are removed from articles."}
          </p>
        </div>
      ) : (
        /* Alert list */
        <div className="space-y-3">
          {alerts.map((alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              onDismiss={handleDismiss}
              onRestore={handleRestore}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setOffset(Math.max(0, offset - limit))}
            disabled={offset === 0}
            className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-surface transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-muted">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setOffset(offset + limit)}
            disabled={currentPage >= totalPages}
            className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-surface transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
