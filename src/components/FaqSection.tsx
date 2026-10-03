"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is Panda Café suitable for remote work and studying?",
    answer:
      "Yes, absolutely! We provide complimentary high-speed fiber Wi-Fi, accessible power outlets at many seating booths, and comfortable seating with gentle ambient acoustics designed for focus and productivity.",
  },
  {
    question: "Do you have dedicated customer parking?",
    answer:
      "Yes. We have dedicated parking spots directly facing the café entrance, as well as complimentary valet assistance during busy weekend evening hours.",
  },
  {
    question: "Do you offer plant-based or dairy-free milk alternatives?",
    answer:
      "Yes! All of our hot and iced beverages can be customized with premium barista oat milk, almond milk, or coconut milk upon request.",
  },
  {
    question: "Are pets allowed at Panda Café?",
    answer:
      "Well-behaved pets on a leash are very welcome in our shaded botanical outdoor terrace. We even have fresh water bowls ready for your furry companions!",
  },
  {
    question: "What are your daily opening hours?",
    answer:
      "We are open daily: Sunday through Wednesday from 8:00 AM to 12:00 AM, and Thursday through Friday from 8:00 AM to 1:30 AM. Fresh butter croissants and pastries are served straight from the oven starting at 8:00 AM.",
  },
  {
    question: "How can I inquire about group visits or questions?",
    answer:
      "You can chat with our team instantly on WhatsApp using our direct chat button, or call our front desk directly during working hours.",
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
              GOT QUESTIONS?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#645e57] leading-relaxed">
            Everything you need to know before visiting our cozy coffee house.
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
                  className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4.5 cursor-pointer focus:outline-hidden"
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
