import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-8 text-center text-sm text-muted">
      <div className="mx-auto max-w-5xl px-4">
        <p>
          <Link href="/" className="font-semibold hover:text-foreground">
            AIWiki.ai
          </Link>{" "}
          &mdash; The encyclopedia of artificial intelligence
        </p>
      </div>
    </footer>
  );
}
