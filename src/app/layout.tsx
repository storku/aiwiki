import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aiwiki.ai"),
  title: {
    default: "AI Wiki - The Encyclopedia of Artificial Intelligence",
    template: "%s | AI Wiki",
  },
  description:
    "AI Wiki is a comprehensive encyclopedia covering 2,000+ articles on artificial intelligence concepts, tools, models, and applications.",
  keywords: [
    "artificial intelligence",
    "AI",
    "machine learning",
    "deep learning",
    "neural networks",
    "NLP",
    "natural language processing",
    "computer vision",
    "GPT",
    "ChatGPT",
    "large language models",
    "AI encyclopedia",
    "AI wiki",
  ],
  alternates: {
    canonical: "https://aiwiki.ai",
    types: {
      "application/rss+xml": "https://aiwiki.ai/feed.xml",
    },
  },
  openGraph: {
    title: "AI Wiki - The Encyclopedia of Artificial Intelligence",
    description:
      "Comprehensive encyclopedia covering 2,000+ articles on AI concepts, tools, models, and applications.",
    siteName: "AI Wiki",
    type: "website",
    locale: "en_US",
    url: "https://aiwiki.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Wiki",
    description: "The Encyclopedia of Artificial Intelligence",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root{--background:#ffffff;--foreground:#0f172a;--color-border:#e5e7eb;--color-surface:#f8fafc;--color-surface-hover:#f1f5f9;--color-muted:#64748b;--color-primary:#3b82f6;--color-primary-light:#dbeafe;--color-accent:#8b5cf6;--color-accent-light:#ede9fe}
[data-theme="dark"]{--background:#0a0f1e;--foreground:#e2e8f0;--color-border:#1e293b;--color-surface:#111827;--color-surface-hover:#1a2332;--color-muted:#94a3b8;--color-primary-light:#1e2d4a;--color-accent-light:#271f45}
@media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--background:#0a0f1e;--foreground:#e2e8f0;--color-border:#1e293b;--color-surface:#111827;--color-surface-hover:#1a2332;--color-muted:#94a3b8;--color-primary-light:#1e2d4a;--color-accent-light:#271f45}}
html{scroll-padding-top:5rem}
body{background:var(--background);color:var(--foreground);margin:0}
`,
          }}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="alternate" type="application/rss+xml" title="AI Wiki" href="/feed.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.setAttribute('data-theme','dark')}catch(e){}`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-75DRMY9XB6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-75DRMY9XB6');`}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
