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
      "Master QC, filtering, clustering, marker identification, DE analysis, and pathway enrichment.",
    icon: IconMicroscope,
    bg: "from-rose-100 to-pink-50",
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    description:
      "Learn peak calling, motif analysis, TF activity, cisTopic, ChromVAR, and ArchR workflows.",
    icon: IconDatabase,
    bg: "from-blue-100 to-sky-50",
  },
  {
    title: "Multiome Integration",
    description:
      "Integrate RNA+ATAC with WNN, gene activity, cis-regulatory links, and SCENIC+ analysis.",
    icon: IconSparkles,
    bg: "from-purple-100 to-indigo-50",
  },
  {
    title: "Machine Learning for Biology",
    description:
      "Apply ML for feature selection, scVI, deep learning, and predictive modeling of biological data.",
    icon: IconBrain,
    bg: "from-amber-100 to-yellow-50",
  },
  {
    title: "Expert Consultation",
    description:
      "Personalized guidance, code review, grant support, publication-ready figures, and custom pipelines.",
    icon: IconUsers,
    bg: "from-teal-100 to-emerald-50",
  },
  {
    title: "Video Tutorials & Courses",
    description:
      "Step-by-step tutorials for scRNA-seq, ATAC, multiome, WNN, SCENIC+, and more.",
    icon: IconSchool,
    bg: "from-green-100 to-lime-50",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
          What You'll Learn
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="
                  rounded-3xl shadow-xl overflow-hidden
                  bg-gradient-to-br cursor-pointer
                  hover:shadow-2xl transition-all duration-300
                "
              >
                {/* Top Section (Pastel Background Icon) */}
                <div
                  className={`relative h-60 w-full flex items-center justify-center bg-gradient-to-br ${service.bg}`}
                >
                  <Icon size={80} className="text-gray-800 opacity-80" />
                </div>

                {/* Text Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="
              px-12 py-5 bg-black text-white rounded-2xl
              text-lg font-medium shadow-xl hover:shadow-2xl
              transition-all duration-300
            "
          >
            Start Learning Today →
          </a>
        </div>
      </div>
    </section>
  );
}
