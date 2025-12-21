'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { IconChartBar, IconCode, IconDatabase, IconPresentation, IconChevronDown } from '@tabler/icons-react';

export default function ServicesSection() {
  const [flip, setFlip] = useState<number | null>(null);

  const services = [
    { title: "Single-Cell Analysis", icon: <IconChartBar size={40} className="text-indigo-400" />, desc: "Full pipeline processing: QC, Clustering, and Marker Identification.", details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, or Signac." },
    { title: "Multiomics Integration", icon: <IconDatabase size={40} className="text-purple-400" />, desc: "Merging RNA + ATAC seq data for deeper biological insights.", details: "Modalities integrated using Seurat WNN or MultiVI, followed by regulatory network inference." },
    { title: "Custom Visuals", icon: <IconPresentation size={40} className="text-pink-400" />, desc: "Figures grounded in rigorous statistical analysis.", details: "Publication-ready volcano plots, dot plots, and heatmaps for Nature and Cell." },
    { title: "Code Consulting", icon: <IconCode size={40} className="text-cyan-400" />, desc: "Troubleshooting your single cell scripts.", details: "Direct debugging of notebooks and optimization for high-performance computing." }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Expert Services</span>
        </h2>
        
        {/* The Grid Fix: w-full and min-height ensures no gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto mb-20 min-h-[400px]">
          {services.map((s, i) => (
            <div key={i} onClick={() => setFlip(flip === i ? null : i)} className="slide-up">
              <ServiceCard
                flipped={flip === i}
                front={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 glass backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"> 
                    <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-xl shadow-indigo-500/10">{s.icon}</div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{s.title}</h3>
                    <p className="text-slate-400 text-sm">{s.desc}</p>
                    <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold pt-4">Click for Details</span>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-indigo-950/90 backdrop-blur-xl rounded-2xl border border-indigo-500/50 shadow-2xl">
                    <p className="text-indigo-100 text-sm leading-relaxed italic">"{s.details}"</p>
                    <a href="mailto:nishat.sarker@uq.net.au" className="mt-6 px-8 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full text-xs font-bold shadow-lg" onClick={(e) => e.stopPropagation()}>Inquire Now</a>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Knowledge Hub</p>
          <a href="#knowledge-hub" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-indigo-500/20 transition-all animate-bounce">
            <IconChevronDown size={32} className="text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
