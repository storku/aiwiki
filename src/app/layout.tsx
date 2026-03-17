import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Wiki - The Encyclopedia of Artificial Intelligence",
    template: "%s | AI Wiki",
  },
  description:
    "AI Wiki is a comprehensive encyclopedia covering artificial intelligence concepts, tools, models, and applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
