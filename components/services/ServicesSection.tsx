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
      details: "End-to-end processing of 10x Genomics scRNA-seq and scATAC-seq data using Scanpy, Seurat, Signac, ArchR, or SnapATAC2, delivering curated objects and publication-ready figures."
    },
    {
      title: "Multiomics Integration",
      icon: <IconDatabase size={40} className="text-purple-400" />,
      desc: "Merging RNA + ATAC seq data for deeper biological insights.",
      details: "Modalities are integrated using Seurat WNN or MultiVI, followed by regulatory network inference with SCENIC+ to identify transcription factors, enhancer–gene links, and cell-state drivers."
    },
    {
      title: "Custom Visuals",
      icon: <IconPresentation size={40} className="text-pink-400" />,
      desc: "Figures grounded in rigorous statistical analysis and biological interpretation.",
      details: "Differential expression and accessibility analyses (DESeq2), pathway enrichment, and publication-ready visualizations including volcano plots, dot plots, and heatmaps."
    },
    {
      title: "Code Consulting",
      icon: <IconCode size={40} className="text-cyan-400" />,
      desc: "Troubleshooting your single cell scripts.",
      details: "Stuck on an error? I will debug your notebooks and optimize your workflow."
    }
  ];

  return (
    // CHANGED: Added 'relative overflow-hidden' to contain the background glows
    <section className="py-24 bg-black text-white relative overflow-hidden">
      
      {/* --- BACKGROUND GLOW EFFECTS (NEW) --- */}
      {/* Purple Glow (Top Left) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Cyan Glow (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>


      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Expert Services
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          From raw data to final figure. Click a card to see details.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div key={i} onClick={() => setFlip(flip === i ? null : i)}>
            <ServiceCard
              flipped={flip === i}
              front={
                <div className="flex flex-col items-center justify-center h-full space-y-4 p-6 text-center backdrop-blur-sm"> {/* Added backdrop-blur */}
                  <div className="p-4 bg-slate-900/80 rounded-full border border-slate-800 shadow-lg shadow-indigo-500/10">{s.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-100">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                  <span className="text-xs text-indigo-400 mt-4 uppercase tracking-wider font-semibold group-hover:text-indigo-300 transition-colors">
                    Click for Details
                  </span>
                </div>
              }
              back={
                <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center bg-indigo-950/40 backdrop-blur-md border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-200 leading-relaxed text-sm">
                    {s.details}
                  </p>
                  
                  <a 
                    href={`mailto:nishat.sarker@uq.net.au?subject=Inquiry: ${s.title}`}
                    className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full text-sm font-semibold transition inline-block shadow-lg shadow-indigo-500/25"
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
    </section>
  );
}
