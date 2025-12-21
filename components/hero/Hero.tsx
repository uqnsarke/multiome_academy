'use client';

import React, { useState } from 'react';
import { PlayCircle, FileText, X } from 'lucide-react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1118]">
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/services-bg.jpg" 
          alt="DNA Background" 
          className="w-full h-full object-cover opacity-60" // Increased opacity
          onError={(e) => {
            // Fallback if image path is wrong
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* The "Black Block" - Now a radial gradient so the center/edges show the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next-Gen Bioinformatics
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
          Single-Cell Multiomics: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-text-shimmer">
            From Data to Mechanism
          </span>
        </h1>

        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
          Bridge the gap between transcriptomics and chromatin accessibility. <br className="hidden md:block" />
          Master the integration pipelines to unlock deeper biological insights.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center gap-2 group"
          >
            Start Learning
            <PlayCircle size={20} className="group-hover:scale-110 transition-transform"/>
          </button>

          <a 
            href="#resources"
            className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-bold rounded-full border border-slate-700 backdrop-blur-md transition-all flex items-center gap-2"
          >
            Get Resources
            <FileText size={20} />
          </a>
        </div>
      </div>

      {/* --- VIDEO MODAL --- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl transition-all">
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)}></div>
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between p-4 bg-slate-800">
              <h3 className="text-white font-medium italic">Integration: Revealing the Inevitable</h3>
              <button onClick={() => setIsVideoOpen(false)} className="text-white hover:bg-white/10 p-1 rounded-full"><X size={24}/></button>
            </div>
            <div className="aspect-video">
              <video controls autoPlay className="w-full h-full">
                <source src="/integration-intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
