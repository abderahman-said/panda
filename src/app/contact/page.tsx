"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Wifi,
  Car,
  Heart,
  Coffee,
  Navigation,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "+201012345678";
  const whatsappDisplay = "+20 101 234 5678";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20Panda%20Café!%20I%20would%20like%20to%20inquire%20about...`;

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
            <span className="font-semibold text-stone-800">Contact Us</span>
          </div>

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#ebdcd0]/60 px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#c4824a]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#716a62] uppercase">
                FIND US & GET IN TOUCH
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#191919] tracking-tight leading-tight">
              Visit & Contact Panda Café
            </h1>

            <p className="text-sm sm:text-base text-[#615c56] leading-relaxed">
              Find our exact location on the map, chat with us on WhatsApp, check our daily opening hours, or drop by for handcrafted coffee in a cozy ambiance.
            </p>
          </div>

          {/* Quick Contact & Details Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
            
            {/* 1. WhatsApp Card (Direct Click-to-Chat) */}
            <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-10.416c-4.293 0-7.784 3.49-7.785 7.784 0 1.373.359 2.714 1.042 3.896l-1.107 4.043 4.14-1.086c1.14.623 2.428.951 3.71.952h.003c4.293 0 7.783-3.49 7.785-7.784 0-4.297-3.49-7.805-7.788-7.805z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1">WhatsApp Chat</h3>
                <p className="text-xs text-stone-500 mb-3">
                  Instant replies & quick queries during working hours.
                </p>
                <p className="text-sm font-extrabold text-stone-900 font-mono mb-4">
                  {whatsappDisplay}
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 2. Direct Phone Call Card */}
            <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#c4824a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1">Call Front Desk</h3>
                <p className="text-xs text-stone-500 mb-3">
                  Direct call for inquiries, table questions, or directions.
                </p>
                <p className="text-sm font-extrabold text-stone-900 font-mono mb-4">
                  {whatsappDisplay}
                </p>
              </div>
              <a
                href={`tel:${whatsappNumber}`}
                className="inline-flex items-center justify-center gap-2 bg-[#141715] hover:bg-neutral-800 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Us Now</span>
              </a>
            </div>

            {/* 3. Working Hours Card (مواعيد العمل) */}
            <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#c4824a] flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  {/* Live Status Badge */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Today</span>
                  </span>
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">Opening Hours</h3>
                
                <div className="space-y-2 text-xs text-stone-600">
                  <div className="flex justify-between pb-1.5 border-b border-[#ebdcd0]/60">
                    <span className="font-semibold text-stone-800">Sun – Wed</span>
                    <span className="font-mono text-stone-700">08:00 AM – 12:00 AM</span>
                  </div>
                  <div className="flex justify-between pb-1.5 border-b border-[#ebdcd0]/60">
                    <span className="font-semibold text-stone-800">Thu – Fri</span>
                    <span className="font-mono text-stone-700">08:00 AM – 01:30 AM</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="font-semibold text-stone-800">Saturday</span>
                    <span className="font-mono text-stone-700">08:00 AM – 12:00 AM</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 mt-3 italic">
                *Fresh bakery served hot starting 8:00 AM
              </p>
            </div>

            {/* 4. Email / General Info Card */}
            <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-stone-900/10 text-stone-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-1">Email Inquiries</h3>
                <p className="text-xs text-stone-500 mb-3">
                  For corporate, partnership, or general questions.
                </p>
                <p className="text-sm font-semibold text-stone-900 font-mono mb-4 break-all">
                  hello@pandacafe.com
                </p>
              </div>
              <a
                href="mailto:hello@pandacafe.com"
                className="inline-flex items-center justify-center gap-2 bg-[#fffcf8] hover:bg-[#f2e5d7] text-stone-800 border border-[#ebdcd0] text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#c4824a]" />
                <span>Send an Email</span>
              </a>
            </div>

          </div>

          {/* Interactive Map & Comprehensive Location Guide Section */}
          <div className="bg-[#fffcf8] border border-[#ebdcd0] rounded-3xl p-6 sm:p-10 shadow-sm mb-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Interactive Google Map */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
                      OUR LOCATION ON THE MAP
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191919] mt-0.5">
                      Panda Café Main House
                    </h2>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Panda+Cafe"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 bg-[#ebdcd0]/70 hover:bg-[#ebdcd0] px-4 py-2.5 rounded-full transition-colors self-start sm:self-auto cursor-pointer shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#c4824a]" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </div>

                {/* Embedded Map Frame */}
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#ebdcd0] shadow-inner bg-stone-200">
                  <iframe
                    title="Panda Cafe Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185040523!2d31.25846435!3d30.0594699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1710000000000!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[10%] contrast-[105%]"
                  />

                  {/* Cozy Floating Marker Card */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-3.5 shadow-lg pointer-events-none hidden sm:flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#141715] text-white flex items-center justify-center font-bold text-base shadow-xs">
                      🐼
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">Panda Café Sanctuary</h4>
                      <p className="text-[11px] text-stone-500">24 Bamboo Blossom Way, Lotus Square</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-stone-500 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c4824a]" />
                  <span>Located at 24 Bamboo Blossom Way, Downtown District, Lotus Square</span>
                </p>
              </div>

              {/* Right Column: Location Guide, Amenities & WhatsApp Quick Connect (No Form) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
                    VISITOR INFORMATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#191919] mt-0.5 mb-2">
                    Everything You Need to Know
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    We’ve designed Panda Café to be your favorite neighborhood retreat — quiet, welcoming, and full of good coffee and good mood.
                  </p>
                </div>

                {/* Amenities List */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#f8eee4] border border-[#ebdcd0]">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#c4824a] flex items-center justify-center shrink-0 shadow-xs">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Easy Parking & Valet</h4>
                      <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Dedicated customer parking directly in front of the café, plus complimentary valet during peak weekend hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#f8eee4] border border-[#ebdcd0]">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#c4824a] flex items-center justify-center shrink-0 shadow-xs">
                      <Wifi className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Work & Study Friendly</h4>
                      <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed">
                        High-speed fiber Wi-Fi, accessible power outlets at most tables, and a cozy quiet atmosphere.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#f8eee4] border border-[#ebdcd0]">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#c4824a] flex items-center justify-center shrink-0 shadow-xs">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Outdoor Garden & Pet Friendly</h4>
                      <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Breathe fresh air on our shaded botanical outdoor terrace. Well-behaved pets are always welcome!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#f8eee4] border border-[#ebdcd0]">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#c4824a] flex items-center justify-center shrink-0 shadow-xs">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Fresh Roasted Daily</h4>
                      <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-relaxed">
                        Specialty 100% Arabica beans, roasted in small batches, paired with French butter croissants baked fresh at 8:00 AM.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout Banner */}
                <div className="bg-[#141715] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-xs font-bold text-amber-400">HAVE A QUESTION RIGHT NOW?</p>
                    <p className="text-xs text-stone-300">Message our team on WhatsApp for an immediate answer.</p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shrink-0 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat with Us</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Call-To-Action */}
          <div className="bg-[#121614] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4824a] uppercase">
              READY FOR A COZY TIME?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold max-w-xl mx-auto">
              We’d Love to Welcome You
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto">
              Have a question or planning a visit? Chat with us directly on WhatsApp or explore our full artisanal menu.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1c221e] hover:bg-[#252e28] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full border border-stone-700 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Full Menu</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer with botanical leaves */}
      <Footer />
    </div>
  );
}
