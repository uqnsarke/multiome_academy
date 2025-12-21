'use client';

import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { IconChartBar, IconCode, IconDatabase, IconPresentation } from '@tabler/icons-react';

export default function ServicesSection() {
  const [flip, setFlip] = useState<number | null>(null);

  const services = [
    {
      title: "Single-Cell Analysis",
      icon: <IconChartBar size={40} className="text-indigo-400" />,
      desc: "Full pipeline processing: QC, Clustering, and Marker Identification.",
      details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, Signac, ArchR, or SnapATAC2."
    },
    {
      title: "Multiomics Integration",
      icon: <IconDatabase size={40} className="text-purple-400" />,
      desc: "Merging RNA + ATAC seq data for deeper biological insights.",
      details: "Modalities integrated using Seurat WNN or MultiVI, followed by regulatory network inference with SCENIC+ to identify TFs."
    },
    {
      title: "Custom Visuals",
      icon: <IconPresentation size={40} className="text-pink-400" />,
      desc: "Figures grounded in rigorous statistical analysis and biological interpretation.",
      details: "Differential expression (DESeq2), pathway enrichment, and publication-ready volcano plots, dot plots, and heatmaps."
    },
    {
      title: "Code Consulting",
      icon: <IconCode size={40} className="text-cyan-400" />,
      desc: "Troubleshooting your single cell scripts.",
      details: "Stuck on an error? I will debug your notebooks and optimize your workflow for high-performance computing."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Expert Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto slide-up [animation-delay:200ms]">
            From raw data to final figure. Click a card to see details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div key={i} onClick={() => setFlip(flip === i ? null : i)} className="slide-up" style={{ animationDelay: `${(i+1)*200}ms` }}>
              <ServiceCard
                flipped={flip === i}
                front={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4"> 
                    <div className="p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-xl shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-500">
                      {s.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold pt-2">Click for Details</span>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{s.title}</h3>
                    <p className="text-indigo-100 text-sm leading-relaxed italic">
                      "{s.details}"
                    </p>
                    <a 
                      href={`mailto:nishat.sarker@uq.net.au?subject=Inquiry: ${s.title}`}
                      className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full text-xs font-bold transition-all shadow-lg"
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
      </div>
    </section>
  );
}
