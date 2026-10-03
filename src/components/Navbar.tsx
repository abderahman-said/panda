"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PandaLogo from "./PandaLogo";
import { Phone, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "المنيو", href: "/menu" },
    { name: "من نحن", href: "/about" },
    { name: "معرض الصور", href: "/gallery" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/menu") return pathname === "/menu";
    if (href === "/about") return pathname === "/about";
    if (href === "/contact") return pathname === "/contact";
    if (href === "/gallery") return pathname === "/gallery";
    if (href === "/") return pathname === "/";
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8eee4]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#e8dacb]/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <PandaLogo />

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-black py-1 ${
                    isActive ? "text-[#181818] font-bold" : "text-[#595550]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#181818] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button: Contact (تواصل) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 sm:gap-2 bg-[#141715] hover:bg-neutral-800 text-white text-[11px] sm:text-xs font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>تواصل معنا</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-black rounded-lg focus:outline-hidden cursor-pointer"
              aria-label="فتح قائمة التنقل"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f8eee4] border-b border-[#e8dacb] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-1 border-b border-[#ebdcd0]/60 ${
                  isLinkActive(link.href)
                    ? "text-[#c4824a] font-bold"
                    : "text-stone-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#141715] text-white text-sm font-semibold py-3 rounded-full shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>تواصل معنا</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
