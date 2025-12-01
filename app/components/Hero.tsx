"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Animated Aurora Background Gradients */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700" />
        
        {/* Animated aurora layer 1 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/40 via-transparent to-transparent blur-3xl"
        />
        
        {/* Animated aurora layer 2 */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/40 via-transparent to-transparent blur-3xl"
        />
        
        {/* Animated aurora layer 3 */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-blue-400/30 via-teal-400/30 to-purple-400/30 blur-3xl"
        />
      </div>

      {/* Background Image with parallax effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0">
        <img
          src="/hero-multiome.png"
          alt="Multiome Analysis - Cells and DNA"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </motion.div>

      {/* Enhanced overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-10" />
      
      {/* Centered Content with enhanced animations */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl">
        
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-6xl md:text-8xl font-bold drop-shadow-2xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-white">
          Learn Multiome Analysis From Scratch
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-gray-100 mt-8 text-xl md:text-2xl max-w-3xl drop-shadow-lg font-light">
          Single-cell RNA, ATAC, WNN, SCENIC+, multi-omics QC, and more — explained step-by-step.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          
            href="#start"
            className="mt-12 inline-block px-12 py-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 backdrop-blur-sm border border-white/20">
            Start Learning →
          </a>
        </motion.div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
