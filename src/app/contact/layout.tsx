import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit & Contact Us | Panda Café",
  description: "Find our exact location on Google Maps, chat with us on WhatsApp, and check daily opening hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
