"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-teal-900">
      
      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85 pointer-events-none z-10" />
      
      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-5xl md:text-7xl font-bold drop-shadow-2xl leading-tight"
        >
          Learn Multiome Analysis From Scratch
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="text-gray-200 mt-6 text-xl md:text-2xl max-w-3xl drop-shadow-lg"
        >
          Single-cell RNA, ATAC, WNN, SCENIC+, multi-omics QC, and more — explained step-by-step.
        </motion.p>
        
        <motion.a
          href="#start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
          className="mt-10 px-10 py-5 bg-teal-500 text-white text-lg font-semibold rounded-xl 
                     shadow-2xl hover:bg-teal-400 hover:scale-105 hover:shadow-teal-500/50
                     transition-all duration-300 cursor-pointer"
        >
          Start Learning →
        </motion.a>
      </div>
    </section>
  );
}
