"use client";

import { motion } from "framer-motion";
import { 
  IconDatabase, 
  IconSparkles, 
  IconBrain, 
  IconSchool, 
  IconMicroscope, 
  IconUsers 
} from "@tabler/icons-react";

const services = [
  {
    title: "Single-Cell RNA-seq Analysis",
    description: "Master quality control, filtering, clustering, marker identification, differential expression, pathway enrichment, and batch correction techniques.",
    icon: <IconMicroscope size={48} className="text-teal-400" />,
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    description: "Learn peak calling, motif analysis, transcription factor activity, cisTopic, ChromVAR, and ArchR workflows.",
    icon: <IconDatabase size={48} className="text-blue-400" />,
  },
  {
    title: "Multiome Integration",
    description: "Integrate RNA+ATAC data with gene activity scores, WNN, cis-regulatory networks, and SCENIC+ analysis.",
    icon: <IconSparkles size={48} className="text-purple-400" />,
  },
  {
    title: "Machine Learning for Biology",
    description: "Apply feature selection, predictive modeling, scVI, deep learning, and custom ML workflows to biological data.",
    icon: <IconBrain size={48} className="text-pink-400" />,
  },
  {
    title: "Expert Consultation",
    description: "Get personalized project guidance, code reviews, grant support, publication-ready figures, and custom pipelines.",
    icon: <IconUsers size={48} className="text-yellow-400" />,
  },
  {
    title: "Video Tutorials & Courses",
    description: "Follow step-by-step tutorials for scRNA-seq, scATAC-seq, and multiome analysis at any skill level.",
    icon: <IconSchool size={48} className="text-green-400" />,
  },
];

export default function Services() {
  return (
    <section id="start" className="w-full min-h-screen py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---- Header ---- */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5"
          >
            What You'll Learn
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Master single-cell and multiome bioinformatics with an Apple-quality
            learning experience — clean, intuitive, and beautifully designed.
          </motion.p>
        </div>

        {/* ---- Services Grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >

              {/* Apple-style neon aura */}
              <div
                className="
                  absolute -inset-0.5 
                  bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 
                  rounded-3xl blur-xl opacity-30 
                  group-hover:opacity-60 
                  transition-all duration-700
                "
              ></div>

              {/* Glassmorphism inner card */}
              <div
                className="
                  relative bg-white/60 backdrop-blur-xl
                  rounded-3xl p-10 border border-white/40
                  shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                  group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                  transition-all duration-500
                "
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ---- CTA ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <a
            href="#contact"
            className="
              inline-block px-12 py-5 
              bg-black text-white 
              text-lg font-semibold rounded-2xl
              shadow-xl hover:shadow-2xl 
              hover:bg-gray-900 transform hover:scale-105
              transition-all duration-300
            "
          >
            Start Learning Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
