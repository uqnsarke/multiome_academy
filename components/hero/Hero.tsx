'use client';

import React from 'react';
import { PlayCircle, FileText, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a10]">
      
      {/* --- ANIMATED BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/hero-multiome.jpeg" 
          alt="Multiomics Hero Figure" 
          /* This triggers the 20s slow-zoom from globals.css */
          className="w-full h-full object-cover opacity-60 animate-slow-zoom"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        
        {/* Fixed Overlays for Contrast (Z-Index 10) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90 z-10"></div>
      </div>

      {/* --- CONTENT LAYER (Z-Index 20) --- */}
      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center min-h-screen">
        
        {/* Academy Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-8 fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next-Gen Multiomics
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl slide-up">
          Single-Cell Multiomics: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-text-shimmer">
            From Data to Mechanism
          </span>
        </h1>

        {/* Animated Subheadline */}
        <div className="max-w-3xl mx-auto mb-10 overflow-hidden">
          <p className="text-slate-100 text-lg md:text-2xl font-medium leading-relaxed drop-shadow-lg slide-up [animation-delay:400ms]">
            Bridge the gap between <span className="text-cyan-400">transcriptomics</span> and <span className="text-purple-400">chromatin accessibility</span>.
          </p>
          <p className="text-slate-400 text-md md:text-xl mt-2 leading-relaxed slide-up [animation-delay:700ms] opacity-80">
            Master the integration pipelines to unlock deeper biological insights.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 slide-up [animation-delay:1000ms]">
          <a 
            href="https://www.youtube.com/@nishat_BioAI" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] flex items-center gap-2 group transform hover:-translate-y-1"
          >
            <PlayCircle size={20} className="group-hover:scale-110 transition-transform"/>
            Start Learning
          </a>

          <a 
            href="#resources"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
          >
            <FileText size={20} />
            Get Resources
          </a>
        </div>

        {/* --- SCROLL DOWN ARROW --- */}
        <a 
          href="#resources" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-cyan-400 transition-colors duration-300 flex flex-col items-center gap-2 fade-in [animation-delay:1500ms]"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <ChevronDown className="animate-bounce" size={24} />
        </a>

      </div>
    </section>
  );
}
