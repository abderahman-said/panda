"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  onWatchVideo?: () => void;
}

export default function Hero({ onWatchVideo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 lg:pb-16 overflow-hidden bg-[#f8eee4]"
    >
      {/* Subtle organic background glow */}
      <div className="absolute top-12 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#eed5be]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-28 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-4 sm:space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#716a62] uppercase">
                WELCOME TO PANDA CAFÉ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#191919] leading-[1.1] sm:leading-[1.08] tracking-tight">
              Good Coffee. <br />
              Good{" "}
              <span className="text-[#c4824a] relative inline-block">
                Mood.
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#615c56] leading-relaxed max-w-lg">
              At Panda Café, we believe a great cup of coffee can make your day
              brighter. Fresh coffee, delicious food, and a cozy atmosphere —
              all in one place.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-2 bg-[#141715] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onWatchVideo}
                className="group inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-[#efe1d3]/60 text-[#212121] text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border border-[#d8c5b3] hover:border-[#bda48e] transition-all duration-200 cursor-pointer text-center"
              >
                <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full border border-[#212121] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Panda Mascot */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] group flex items-center justify-center">
              <Image
                src="/images/hero-panda.jpg"
                alt="Cute panda mascot enjoying coffee at Panda Café"
                fill
                priority
                className="object-contain transform transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 440px, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
