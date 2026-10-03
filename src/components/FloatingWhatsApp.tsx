"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "+201026994802";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=مرحباً%20كافيه%20باندا!%20أود%20الاستفسار%20عن...`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 print:hidden select-none">
      {/* Friendly Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#141715] text-white text-xs font-medium px-3.5 py-2 rounded-2xl shadow-xl border border-stone-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>هل تحتاج مساعدة؟ تحدث معنا!</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-white ml-1 p-0.5 rounded cursor-pointer"
            aria-label="إغلاق الرسالة"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تحدث مع كافيه باندا على واتسآب"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current transform group-hover:rotate-6 transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.293 0-7.784 3.49-7.785 7.784 0 1.373.359 2.714 1.042 3.896l-1.107 4.043 4.14-1.086c1.14.623 2.428.951 3.71.952h.003c4.293 0 7.783-3.49 7.785-7.784 0-4.297-3.49-7.805-7.788-7.805z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
