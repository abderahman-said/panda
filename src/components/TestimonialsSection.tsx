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
    name: "Sarah Mansour",
    role: "Regular Visitor",
    rating: 5,
    date: "Last week",
    highlight: "The Panda Latte Art made my entire morning!",
    text: "I come here three times a week for remote work. The atmosphere is peaceful, the high-speed Wi-Fi never drops, and the baristas actually remember my order. Plus, that latte art puts a smile on anyone's face.",
  },
  {
    id: "2",
    name: "Karim El-Sayed",
    role: "Coffee Connoisseur",
    rating: 5,
    date: "2 weeks ago",
    highlight: "Genuine specialty coffee beans, properly brewed.",
    text: "As someone who takes espresso seriously, Panda Café delivers single-origin beans roasted to perfection. The 18-hour cold brew has natural caramel notes without any bitterness. Easily my favorite spot in town.",
  },
  {
    id: "3",
    name: "Nouran Hatem",
    role: "Architecture Student",
    rating: 5,
    date: "1 month ago",
    highlight: "Cozy lighting and the freshest croissants in the city.",
    text: "The interior aesthetics are stunning — warm brick walls, botanical plants, and gentle jazz playing in the background. Fresh butter croissants straight out of the oven at 8 AM paired with a flat white is unbeatable.",
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
              LOVED BY OUR COMMUNITY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
            What Our Guests Are Saying
          </h2>

          <p className="text-sm sm:text-base text-[#645e57] leading-relaxed">
            From morning rituals to peaceful afternoon reads, here is why our neighborhood loves Panda Café.
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
            <span className="text-xs text-stone-600 font-medium">Over 450+ verified reviews</span>
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
