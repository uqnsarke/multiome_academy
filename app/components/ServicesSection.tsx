"use client";

import React from "react";
import {
  Dna,
  BarChart3,
  Layers,
  BrainCircuit,
  UserCheck,
  Video,
} from "lucide-react";

const services = [
  {
    title: "Single-Cell RNA-seq Analysis",
    icon: <Dna className="h-10 w-10 text-cyan-300" />,
    desc: "Full scRNA-seq pipeline including QC, clustering, marker discovery, trajectories, and publication-ready figures.",
    price: "Starts at $499",
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    icon: <BarChart3 className="h-10 w-10 text-purple-300" />,
    desc: "Peak calling, motif analysis, chromVAR deviations, enhancer discovery, gene activity modeling.",
    price: "Starts at $599",
  },
  {
    title: "Multiome (RNA + ATAC) Integration",
    icon: <Layers className="h-10 w-10 text-pink-300" />,
    desc: "WNN + ArchR integration, CCAN discovery, regulatory modeling.",
    price: "Starts at $799",
  },
  {
    title: "Machine Learning for Biology",
    icon: <BrainCircuit className="h-10 w-10 text-yellow-300" />,
    desc: "Custom ML models for aging clocks, prediction, embeddings, and feature engineering.",
    price: "Coming Soon",
  },
  {
    title: "Scientific Consulting",
    icon: <UserCheck className="h-10 w-10 text-green-300" />,
    desc: "1:1 expert help for study design, analysis pipelines, writing, figures, troubleshooting.",
    price: "$99/hr",
  },
  {
    title: "Video Tutorials & Courses",
    icon: <Video className="h-10 w-10 text-orange-300" />,
    desc: "In-depth tutorials with coding, workflows, and real datasets.",
    price: "Coming Soon",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 text-white min-h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f1f] to-black opacity-90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-center mb-16">Services</h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="group w-full h-72 [perspective:1000px]"
            >
              {/* Card */}
              <div
                className="
                  relative w-full h-full transition-transform duration-700 
                  [transform-style:preserve-3d] 
                  group-hover:[transform:rotateY(180deg)]
                "
              >

                {/* FRONT */}
                <div
                  className="
                    absolute inset-0 flex flex-col items-center justify-center
                    bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10
                    [backface-visibility:hidden]
                  "
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0 rotate-y-180 rounded-2xl 
                    flex flex-col justify-center p-6 
                    bg-white/20 backdrop-blur-xl border border-white/20
                    [backface-visibility:hidden]
                  "
                >
                  <p className="text-gray-200 mb-3">{service.desc}</p>
                  <p className="text-cyan-300 font-semibold mb-4">{service.price}</p>
                  <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">
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
