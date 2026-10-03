import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story & Sanctuary | Panda Café",
  description: "Learn about Panda Café, our coffee philosophy, and our cozy neighborhood haven.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
