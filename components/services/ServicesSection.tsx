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
    <section className="py-20 bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Expert Services
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          From raw data to final figure. Click a card to see details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div key={i} onClick={() => setFlip(flip === i ? null : i)}>
            <ServiceCard
              flipped={flip === i}
              front={
                <div className="flex flex-col items-center justify-center h-full space-y-4 p-6 text-center">
                  <div className="p-4 bg-slate-900/50 rounded-full">{s.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-100">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                  <span className="text-xs text-indigo-400 mt-4 uppercase tracking-wider font-semibold">
                    Click for Details
                  </span>
                </div>
              }
              back={
                <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 text-center bg-indigo-900/20">
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-200 leading-relaxed text-sm">
                    {s.details}
                  </p>
                  <button className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-full text-sm font-semibold transition">
                    Inquire Now
                  </button>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
