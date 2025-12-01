"use client";

import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconUsers,
  IconSchool,
} from "@tabler/icons-react";

const sections = [
  {
    title: "GitHub Code Hub",
    description:
      "Explore all of my single-cell and multiome analysis pipelines, notebooks, reproducible workflows, and utility scripts. Updated frequently with new methods and best practices.",
    icon: IconBrandGithub,
    bg: "from-gray-100 to-gray-50",
    button: "View GitHub →",
    link: "https://github.com/",
    imageSide: "left",
  },
  {
    title: "Video Tutorials",
    description:
      "Learn scRNA-seq, scATAC-seq, multiome, QC, WNN, SCENIC+, and ML for biology — through clear and beautifully structured YouTube lessons.",
    icon: IconBrandYoutube,
    bg: "from-rose-100 to-red-50",
    button: "Watch on YouTube →",
    link: "https://youtube.com/",
    imageSide: "right",
  },
  {
    title: "Expert Consultation",
    description:
      "Custom pipeline development, figure creation, manuscript writing, grant support, troubleshooting, and premium 1-on-1 bioinformatics assistance.",
    icon: IconUsers,
    bg: "from-teal-100 to-emerald-50",
    button: "Book Consultation →",
    link: "#contact",
    imageSide: "left",
  },
  {
    title: "Teaching & Mentorship",
    description:
      "One-on-one and group lessons covering scRNA-seq, scATAC-seq, multiome analysis, Python/R coding, visualization, reproducible workflows, and more.",
    icon: IconSchool,
    bg: "from-blue-100 to-sky-50",
    button: "Start Learning →",
    link: "#contact",
    imageSide: "right",
  },
];

// 3D tilt effect
const tilt = {
  initial: { rotateX: 0, rotateY: 0 },
  hover: (dir: number) => ({
    rotateX: dir * 3,
    rotateY: dir * 3,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  }),
};

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

      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* Page Title */}
        <h2 className="text-6xl font-bold text-center text-gray-900 mb-10">
          My Services
        </h2>

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
              {/* ICON AREA with 3D Tilt, Pastel BG, Glow, Glass */}
              <motion.div
                custom={isLeft ? 1 : -1}
                initial="initial"
                whileHover="hover"
                variants={tilt}
                className="relative w-full lg:w-1/2"
              >
                {/* Animated gradient border aura */}
                <div
                  className="
                  absolute -inset-2 rounded-3xl blur-2xl opacity-50
                  bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400
                "
                />

                {/* Glassmorphism card */}
                <div
                  className={`
                    relative h-72 flex items-center justify-center rounded-3xl
                    backdrop-blur-2xl bg-white/30 border border-white/40 shadow-xl
                    bg-gradient-to-br ${sec.bg}
                  `}
                >
                  <Icon size={140} className="text-gray-900 opacity-80" />
                </div>
              </motion.div>

              {/* TEXT + BUTTON */}
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
