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
    description: "Master QC, filtering, clustering, marker identification, DE analysis, and pathway enrichment.",
    icon: <IconMicroscope size={48} className="text-teal-400" />,
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    description: "Learn peak calling, motif analysis, TF activity, cisTopic, ChromVAR, and ArchR workflows.",
    icon: <IconDatabase size={48} className="text-blue-400" />,
  },
  {
    title: "Multiome Integration",
    description: "Integrate RNA+ATAC with WNN, gene activity, cis-regulatory links, and SCENIC+ analysis.",
    icon: <IconSparkles size={48} className="text-purple-400" />,
  },
  {
    title: "Machine Learning for Biology",
    description: "Apply ML for feature selection, scVI, deep learning, and predictive modeling of biological data.",
    icon: <IconBrain size={48} className="text-pink-400" />,
  },
  {
    title: "Expert Consultation",
    description: "Get personalized guidance, code review, grant support, publication-ready figures, and pipelines.",
    icon: <IconUsers size={48} className="text-yellow-400" />,
  },
  {
    title: "Video Tutorials & Courses",
    description: "Follow step-by-step tutorials for scRNA-seq, ATAC, multiome, WNN, SCENIC+, and more.",
    icon: <IconSchool size={48} className="text-green-400" />,
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-white to-gray-100 overflow-hidden">

      {/* Soft neon aura behind section */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[70%] h-[70%] bg-gradient-to-r from-teal-300/30 via-blue-400/30 to-purple-400/30 blur-[120px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-20">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 tracking-tight"
          >
            What You'll Learn
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mt-4"
          >
            A complete, beautifully structured journey through single-cell and multi-omic bioinformatics.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >

              {/* Neon glow */}
              <div className="
                absolute -inset-1 
                bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 
                rounded-3xl blur-xl opacity-40 
                group-hover:opacity-70 
                transition-all duration-700
              " />

              {/* Glass card */}
              <div className="
                relative bg-white/30 backdrop-blur-2xl 
                border border-white/40 
                rounded-3xl p-10 
                shadow-[0_8px_40px_rgba(0,0,0,0.12)]
                group-hover:shadow-[0_12px_50px_rgba(0,0,0,0.18)]
                transition-all duration-500
              ">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-24"
        >
          <a
            href="#contact"
            className="px-12 py-5 bg-black text-white font-medium text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Learning Today
          </a>
        </motion.div>

      </div>
    </section>
  );
}
