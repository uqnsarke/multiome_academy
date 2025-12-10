"use client";

import {
  Dna,
  BarChart3,
  Layers,
  BrainCircuit,
  UserCheck,
  Video
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Single-Cell RNA-seq Analysis",
      icon: <Dna className="h-10 w-10 text-cyan-300" />,
      desc: "End-to-end scRNA-seq processing from FASTQ to biological insights, including QC, clustering, marker discovery, pathway enrichment, and publication-ready figures.",
      price: "Starts at $499",
      tag: null
    },
    {
      title: "scATAC-seq & Chromatin Analysis",
      icon: <BarChart3 className="h-10 w-10 text-purple-300" />,
      desc: "Chromatin accessibility analysis including peak calling, TF motif enrichment, chromVAR deviations, cis-regulatory annotation, and enhancer activity profiling.",
      price: "Starts at $599",
      tag: null
    },
    {
      title: "Multiome (RNA + ATAC) Integration",
      icon: <Layers className="h-10 w-10 text-pink-300" />,
      desc: "Integrated RNA–chromatin analysis using Seurat WNN and ArchR. Includes CCAN discovery, gene regulation links, and enhancer–promoter modeling.",
      price: "Starts at $799",
      tag: null
    },
    {
      title: "Machine Learning for Biology",
      icon: <BrainCircuit className="h-10 w-10 text-yellow-300" />,
      desc: "Custom ML pipelines for aging clocks, disease prediction, TF inference, embeddings, and multiomics feature engineering.",
      price: "Coming Soon",
      tag: "COMING SOON"
    },
    {
      title: "Scientific Consulting",
      icon: <UserCheck className="h-10 w-10 text-green-300" />,
      desc: "1:1 expert support for study design, analysis pipelines, figure preparation, manuscript guidance, and lab training.",
      price: "$99/hr",
      tag: null
    },
    {
      title: "Video Tutorials & Courses",
      icon: <Video className="h-10 w-10 text-orange-300" />,
      desc: "Step-by-step single-cell & multiomics training programs with real datasets. Includes coding walkthroughs and analysis notebooks.",
      price: "Coming Soon",
      tag: "COMING SOON"
    }
  ];

  return (
    <section id="services" className="relative py-28 text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f1f] to-black opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">
          Services
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          Transforming your data into discovery through advanced single-cell, 
          multiome, and AI-driven analysis.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                relative group p-8 rounded-2xl border border-white/10 bg-white/5 
                backdrop-blur-xl transition-all duration-300 
                hover:scale-[1.04] hover:-translate-y-1 
                hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]
              "
            >
              {/* COMING SOON TAG */}
              {service.tag && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 animate-pulse">
                  {service.tag}
                </span>
              )}

              {/* ICON */}
              <div className="mb-5">{service.icon}</div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* PRICE */}
              <p className="font-semibold text-cyan-300 text-sm">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

