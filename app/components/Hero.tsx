"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const dnaParallax = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">

      {/* --- Layer 1: Cinematic Background (slow zoom) --- */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-multiome.jpeg"
          alt="Multiome DNA Background"
          fill
          priority
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* --- Layer 2: Parallax DNA layer --- */}
      <motion.div
        style={{ y: dnaParallax }}
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70"
      >
        <Image
          src="/hero-dna-overlay.png" // OPTIONAL secondary DNA layer
          alt="DNA Overlay"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* --- Layer 3: Shimmer Glow Overlay --- */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-teal-300/10 via-cyan-200/5 to-transparent blur-sm"
      />

      {/* --- Floating Molecular Particles --- */}
      <Particles />

      {/* --- Cinematic Text Reveal --- */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.h1
          initial={{ textShadow: "0px 0px 0px rgba(0,255,255,0.0)" }}
          animate={{ textShadow: "0px 0px 25px rgba(0,255,255,0.8)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-white text-4xl md:text-7xl font-extrabold text-center drop-shadow-lg tracking-wide"
        >
          Let's learn multiome analysis from scratch!
        </motion.h1>
      </motion.div>
    </div>
  );
}

/* --- Particle System: Floating molecular dust --- */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      flicker: Math.random() * 0.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.35 * p.flicker})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.flicker = 0.5 + Math.random() * 0.5;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      requestAnimationFrame(draw);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
    ></canvas>
  );
}
