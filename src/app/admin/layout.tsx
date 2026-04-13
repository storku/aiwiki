import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | Admin | AI Wiki" },
  robots: { index: false, follow: false },
};

const adminNav = [
  { href: "/admin/deletions", label: "Deletion Alerts" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
        <Link href="/admin" className="text-sm font-semibold text-muted uppercase tracking-wider">
          Admin
        </Link>
        <nav className="flex items-center gap-1">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm rounded-lg hover:bg-surface transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {children}
    </div>
  );
}
