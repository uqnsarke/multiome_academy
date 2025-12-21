'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, Linkedin, GraduationCap, Mail } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          
          {/* 1. IMAGE COLUMN */}
          <div className="relative group">
            {/* Glowing Ring Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black shadow-2xl">
              {/* Replace '/profile.jpg' with your actual photo in the public folder */}
              <Image 
                src="/profile.jpg" 
                alt="Nishat Sarker"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 2. TEXT CONTENT */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Nishat.</span>
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              I bridge the gap between complex biological data and actionable mechanistic insights. 
              Specializing in <span className="text-white font-semibold">Single-Cell Multiomics</span> and <span className="text-white font-semibold">Computational Biology</span>, 
              I build pipelines that decode cellular heterogeneity.
            </p>

            {/* SOCIAL LINKS ROW */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              
              {/* LinkedIn */}
              <Link 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all group"
              >
                <Linkedin size={20} className="text-slate-400 group-hover:text-blue-400" />
                <span className="font-medium text-slate-300 group-hover:text-white">LinkedIn</span>
              </Link>

              {/* YouTube */}
              <Link 
                href="https://www.youtube.com/@your-channel" 
                target="_blank" 
                className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-lg hover:border-red-500 hover:text-red-400 transition-all group"
              >
                <Youtube size={20} className="text-slate-400 group-hover:text-red-400" />
                <span className="font-medium text-slate-300 group-hover:text-white">YouTube</span>
              </Link>

              {/* Google Scholar */}
              <Link 
                href="https://scholar.google.com/citations?user=your-id" 
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-lg hover:border-white hover:text-white transition-all group"
              >
                <GraduationCap size={20} className="text-slate-400 group-hover:text-white" />
                <span className="font-medium text-slate-300 group-hover:text-white">Scholar</span>
              </Link>

               {/* Email (Optional, since it's elsewhere) */}
               <a 
                href="mailto:nishat.sarker@uq.net.au" 
                className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all group"
              >
                <Mail size={20} className="text-slate-400 group-hover:text-purple-400" />
                <span className="font-medium text-slate-300 group-hover:text-white">Email</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
