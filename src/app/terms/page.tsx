import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for AI Wiki. Read the terms and conditions that govern your use of aiwiki.ai.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto py-8 animate-fade-in-up">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-muted mb-8">Last updated: March 26, 2026</p>

      <div className="prose-custom space-y-6 text-[15px] leading-relaxed text-muted">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of{" "}
          <a
            href="https://aiwiki.ai"
            className="text-primary hover:underline"
          >
            aiwiki.ai
          </a>{" "}
          (the &quot;Site&quot;), operated by AI Wiki (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). By accessing or using the Site,
          you agree to be bound by these Terms. If you do not agree, please do
          not use the Site.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          1. Use of the Site
        </h2>
        <p>
          AI Wiki provides free, open-access educational content about
          artificial intelligence. You may use the Site for lawful, personal,
          and non-commercial purposes. You agree not to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Use the Site in any way that violates applicable laws or regulations
          </li>
          <li>
            Attempt to gain unauthorized access to the Site, its servers, or any
            connected systems
          </li>
          <li>
            Use automated tools to scrape, crawl, or extract content from the
            Site at a rate that degrades performance for other users
          </li>
          <li>
            Reproduce, redistribute, or republish substantial portions of the
            Site&apos;s content without attribution
          </li>
          <li>
            Introduce viruses, malware, or any other harmful code to the Site
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          2. Intellectual Property
        </h2>
        <p>
          All content on the Site, including text, graphics, logos, and design
          elements, is owned by or licensed to AI Wiki and is protected by
          applicable intellectual property laws. You may quote or reference
          individual articles with proper attribution and a link back to the
          original page on aiwiki.ai.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          3. Accuracy of Content
        </h2>
        <p>
          We strive to provide accurate and up-to-date information. However, the
          field of artificial intelligence evolves rapidly, and we cannot
          guarantee that all content is complete, current, or error-free. The
          content on the Site is provided for informational and educational
          purposes only and should not be relied upon as professional, legal, or
          technical advice.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          4. Disclaimer of Warranties
        </h2>
        <p>
          The Site is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind, either express or
          implied, including but not limited to warranties of merchantability,
          fitness for a particular purpose, or non-infringement. We do not
          warrant that the Site will be uninterrupted, secure, or free of
          errors.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          5. Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, AI Wiki and its operators
          shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of or
          inability to use the Site, including but not limited to damages for
          loss of data, profits, or goodwill. Our total liability for any claim
          related to the Site shall not exceed the amount you have paid to us
          (if any) in the twelve months preceding the claim.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          6. External Links
        </h2>
        <p>
          The Site may contain links to third-party websites or resources. These
          links are provided for convenience and do not imply endorsement. We
          are not responsible for the content, accuracy, or practices of any
          third-party sites.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          7. Changes to These Terms
        </h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will
          be posted on this page with an updated revision date. Your continued
          use of the Site after any changes constitutes your acceptance of the
          revised Terms. We encourage you to review this page periodically.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          8. Termination
        </h2>
        <p>
          We may suspend or restrict access to the Site at our discretion,
          without notice, for conduct that we believe violates these Terms or is
          harmful to other users, us, or third parties.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          9. Governing Law
        </h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the United States, without regard to conflict of law
          principles. Any disputes arising under these Terms shall be resolved
          in the courts of competent jurisdiction.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
          10. Contact Us
        </h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
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
