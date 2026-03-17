"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4 h-14">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-primary">AI</span>
          <span>Wiki</span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full px-3 py-1.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </form>

        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/categories"
            className="text-muted hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/wiki"
            className="text-muted hover:text-foreground transition-colors"
          >
            All Pages
          </Link>
        </nav>
      </div>
    </header>
  );
}
