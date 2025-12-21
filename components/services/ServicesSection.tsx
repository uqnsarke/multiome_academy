'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { IconChartBar, IconCode, IconDatabase, IconPresentation } from '@tabler/icons-react';

export default function ServicesSection() {
  const [flip, setFlip] = useState<number | null>(null);

  const services = [
    {
      title: "Single-Cell Analysis",
      icon: <IconChartBar size={36} className="text-teal-400" />,
      desc: "Full pipeline processing: QC, Clustering, and Marker Identification.",
      details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, or Signac."
    },
    {
      title: "Multiomics Integration",
      icon: (
        <div className="flex gap-1 animate-helix h-8 items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-6 bg-teal-400 rounded-full helix-strand" style={{ animationDelay: `${i * 0.15}s` }}></div>
          ))}
        </div>
      ),
      desc: "Merging RNA + ATAC seq data for deeper biological insights.",
      details: "Modalities integrated using Seurat WNN or MultiVI, followed by regulatory network inference via SCENIC+."
    },
    {
      title: "Custom Visuals",
      icon: <IconPresentation size={36} className="text-cyan-400" />,
      desc: "Figures grounded in rigorous statistical analysis.",
      details: "Differential expression, pathway enrichment, and publication-ready volcano and dot plots."
    },
    {
      title: "Code Consulting",
      icon: <IconCode size={36} className="text-teal-300" />,
      desc: "Troubleshooting your single cell scripts.",
      details: "Direct debugging of notebooks and optimization for high-performance computing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#020617] text-white relative overflow-hidden scroll-mt-20">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.07)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-cyan-300">
              Expert Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technical pipelines and analysis support for multiomics research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} onClick={() => setFlip(flip === i ? null : i)} className="slide-up">
              <ServiceCard
                flipped={flip === i}
                front={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 glass backdrop-blur-md rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all shadow-2xl"> 
                    <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700/50">
                      {s.icon}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    <span className="text-[10px] text-teal-400 uppercase tracking-widest font-bold pt-4 opacity-50">Details</span>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-teal-950/90 backdrop-blur-xl rounded-2xl border border-teal-500/40">
                    <p className="text-teal-50 text-sm italic">"{s.details}"</p>
                    <a href="mailto:nishat.sarker@uq.net.au" className="mt-4 px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-full text-xs font-bold" onClick={(e) => e.stopPropagation()}>Inquire Now</a>
                  </div>
                }
              />
            </div>
          ))}
        </div>
        
        {/* Scroll Arrow removed here */}

      </div>
    </section>
  );
}
