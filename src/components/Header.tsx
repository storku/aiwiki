"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import SearchDropdown, { preloadSearchIndex } from "./SearchDropdown";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for header shadow
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Warm the small typeahead index after the first paint so keyboard search
  // feels instant without blocking initial navigation.
  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (win.requestIdleCallback) {
      const idleId = win.requestIdleCallback(preloadSearchIndex, { timeout: 2500 });
      return () => win.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(preloadSearchIndex, 1500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  // Ctrl/Cmd + K to focus search
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const isEditableTarget =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable;

      const isSearchShortcut =
        (e.metaKey || e.ctrlKey) &&
        (e.key.toLowerCase() === "k" || e.code === "KeyK");

      if (isSearchShortcut && !isEditableTarget) {
        e.preventDefault();
        const isDesktop = window.matchMedia("(min-width: 640px)").matches;

        if (isDesktop) {
          const input = document.getElementById("header-search") as HTMLInputElement | null;
          input?.focus();
          input?.select();
          return;
        }

        setMenuOpen(true);
        window.requestAnimationFrame(() => {
          const mobileInput = document.getElementById("mobile-search") as HTMLInputElement | null;
          mobileInput?.focus();
          mobileInput?.select();
        });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navLinks = [
    { href: "/wiki", label: "All Pages" },
    { href: "/categories", label: "Categories" },
  ];

  return (
    <header className={`sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? "border-border shadow-sm" : "border-transparent"}`}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-14 gap-3">
        <Link href="/" className="flex min-h-11 min-w-11 items-center gap-2 shrink-0 group rounded-lg sm:min-w-0">
          <Image
            src="/aiwiki_logo_symbol.png"
            alt="AI Wiki"
            width={30}
            height={30}
            className="group-hover:scale-105 transition-transform"
            priority
          />
          <Image
            src="/aiwiki_logo_words.png"
            alt="AI Wiki"
            width={90}
            height={19}
            className="hidden sm:block logo-wordmark"
            priority
          />
        </Link>

        <div className="flex-1 max-w-lg hidden sm:block">
          <SearchDropdown id="header-search" />
        </div>

        <nav className="hidden sm:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-10 items-center px-3 py-1.5 rounded-lg transition-all ${
                pathname.startsWith(link.href)
                  ? "nav-active text-primary bg-primary/10 font-medium"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-5 bg-border mx-1.5" />
          <ThemeToggle />
          <div className="w-px h-5 bg-border mx-1.5" />
          <Link
            href="/login"
            className="inline-flex min-h-10 items-center px-3 py-1.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface transition-all"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex min-h-10 items-center px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all"
          >
            Sign up
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-surface transition-colors"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-border px-4 py-3 space-y-3 bg-background/95 backdrop-blur-sm animate-slide-in-down">
          <SearchDropdown
            id="mobile-search"
            mobile
            onNavigate={() => setMenuOpen(false)}
          />
          <div className="border-t border-border my-1" />
          <div className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`inline-flex min-h-11 items-center px-3 py-2.5 rounded-lg text-sm transition-all ${
                  pathname.startsWith(link.href)
                    ? "nav-active text-primary bg-primary/10 font-medium"
                    : "text-muted hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-border my-1" />
          <div className="flex gap-2">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 flex-1 items-center justify-center px-3 py-2.5 rounded-lg text-sm border border-border text-muted hover:text-foreground hover:bg-surface transition-all"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 flex-1 items-center justify-center px-3 py-2.5 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
