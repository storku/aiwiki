import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { canManageImages } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Images",
  description: "Browse and upload images for AI Wiki articles.",
};

export default async function ImagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await canManageImages())) {
    redirect("/login?redirect=/images");
  }

  return children;
}
