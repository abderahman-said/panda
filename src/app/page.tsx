"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f8eee4] text-[#1c1c1c] selection:bg-[#c4824a] selection:text-white">
      {/* Main Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero onWatchVideo={() => setIsVideoOpen(true)} />

        {/* Feature Highlights Bar */}
        <FeaturesBar />

        {/* Menu Showcase Section (Display Only) */}
        <MenuSection />

        {/* About Panda Section */}
        <AboutSection />

        {/* Gallery Section with Swiper */}
        <GallerySection />

        {/* Call to Action Banner */}
        <CtaSection />
      </main>

      {/* Footer with Botanical Leaves */}
      <Footer />

      {/* Video Ambience Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
