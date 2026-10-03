"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ArrowLeft,
  X,
  Maximize2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Camera,
  Coffee,
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  title: string;
  category: "coffee" | "ambience" | "bakery" | "mascot";
  badge: string;
  image: string;
  alt: string;
  description: string;
}

const allGalleryPhotos: GalleryPhoto[] = [
  {
    id: "1",
    title: "Artisan Panda Latte Art",
    category: "coffee",
    badge: "Signature Art",
    image: "/images/panda-latte-art.jpg",
    alt: "Artisan latte art featuring our cute signature panda foam face",
    description: "Every cup is a canvas for our baristas to bring a warm smile to your day.",
  },
  {
    id: "2",
    title: "Warm Brick & Glowing Ambience",
    category: "ambience",
    badge: "Cozy Vibe",
    image: "/images/cafe-interior.jpg",
    alt: "Warm brick interior of Panda Café with glowing neon signage",
    description: "Relax in our ambient lighting, comfortable seating, and cozy neighborhood feel.",
  },
  {
    id: "3",
    title: "18-Hour Nitro Cold Brew",
    category: "coffee",
    badge: "Single Origin",
    image: "/images/cold-brew.jpg",
    alt: "Nitro cold brew coffee in a crystal glass with ice cubes",
    description: "Slowly steeped for maximum smoothness with natural chocolate and caramel notes.",
  },
  {
    id: "4",
    title: "Morning Duet: Coffee & Croissant",
    category: "bakery",
    badge: "Daily Special",
    image: "/images/coffee-pastry.jpg",
    alt: "Steaming hot latte and golden French butter croissant on wooden table",
    description: "The classic morning ritual served fresh every single day starting at 8:00 AM.",
  },
  {
    id: "5",
    title: "Our Fluffy Mascot Friend",
    category: "mascot",
    badge: "Panda Friend",
    image: "/images/baby-panda.jpg",
    alt: "Cute fluffy panda bear enjoying a gentle moment",
    description: "The lovable mascot representing the peaceful, joyful soul of Panda Café.",
  },
  {
    id: "6",
    title: "Velvety Microfoam Cappuccino",
    category: "coffee",
    badge: "Barista Favorite",
    image: "/images/cappuccino.jpg",
    alt: "Rich cappuccino with elegant tulip latte art pattern",
    description: "A harmonious balance of bold double espresso and velvety microfoam.",
  },
  {
    id: "7",
    title: "Belgian Chocolate Iced Mocha",
    category: "coffee",
    badge: "Rich & Sweet",
    image: "/images/mocha.jpg",
    alt: "Iced mocha layered with espresso, milk, and dark chocolate sauce",
    description: "Decadent dark cocoa melted into freshly pulled espresso shots.",
  },
  {
    id: "8",
    title: "Golden French Butter Croissant",
    category: "bakery",
    badge: "Fresh Baked",
    image: "/images/croissant.jpg",
    alt: "Flaky golden French butter croissant on ceramic plate",
    description: "Baked daily in-house using pure European butter for crisp, airy layers.",
  },
  {
    id: "9",
    title: "Refreshing Classic Iced Latte",
    category: "coffee",
    badge: "Best Seller",
    image: "/images/iced-latte.jpg",
    alt: "Iced latte with layered espresso and chilled fresh milk",
    description: "Chilled to perfection over clear ice for a smooth, refreshing afternoon lift.",
  },
  {
    id: "10",
    title: "Artisan Craft Behind The Bar",
    category: "ambience",
    badge: "Barista Craft",
    image: "/images/cta-banner.jpg",
    alt: "Barista preparing handcrafted espresso drinks behind the bar",
    description: "Our passionate coffee artisans pouring precision and care into every order.",
  },
  {
    id: "11",
    title: "The Peeking Mascot Vibe",
    category: "mascot",
    badge: "Playful Mascot",
    image: "/images/about-panda-peeking.jpg",
    alt: "Adorable 3D panda mascot peeking curiously",
    description: "Playful, friendly, and always ready to make your café visit delightful.",
  },
  {
    id: "12",
    title: "Signature Panda Coffee Ritual",
    category: "mascot",
    badge: "Iconic",
    image: "/images/hero-panda.jpg",
    alt: "Panda mascot holding a steaming cup of coffee",
    description: "Good coffee. Good mood. The founding philosophy of our café family.",
  },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "coffee", label: "Artisan Coffee" },
  { id: "ambience", label: "Café Ambience" },
  { id: "bakery", label: "Fresh Bakery" },
  { id: "mascot", label: "Panda Moments" },
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "all") return allGalleryPhotos;
    return allGalleryPhotos.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8eee4] text-[#1c1c1c] selection:bg-[#c4824a] selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span>/</span>
            <span className="font-semibold text-stone-800">Gallery</span>
          </div>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#ebdcd0]/60 px-3.5 py-1 rounded-full">
              <Camera className="w-3.5 h-3.5 text-[#c4824a]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#716a62] uppercase">
                MOMENTS & MEMORIES
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#191919] tracking-tight leading-tight">
              The Panda Café Visual Gallery
            </h1>

            <p className="text-sm sm:text-base text-[#615c56] leading-relaxed">
              Take a visual stroll through our warm brick interior, handcrafted latte art, fresh bakery treats, and joyful panda corners.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-12">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? allGalleryPhotos.length
                  : allGalleryPhotos.filter((p) => p.category === cat.id).length;

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
                      isActive ? "bg-stone-700 text-stone-200" : "bg-stone-200 text-stone-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-[#fffcf8] border border-[#ebdcd0] hover:border-[#d8c5b3] rounded-3xl p-3 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f0e2d4]">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#141715]/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {photo.badge}
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="pt-3 px-1.5 pb-1">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 truncate">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Community Banner */}
          <div className="mt-16 sm:mt-20 bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c4824a] uppercase tracking-wider">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>JOIN OUR INSTAGRAM COMMUNITY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#191919]">
                Tag @panda_coffee33 to Get Featured
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Take a photo of your favorite latte art, pastry, or cozy corner at Panda Café and tag us on Instagram with <span className="font-semibold text-stone-900">#PandaCafeMoments</span>.
              </p>
            </div>

            <a
              href="https://www.instagram.com/panda_coffee33?stkn=MXR5czlqcXR4czd6Mg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#141715] hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer shrink-0"
            >
              <svg className="w-4 h-4 fill-none stroke-amber-400 stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Follow @panda_coffee33</span>
            </a>
          </div>

          {/* Bottom Table Reservation Call-To-Action */}
          <div className="mt-12 bg-[#121614] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
              EXPERIENCE THE ATMOSPHERE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold max-w-xl mx-auto">
              Ready to Sip Coffee in Our Cozy Corner?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto">
              Photos capture a fraction of the warmth. Join us in person and enjoy fresh artisan coffee brewed right in front of you.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-[#141715] text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Contact Us</span>
              </Link>
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1c221e] hover:bg-[#252e28] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full border border-stone-700 transition-all duration-200 cursor-pointer"
              >
                <span>View Full Menu</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Lightbox Modal with Full-Screen Image Viewing & Arrows */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141715] rounded-3xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-110"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-110"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={currentPhoto.image}
                alt={currentPhoto.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>

            {/* Caption & Counter */}
            <div className="p-5 bg-[#0e1210] flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-3 border-t border-stone-800">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full uppercase">
                    {currentPhoto.badge}
                  </span>
                  <h4 className="text-base font-bold">{currentPhoto.title}</h4>
                </div>
                <p className="text-xs text-stone-400">{currentPhoto.description}</p>
              </div>

              <div className="text-xs font-mono text-stone-400 shrink-0 self-end sm:self-auto">
                {lightboxIndex! + 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer with botanical leaves */}
      <Footer />
    </div>
  );
}
