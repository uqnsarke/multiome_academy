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

/* -------------------------------------------------------
   TILT CARD COMPONENT (Apple-style 3D hover)
--------------------------------------------------------*/
function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // tilt limits: -8° to +8°
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX);
    y.set(offsetY);
  }

  function resetTilt() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------
   SERVICE SECTIONS
--------------------------------------------------------*/
const sections = [
  {
    title: "GitHub Code Hub",
    description:
      "Explore my single-cell and multiome pipelines, notebooks, and reproducible workflows. All code used in tutorials and research is available.",
    icon: IconBrandGithub,
    bg: "from-gray-100 to-gray-50",
    button: "View GitHub →",
    link: "https://github.com/",
    imageSide: "left",
  },
  {
    title: "Video Tutorials",
    description:
      "Learn scRNA-seq, scATAC, multiome, QC, WNN, SCENIC+, and machine learning through structured YouTube lessons.",
    icon: IconBrandYoutube,
    bg: "from-rose-100 to-red-50",
    button: "Watch on YouTube →",
    link: "https://youtube.com/",
    imageSide: "right",
  },
  {
    title: "Expert Consultation",
    description:
      "Custom pipeline development, figure creation, manuscript support, grant writing, troubleshooting, and professional analysis.",
    icon: IconUsers,
    bg: "from-teal-100 to-emerald-50",
    button: "Book Consultation →",
    link: "#contact",
    imageSide: "left",
  },
  {
    title: "Teaching & Mentorship",
    description:
      "1-on-1 and group lessons covering scRNA-seq, scATAC-seq, multiome, QC, Python/R coding, visualization, and workflow design.",
    icon: IconSchool,
    bg: "from-blue-100 to-sky-50",
    button: "Start Learning →",
    link: "#contact",
    imageSide: "right",
  },
];

/* -------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------*/
export default function Services() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Apple Vision Pro Floating Orbs */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-40 left-20 w-72 h-72 bg-teal-200/40 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 blur-[90px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-20">

        {/* HEADER */}
        <h2 className="text-6xl font-bold text-center text-gray-900 mb-20">
          My Services
        </h2>

        {/* SECTION LOOP */}
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
              {/* LEFT / RIGHT VISUAL SIDE */}
              <TiltCard>
                <div className="relative w-full lg:w-1/2">

                  {/* Animated aura glow */}
                  <div
                    className="
                      absolute -inset-3 rounded-3xl blur-2xl opacity-50
                      bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400
                    "
                  />

                  {/* Glass + pastel card */}
                  <div
                    className={`
                      relative h-72 flex items-center justify-center rounded-3xl
                      backdrop-blur-2xl bg-white/30 border border-white/40 shadow-xl
                      bg-gradient-to-br ${sec.bg}
                    `}
                  >
                    <Icon size={140} className="text-gray-900 opacity-80" />
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
                  className="
                    inline-block px-10 py-4 bg-black text-white rounded-2xl
                    text-lg font-medium shadow-lg hover:shadow-2xl
                    transition-all duration-300
                  "
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
