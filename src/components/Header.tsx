"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import SearchDropdown from "./SearchDropdown";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const pathname = usePathname();

  // Detect Mac for keyboard shortcut display (avoids hydration mismatch)
  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.userAgent));
  }, []);

  // Track scroll for header shadow
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ctrl/Cmd + K to focus search
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const input = document.getElementById("header-search") as HTMLInputElement;
        input?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/wiki", label: "All Pages" },
    { href: "/categories", label: "Categories" },
  ];

  return (
    <header className={`sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? "border-border shadow-sm" : "border-transparent"}`}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-14 gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <Image
            src="/aiwiki_logo_symbol.png"
            alt="AI Wiki"
            width={30}
            height={30}
            className="group-hover:scale-105 transition-transform"
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
          <SearchDropdown id="header-search" isMac={isMac} />
        </div>

        <nav className="hidden sm:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg transition-all ${
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
            className="px-3 py-1.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface transition-all"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all"
          >
            Sign up
          </Link>
        </nav>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-lg hover:bg-surface transition-colors"
            aria-label="Menu"
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
                className={`px-3 py-2.5 rounded-lg text-sm transition-all ${
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
              className="flex-1 text-center px-3 py-2.5 rounded-lg text-sm border border-border text-muted hover:text-foreground hover:bg-surface transition-all"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center px-3 py-2.5 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-all"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
