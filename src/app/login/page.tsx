"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectUrl = searchParams.get("redirect") || "/";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });

      if (res.ok) {
        router.push(redirectUrl);
      } else {
        const data = await res.json();
        setError(data.error || "Authentication failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm animate-fade-in-up">
        {/* Card */}
        <div className="card p-8 sm:p-10">
          {/* Logo and title */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src="/aiwiki_logo_symbol.png"
                alt="AI Wiki"
                width={36}
                height={36}
              />
              <Image
                src="/aiwiki_logo_words.png"
                alt="AI Wiki"
                width={100}
                height={21}
                className="logo-wordmark"
              />
            </Link>
            <h1 className="text-xl font-bold mb-1">Editor Login</h1>
            <p className="text-sm text-muted">
              Enter the editor secret to access protected features.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="editor-secret"
                className="block text-sm font-medium mb-1.5"
              >
                Editor Secret
              </label>
              <input
                id="editor-secret"
                type="password"
                value={secret}
                onChange={(e) => {
                  setSecret(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter secret"
                required
                autoFocus
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="login-error flex items-start gap-2 px-3.5 py-2.5 rounded-lg text-sm border"
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.08)",
                  borderColor: "rgba(239, 68, 68, 0.2)",
                  color: "#dc2626",
                }}
              >
                <svg
                  className="shrink-0 mt-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading || !secret}
              className="btn-primary w-full py-2.5 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="animate-spin"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83" />
                  </svg>
                  Verifying...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Back link */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Back to AI Wiki
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
