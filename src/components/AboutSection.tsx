"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "+5", label: "سنوات من الخبرة" },
    { value: "+10K", label: "عميل سعيد" },
    { value: "100%", label: "مكونات طازجة" },
  ];

  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container */}
        <div className="relative bg-[#121614] rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 overflow-hidden text-white shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left: Café Interior Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src="/images/cafe-interior.jpg"
                  alt="الداخلية الدافئة لكافيه باندا بجدرانها الطوبية وتوهجها المضيء"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Content & Stats */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 lg:pr-12">
              
              <div className="space-y-2.5 sm:space-y-3">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
                  عن كافيه باندا
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white tracking-tight leading-[1.15]">
                  أكثر من مجرد <br />
                  كافيه، إنها <span className="text-[#c4824a]">روح.</span>
                </h2>

                <p className="text-stone-300 text-xs sm:text-base leading-relaxed max-w-xl pt-1 sm:pt-2">
                  وُلد كافيه باندا من فكرة بسيطة: خلق مكان تتلاقى فيه القهوة الرائعة والطعام الطيب والطاقة الإيجابية. مهمتنا هي جمع الناس — فنجانًا فنجانًا.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 pt-4 border-t border-white/10 max-w-lg">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-stone-400 mt-1 font-medium leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Link to Full About Page */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#c4824a] hover:bg-[#b0672e] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>قصتنا كاملة</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

          {/* Whimsical Panda Peeking (Bottom Right) */}
          <div className="absolute -bottom-2 right-0 sm:right-4 pointer-events-none z-0 select-none w-44 sm:w-64 lg:w-80 aspect-[1200/896] overflow-hidden opacity-25 sm:opacity-85 lg:opacity-100">
            <Image
              src="/images/about-panda-peeking.jpg"
              alt="باندا لطيف يطل من كافيه باندا"
              fill
              className="object-cover object-bottom"
              sizes="(max-width: 640px) 176px, (max-width: 1024px) 256px, 320px"
            />
            {/* Soft gradients for seamless edge blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#121614] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#121614]/50 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
