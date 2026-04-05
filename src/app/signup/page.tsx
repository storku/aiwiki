"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function clearError() {
    if (error) setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, displayName: username }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to create account.");
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
            <h1 className="text-xl font-bold mb-1">Create an account</h1>
            <p className="text-sm text-muted">
              Join AI Wiki to contribute and edit articles.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="signup-username" className="block text-sm font-medium mb-1.5">
                Username
              </label>
              <input
                id="signup-username"
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value); clearError(); }}
                placeholder="your_username"
                required
                autoFocus
                autoComplete="username"
                minLength={3}
                maxLength={30}
                pattern="[a-zA-Z0-9_\-]+"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); clearError(); }}
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium mb-1.5">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); clearError(); }}
                placeholder="At least 8 characters"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="signup-confirm" className="block text-sm font-medium mb-1.5">
                Confirm password
              </label>
              <input
                id="signup-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); clearError(); }}
                placeholder="Repeat your password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Error */}
            {error && (
              <div
                className="login-error flex items-start gap-2 px-3.5 py-2.5 rounded-lg text-sm border"
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.08)",
                  borderColor: "rgba(239, 68, 68, 0.2)",
                  color: "#dc2626",
                }}
              >
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !username || !email || !password || !confirmPassword}
              className="btn-primary w-full py-2.5 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Sign up"
              )}
            </button>
          </form>

          {/* Terms notice */}
          <p className="text-xs text-muted text-center mt-4">
            By creating an account, you agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>
            .
          </p>

          {/* Footer links */}
          <div className="text-center mt-5 space-y-3">
            <p className="text-sm text-muted">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Log in
              </Link>
            </p>
            <Link
              href="/"
              className="text-sm text-muted hover:text-primary transition-colors inline-block"
            >
              Back to AI Wiki
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
