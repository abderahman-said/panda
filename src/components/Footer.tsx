"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PandaLogo from "./PandaLogo";
import { Heart } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer id="contact" className="relative bg-[#0e1210] text-stone-400 pt-16 pb-12 border-t border-stone-800/60 overflow-hidden">
      {/* Left Decorative Botanical Leaves (AI Generated Image) */}
      <div className="absolute -left-10 sm:-left-4 lg:left-0 top-1/2 -translate-y-1/2 w-28 sm:w-44 lg:w-60 aspect-square pointer-events-none select-none z-0 opacity-35 sm:opacity-75 lg:opacity-90">
        <Image
          src="/images/leaves-transparent.png"
          alt="Decorative leaves"
          fill
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 240px"
          className="object-contain opacity-60"
        />
      </div>

      {/* Right Decorative Botanical Leaves (Mirrored) */}
      <div className="absolute -right-10 sm:-right-4 lg:right-0 top-1/2 -translate-y-1/2 w-28 sm:w-44 lg:w-60 aspect-square pointer-events-none select-none z-0 opacity-35 sm:opacity-75 lg:opacity-90 transform -scale-x-100">
        <Image
          src="/images/leaves-transparent.png"
          alt="Decorative leaves"
          fill
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 240px"
          className="object-contain opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-stone-800/80">
          
          {/* Logo on Left */}
          <div>
            <PandaLogo light />
          </div>

          {/* Navigation Links in Center */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-stone-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons on Right (Crisp Brand SVGs) */}
          <div className="flex items-center gap-3.5 text-stone-300">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/panda_coffee33?stkn=MXR5czlqcXR4czd6Mg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-stone-800 hover:border-amber-500/50 flex items-center justify-center hover:text-white hover:bg-stone-800/50 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full border border-stone-800 hover:border-amber-500/50 flex items-center justify-center hover:text-white hover:bg-stone-800/50 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="w-8 h-8 rounded-full border border-stone-800 hover:border-amber-500/50 flex items-center justify-center hover:text-white hover:bg-stone-800/50 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-8 h-8 rounded-full border border-stone-800 hover:border-amber-500/50 flex items-center justify-center hover:text-white hover:bg-stone-800/50 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.31-4.644c.314 0 .619.05 1.05.155V9.41a6.333 6.333 0 0 0-1.05-.087C5.992 9.323 3 12.315 3 16c0 3.684 2.992 6.677 6.484 6.677 3.526 0 6.386-2.859 6.386-6.385V8.65a8.217 8.217 0 0 0 4.719 1.48V6.686z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2025 Panda Café. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium text-stone-300">
            <span>Good Coffee. Good Mood.</span>
            <Heart className="w-3.5 h-3.5 text-stone-400 stroke-[1.8]" />
          </p>
        </div>

      </div>
    </footer>
  );
}
