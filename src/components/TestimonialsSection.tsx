"use client";

import React from "react";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "سارة منصور",
    role: "زائرة دائمة",
    rating: 5,
    date: "الأسبوع الماضي",
    highlight: "فن اللاتيه على شكل باندا جمّل صباحي كاملاً!",
    text: "أتي إلى هنا ثلاث مرات في الأسبوع للعمل عن بعد. الأجواء هادئة، الواي فاي 5ج سريع لا ينقطع، والباريستا يتذكرون طلبي. وفن اللاتيه هذا يضع بسمة على أي شخص.",
  },
  {
    id: "2",
    name: "كريم السيد",
    role: "محب قهوة",
    rating: 5,
    date: "قبل أسبوعين",
    highlight: "حبوب مختارة حقيقية، محضورة بإتقان.",
    text: "كمستخدم جدي للإسبريسو، كافيه باندا يقدم حبوبًا أحادية المصدر محمصة بإتقان. الكولد بريو لمدة 18 ساعة فيه نكهات كرميل طبيعية دون مرارة. بكل سهولة مكاني المفضل في المدينة.",
  },
  {
    id: "3",
    name: "نوران حاتم",
    role: "طالبة هندسة معمارية",
    rating: 5,
    date: "منذ شهر",
    highlight: "إضاءة دافئة وأطيب كرواسون في المدينة.",
    text: "التصميم الداخلي رائع — جدران طوبية دافئة، نباتات خضراء، وموسيقى جاز هادئة. كرواسون بالزبدة من الفرن مباشرةً في الساعة 8 صباحًا مع فلات وايت — لا يُضاهى.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-20 bg-[#f8eee4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#ebdcd0]/70 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#c4824a]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#716a62] uppercase">
              محبوب من مجتمعنا
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
            ماذا يقول ضيوفنا
          </h2>

          <p className="text-sm sm:text-base text-[#645e57] leading-relaxed">
            من طقوس الصباح إلى قراءة العصر الهادئة، إليك لماذا يحب حينا كافيه باندا.
          </p>

          {/* Google Reviews Badge Summary */}
          <div className="inline-flex items-center gap-3 bg-[#fffcf8] border border-[#ebdcd0] rounded-full px-4 py-1.5 shadow-xs mt-2">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-900">4.9 / 5.0</span>
            <span className="text-xs text-stone-400">•</span>
            <span className="text-xs text-stone-600 font-medium">أكثر من +450 تقييم موثّق</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#fffcf8] border border-[#ebdcd0] hover:border-[#d8c5b3] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative group"
            >
              <div>
                {/* Top Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#f1e3d5]/60 flex items-center justify-center text-[#c4824a]">
                    <Quote className="w-4 h-4 fill-current opacity-60" />
                  </div>
                </div>

                {/* Highlight Quote */}
                <h3 className="text-sm sm:text-base font-bold text-[#191919] mb-2 leading-snug">
                  &ldquo;{item.highlight}&rdquo;
                </h3>

                {/* Detailed review text */}
                <p className="text-xs sm:text-sm text-[#615c56] leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-[#ebdcd0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#141715] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">{item.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-[11px] text-stone-500">{item.role}</span>
                  </div>
                </div>

                <span className="text-[10px] text-stone-400 font-medium">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
