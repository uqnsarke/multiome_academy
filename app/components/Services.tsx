"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  IconBrandGithub,
  IconBrandYoutube,
  IconUsers,
  IconSchool,
} from "@tabler/icons-react";

// ---------------- 3D Tilt Card ------------------
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);

    x.set(posX);
    y.set(posY);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}

// ---------------- Services Data ------------------
const sections = [
  {
    title: "GitHub Code Hub",
    description:
      "Explore pipelines, notebooks, SCENIC+ workflows, LIANA, and reproducible multiome codes.",
    icon: IconBrandGithub,
    bg: "from-gray-100 to-gray-50",
    button: "View GitHub →",
    link: "https://github.com/",
    imageSide: "left",
  },
  {
    title: "Video Tutorials",
    description:
      "High-quality tutorials on scRNA, scATAC, Multiome, QC, WNN, SCENIC+, and more.",
    icon: IconBrandYoutube,
    bg: "from-rose-100 to-red-50",
    button: "Watch Tutorials →",
    link: "https://youtube.com/",
    imageSide: "right",
  },
  {
    title: "Expert Consultation",
    description:
      "Custom pipeline development, figure creation, manuscripts, grants, troubleshooting.",
    icon: IconUsers,
    bg: "from-teal-100 to-emerald-50",
    button: "Book Consultation →",
    link: "#contact",
    imageSide: "left",
  },
  {
    title: "Teaching & Mentorship",
    description:
      "1-on-1 and group lessons: scRNA-seq, scATAC-seq, multiome, coding, visualization.",
    icon: IconSchool,
    bg: "from-sky-100 to-indigo-50",
    button: "Start Learning →",
    link: "#contact",
    imageSide: "right",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-white z-50 overflow-hidden">

      {/* Apple Vision Pro Orbs */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-40 left-20 w-72 h-72 bg-teal-200/40 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200/30 blur-[100px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-6 space-y-28 z-10">

        {/* Header */}
        <h2 className="text-6xl font-bold text-center text-gray-900 mb-10">
          My Services
        </h2>

        {/* Sections Loop */}
        {sections.map((sec, i) => {
          const Icon = sec.icon;
          const isLeft = sec.imageSide === "left";

          return (
            <div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                isLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* IMAGE SIDE */}
              <TiltCard>
                <div className="relative w-full lg:w-1/2">

                  {/* Glow */}
                  <div
                    className="absolute -inset-3 rounded-3xl blur-2xl opacity-50
                    bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400"
                  />

                  {/* Glass Card */}
                  <div
                    className={`
                      relative h-72 flex items-center justify-center rounded-3xl
                      backdrop-blur-2xl bg-white/30 border border-white/40 shadow-xl
                      bg-gradient-to-br ${sec.bg}
                    `}
                  >
                    <Icon size={140} className="text-gray-900 opacity-85" />
                  </div>
                </div>
              </TiltCard>

              {/* TEXT SIDE */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-4xl font-semibold text-gray-900">
                  {sec.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {sec.description}
                </p>

                <a
                  href={sec.link}
                  className="inline-block px-10 py-4 bg-black text-white rounded-2xl text-lg font-medium shadow-lg hover:shadow-2xl transition-all"
                >
                  {sec.button}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
