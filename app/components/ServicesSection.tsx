"use client";

import { useState } from "react";
import {
  Dna,
  BarChart3,
  Layers,
  BrainCircuit,
  UserCheck,
  Video,
} from "lucide-react";

export default function ServicesSection() {
  const [flipIndex, setFlipIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Single-Cell RNA-seq Analysis",
      icon: <Dna className="h-10 w-10 text-cyan-300" />,
      desc: "End-to-end scRNA-seq processing including QC, clustering, marker discovery, trajectory, enrichment, and publication-ready figures.",
      price: "Starts at $499",
    },
    {
      title: "scATAC-seq & Chromatin Analysis",
      icon: <BarChart3 className="h-10 w-10 text-purple-300" />,
      desc: "Chromatin accessibility, peak calling, TF motif enrichment, chromVAR deviations, enhancer annotations, and cis-regulatory modeling.",
      price: "Starts at $599",
    },
    {
      title: "Multiome (RNA + ATAC) Integration",
      icon: <Layers className="h-10 w-10 text-pink-300" />,
      desc: "Integrated RNA–chromatin analysis using Seurat WNN + ArchR, CCAN discovery, enhancer→promoter interactions, and regulatory mapping.",
      price: "Starts at $799",
    },
    {
      title: "Machine Learning for Biology",
      icon: <BrainCircuit className="h-10 w-10 text-yellow-300" />,
      desc: "Custom ML pipelines for aging clocks, disease prediction, embeddings, and multiomics feature engineering.",
      price: "Coming Soon",
    },
    {
      title: "Scientific Consulting",
      icon: <UserCheck className="h-10 w-10 text-green-300" />,
      desc: "1:1 expert support for study design, analysis pipelines, manuscript guidance, figure creation, and training.",
      price: "$99/hr",
    },
    {
      title: "Video Tutorials & Courses",
      icon: <Video className="h-10 w-10 text-orange-300" />,
      desc: "Step-by-step single-cell & multiome tutorials with real datasets, code walkthroughs, and complete analysis notebooks.",
      price: "Coming Soon",
    },
  ];

  return (
    <section id="services" className="relative py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-center mb-16">
          Services
        </h2>

        {/* GRID — 2 CARDS PER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => setFlipIndex(flipIndex === i ? null : i)}
              className="relative h-72 cursor-pointer perspective"
            >
              {/* FLIP WRAPPER */}
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flipIndex === i ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT - GLASS CARD */}
                <div className="
                  absolute inset-0 flex flex-col items-center justify-center gap-5 p-6
                  bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl
                  shadow-xl backface-hidden
                ">
                  {s.icon}
                  <h3 className="text-xl font-medium text-center">{s.title}</h3>
                </div>

                {/* BACK */}
                <div className="
                  absolute inset-0 p-6 flex flex-col justify-center rounded-2xl 
                  bg-white/20 border border-white/30 backdrop-blur-xl shadow-lg
                  transform rotate-y-180 backface-hidden
                ">
                  <p className="text-gray-200 mb-4">{s.desc}</p>
                  <p className="text-cyan-300 font-semibold mb-6">{s.price}</p>

                  <button className="
                    px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg w-fit
                    transition-all duration-200
                  ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
