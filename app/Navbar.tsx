"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-300 
      ${scrolled ? "bg-black/70 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo / Title */}
        <Link href="/" className="text-white text-2xl font-bold tracking-tight">
          Multiome <span className="text-teal-300">Academy</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link className="hover:text-teal-300 transition" href="/">
            Home
          </Link>
          <Link className="hover:text-teal-300 transition" href="/services">
            Services
          </Link>
          <Link className="hover:text-teal-300 transition" href="/tutorials">
            Tutorials
          </Link>
          <Link className="hover:text-teal-300 transition" href="/about">
            About
          </Link>
          <Link className="hover:text-teal-300 transition" href="/contact">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon (future) */}
        <div className="md:hidden text-white">☰</div>
      </div>
    </nav>
  );
}
