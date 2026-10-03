import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisan Menu | Panda Café",
  description: "Explore our handcrafted coffee, iced brews, and freshly baked croissants at Panda Café.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
