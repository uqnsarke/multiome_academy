'use client';

import React, { useState } from 'react';
import { Download, CheckCircle, Mail, Terminal, BookOpen, Library, Youtube, PlayCircle, Code2, ArrowRight, FileCode, ChevronDown } from 'lucide-react';

export default function FeaturedResource() {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = document.createElement('a'); 
    link.href = '/scanpy-cheat-sheet.png'; 
    link.download = 'Nishat_Scanpy_CheatSheet.png';
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);
    setIsDownloaded(true); 
    setEmail(''); 
  };

  return (
    <section className="bg-gradient-to-b from-slate-950 to-black relative overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10 py-24">
        
        {/* --- SECTION 1: KNOWLEDGE HUB --- */}
        <div id="knowledge-hub" className="mb-48 scroll-mt-24 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Knowledge Hub</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <HubCard icon={<BookOpen className="text-emerald-400" />} title="The Blog" desc="Deep dives into bioinformatics algorithms and troubleshooting." link="#" cta="Read Articles" />
              <HubCard icon={<Mail className="text-purple-400" />} title="BioAI Newsletter" desc="Weekly insights on Biology and AI delivered to your inbox." link="#" cta="Subscribe" />
              <HubCard icon={<Library className="text-pink-400" />} title="My Books" desc="Comprehensive e-books for mastering single-cell analysis." link="#" cta="Browse" />
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Get Cheat Sheet</p>
                <a href="#resources" className="p-3 rounded-full border border-white/10 bg-white/5 animate-bounce"><ChevronDown size={28} className="text-emerald-400" /></a>
            </div>
        </div>

        {/* --- SECTION 2: LEAD MAGNET (RESTORED TEXT) --- */}
        <div id="resources" className="mb-48 scroll-mt-24">
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center backdrop-blur-md shadow-2xl">
              <div className="space-y-8">
                <div>
                  <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30 mb-6 uppercase tracking-wider">
                      <Terminal size={12} />
                      <span>Free Featured Resource</span>
                  </span>
                  
                  {/* RESTORED FULL COPY */}
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Stop Googling Syntax. <br/>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                      Get the Ultimate Guide.
                    </span>
                  </h2>
                  
                  <p className="text-slate-300 text-lg leading-relaxed">
                    The entire single-cell analysis pipeline in <span className="text-yellow-400 font-bold">Python</span>, 
                    condensed into one printable reference. <br className="hidden md:block"/>
                    Focus on the <span className="text-emerald-400 font-bold">biology</span>, not the boilerplate.
                  </p>
                </div>

                {isDownloaded ? (
                  <div className="p-6 bg-green-500/10 text-green-300 rounded-xl font-bold border border-green-500/30">Download Started!</div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg outline-none text-white focus:ring-2 focus:ring-purple-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg flex items-center gap-2 shadow-lg shadow-purple-900/20">
                        <Download className="w-5 h-5" />
                        <span>Download PDF</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="relative group perspective-1000 hidden md:block">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
                  <div className="h-9 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                    <div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-red-500/80"></div><div className="w-3 h-3 rounded-full bg-yellow-500/80"></div><div className="w-3 h-3 rounded-full bg-green-500/80"></div></div>
                    <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2"><FileCode size={12} className="text-blue-400" /> scanpy_pipeline.ipynb</div>
                    <div className="w-8"></div> 
                  </div>
                  <div className="relative aspect-[4/3]">
                    <video autoPlay loop muted playsInline className="w-full opacity-90">
                        <source src="/dna-loop.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                        <div className="bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded border border-white/10 shadow-lg">Open Chromatin</div>
                        <div className="bg-slate-900/90 text-purple-300 font-bold text-[11px] px-2 py-0.5 rounded border border-white/10 shadow-lg mt-0.5">Transcription Factors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Watch Video Courses</p>
                <a href="#youtube" className="p-3 rounded-full border border-white/10 bg-white/5 animate-bounce"><ChevronDown size={28} className="text-cyan-400" /></a>
            </div>
        </div>

        {/* --- SECTION 3: YOUTUBE --- */}
        <div id="youtube" className="scroll-mt-24 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3"><Youtube className="text-red-600 fill-current" size={40} />Start Learning Now</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <TrackCard track="Track A: Beginner" title="Python for Biologists" icon={<Code2 size={120} />} color="text-cyan-400" hoverColor="hover:border-cyan-500/50" desc="New to coding? Learn Python syntax, Pandas, and plotting from scratch." />
            <TrackCard track="Track B: Advanced" title="Multiomics Integration" icon={<Terminal size={120} />} color="text-purple-400" hoverColor="hover:border-purple-500/50" desc="Visualizing scRNA + scATAC integration and trajectory inference." />
          </div>
          <div className="flex flex-col items-center gap-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">About Me</p>
              <a href="#about" className="p-3 rounded-full border border-white/10 bg-white/5 animate-bounce transition-all hover:bg-white/10"><ChevronDown size={28} className="text-white" /></a>
          </div>
        </div>

      </div>
    </section>
  );
}

// Helpers
function HubCard({ icon, title, desc, link, cta }: any) { 
  return ( 
    <a href={link} className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col hover:bg-white/[0.08] group"> 
      <div className="mb-6 p-4 bg-black/40 w-fit rounded-2xl border border-white/5 group-hover:border-emerald-500/50">{icon}</div> 
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3> 
      <p className="text-gray-400 text-sm mb-8 flex-grow">{desc}</p> 
      <div className="flex items-center text-sm font-bold text-emerald-500 group-hover:text-emerald-300 transition-colors uppercase tracking-widest">{cta} <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" /></div> 
    </a> 
  ); 
}

function TrackCard({ track, title, desc, icon, color, hoverColor }: any) { 
  return ( 
    <a href="https://www.youtube.com/@nishat_BioAI" target="_blank" className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 ${hoverColor} transition-all duration-300 hover:-translate-y-1`}> 
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">{icon}</div> 
      <div className="relative z-10"> 
        <span className={`text-xs font-bold ${color} uppercase tracking-wider mb-2 block`}>{track}</span> 
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3> 
        <p className="text-slate-400 mb-6 text-sm">{desc}</p>
        <span className="inline-flex items-center text-white font-bold group-hover:text-white/80"><PlayCircle className="mr-2" size={20} /> Visit Channel</span> 
      </div> 
    </a> 
  ); 
}
