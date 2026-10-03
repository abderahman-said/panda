"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "هل كافيه باندا مناسب للعمل عن بعد والدراسة؟",
    answer:
      "نعم، بالتأكيد! نوفر واي فاي 5ج فائق السرعة، منافذ كهرباء في معظم المقاعد، وجلسات مريحة مصممة للتركيز والإنتاجية.",
  },
  {
    question: "هل يوجد موقف خاص للعملاء؟",
    answer:
      "نعم. لدينا أماكن موقف مخصصة أمام مدخل الكافيه مباشرةً، وبخدمة فالي مجانية خلال ساعات الذروة مساء نهاية الأسبوع.",
  },
  {
    question: "هل توفرون بدائل نباتية أو خالية من اللبن؟",
    answer:
      "نعم! جميع مشروباتنا الساخنة والباردة يمكن تخصيصها بحليب الشوفان النباتي أو حليب اللوز أو حليب جوز الهند عند الطلب.",
  },
  {
    question: "هل يسمح بدخول الحيوانات الأليفة؟",
    answer:
      "ترحب بالحيوانات المؤدبة بمقودة في منطقتنا الخارجية النباتية المظللة. لدينا حتى أطباق مياه جاهزة لرفاقك الفروي!",
  },
  {
    question: "ما هي ساعات العمل اليومية؟",
    answer:
      "مفتوحون يوميًا: من الأحد حتى الأربعاء من 8 صباحًا حتى 12 منتصف الليل، ومن الخميس حتى الجمعة من 8 صباحًا حتى 1:30 فجرًا. كرواسون الزبدة متوفر من الفرن ابتداءً من 8 صباحًا.",
  },
  {
    question: "كيف يمكنني التواصل معكم؟",
    answer:
      "يمكنك محادثة فريقنا فوريًا عبر واتسآب باستخدام زر الدردشة المباشر، أو الاتصال بمكتبنا مباشرةً خلال ساعات العمل.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-20 bg-[#f8eee4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#ebdcd0]/70 px-3.5 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#c4824a]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#716a62] uppercase">
              هل لديك أسئلة؟
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
            الأسئلة الشائعة
          </h2>

          <p className="text-sm sm:text-base text-[#645e57] leading-relaxed">
            كل ما تحتاج معرفته قبل زيارتنا الدافئة.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#fffcf8] border border-[#ebdcd0] rounded-2xl overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between  px-5 sm:px-6 py-4.5 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#141715] text-white rotate-180"
                        : "bg-[#f2e5d7] text-stone-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#ebdcd0]/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
