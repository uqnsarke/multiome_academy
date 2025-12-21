'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { IconChartBar, IconCode, IconDatabase, IconPresentation, IconChevronDown } from '@tabler/icons-react';

export default function ServicesSection() {
  const [flip, setFlip] = useState<number | null>(null);

  const services = [
    {
      title: "Single-Cell Analysis",
      icon: <IconChartBar size={40} className="text-indigo-400" />,
      desc: "Full pipeline processing: QC, Clustering, and Marker Identification.",
      details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, or Signac."
    },
    {
      title: "Multiomics Integration",
      icon: <IconDatabase size={40} className="text-purple-400" />,
      desc: "Merging RNA + ATAC seq data for deeper biological insights.",
      details: "Modalities integrated using Seurat WNN or MultiVI, followed by regulatory network inference."
    },
    {
      title: "Custom Visuals",
      icon: <IconPresentation size={40} className="text-pink-400" />,
      desc: "Figures grounded in rigorous statistical analysis.",
      details: "Differential expression, pathway enrichment, and publication-ready volcano and dot plots."
    },
    {
      title: "Code Consulting",
      icon: <IconCode size={40} className="text-cyan-400" />,
      desc: "Troubleshooting your single cell scripts.",
      details: "Direct debugging of notebooks and optimization for high-performance computing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#020617] text-white relative overflow-hidden scroll-mt-20">
      
      {/* --- ENHANCED DYNAMIC BACKGROUND --- */}
      {/* 1. Center Glow (Soft Indigo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      
      {/* 2. Top-Left Purple Nebula */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      
      {/* 3. Bottom-Right Cyan Nebula */}
      <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '15s' }}></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Improved Header Contrast */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300 drop-shadow-sm">
              Expert Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg slide-up [animation-delay:200ms]">
            Technical pipelines and analysis support for multiomics research.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto mb-20 min-h-[400px]">
          {services.map((s, i) => (
            <div key={i} onClick={() => setFlip(flip === i ? null : i)} className="slide-up">
              <ServiceCard
                flipped={flip === i}
                front={
                  /* Enhanced Glass with subtle white background for contrast */
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl group-hover:border-indigo-500/50 group-hover:bg-white/[0.06] transition-all duration-500"> 
                    <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700/50 shadow-xl group-hover:shadow-indigo-500/20 group-hover:-translate-y-1 transition-all duration-300">
                      {s.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    <span className="text-[10px] text-indigo-400 uppercase tracking-[0.2em] font-bold pt-4 opacity-60 group-hover:opacity-100 transition-opacity">
                      Click for Details
                    </span>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-indigo-950/90 backdrop-blur-2xl rounded-2xl border border-indigo-500/40 shadow-2xl">
                    <p className="text-indigo-100 text-sm leading-relaxed italic">"{s.details}"</p>
                    <a 
                      href="mailto:nishat.sarker@uq.net.au" 
                      className="mt-4 px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-bold shadow-lg shadow-indigo-900/40 transition-all active:scale-95" 
                      onClick={(e) => e.stopPropagation()}
                    >
                      Inquire Now
                    </a>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrow */}
        <div className="flex flex-col items-center gap-3 slide-up">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Knowledge Hub</p>
          <a href="#knowledge-hub" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-indigo-500/20 transition-all animate-bounce">
            <IconChevronDown size={28} className="text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
