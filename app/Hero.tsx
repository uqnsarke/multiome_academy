"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* --- Cinematic Background Image (slow zoom) --- */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-multiome.jpeg"   // <-- use your uploaded DNA image here
          alt="Multiome DNA Background"
          fill
          priority
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* --- Soft teal gradient overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-teal-900/10 to-black/60"></div>

      {/* --- Floating particles layer --- */}
      <Particles />

      {/* --- Cinematic Text --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center drop-shadow-[0_0_25px_rgba(0,255,255,0.55)]">
          Let's learn multiome analysis from scratch!
        </h1>
      </motion.div>
    </div>
  );
}

/* --- Particle System (premium subtle particles) --- */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        // Wrap around screen
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
      className="absolute inset-0 pointer-events-none opacity-50"
    ></canvas>
  );
}
