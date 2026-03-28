"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-red-500"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <p className="text-sm text-red-500 font-medium mb-2">Something went wrong</p>
      <h1 className="text-2xl font-bold mb-3">Failed to load this page</h1>
      <p className="text-muted max-w-md mb-8">
        This could be a temporary issue. Try refreshing, or head back to the homepage.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-surface transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
