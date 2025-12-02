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
   3D Tilt Card
--------------------------------------------------------*/
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

/* -------------------------------------------------------
   HYBRID SERVICE DATA
--------------------------------------------------------*/
const sections = [
  {
    title: "GitHub Code Hub",
    description:
      "Explore pipelines, notebooks, SCENIC+, LIANA, WNN, and reproducible multiome codes.",
    icon: IconBrandGithub,
    gradient: "from-gray-100 to-gray-50",
    aura: "from-gray-300 via-gray-500 to-gray-700",
    link: "https://github.com/",
    button: "View GitHub →",
    imageSide: "left",
  },
  {
    title: "Video Tutorials",
    description:
      "Learn scRNA, scATAC, QC, WNN, multiome, SCENIC+, and ML through structured lessons.",
    icon: IconBrandYoutube,
    gradient: "from-rose-100 to-pink-50",
    aura: "from-pink-300 via-red-400 to-yellow-300",
    link: "https://youtube.com/",
    button: "Watch Tutorials →",
    imageSide: "right",
  },
  {
    title: "Expert Consultation",
    description:
      "Custom pipelines, figure creation, manuscripts, grants, troubleshooting.",
    icon: IconUsers,
    gradient: "from-teal-100 to-emerald-50",
    aura: "from-teal-300 via-blue-400 to-purple-400",
    link: "#contact",
    button: "Book Consultation →",
    imageSide: "left",
  },
  {
    title: "Teaching & Mentorship",
    description:
      "1-on-1 and group lessons: scRNA, scATAC, multiome, coding, visualization.",
    icon: IconSchool,
    gradient: "from-blue-100 to-sky-50",
    aura: "from-blue-300 via-purple-400 to-pink-400",
    link: "#contact",
    button: "Start Learning →",
    imageSide: "right",
  },
];

/* -------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------*/
export default function Services() {
  return (
    <section
      className="relative py-32 mt-32 overflow-hidden"
      style={{
        backgroundColor: "white", // FIX: force white background
        zIndex: 10,
      }}
    >
      {/* Vision Pro orbs */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-teal-300/40 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-32 right-10 w-96 h-96 bg-purple-300/40 blur-[100px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-6 space-y-32 z-20 text-gray-900">
        {/* Header */}
        <h2 className="text-6xl font-bold text-center mb-12">
          My Services
        </h2>

        {/* Sections */}
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
              {/* VISUAL SIDE */}
              <TiltCard>
                <div className="relative w-full lg:w-1/2">

                  {/* Glow Aura */}
                  <div
                    className={`absolute -inset-4 rounded-3xl opacity-50 blur-xl bg-gradient-to-r ${sec.aura}`}
                  />

                  {/* Glass Gradient Card */}
                  <div
                    className={`relative h-72 flex items-center justify-center rounded-3xl shadow-xl
                      backdrop-blur-2xl border border-white/40 bg-gradient-to-br ${sec.gradient}`}
                  >
                    <Icon size={140} className="text-gray-800 opacity-75" />
                  </div>
                </div>
              </TiltCard>

              {/* TEXT SIDE */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-4xl font-semibold">{sec.title}</h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {sec.description}
                </p>

                <a
                  href={sec.link}
                  className="
                    inline-block px-10 py-4 bg-black text-white rounded-2xl
                    text-lg font-semibold shadow-lg hover:shadow-2xl transition-all
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
