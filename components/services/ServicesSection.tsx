'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { IconChartBar, IconCode, IconDatabase, IconPresentation, IconChevronDown } from '@tabler/icons-react';

export default function ServicesSection() {
  const [flip, setFlip] = useState<number | null>(null);

  const services = [
    {
      title: "Single-Cell Analysis",
      icon: <IconChartBar size={32} className="text-teal-400" />,
      desc: "Full pipeline processing: QC, Clustering, and Marker Identification.",
      details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, or Signac."
    },
    {
      title: "Multiomics Integration",
      icon: <IconDatabase size={32} className="text-emerald-400" />,
      desc: "Merging RNA + ATAC seq data for deeper insights.",
      details: "Modalities integrated using Seurat WNN or MultiVI, with regulatory network inference via SCENIC+."
    },
    {
      title: "Custom Visuals",
      icon: <IconPresentation size={32} className="text-cyan-400" />,
      desc: "Figures grounded in rigorous statistical analysis.",
      details: "Differential expression, pathway enrichment, and publication-ready volcano and dot plots."
    },
    {
      title: "Code Consulting",
      icon: <IconCode size={32} className="text-teal-300" />,
      desc: "Troubleshooting your single cell scripts.",
      details: "Direct debugging of notebooks and optimization for high-performance computing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#020617] text-white relative overflow-hidden scroll-mt-20">
      
      {/* --- TEAL NEBULA BACKGROUND --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-cyan-300">
              Expert Services
            </span>
          </h2>
          <p className="text-teal-100/50 max-w-2xl text-lg slide-up [animation-delay:200ms]">
            Technical pipelines and analysis support for multiomics research.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* --- LEFT SIDE: ANIMATED GRAPHIC --- */}
          <div className="lg:sticky lg:top-32 w-full lg:w-1/3 space-y-8 slide-up [animation-delay:400ms]">
            <div className="relative group aspect-square rounded-3xl border border-teal-500/20 bg-teal-950/10 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              
              {/* DNA / Plexus Placeholder Graphic */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:30px_30px] opacity-20"></div>
                {/* Animated Pulsing Orbs representing Cells */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Central Graphic Icon */}
              <div className="relative flex flex-col items-center text-center p-8">
                <div className="mb-6 p-6 rounded-full bg-teal-500/10 border border-teal-500/30 animate-bounce-slow">
                   <IconDatabase size={64} className="text-teal-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Integrated Analysis</h4>
                <p className="text-sm text-teal-100/60">Cross-modality correlation and trajectory inference.</p>
              </div>
            </div>

            {/* Sub-badge below graphic */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-teal-400 animate-ping"></div>
                    <span className="text-xs font-mono uppercase tracking-widest text-teal-400">Live Processing Engine</span>
                </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: SERVICES GRID --- */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
            {services.map((s, i) => (
              <div key={i} onClick={() => setFlip(flip === i ? null : i)} className="slide-up" style={{ animationDelay: `${(i+3)*150}ms` }}>
                <ServiceCard
                  flipped={flip === i}
                  front={
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-teal-950/20 backdrop-blur-xl rounded-3xl border border-teal-500/20 shadow-2xl group-hover:border-teal-400/50 transition-all duration-500"> 
                      <div className="p-4 bg-slate-900/80 rounded-2xl border border-teal-800/50 shadow-xl group-hover:shadow-teal-500/20 transition-all">
                        {s.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{s.title}</h3>
                      <p className="text-teal-100/50 text-xs leading-relaxed">{s.desc}</p>
                      <span className="text-[10px] text-teal-400 uppercase tracking-widest font-bold pt-4 opacity-50">Details</span>
                    </div>
                  }
                  back={
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-teal-950/90 backdrop-blur-2xl rounded-3xl border border-teal-500/40">
                      <p className="text-teal-50 text-xs leading-relaxed italic">"{s.details}"</p>
                      <a href="mailto:nishat.sarker@uq.net.au" className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-full text-[10px] font-bold shadow-lg" onClick={(e) => e.stopPropagation()}>Inquire Now</a>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

        </div>

        {/* Navigation Arrow */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-teal-500 font-bold">Knowledge Hub</p>
          <a href="#knowledge-hub" className="p-3 rounded-full border border-teal-500/20 bg-teal-500/5 hover:bg-teal-500/20 transition-all animate-bounce">
            <IconChevronDown size={28} className="text-teal-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
