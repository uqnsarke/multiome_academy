"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* ---------------- BACKGROUND IMAGE ---------------- */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/multiome.png"
          alt="Multiome DNA Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ---------------- LIGHT CINEMATIC OVERLAY ---------------- */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b
                      from-black/30 via-black/10 to-black/40" />

      {/* ---------------- PARTICLES ---------------- */}
      <Particles />

      {/* ---------------- LIQUID MORPH GLOW ---------------- */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[600px] h-[600px]
                   bg-teal-400/15 blur-[120px] rounded-full pointer-events-none -z-5"
        animate={{
          borderRadius: [
            "40% 60% 60% 40%",
            "55% 45% 70% 30%",
            "30% 70% 40% 60%",
            "40% 60% 60% 40%",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---------------- TITLE ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <h1
          className="text-white text-4xl md:text-6xl font-extrabold text-center
                     drop-shadow-[0_0_35px_rgba(0,255,255,0.7)]
                     px-4"
        >
          Let's learn multiome analysis from scratch!
        </h1>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------------------------------
   PARTICLE SYSTEM
-------------------------------------------------- */
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
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.45)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

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
      className="absolute inset-0 pointer-events-none opacity-50 -z-5"
    />
  );
}
