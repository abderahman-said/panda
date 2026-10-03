"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X, Maximize2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export default function GallerySection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Artisan Panda Latte Art",
      image: "/images/panda-latte-art.jpg",
      alt: "Cappuccino cup with cute panda face latte art",
    },
    {
      id: "2",
      title: "Cozy Café Atmosphere",
      image: "/images/cafe-interior.jpg",
      alt: "Panda Café warm brick interior and glowing neon sign",
    },
    {
      id: "3",
      title: "Signature Cold Brew",
      image: "/images/cold-brew.jpg",
      alt: "Iced dark cold brew coffee in glass with ice cubes",
    },
    {
      id: "4",
      title: "Morning Coffee & Croissant",
      image: "/images/coffee-pastry.jpg",
      alt: "Hot latte and flaky golden croissant on wooden table",
    },
    {
      id: "5",
      title: "Our Fluffy Mascot",
      image: "/images/baby-panda.jpg",
      alt: "Adorable baby panda bear drinking coffee",
    },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
              GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#191919] tracking-tight">
              A Glimpse of Our World
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-[#706a63] hidden md:block">
              Take a look at some moments <br className="hidden lg:inline" />
              from our cozy café.
            </p>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 bg-[#141715] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Swiper Custom Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-[#d8c5b3] hover:border-stone-900 bg-[#fffcf8] flex items-center justify-center text-stone-700 hover:text-stone-900 hover:bg-[#efe1d3] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-[#d8c5b3] hover:border-stone-900 bg-[#fffcf8] flex items-center justify-center text-stone-700 hover:text-stone-900 hover:bg-[#efe1d3] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper JS Carousel Container */}
        <div className="pt-1 pb-4">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={18}
            slidesPerView={1.25}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="w-full "
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => setSelectedImage(item)}
                  className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-[#f0e2d4]"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 35vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-stone-950 flex items-center justify-between text-white">
              <span className="font-semibold text-sm sm:text-base">{selectedImage.title}</span>
              <span className="text-xs text-stone-400">Panda Café Moments</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
