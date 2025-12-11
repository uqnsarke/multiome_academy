"use client";

import { motion } from "framer-motion";
import ParticleLayer from "./ParticleLayer";
import NeonRing from "./NeonRing";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <motion.img
        src="/hero/dna-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
      />

      {/* Floating particles */}
      <ParticleLayer />

      {/* Neon ring */}
      <NeonRing />

      {/* Frosted Glass Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="
          relative z-10
          backdrop-blur-3xl bg-white/10 border border-white/20
          px-12 py-16 rounded-3xl 
          shadow-[0_0_60px_10px_rgba(0,255,255,0.1)]
        "
      >
        <h1 className="text-5xl md:text-7xl font-semibold text-white text-center leading-tight">
          Learn Multiome Analysis<br/>From Scratch
        </h1>

        <p className="text-gray-300 mt-6 text-xl md:text-2xl text-center max-w-2xl">
          Single-cell RNA, ATAC, WNN, SCENIC+, and multi-omics — explained with clarity.
        </p>
      </motion.div>
    </section>
  );
}
