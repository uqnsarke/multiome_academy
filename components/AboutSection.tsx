'use client';

import React from 'react';
import { Linkedin, Youtube, Mail, GraduationCap, Github, Instagram, ArrowUpCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    /* id="about" is the target for the YouTube section's scroll arrow */
    <section id="about" className="bg-black text-white min-h-[80vh] flex flex-col items-center justify-center p-8 relative overflow-hidden scroll-mt-20">
      
      {/* Subtle Background Glow to match Hero/Services */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Image Section */}
        <div className="relative shrink-0 slide-up">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
            <img 
              src="/profile.jpg" 
              alt="Nishat Sarker" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6 slide-up [animation-delay:200ms]">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 animate-text-shimmer">Nishat.</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            I bridge the gap between complex biological data and actionable mechanistic insights. 
            Specializing in <strong className="text-white">Single-Cell Multiomics</strong> and <strong className="text-white">Computational Biology</strong>, 
            I build pipelines that decode cellular heterogeneity.
          </p>

          {/* Social Links Grid */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <SocialLink href="https://www.linkedin.com/in/nishat-sarker/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://www.youtube.com/@nishat_BioAI" icon={<Youtube size={20} />} label="YouTube" />
            <SocialLink href="https://scholar.google.com/scholar?q=Nishat+Sarker" icon={<GraduationCap size={20} />} label="Scholar" />
            <SocialLink href="https://github.com/uqnsarke" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.instagram.com/multiome_academy/" icon={<Instagram size={20} />} label="Instagram" />
            <SocialLink href="mailto:nishat.sarker@uq.net.au" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
      </div>

      {/* --- BACK TO TOP OPTION --- */}
      <div className="mt-24 slide-up [animation-delay:400ms]">
          <a 
            href="#" 
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors duration-300 group"
          >
            <ArrowUpCircle size={32} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Top</span>
          </a>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-950 border border-gray-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 text-sm font-medium text-gray-400 hover:text-white"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default AboutSection;
