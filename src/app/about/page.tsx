"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ArrowLeft,
  Coffee,
  Heart,
  CheckCircle2,
  Leaf,
  Users,
  Award,
  Star,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {

  const stats = [
    { value: "5+", label: "Years of Crafting Happiness" },
    { value: "250K+", label: "Cups of Joy Brewed" },
    { value: "100%", label: "Single-Origin Arabica" },
    { value: "4.9 ★", label: "Guest Satisfaction Rating" },
  ];

  const values = [
    {
      icon: Coffee,
      title: "Artisan Roasting & Quality",
      description:
        "We source only 100% ethically grown Arabica beans from high-altitude farms. Roasted in small batches to reveal naturally rich chocolate and floral notes.",
    },
    {
      icon: Leaf,
      title: "Fresh, Pure Ingredients",
      description:
        "No artificial syrups or shortcuts. Our bakery uses pure European butter, organic flour, and farm-fresh dairy and plant-based milks.",
    },
    {
      icon: Heart,
      title: "Mindful, Cozy Atmosphere",
      description:
        "Warm brick walls, glowing lighting, soft jazz, and leafy botanicals create an acoustic sanctuary where you can recharge, study, or connect.",
    },
    {
      icon: Users,
      title: "Community & Hospitality",
      description:
        "Every guest is welcomed like family. Our baristas love remembering your favorite drink and sharing the story behind every roast.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8eee4] text-[#1c1c1c] selection:bg-[#c4824a] selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span>/</span>
            <span className="font-semibold text-stone-800">About Us</span>
          </div>

          {/* Page Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#ebdcd0]/60 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#c4824a]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#716a62] uppercase">
                THE STORY OF PANDA CAFÉ
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#191919] tracking-tight leading-tight">
              Good Coffee. Good Mood. <br />
              <span className="text-[#c4824a]">A Sanctuary for the Soul.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#615c56] leading-relaxed">
              Panda Café began with a heartfelt belief: that in a busy, fast-paced world, everyone deserves a warm place to pause, breathe, and savor life one delicious sip at a time.
            </p>
          </div>

          {/* Section 1: The Origin Story Dual Panel */}
          <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 sm:p-12 shadow-sm mb-16 sm:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Visual Collage */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ebdcd0] shadow-md bg-[#f0e2d4]">
                  <Image
                    src="/images/cafe-interior.jpg"
                    alt="Cozy interior of Panda Café"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Mascot Badge Card */}
                <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md border border-[#ebdcd0] rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-xs">
                  <div className="w-12 h-12 rounded-xl bg-[#141715] flex items-center justify-center text-2xl shrink-0">
                    🐼
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Why The Panda?</h4>
                    <p className="text-[11px] text-stone-500 leading-snug">
                      A symbol of peaceful mindfulness, gentleness, and pure joy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Story Text */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
                  OUR HUMBLE BEGINNINGS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] tracking-tight">
                  How a Passion for Coffee Became a Community Home
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  In 2020, a passionate team of baristas and pastry chefs came together with a unified dream: to build a neighborhood café that rejected rushing and mass production. We wanted to celebrate the craft of coffee as an art form and a daily ritual of comfort.
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  We chose the panda as our spirit animal because pandas live life at their own gentle pace. In our café, there is no pressure to rush. Whether you stay for ten minutes or three hours, you are always welcome in our cozy home.
                </p>

                <div className="pt-2 grid grid-cols-2 gap-4 border-t border-[#ebdcd0]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-stone-800">Ethically Sourced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-stone-800">Fresh Baked at 6 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-stone-800">Eco-Friendly Cups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-stone-800">Free Fiber Wi-Fi</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: Numbers Counter Bar */}
          <div className="bg-[#121614] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-16 sm:mb-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center pt-4 sm:pt-0">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-stone-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Our Core Values & Philosophy */}
          <div className="mb-16 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
                The Values That Brew Every Cup
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Quality isn&apos;t just an ingredient — it&apos;s a standard we hold dear in every single interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#fffcf8] border border-[#ebdcd0] hover:border-[#d8c5b3] rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#ebdcd0]/50 text-[#c4824a] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h3 className="text-base font-bold text-stone-900 mb-2">
                        {val.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: Signature Panda Foam Art Highlight */}
          <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 sm:p-12 shadow-sm mb-16 sm:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c4824a] uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-[#c4824a]" />
                  <span>OUR VIRAL SIGNATURE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] tracking-tight">
                  Handcrafted Panda Latte Art
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Every cup of our Panda Signature Latte features handcrafted latte art shaped into an adorable panda face. It takes months of training for our baristas to master the milk foam density and free-pour technique.
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  We believe that coffee should not only taste sublime, but also spark an immediate moment of joy the second it touches your table.
                </p>

                <div className="pt-2">
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-900 hover:text-[#c4824a] transition-colors"
                  >
                    <span>View our Latte Art Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-[#ebdcd0] shadow-lg bg-[#f0e2d4]">
                  <Image
                    src="/images/panda-latte-art.jpg"
                    alt="Cute panda latte art foam pattern"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Table Reservation & Full Menu Call-To-Action */}
          <div className="bg-[#121614] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
              EXPERIENCE THE MAGIC
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold max-w-xl mx-auto">
              Ready to Join the Panda Café Family?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto">
              Whether you are stopping by for your morning brew or meeting loved ones for an afternoon dessert, we can&apos;t wait to serve you.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-[#141715] text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Contact Us</span>
              </Link>
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1c221e] hover:bg-[#252e28] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full border border-stone-700 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Full Menu</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer with botanical leaves */}
      <Footer />
    </div>
  );
}
