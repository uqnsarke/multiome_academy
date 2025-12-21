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
    <section id="services" className="py-24 bg-slate-950 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Expert Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto slide-up [animation-delay:200ms]">
            Technical pipelines and analysis support for multiomics research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
          {services.map((s, i) => (
            <div key={i} onClick={() => setFlip(flip === i ? null : i)} className="slide-up">
              <ServiceCard
                flipped={flip === i}
                front={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4"> 
                    <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700">{s.icon}</div>
                    <h3 className="text-2xl font-bold">{s.title}</h3>
                    <p className="text-slate-400 text-sm">{s.desc}</p>
                    <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold pt-2">Details</span>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                    <p className="text-indigo-100 text-sm leading-relaxed italic">"{s.details}"</p>
                    <a href="mailto:nishat.sarker@uq.net.au" className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-full text-xs font-bold" onClick={(e) => e.stopPropagation()}>Inquire</a>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        {/* --- SECOND SCROLL ARROW --- */}
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
