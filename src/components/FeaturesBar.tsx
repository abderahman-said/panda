"use client";

import React from "react";
import { Coffee, Leaf, MapPin, Heart } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    {
      icon: Coffee,
      title: "قهوة فاخرة",
      description: "حبوب عالية الجودة، محضورة بإتقان تام.",
    },
    {
      icon: Leaf,
      title: "مكونات طازجة",
      description: "طبيعية، صحية، لذيذة.",
    },
    {
      icon: MapPin,
      title: "أجواء دافئة",
      description: "مكان مثالي للاسترخاء.",
    },
    {
      icon: Heart,
      title: "خدمة ودية",
      description: "لأنك تستحق الأفضل.",
    },
  ];

  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#ebdcd0]">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-4 py-3 sm:py-0 transition-transform hover:-translate-y-1 duration-200"
                >
                  <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#c4824a]">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1a1a1a] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6e6861] leading-relaxed max-w-[200px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
