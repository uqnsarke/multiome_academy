"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background with slow zoom-in */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/multiome.png"
          alt="Multiome Background"
          fill
          priority
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* Subtle animated gradient (cinematic lighting) */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.45 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 pointer-events-none z-10"
      />

      {/* Optional DNA swirl overlay */}
      <motion.div
        initial={{ opacity: 0.15, y: -20 }}
        animate={{ opacity: 0.25, y: 20 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-20 pointer-events-none mix-blend-screen"
      >
        <Image
          src="/dna_swirl.png"     // <<--- place your swirl PNG here
          alt="DNA swirl"
          fill
          className="object-cover opacity-30"
        />
      </motion.div>

      {/* Blur + vignette for cinematic focus */}
      <div className="absolute inset-0 backdrop-blur-[1px] z-30 pointer-events-none"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-40 px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-5xl md:text-6xl font-bold drop-shadow-2xl"
        >
          Learn Multiome Analysis From Scratch
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gray-200 mt-4 text-lg md:text-2xl max-w-2xl drop-shadow"
        >
          Step-by-step tutorials on single-cell RNA-seq, ATAC-seq, WNN, SCENIC+, 
          regulatory networks, multi-omic QC, and more.
        </motion.p>

        {/* CTA button */}
        <motion.a
          href="#start"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mt-8 px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl shadow-lg hover:bg-teal-400 hover:shadow-2xl transition-all duration-300"
        >
          Start Learning →
        </motion.a>
      </div>
    </motion.div>
  );
}
