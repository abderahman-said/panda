"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { fullMenuItems, MenuItem } from "@/data/menuData";
import "swiper/css";
import "swiper/css/pagination";

export type { MenuItem };

interface MenuSectionProps {
  onViewAllMenu?: () => void;
}

export default function MenuSection({ onViewAllMenu }: MenuSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  // Showcase popular signature items in the homepage swiper carousel
  const featuredItems = fullMenuItems.filter((item) => item.isPopular).slice(0, 8);

  return (
    <section id="menu" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
                تشكيلتنا المختارة بعناية
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#191919] tracking-tight leading-tight">
              مشروبات مميزة ولقيمات طازجة
            </h2>
            <p className="text-[#645e57] text-sm sm:text-base max-w-2xl leading-relaxed">
              من الإسبريسو الغني إلى مشروباتنا المميزة والمعجنات الذهبية — كل
              صنف يُحضّر بشغف ليرفع مزاجك.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center lg:justify-end gap-3 flex-wrap">
            {/* Custom Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous menu item"
                className="w-9 h-9 rounded-full border border-[#d8c5b3] hover:border-stone-900 bg-[#fffcf8] flex items-center justify-center text-stone-700 hover:text-stone-900 hover:bg-[#efe1d3] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next menu item"
                className="w-9 h-9 rounded-full border border-[#d8c5b3] hover:border-stone-900 bg-[#fffcf8] flex items-center justify-center text-stone-700 hover:text-stone-900 hover:bg-[#efe1d3] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#141715] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <span>استكشف القائمة كاملة</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Swiper Carousel with Custom Styled Pagination Dots */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="menu-swiper"
        >
          {featuredItems.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="group bg-[#fffcf8] border border-[#ebdcd0] hover:border-[#d8c5b3] rounded-2xl sm:rounded-3xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#6d4c2b]/5 hover:-translate-y-1.5 h-full">
                <div>
                  {/* Item Image with decorative badge */}
                  <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-[#f0e2d4]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-[#141715]/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.tag}
                      </div>
                    )}
                  </div>

                  {/* Item Name */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-1">
                    {item.name}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs text-[#706a63] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Purely Display Price & Quality Badge (No Order/Cart) */}
                <div className="flex items-center justify-between pt-3 border-t border-[#ebdcd0]">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-400 font-medium">
                      السعر
                    </span>
                    <span className="text-base font-extrabold text-[#191919]">
                      {item.price} ج.م
                    </span>
                  </div>

                  {item.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c4824a] bg-[#ebdcd0]/40 px-2.5 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 text-[#c4824a]" />
                      <span>{item.badge}</span>
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
