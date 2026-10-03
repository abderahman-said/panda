import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Gallery | Panda Café",
  description: "A visual stroll through our warm interior, handcrafted latte art, fresh bakery treats, and joyful panda moments.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
