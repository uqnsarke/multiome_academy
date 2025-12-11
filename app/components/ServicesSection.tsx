"use client";

import React, { useState } from "react";
import {
  Dna,
  BarChart3,
  Layers,
  BrainCircuit,
  UserCheck,
  Video,
} from "lucide-react";

interface Service {
  title: string;
  icon: React.ReactNode;
  desc: string;
  price: string;
}

const services: Service[] = [
  {
    title: "Single-Cell RNA-seq Analysis",
    icon: <Dna className="h-10 w-10 text-cyan-300" />,
    desc: "End-to-end scRNA-seq pipeline including QC, clustering, marker discovery, trajectory analysis, and publication-ready figures.",
    price: "Starts at $499",
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    icon: <BarChart3 className="h-10 w-10 text-purple-300" />,
    desc: "Peak calling, motif enrichment, chromVAR deviations, gene activity, and enhancer annotation workflows.",
    price: "Starts at $599",
  },
  {
    title: "Multiome (RNA + ATAC) Integration",
    icon: <Layers className="h-10 w-10 text-pink-300" />,
    desc: "WNN + ArchR integration, CCAN identification, enhancer–promoter mapping, and regulatory modeling.",
    price: "Starts at $799",
  },
  {
    title: "Machine Learning for Biology",
    icon: <BrainCircuit className="h-10 w-10 text-yellow-300" />,
    desc: "Custom models for aging clocks, disease prediction, embeddings, and feature engineering.",
    price: "Coming Soon",
  },
  {
    title: "Scientific Consulting",
    icon: <UserCheck className="h-10 w-10 text-green-300" />,
    desc: "1:1 expert support for study design, analysis pipelines, manuscript help, and figure creation.",
    price: "$99/hr",
  },
  {
    title: "Video Tutorials & Courses",
    icon: <Video className="h-10 w-10 text-orange-300" />,
    desc: "In-depth single-cell & multiome lessons with code walkthroughs and real datasets.",
    price: "Coming Soon",
  },
];

export default function ServicesSection() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section className="relative py-24 text-white min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f1f] to-black opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,255,0.12),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-center mb-16">Services</h2>

        {/* 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative h-72 cursor-pointer perspective"
              onClick={() => handleFlip(i)}
            >
              {/* FULL CARD (with transform + transition FIXED) */}
              <div
                className={`relative w-full h-full transform transition-transform duration-700 transform-style-preserve-3d ${
                  flipped === i ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center gap-4 p-6 backface-hidden">
                  {service.icon}
                  <h3 className="text-xl text-center">{service.title}</h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-center transform rotate-y-180 backface-hidden">
                  <p className="text-gray-200 mb-4">{service.desc}</p>
                  <p className="text-cyan-300 font-semibold mb-4">{service.price}</p>
                  <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg w-fit">
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
