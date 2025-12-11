"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100">

      {/* Soft Glow Background */}
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[70%] 
        bg-gradient-to-r from-teal-300/40 via-blue-400/40 to-purple-300/40 
        blur-[120px] rounded-full pointer-events-none z-0"
      />

      {/* Background Image */}
      <motion.img
        src="/hero-multiome.png"
        alt="Multiome Analysis"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/50 pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl py-32">
        
        {/* Glass panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            relative backdrop-blur-2xl bg-white/20 border border-white/30
            rounded-3xl px-12 py-16
            shadow-[0_8px_50px_rgba(0,0,0,0.12)]
          "
        >
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 leading-tight">
            Learn Multiome Analysis<br />From Scratch
          </h1>

          <p className="text-gray-700 mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
            Single-cell RNA, ATAC, WNN, SCENIC+, and multi-omics — explained with clarity.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10"
          >
            <a
              href="#services"
              className="px-12 py-5 bg-black text-white rounded-2xl text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Learning →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
