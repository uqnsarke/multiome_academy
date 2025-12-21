'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { IconChartBar, IconCode, IconDatabase, IconPresentation, IconChevronDown } from '@tabler/icons-react';

export default function ServicesSection() {
  const [flip, setFlip] = useState<number | null>(null);

  // REDUCED TO 3 SERVICES: Removing the one used for the left-side graphic
  const services = [
    {
      title: "Single-Cell Analysis",
      icon: <IconChartBar size={32} className="text-teal-400" />,
      desc: "Full pipeline processing: QC, Clustering, and Marker Identification.",
      details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, or Signac."
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
      
      {/* Background Glows to fix the "too dark" issue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.06)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-cyan-300">
              Expert Services
            </span>
          </h2>
          <p className="text-teal-100/50 max-w-2xl text-lg">
            Technical pipelines and analysis support for multiomics research.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* --- LEFT SIDE: THE ANIMATED DNA GRAPHIC (NON-CLICKABLE) --- */}
          <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
            <div className="relative aspect-square rounded-[2.5rem] border border-teal-500/20 bg-teal-950/10 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center p-8 shadow-2xl">
              
              {/* DNA Helix Animation */}
              <div className="flex gap-2 mb-8 animate-helix">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="helix-strand" 
                    style={{ animationDelay: `${i * 0.15}s` }}
                  ></div>
                ))}
              </div>

              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  Bio-Circuitry
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Multiome Integration</h4>
                <p className="text-sm text-teal-100/60 leading-relaxed">
                  Mapping transcriptomic signatures to chromatin landscapes with high-fidelity pipelines.
                </p>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE REMAINING 3 SERVICE CARDS --- */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} onClick={() => setFlip(flip === i ? null : i)}>
                <ServiceCard
                  flipped={flip === i}
                  front={
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-teal-950/20 backdrop-blur-xl rounded-[2rem] border border-teal-500/20 shadow-2xl group-hover:border-teal-400/50 transition-all duration-500"> 
                      <div className="p-4 bg-slate-900/80 rounded-2xl border border-teal-800/50 shadow-xl group-hover:shadow-teal-500/20 transition-all">
                        {s.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{s.title}</h3>
                      <p className="text-teal-100/50 text-xs leading-relaxed">{s.desc}</p>
                      <span className="text-[10px] text-teal-400 uppercase tracking-widest font-bold pt-4 opacity-40 group-hover:opacity-100">Details</span>
                    </div>
                  }
                  back={
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-teal-950/90 backdrop-blur-2xl rounded-[2rem] border border-teal-500/40">
                      <p className="text-teal-50 text-xs leading-relaxed italic">"{s.details}"</p>
                      <a href="mailto:nishat.sarker@uq.net.au" className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-full text-[10px] font-bold shadow-lg" onClick={(e) => e.stopPropagation()}>Inquire Now</a>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

        </div>

        {/* Arrow to Knowledge Hub */}
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
