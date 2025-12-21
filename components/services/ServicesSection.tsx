'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { IconChartBar, IconCode, IconDatabase, IconPresentation, IconChevronDown } from '@tabler/icons-react';

export default function ServicesSection() {
  const [flip, setFlip] = useState<number | null>(null);

  const services = [
    {
      title: "Single-Cell Analysis",
      icon: <IconChartBar size={40} className="text-teal-400" />,
      desc: "Full pipeline processing: QC, Clustering, and Marker Identification.",
      details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, or Signac."
    },
    {
      title: "Multiomics Integration",
      icon: <IconDatabase size={40} className="text-emerald-400" />,
      desc: "Merging RNA + ATAC seq data for deeper biological insights.",
      details: "Modalities integrated using Seurat WNN or MultiVI, followed by regulatory network inference."
    },
    {
      title: "Custom Visuals",
      icon: <IconPresentation size={40} className="text-cyan-400" />,
      desc: "Figures grounded in rigorous statistical analysis.",
      details: "Differential expression, pathway enrichment, and publication-ready volcano and dot plots."
    },
    {
      title: "Code Consulting",
      icon: <IconCode size={40} className="text-teal-300" />,
      desc: "Troubleshooting your single cell scripts.",
      details: "Direct debugging of notebooks and optimization for high-performance computing."
    }
  ];

  return (
    /* Changed background to a Deep Teal Gradient */
    <section id="services" className="py-24 bg-gradient-to-b from-[#020617] via-[#042f2e] to-[#020617] text-white relative overflow-hidden scroll-mt-20">
      
      {/* --- TEAL VISUAL ENHANCEMENTS --- */}
      
      {/* 1. Primary Teal Glow - Illuminates the card area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* 2. Floating "Cell" Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-400/40 rounded-full animate-ping"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header with Teal/Cyan Gradient */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-cyan-300 drop-shadow-sm">
              Expert Services
            </span>
          </h2>
          <p className="text-teal-100/60 max-w-2xl mx-auto text-lg slide-up [animation-delay:200ms]">
            Technical pipelines and analysis support for multiomics research.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto mb-20">
          {services.map((s, i) => (
            <div key={i} onClick={() => setFlip(flip === i ? null : i)} className="slide-up">
              <ServiceCard
                flipped={flip === i}
                front={
                  /* Increased transparency to let the Teal glow through */
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-teal-950/20 backdrop-blur-xl rounded-2xl border border-teal-500/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:border-teal-400/50 transition-all duration-500"> 
                    <div className="p-4 bg-slate-900/80 rounded-2xl border border-teal-800/50 shadow-xl group-hover:shadow-teal-500/20 group-hover:-translate-y-1 transition-all duration-300">
                      {s.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{s.title}</h3>
                    <p className="text-teal-100/70 text-sm leading-relaxed">{s.desc}</p>
                    <span className="text-[10px] text-teal-400 uppercase tracking-[0.2em] font-bold pt-4 opacity-60 group-hover:opacity-100 transition-opacity">
                      Details
                    </span>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-teal-950/90 backdrop-blur-2xl rounded-2xl border border-teal-500/40 shadow-2xl">
                    <p className="text-teal-50 text-sm leading-relaxed italic">"{s.details}"</p>
                    <a 
                      href="mailto:nishat.sarker@uq.net.au" 
                      className="mt-4 px-8 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-full text-xs font-bold shadow-lg shadow-teal-900/40 transition-all active:scale-95" 
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

        {/* The Arrow pointing to Knowledge Hub */}
        <div className="flex flex-col items-center gap-3 slide-up">
          <p className="text-[10px] uppercase tracking-[0.3em] text-teal-500 font-bold">Knowledge Hub</p>
          <a href="#knowledge-hub" className="p-3 rounded-full border border-teal-500/20 bg-teal-500/5 hover:bg-teal-500/20 transition-all animate-bounce">
            <IconChevronDown size={28} className="text-teal-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
