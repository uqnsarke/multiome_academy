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
      "QC, filtering, clustering, markers, DE analysis, pathway enrichment, batch correction and integration.",
    icon: <IconMicroscope size={40} className="text-teal-300" />,
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    description:
      "Peak calling, motif analysis, TF activity, cisTopic, ChromVAR, ArchR pipelines and regulatory networks.",
    icon: <IconDatabase size={40} className="text-blue-300" />,
  },
  {
    title: "Multiome (RNA+ATAC) Integration",
    description:
      "Gene activity, WNN, cis-regulatory networks, co-accessibility, peak-to-gene links, SCENIC+.",
    icon: <IconSparkles size={40} className="text-purple-300" />,
  },
  {
    title: "AI / Machine Learning for Biology",
    description:
      "Feature selection, predictive modeling, scVI, deep learning, embeddings and biological ML workflows.",
    icon: <IconBrain size={40} className="text-pink-300" />,
  },
  {
    title: "1:1 Consultation & Mentoring",
    description:
      "Project guidance, code review, grant support, figure preparation and complete analysis pipelines.",
    icon: <IconUsers size={40} className="text-yellow-300" />,
  },
  {
    title: "Courses & Tutorials",
    description:
      "Step-by-step scRNA-seq, scATAC-seq & multiome tutorials for beginners and advanced users.",
    icon: <IconSchool size={40} className="text-green-300" />,
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                scale: 1.06,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0 15px 45px rgba(0,255,255,0.25)",
              }}
              className="glass-card glow-border p-8 rounded-2xl"
            >
              {/* Floating hologram icon */}
              <motion.div
                className="mb-6"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
