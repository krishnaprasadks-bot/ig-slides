'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  { id: 1, title: 'Modern Web Design Concept', subtitle: 'Premium UI/UX Showcase', type: 'cover' },
  { id: 2, title: 'Powerful First Impression', tag: 'Responsive • Modern • High-Converting', type: 'hero' },
  { id: 3, title: 'Mobile-First Experience', tag: 'Luxury Tech Aesthetic', type: 'mobile' },
  { id: 4, title: 'What Makes It Premium?', tag: 'Typography • Spacing • Animations', type: 'uiux' },
  { id: 5, title: 'Designed for Modern Brands', tag: 'Cinematic Arrangement', type: 'visuals' },
  { id: 6, title: 'Why Modern Websites Matter', tag: 'Results & Benefits', type: 'results' },
  { id: 7, title: 'Need a Website Like This?', subtitle: 'DM “WEBSITE”', type: 'cta' },
];

export default function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] p-8">
      <div className="relative w-[360px] h-[450px] bg-[#0a0a0a] overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
        {/* Header Logo */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image src="/velosite-logo.png" alt="Velosite Logo" fill className="object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="text-white font-bold text-sm tracking-tighter">VELOSITE</span>
        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {slides[currentIndex].type === 'cover' ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#050505]">
                <h1 className="text-white text-3xl font-bold mb-2 tracking-tight">{slides[currentIndex].title}</h1>
                <p className="text-[#3B82F6] font-mono text-xs uppercase tracking-widest mb-8">{slides[currentIndex].subtitle}</p>
                
                <div className="w-64 h-44 bg-[#1a1a1a] rounded-t-lg border-t border-x border-gray-700 shadow-2xl overflow-hidden relative mt-4">
                  <Image
                    src="/velosite-hero.png"
                    alt="Velosite Portfolio Hero"
                    width={360}
                    height={240}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-72 h-3 bg-gray-700 rounded-b-lg mt-0.5"></div>
              </div>
            ) : slides[currentIndex].type === 'hero' ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#050505]">
                <h1 className="text-white text-2xl font-bold mb-4">{slides[currentIndex].title}</h1>
                <div className="w-[85%] aspect-[16/9] bg-[#111] rounded-lg border border-gray-800 shadow-inner relative overflow-hidden">
                    <Image
                      src="/velosite-hero.png"
                      alt="Hero Section"
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                </div>
                <p className="text-[#3B82F6] font-mono text-xs mt-4 border border-[#3B82F6]/30 px-3 py-1 rounded-full">{slides[currentIndex].tag}</p>
              </div>
            ) : slides[currentIndex].type === 'uiux' ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#050505]">
                <h1 className="text-white text-2xl font-bold mb-4">{slides[currentIndex].title}</h1>
                <div className="w-[85%] aspect-video bg-[#111] rounded-lg border border-gray-800 shadow-inner relative overflow-hidden">
                  <Image
                    src="/velosite-services.png"
                    alt="Premium Showcase"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[#3B82F6] font-mono text-xs mt-4 border border-[#3B82F6]/30 px-3 py-1 rounded-full">{slides[currentIndex].tag}</p>
              </div>
            ) : slides[currentIndex].type === 'visuals' ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#050505]">
                <h1 className="text-white text-2xl font-bold mb-4">{slides[currentIndex].title}</h1>
                <div className="w-[85%] aspect-video bg-[#111] rounded-lg border border-gray-800 shadow-inner relative overflow-hidden">
                  <Image
                    src="/velosite-portfolio.png"
                    alt="Portfolio Showcase"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[#3B82F6] font-mono text-xs mt-4 border border-[#3B82F6]/30 px-3 py-1 rounded-full">{slides[currentIndex].tag}</p>
              </div>
            ) : slides[currentIndex].type === 'mobile' ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#050505]">
                <h1 className="text-white text-2xl font-bold mb-4">{slides[currentIndex].title}</h1>
                <div className="w-32 h-64 bg-[#111] rounded-3xl border border-gray-800 p-1 shadow-2xl relative overflow-hidden">
                    <Image
                      src="/velosite-mobile.png"
                      alt="Mobile Experience"
                      fill
                      className="object-contain"
                      referrerPolicy="no-referrer"
                    />
                </div>
                <p className="text-white font-mono text-xs mt-4">{slides[currentIndex].tag}</p>
              </div>
            ) : slides[currentIndex].type === 'cta' ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-purple-900/40" />
                {/* CSS Background fails gracefully if image is 0-byte/missing */}
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-[2.2] opacity-60 transition-opacity duration-1000"
                  style={{ backgroundImage: `url(/velosite-v-bg.png)` }}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-1 bg-[#3B82F6] mb-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <h1 className="text-white text-4xl font-black mb-3 tracking-tighter uppercase drop-shadow-[0_4px_24px_rgba(59,130,246,0.7)] leading-none">
                    {slides[currentIndex].title}
                  </h1>
                  <p className="text-white text-2xl font-bold tracking-[0.25em] uppercase mb-10 drop-shadow-md">
                    {slides[currentIndex].subtitle}
                  </p>
                </div>
              </div>
            ) : slides[currentIndex].type === 'results' ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#050505]">
                <h1 className="text-white text-2xl font-bold mb-4">{slides[currentIndex].title}</h1>
                <div className="w-[85%] aspect-video bg-[#111] rounded-lg border border-gray-800 shadow-inner relative overflow-hidden">
                  <Image
                    src="/velosite-contact.png"
                    alt="Contact Results"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>
                <p className="text-[#3B82F6] font-mono text-xs mt-4 border border-[#3B82F6]/30 px-3 py-1 rounded-full">{slides[currentIndex].tag}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-[#050505]">
                <h1 className="text-white text-2xl font-bold mb-4">{slides[currentIndex].title}</h1>
                <p className="text-gray-400 font-mono text-xs">{slides[currentIndex].tag}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 w-full flex justify-center gap-1.5 z-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-[#3B82F6] w-3' : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Mock Navigation */}
        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-10"><ChevronLeft /></button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 z-10"><ChevronRight /></button>
      </div>
    </div>
  );
}

