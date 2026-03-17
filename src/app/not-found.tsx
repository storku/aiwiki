import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20 max-w-md mx-auto">
      <div className="text-6xl font-extrabold text-muted/20 mb-4">404</div>
      <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
      <p className="text-muted mb-8">
        The article you&apos;re looking for doesn&apos;t exist yet.
      </p>
      <div className="flex justify-center gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/wiki"
          className="px-5 py-2.5 rounded-lg border border-border font-medium hover:bg-surface transition-colors"
        >
          Browse All Pages
        </Link>
      </div>
    </div>
  );
}
