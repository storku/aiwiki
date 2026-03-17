import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted mb-6">
        The article you&apos;re looking for doesn&apos;t exist yet.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/wiki"
          className="px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors"
        >
          Browse All Pages
        </Link>
      </div>
    </div>
  );
}
