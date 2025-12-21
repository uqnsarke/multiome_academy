'use client';

import React, { useState } from 'react';
import { PlayCircle, FileText, X, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black z-0"></div>
      
      {/* 2. DNA Background Image (Optional - looks like your screenshot) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
         {/* If you have the DNA background image, save it as 'dna-bg.jpg' in public */}
         <img src="/services-bg.jpg" alt="DNA Background" className="w-full h-full object-cover" />
      </div>

      {/* 3. Teal/Blue Glow (Left) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* 4. Purple Glow (Right) */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* --- MAIN HEADLINE --- */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Single-Cell Multiomics: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            From Data to Mechanism
          </span>
        </h1>

        {/* --- SUBTITLE --- */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Bridge the gap between transcriptomics and chromatin accessibility. <br className="hidden md:block" />
          Master the integration pipelines to unlock deeper biological insights.
        </p>

        {/* --- BUTTONS --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          {/* 1. START LEARNING (Triggers Video) */}
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all shadow-lg shadow-purple-600/25 flex items-center gap-2 group"
          >
            Start Learning
            <PlayCircle size={20} className="group-hover:scale-110 transition-transform"/>
          </button>

          {/* 2. GET RESOURCES (Scrolls to Resource Section) */}
          <a 
            href="#resources"
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-slate-200 font-bold rounded-full border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
          >
            Get Resources
            <FileText size={20} />
          </a>
        </div>

      </div>

      {/* --- VIDEO MODAL (Pop-up) --- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          
          {/* Overlay (Click to close) */}
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)}></div>
          
          <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <PlayCircle size={18} className="text-purple-400"/>
                Integration: Revealing the Inevitable
              </h3>
              <button onClick={() => setIsVideoOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
               {/* Make sure 'integration-intro.mp4' is in your /public folder */}
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
