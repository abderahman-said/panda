import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panda Café | Good Coffee. Good Mood.",
  description: "At Panda Café, we believe a great cup of coffee can make your day brighter. Fresh coffee, delicious food, and a cozy atmosphere — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#f8eee4] text-[#1c1c1c] antialiased min-h-screen selection:bg-[#c4824a] selection:text-white">
        {children}
      </body>
    </html>
  );
}
