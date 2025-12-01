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
    description:
      "Master quality control, filtering, clustering, marker identification, differential expression, pathway enrichment, and batch correction techniques.",
    icon: <IconMicroscope size={48} className="text-teal-400" />,
    color: "teal"
  },
  {
    title: "scATAC-seq & Chromatin Analysis",
    description:
      "Learn peak calling, motif analysis, transcription factor activity, cisTopic, ChromVAR, and ArchR workflows.",
    icon: <IconDatabase size={48} className="text-blue-400" />,
    color: "blue"
  },
  {
    title: "Multiome Integration",
    description:
      "Integrate RNA+ATAC data with gene activity scores, WNN, cis-regulatory networks, and SCENIC+ analysis.",
    icon: <IconSparkles size={48} className="text-purple-400" />,
    color: "purple"
  },
  {
    title: "Machine Learning for Biology",
    description:
      "Apply feature selection, predictive modeling, scVI, deep learning, and custom ML workflows to biological data.",
    icon: <IconBrain size={48} className="text-pink-400" />,
    color: "pink"
  },
  {
    title: "Expert Consultation",
    description:
      "Get personalized project guidance, code reviews, grant support, publication-ready figures, and custom pipelines.",
    icon: <IconUsers size={48} className="text-yellow-400" />,
    color: "yellow"
  },
  {
    title: "Video Tutorials & Courses",
    description:
      "Follow comprehensive step-by-step tutorials for scRNA-seq, scATAC-seq, and multiome analysis at any skill level.",
    icon: <IconSchool size={48} className="text-green-400" />,
    color: "green"
  },
];

export default function Services() {
  return (
    <section id="start" className="w-full min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What You'll Learn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive training in single-cell multiome analysis, from beginner fundamentals to advanced techniques
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                         border border-gray-100 transition-all duration-300
                         group cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          
            href="#contact"
            className="inline-block px-10 py-5 bg-teal-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-teal-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Start Learning Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
