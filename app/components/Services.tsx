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
    bg: "from-rose-50 to-pink-100",
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    description:
      "Learn peak calling, motif analysis, TF activity, cisTopic, ChromVAR, and ArchR workflows.",
    icon: IconDatabase,
    bg: "from-blue-50 to-sky-100",
  },
  {
    title: "Multiome Integration",
    description:
      "Integrate RNA+ATAC with WNN, cis-regulation, gene activity, and SCENIC+ workflows.",
    icon: IconSparkles,
    bg: "from-purple-50 to-indigo-100",
  },
  {
    title: "Machine Learning for Biology",
    description:
      "Apply ML for scVI, deep learning, feature selection, and predictive modeling.",
    icon: IconBrain,
    bg: "from-amber-50 to-yellow-100",
  },
  {
    title: "Expert Consultation",
    description:
      "Custom pipeline development, code review, figure creation, grants, manuscripts.",
    icon: IconUsers,
    bg: "from-teal-50 to-emerald-100",
  },
  {
    title: "Video Tutorials & Courses",
    description:
      "Step-by-step tutorials for scRNA-seq, ATAC-seq, Multiome, WNN, and SCENIC+.",
    icon: IconSchool,
    bg: "from-green-50 to-lime-100",
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

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="
                  rounded-3xl shadow-xl overflow-hidden
                  bg-gradient-to-br cursor-pointer
                  hover:shadow-2xl transition-all duration-300
                "
              >
                {/* Icon Background */}
                <div
                  className={`h-48 flex items-center justify-center bg-gradient-to-br ${service.bg}`}
                >
                  <Icon size={80} className="text-gray-800 opacity-90" />
                </div>

                {/* Text */}
                <div className="p-8 text-center">
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

      </div>
    </section>
  );
}
