"use client";
import { motion } from "framer-motion";
// import Image from "next/image"; // Comment out temporarily

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-teal-900">
      
      {/* Background Image with slow zoom - COMMENTED OUT FOR TESTING
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-multiome.jpeg"
          alt="Multiome Hero Background"
          fill
          priority
          className="object-cover opacity-95"
        />
      </motion.div>
      */}
      
      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b 
                      from-black/20 via-black/40 to-black/85 
                      pointer-events-none z-10" />
      
      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-5xl md:text-6xl font-bold drop-shadow-2xl"
        >
          Learn Multiome Analysis From Scratch
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gray-200 mt-4 text-lg md:text-2xl max-w-2xl drop-shadow"
        >
          Single-cell RNA, ATAC, WNN, SCENIC+, multi-omics QC, and more — explained step-by-step.
        </motion.p>
        
        <motion.a
          href="#start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mt-8 px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl 
                     shadow-lg hover:bg-teal-400 hover:shadow-2xl 
                     transition-all duration-300"
        >
          Start Learning →
        </motion.a>
      </div>
    </div>
  );
}
