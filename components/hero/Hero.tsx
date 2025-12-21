'use client';

import React, { useState } from 'react';
import { PlayCircle, FileText, X } from 'lucide-react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* =========================================================
          BACKGROUND LAYERS (Restored)
         ========================================================= */}
      
      {/* 1. The Image (Make sure this file exists in public!) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/services-bg.jpg" 
          alt="DNA Background" 
          className="w-full h-full object-cover opacity-40" // Increased opacity so it's not "gone"
        />
      </div>

      {/* 2. The "Black Block" (Gradient Overlay) */}
      {/* This darkens the image so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-0"></div>

      {/* 3. Animated Glow Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000"></div>


      {/* =========================================================
          CONTENT
         ========================================================= */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* --- MAIN HEADLINE --- */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          Single-Cell Multiomics: <br />
          {/* Animated Gradient Text */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-xy bg-[length:200%_auto]">
            From Data to Mechanism
          </span>
        </h1>

        {/* --- SUBTITLE --- */}
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
          Bridge the gap between transcriptomics and chromatin accessibility. <br className="hidden md:block" />
          Master the integration pipelines to unlock deeper biological insights.
        </p>

        {/* --- BUTTONS --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* 1. START LEARNING (Triggers Video) */}
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] flex items-center gap-2 group transform hover:-translate-y-1"
          >
            Start Learning
            <PlayCircle size={20} className="group-hover:scale-110 transition-transform"/>
          </button>

          {/* 2. GET RESOURCES (Scrolls Down) */}
          <a 
            href="#resources"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex items-center gap-2"
          >
            Get Resources
            <FileText size={20} />
          </a>
        </div>

      </div>

      {/* =========================================================
          VIDEO MODAL POPUP
         ========================================================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          
          {/* Overlay (Click to close) */}
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)}></div>
          
          <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <PlayCircle size={18} className="text-purple-400"/>
                Integration: Revealing the Inevitable
              </h3>
              <button onClick={() => setIsVideoOpen(false)} className="text-slate-400 hover:text-white transition-colors hover:bg-white/10 rounded-full p-1">
                <X size={24} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
               {/* Ensure 'integration-intro.mp4' is in /public */}
              <video controls autoPlay className="w-full h-full">
                <source src="/integration-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
