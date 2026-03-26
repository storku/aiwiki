import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Images",
  description: "Browse and upload images for AI Wiki articles.",
};

export default function ImagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
