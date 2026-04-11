/**
 * Simple in-memory rate limiter using a sliding window.
 *
 * Each limiter instance tracks request counts per key (typically IP address)
 * within a configurable time window. Entries are lazily cleaned up on access.
 *
 * Note: This is per-process. On Vercel with serverless functions, each cold
 * start gets its own Map, so this provides best-effort protection rather than
 * a hard guarantee. For stricter enforcement, use Vercel KV or Upstash Redis.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface RateLimiterOptions {
  /** Maximum number of requests allowed in the window */
  maxRequests: number;
  /** Window duration in seconds */
  windowSeconds: number;
}

const limiters = new Map<string, Map<string, RateLimitEntry>>();

export function rateLimit(name: string, options: RateLimiterOptions) {
  if (!limiters.has(name)) {
    limiters.set(name, new Map());
  }
  const store = limiters.get(name)!;

  return {
    /** Returns { allowed, remaining, resetAt } for the given key. */
    check(key: string): { allowed: boolean; remaining: number; resetAt: number } {
      const now = Date.now();
      const entry = store.get(key);

      // Clean up expired entry
      if (entry && now >= entry.resetAt) {
        store.delete(key);
      }

      const current = store.get(key);

      if (!current) {
        store.set(key, {
          count: 1,
          resetAt: now + options.windowSeconds * 1000,
        });
        return {
          allowed: true,
          remaining: options.maxRequests - 1,
          resetAt: now + options.windowSeconds * 1000,
        };
      }

      if (current.count >= options.maxRequests) {
        return {
          allowed: false,
          remaining: 0,
          resetAt: current.resetAt,
        };
      }

      current.count++;
      return {
        allowed: true,
        remaining: options.maxRequests - current.count,
        resetAt: current.resetAt,
      };
    },
  };
}

/** Extract a usable IP from the request headers. */
export function getClientIp(request: Request): string {
  const headers = new Headers(request.headers);
  return (
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown"
  );
}
