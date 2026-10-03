import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "كافيه باندا | قهوة رائعة. مزاج رائع.",
  description: "في كافيه باندا، نؤمن بأن فنجان قهوة رائع يجعل يومك أكثر إشراقًا. قهوة طازجة وطعام لذيذ وأجواء دافئة — كل ذلك في مكان واحد.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#f8eee4] text-[#1c1c1c] antialiased min-h-screen selection:bg-[#c4824a] selection:text-white">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
