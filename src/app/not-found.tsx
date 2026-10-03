import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Coffee, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8eee4] text-[#1c1c1c] flex flex-col justify-between selection:bg-[#c4824a] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-32 pb-20 flex-1 flex items-center justify-center px-4">
        <div className="max-w-xl w-full mx-auto text-center space-y-6 bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-8 sm:p-12 shadow-sm">
          
          {/* Panda Visual */}
          <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-[#ebdcd0] shadow-md bg-[#f0e2d4]">
            <Image
              src="/images/about-panda-peeking.jpg"
              alt="Panda looking puzzled"
              fill
              className="object-cover object-center"
              sizes="144px"
            />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#ebdcd0]/60 px-3 py-1 rounded-full text-[11px] font-bold text-[#c4824a] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>404 • الصفحة غير موجودة</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
              عذراً! هذا الفنجان فارغ
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
              لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تبخرت كبخار الكابوتشينو الساخن، أو أن العنوان قد تغيّر.
            </p>
          </div>

          {/* Action Navigation Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#141715] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </Link>

            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fffcf8] hover:bg-[#f2e5d7] text-stone-800 border border-[#ebdcd0] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
            >
              <Coffee className="w-4 h-4 text-[#c4824a]" />
              <span>استكشف القائمة</span>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
