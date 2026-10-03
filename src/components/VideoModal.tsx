"use client";

import React from "react";
import Image from "next/image";
import { X, Play, Volume2, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#121614] rounded-3xl shadow-2xl border border-stone-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Simulation Screen with ambient audio player effect */}
        <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
          <Image
            src="/images/cafe-interior.jpg"
            alt="Panda Cafe Video Experience"
            fill
            className="object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Central Play Animation */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-4 px-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl animate-pulse">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Panda Experience</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Brewing Happiness, One Cup at a Time
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-md">
                Experience the aroma, the calm atmosphere, and the craft behind our artisan coffee beans.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#0e1210] flex items-center justify-between text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <Volume2 className="w-4 h-4 text-amber-400" />
            Cozy Jazz & Rain Ambience
          </span>
          <span className="text-stone-500">Panda Café Stories • 2:15</span>
        </div>
      </div>
    </div>
  );
}
