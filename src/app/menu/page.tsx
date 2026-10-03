"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fullMenuItems, menuCategories, MenuItem } from "@/data/menuData";
import {
  Search,
  Sparkles,
  Calendar,
  ArrowLeft,
  Coffee,
  Flame,
  CheckCircle,
} from "lucide-react";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on category and live search query
  const filteredItems = useMemo(() => {
    return fullMenuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8eee4] text-[#1c1c1c] selection:bg-[#c4824a] selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation Back */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>العودة للرئيسية</span>
            </Link>
            <span>/</span>
            <span className="font-semibold text-stone-800">قائمة الطعام</span>
          </div>

          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#ebdcd0]/60 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#c4824a]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#716a62] uppercase">
                حرفي وطازج يوميًا
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#191919] tracking-tight leading-tight">
              قائمة كافيه باندا
            </h1>

            <p className="text-sm sm:text-base text-[#615c56] leading-relaxed">
              استكشف مزيجات القهوة الحرفية، الكولد بريو، والمعجنات الطازجة من
              الفرن. كل مشروب يُحضّر بدقة ويُقدّم في أجواء دافئة.
            </p>
          </div>

          {/* Search Bar & Category Filter Tabs */}
          <div className="space-y-6 mb-12">
            {/* Live Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-stone-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="ابحث عن قهوة، شاي، معجنات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-11 pl-12 py-3 bg-[#fffcf8] border border-[#ebdcd0] rounded-full text-sm text-stone-800 placeholder-stone-400 shadow-xs focus:outline-hidden focus:border-[#c4824a] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 px-2 py-0.5 rounded-full cursor-pointer"
                >
                  مسح
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {menuCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? fullMenuItems.length
                    : fullMenuItems.filter((i) => i.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-[#141715] text-white shadow-md scale-102"
                        : "bg-[#fffcf8] text-stone-700 hover:bg-[#f2e5d7] border border-[#ebdcd0]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive
                          ? "bg-stone-700 text-stone-200"
                          : "bg-stone-200 text-stone-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu Items Grid (Display Showcase Only - No Ordering) */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-[#fffcf8] rounded-3xl border border-[#ebdcd0] max-w-lg mx-auto p-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                لا توجد نتائج
              </h3>
              <p className="text-xs text-stone-500">
                لم نجد شيئًا يطابق «{searchQuery}». حاول البحث عن «لاتيه»،
                «موكا»، أو «كرواسون».
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-2 text-xs font-semibold text-[#c4824a] hover:underline cursor-pointer"
              >
                إعادة ضبط الفلاتير
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-[#fffcf8] border border-[#ebdcd0] hover:border-[#d8c5b3] rounded-3xl  p-2  md:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#6d4c2b]/5 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Item Image with tags */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#f0e2d4]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      {item.tag && (
                        <div className="absolute top-3 left-3 bg-[#141715]/85 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {item.tag}
                        </div>
                      )}
                      {item.calories && (
                        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-stone-200 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Flame className="w-2.5 h-2.5 text-amber-400" />
                          <span>{item.calories}</span>
                        </div>
                      )}
                    </div>

                    {/* Item Name */}
                    <h3 className="text-sm md:text-lg font-bold text-[#1a1a1a] mb-1">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[9px] md:text-xs text-[#706a63] leading-relaxed   mb-2 md:mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Row: Price & Highlight Badge (Purely Display Only) */}
                  <div className="flex items-center justify-between md:pt-3 pt-1.5 border-t border-[#ebdcd0]">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">
                        السعر
                      </span>
                      <span className="text-lg font-extrabold text-[#191919]">
                        {item.price} ج.م
                      </span>
                    </div>

                    {item.badge && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c4824a] bg-[#ebdcd0]/45 px-2.5 py-1 rounded-full">
                        <Sparkles className="w-3 h-3 text-[#c4824a]" />
                        <span>{item.badge}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quality Standards Highlights Bar */}
          <div className="mt-12 sm:mt-20 bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 sm:p-10">
            <h3 className="text-lg sm:text-xl font-bold text-center text-[#191919] mb-6">
              وعدنا بالجودة الحرفية
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#f0e2d4] text-[#c4824a] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900">
                  100% حبوب أرابيكا
                </h4>
                <p className="text-xs text-stone-600 max-w-xs">
                  حبوب مصدرها أخلاقي، محمصة بدفعات صغيرة للحفاظ على العطر
                  الطبيعي.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#f0e2d4] text-[#c4824a] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900">
                  مخبز يومي طازج
                </h4>
                <p className="text-xs text-stone-600 max-w-xs">
                  كرواسون وبريوش فرنسي بالزبدة مخبوز طازجًا كل صباح.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#f0e2d4] text-[#c4824a] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-stone-900">
                  خيارات نباتية
                </h4>
                <p className="text-xs text-stone-600 max-w-xs">
                  قابلة للتخصيص بحليب الشوفان أو اللوز أو جوز الهند عند زيارتك.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action: Visit & Contact */}
          <div className="mt-12 bg-[#121614] rounded-3xl p-8 sm:p-12 text-white text-center space-y-5 shadow-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
              انضم إلينا شخصيًا
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold max-w-xl mx-auto">
              هل أنت مستعد لتجربة باندا؟
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto">
              تفضّل بزيارتنا في أي وقت لتستمتع بدفء وعطر القهوة الطازجة، أو
              تواصل معنا مباشرةً.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-[#141715] text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>تواصل معنا</span>
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1c221e] hover:bg-[#252e28] text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full border border-stone-700 transition-all duration-200 cursor-pointer"
              >
                <span>العودة للرئيسية</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
