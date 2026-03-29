import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://aiwiki.ai"),
  title: {
    default: "AI Wiki - The Encyclopedia of Artificial Intelligence",
    template: "%s | AI Wiki",
  },
  description:
    "AI Wiki is a comprehensive encyclopedia covering 2,000+ articles on artificial intelligence concepts, tools, models, and applications.",
  openGraph: {
    title: "AI Wiki - The Encyclopedia of Artificial Intelligence",
    description:
      "Comprehensive encyclopedia covering 2,000+ articles on AI concepts, tools, models, and applications.",
    siteName: "AI Wiki",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Wiki",
    description: "The Encyclopedia of Artificial Intelligence",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="alternate" type="application/rss+xml" title="AI Wiki" href="/feed.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.setAttribute('data-theme','dark')}catch(e){}`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WZ77X7X9C4"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-WZ77X7X9C4');`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
