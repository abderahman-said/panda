"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container */}
        <div className="relative bg-[#121614] rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden text-white shadow-2xl">
          
          {/* AI Generated Atmospheric Cafe Banner Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta-banner.jpg"
              alt="Cozy Panda Café barista serving artisan coffee"
              fill
              className="object-cover object-right md:object-center opacity-45 sm:opacity-55 lg:opacity-65 transition-transform duration-1000 hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            {/* Cinematic Gradients for text contrast and edge blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#121614] via-[#121614]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/90 via-transparent to-[#121614]/50 pointer-events-none" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            
            {/* Text details */}
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
                READY FOR A GOOD TIME?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Visit Panda Café Today
              </h2>
              <p className="text-stone-300 text-sm sm:text-base">
                Great coffee, tasty food, and a cozy place waiting for you.
              </p>
            </div>

            {/* Action Buttons: Contact Us & Explore Menu (No Forms) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-[#141715] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#141715]" />
                <span>Contact Us</span>
              </Link>

              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 bg-[#1c221e] hover:bg-[#252e28] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full border border-stone-700/80 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
