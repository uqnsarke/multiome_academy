"use client";

import { motion } from "framer-motion";
import {
  IconDatabase,
  IconSparkles,
  IconBrain,
  IconSchool,
  IconMicroscope,
  IconUsers,
} from "@tabler/icons-react";

const services = [
  {
    title: "Single-Cell RNA-seq Analysis",
    description:
      "QC, filtering, clustering, markers, DE analysis, batch correction and integration.",
    icon: <IconMicroscope size={50} className="text-teal-300 drop-shadow-[0_0_10px_#00f5ff]" />,
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    description:
      "Peak calling, motif analysis, TF activity, cisTopic, ChromVAR, ArchR pipelines.",
    icon: <IconDatabase size={50} className="text-blue-400 drop-shadow-[0_0_10px_#009dff]" />,
  },
  {
    title: "Multiome (RNA+ATAC)",
    description:
      "WNN, gene activity, peak-gene links, regulatory networks, chromatin accessibility.",
    icon: <IconSparkles size={50} className="text-purple-300 drop-shadow-[0_0_10px_#b57fff]" />,
  },
  {
    title: "AI for Biology",
    description:
      "Deep learning, embeddings, dimensionality reduction, predictive modeling, scVI & ML workflows.",
    icon: <IconBrain size={50} className="text-pink-300 drop-shadow-[0_0_10px_#ff4fd8]" />,
  },
  {
    title: "Mentoring & 1:1 Consulting",
    description:
      "Project strategy, code review, grant support, figure preparation & workflow design.",
    icon: <IconUsers size={50} className="text-yellow-300 drop-shadow-[0_0_10px_#ffd500]" />,
  },
  {
    title: "Courses & Tutorials",
    description:
      "Full pipeline training for scRNA-seq, scATAC-seq, multiome, AI, ML and computational biology.",
    icon: <IconSchool size={50} className="text-green-300 drop-shadow-[0_0_10px_#00ff88]" />,
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">

      {/* Liquid morph background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,255,0.15),transparent_70%)] blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-16 drop-shadow-[0_0_25px_rgba(0,255,255,0.45)]"
        >
          What We Offer
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 8, rotateY: 8 }}
              className="relative p-8 rounded-2xl border border-cyan-400/20 
                         bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.15)]
                         hover:shadow-[0_0_35px_rgba(0,255,255,0.45)]
                         transition-all duration-300"
            >
              {/* Neon glowing ring */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-300/30 opacity-30 blur-xl"></div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">{service.icon}</div>

              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>

              <p className="text-white/70 text-center">{service.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
