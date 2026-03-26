import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for AI Wiki. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 animate-fade-in-up">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted mb-8">Last updated: March 26, 2026</p>

      <div className="prose-custom space-y-6 text-[15px] leading-relaxed text-muted">
        <p>
          This Privacy Policy describes how AI Wiki (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
          information when you visit{" "}
          <a
            href="https://aiwiki.ai"
            className="text-primary hover:underline"
          >
            aiwiki.ai
          </a>{" "}
          (the &quot;Site&quot;). By using the Site, you agree to the practices
          described in this policy.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          1. Information We Collect
        </h2>

        <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
          Information Collected Automatically
        </h3>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device and usage, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            IP address (anonymized where possible)
          </li>
          <li>
            Browser type and version
          </li>
          <li>
            Operating system
          </li>
          <li>
            Pages visited, time spent on pages, and navigation paths
          </li>
          <li>
            Referring URL (the page that linked you to our Site)
          </li>
          <li>
            Device type (desktop, mobile, tablet)
          </li>
        </ul>
        <p>
          This information is collected through Google Analytics 4, which uses
          cookies and similar technologies. Google Analytics helps us understand
          how visitors use the Site so we can improve the content and user
          experience.
        </p>

        <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
          Information You Provide
        </h3>
        <p>
          If you contact us by email, we collect your email address and any
          information you include in your message. We do not require you to
          create an account or provide personal information to browse the Site.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          2. How We Use Your Information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Operate, maintain, and improve the Site</li>
          <li>Analyze traffic patterns and user behavior to improve content</li>
          <li>Respond to your inquiries or feedback</li>
          <li>Detect and prevent abuse or technical issues</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          3. Cookies and Tracking Technologies
        </h2>
        <p>
          The Site uses cookies set by Google Analytics to collect usage data.
          Cookies are small text files stored on your device. You can control or
          disable cookies through your browser settings, though this may affect
          your experience on the Site.
        </p>
        <p>
          We also store a local preference for your selected theme (light or
          dark mode) using your browser&apos;s localStorage. This data stays on
          your device and is never transmitted to our servers.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          4. Third-Party Services
        </h2>
        <p>We use the following third-party services:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Google Analytics 4:</strong>{" "}
            For website analytics. Google may collect and process data according
            to its own privacy policy. Learn more at{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-foreground">Vercel:</strong> Our hosting
            provider. Vercel may collect server logs including IP addresses.
            Learn more at{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Privacy Policy
            </a>
            .
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          5. Data Sharing
        </h2>
        <p>
          We do not sell, rent, or trade your personal information. We may share
          anonymized, aggregated data that cannot identify you individually. We
          may also disclose information if required by law or to protect the
          rights, property, or safety of AI Wiki, its users, or the public.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          6. Data Retention
        </h2>
        <p>
          Analytics data is retained according to our Google Analytics settings
          (currently 14 months). Email correspondence is retained only as long
          as necessary to address your inquiry.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          7. Your Rights
        </h2>
        <p>
          Depending on your location, you may have rights regarding your
          personal data, including the right to access, correct, delete, or
          restrict processing of your information. To exercise these rights,
          please contact us at{" "}
          <a
            href="mailto:contact@aiwiki.ai"
            className="text-primary hover:underline"
          >
            contact@aiwiki.ai
          </a>
          .
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          8. Children&apos;s Privacy
        </h2>
        <p>
          The Site is not directed at children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          believe we have collected information from a child under 13, please
          contact us so we can promptly remove it.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated revision date. Your continued use
          of the Site after any changes constitutes your acceptance of the
          revised policy.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          10. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:contact@aiwiki.ai"
            className="text-primary hover:underline"
          >
            contact@aiwiki.ai
          </a>
          .
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-primary hover:underline font-medium"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
