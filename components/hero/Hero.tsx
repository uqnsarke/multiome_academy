'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react'; // Need an icon for the close button

export default function Hero() {
  // 1. State to track if the video modal is open
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- EXISTING STATIC BACKGROUND IMAGE --- */}
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

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="max-w-6xl space-y-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Single-Cell Multiomics: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              From Data to Mechanism
            </span>
          </h1>
          
          {/* Animated Text Lines */}
          <div className="text-xl md:text-2xl text-slate-100 font-medium space-y-2 leading-relaxed drop-shadow-md overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Bridge the gap between transcriptomics and chromatin accessibility.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Master the integration pipelines to unlock deeper biological insights.
            </motion.p>
          </div>
          
          {/* --- BUTTONS --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-6"
          >
            {/* CHANGED: This is now a <button> that opens the video modal */}
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white text-lg rounded-full font-bold shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] transition-all hover:scale-105"
            >
              Start Learning
            </button>

            <Link href="#resources" className="px-10 py-4 bg-slate-800/90 hover:bg-slate-700 text-white text-lg rounded-full font-bold border border-slate-600 backdrop-blur-md transition-all hover:scale-105">
              Get Resources
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- VIDEO MODAL POPUP --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Backdrop styling
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)} // Close modal when clicking outside video
          >
             {/* Close Button (X) */}
            <button 
              onClick={() => setIsVideoOpen(false)} 
              className="absolute top-6 right-6 text-slate-300 hover:text-white transition z-10 p-2 bg-black/50 rounded-full"
            >
              <IconX size={32} />
            </button>

            {/* Video Container */}
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_-10px_rgba(168,85,247,0.5)] border border-purple-500/30"
               onClick={(e) => e.stopPropagation()} // Prevent clicks on video from closing modal
            >
              <video
                src="/dna-loop.mp4"
                autoPlay
                controls // Added controls so user can pause/adjust volume
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
