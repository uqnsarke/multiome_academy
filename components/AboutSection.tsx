'use client';

import React from 'react';
import { Linkedin, Youtube, Mail, GraduationCap, Github, Instagram, ArrowUpCircle, Twitter, Dna, Cpu, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617] text-white">
      
      {/* --- ATMOSPHERIC BACKGROUND --- */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- THE DIGITAL DOSSIER CARD --- */}
        <div className="max-w-5xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 relative group overflow-hidden">
          
          {/* Animated Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* --- LEFT: AVATAR SYSTEM --- */}
            <div className="relative shrink-0">
              {/* Spinning Tech Ring */}
              <div className="absolute inset-0 rounded-full border border-teal-500/30 border-t-teal-400 border-r-transparent w-full h-full animate-spin-slow"></div>
              
              {/* Profile Image */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Nishat Sarker" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-2 right-4 bg-slate-900 border border-teal-500/50 px-3 py-1 rounded-full flex items-center gap-2 shadow-lg z-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-[10px] font-mono text-teal-300 uppercase tracking-wider">Online</span>
              </div>
            </div>

            {/* --- RIGHT: DATA & COMMANDS --- */}
            <div className="text-center md:text-left space-y-6 w-full">
              
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 animate-text-shimmer">Nishat.</span>
                </h2>
                
                {/* ID Chips */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <SkillBadge icon={<Dna size={12} />} text="Single-Cell Multiomics" />
                  <SkillBadge icon={<Cpu size={12} />} text="Computational Biology" />
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                I bridge the gap between complex biological data and actionable mechanistic insights. 
                Specializing in <strong className="text-teal-400">Single-Cell Multiomics</strong>, I build pipelines that decode cellular heterogeneity.
              </p>

              {/* Social Command Center */}
              <div className="pt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <SocialBtn href="https://www.linkedin.com/in/nishat-sarker/" icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialBtn href="https://www.youtube.com/@nishat_BioAI" icon={<Youtube size={18} />} label="YouTube" />
                <SocialBtn href="https://x.com/nishat_NSS" icon={<Twitter size={18} />} label="Twitter/X" />
                <SocialBtn href="https://scholar.google.com/scholar?q=Nishat+Sarker" icon={<GraduationCap size={18} />} label="Scholar" />
                <SocialBtn href="https://github.com/uqnsarke" icon={<Github size={18} />} label="GitHub" />
                <SocialBtn href="https://www.instagram.com/multiome_academy/" icon={<Instagram size={18} />} label="Instagram" />
                <SocialBtn href="mailto:nishat.sarker@uq.net.au" icon={<Mail size={18} />} label="Email" highlight />
              </div>

            </div>
          </div>
        </div>

        {/* --- BACK TO TOP --- */}
        <div className="mt-20 flex justify-center">
          <a 
            href="#" 
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors duration-300 group"
          >
            <ArrowUpCircle size={32} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Back to Top</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// --- HELPER COMPONENTS ---

function SkillBadge({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs text-slate-300 font-mono hover:bg-white/10 transition-colors cursor-default">
      {icon} {text}
    </span>
  );
}

function SocialBtn({ href, icon, label, highlight = false }: { href: string, icon: React.ReactNode, label: string, highlight?: boolean }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 border group
        ${highlight 
          ? 'bg-teal-500 hover:bg-teal-400 border-teal-500 text-white shadow-lg shadow-teal-900/20' 
          : 'bg-slate-900 hover:bg-slate-800 border-slate-700 hover:border-teal-500/50 text-slate-400 hover:text-white'
        }
      `}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
      {!highlight && <ArrowUpRight size={14} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />}
    </a>
  );
}
