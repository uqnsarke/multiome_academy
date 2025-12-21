'use client'; // Required for framer-motion

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-multiome.jpeg"  
          alt="Multiome Cellular Background"
          fill
          className="object-cover object-center opacity-80"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90"></div>
      </div>

      {/* 2. CONTENT */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="max-w-6xl space-y-10">
          {/* Main Headline (Static) */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Single-Cell Multiomics: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              From Data to Mechanism.
            </span>
          </h1>
          
          {/* ANIMATED TEXT SECTION */}
          <div className="text-xl md:text-2xl text-slate-100 font-medium space-y-2 leading-relaxed drop-shadow-md overflow-hidden">
            
            {/* First Line: Delays slightly */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Bridge the gap between transcriptomics and chromatin accessibility.
            </motion.p>

            {/* Second Line: Delays more to create a "staggered" effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Master the integration pipelines to unlock deeper biological insights.
            </motion.p>
          </div>
          
          {/* Buttons (Fade in last) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-6"
          >
            <Link href="/tutorials" className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white text-lg rounded-full font-bold shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] transition-all hover:scale-105">
              Start Learning
            </Link>
            <Link href="#resources" className="px-10 py-4 bg-slate-800/90 hover:bg-slate-700 text-white text-lg rounded-full font-bold border border-slate-600 backdrop-blur-md transition-all hover:scale-105">
              Get Resources
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
