"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Dna, BarChart3, Layers, BrainCircuit, UserCheck, Video } from "lucide-react";

export default function ServicesSection() {
  const [flipIndex, setFlipIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Dna className="h-12 w-12 text-cyan-300" />,
      title: "Single-Cell RNA-seq Analysis",
      desc: "End-to-end scRNA-seq QC, clustering, markers, trajectory, enrichment.",
      price: "$499"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-purple-300" />,
      title: "scATAC-seq & Chromatin Analysis",
      desc: "Peak calling, motifs, chromVAR, enhancer analysis.",
      price: "$599"
    },
    {
      icon: <Layers className="h-12 w-12 text-pink-300" />,
      title: "Multiome Integration",
      desc: "WNN + ArchR integration, CCAN discovery, promoter-enhancer mapping.",
      price: "$799"
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-yellow-300" />,
      title: "Machine Learning for Biology",
      desc: "Aging clocks, embeddings, prediction models.",
      price: "Coming Soon"
    },
    {
      icon: <UserCheck className="h-12 w-12 text-green-300" />,
      title: "Scientific Consulting",
      desc: "Study design, pipelines, manuscript help.",
      price: "$99/hr"
    },
    {
      icon: <Video className="h-12 w-12 text-orange-300" />,
      title: "Video Tutorials",
      desc: "Multiomics lessons with real datasets.",
      price: "Coming Soon"
    },
  ];

  return (
    <section className="py-28 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-semibold text-center mb-16">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div key={i} className="cursor-pointer perspective"
              onClick={() => setFlipIndex(flipIndex === i ? null : i)}
            >
              <ServiceCard
                flipped={flipIndex === i}
                front={
                  <>
                    {s.icon}
                    <h3 className="text-xl font-medium">{s.title}</h3>
                  </>
                }
                back={
                  <>
                    <p className="text-gray-200 mb-4">{s.desc}</p>
                    <p className="text-cyan-300 font-semibold mb-6">{s.price}</p>
                    <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">Learn More</button>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
