"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-black/40 py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 text-white">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wide"
        >
          <Link href="/">Multiome Academy</Link>
        </motion.div>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-lg">
          {["Home", "Services", "Tutorials", "About", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.08 }}
              className="cursor-pointer transition-all hover:text-teal-300"
            >
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
