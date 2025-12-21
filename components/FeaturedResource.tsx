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
    <section className="bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10 py-24">
        
        {/* =========================================================
            SECTION 1: KNOWLEDGE HUB
           ========================================================= */}
        <div id="knowledge-hub" className="mb-48 scroll-mt-24 flex flex-col items-center">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Knowledge Hub
                </span>
              </h2>
              <p className="text-gray-400">Deep dives, newsletters, and written guides.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <ResourceCard 
                icon={<BookOpen className="w-8 h-8 text-emerald-400" />}
                title="The Blog"
                desc="Deep dives into bioinformatics algorithms and troubleshooting."
                link="#"
                cta="Read Articles"
              />
              <ResourceCard 
                icon={<Mail className="w-8 h-8 text-purple-400" />}
                title="BioAI Newsletter"
                desc="Weekly insights on Biology and AI delivered to your inbox."
                link="#"
                cta="Subscribe Free"
              />
              <ResourceCard 
                icon={<Library className="w-8 h-8 text-pink-400" />}
                title="My Books"
                desc="Comprehensive e-books for mastering single-cell analysis."
                link="#"
                cta="Browse Library"
              />
            </div>

            {/* SCROLL TO SECTION 2 (RESOURCES) */}
            <div className="flex flex-col items-center gap-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Get Cheat Sheet</p>
                <a href="#resources" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500/20 transition-all animate-bounce">
                    <ChevronDown size={28} className="text-emerald-400" />
                </a>
            </div>
        </div>

        {/* =========================================================
            SECTION 2: LEAD MAGNET (SCANPY CHEAT SHEET)
           ========================================================= */}
        <div id="resources" className="mb-48 scroll-mt-24">
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl backdrop-blur-md grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center shadow-2xl">
              <div className="space-y-8">
                <div>
                   <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30 mb-6 uppercase tracking-wider">
                      <Terminal size={12} />
                      <span>Free Featured Resource</span>
                   </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Stop Googling Syntax. <br/>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                      Get the Ultimate Guide.
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    The entire single-cell analysis pipeline in <span className="text-yellow-400 font-bold">Python</span>, condensed into one printable reference.
                  </p>
                </div>

                {isDownloaded ? (
                    <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-green-300 animate-in fade-in zoom-in duration-300">
                        <p className="font-bold text-lg flex items-center gap-2"><CheckCircle /> Download Started!</p>
                        <button onClick={() => setIsDownloaded(false)} className="text-xs underline mt-4 hover:text-white">Reset form</button>
                    </div>
                 ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                      <div className="relative flex-grow">
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white outline-none placeholder:text-slate-500 transition-all"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition shadow-lg whitespace-nowrap">
                        <Download className="w-5 h-5" />
                        <span>Download PDF</span>
                      </button>
                    </form>
                 )}
              </div>

              <div className="relative group perspective-1000 hidden md:block">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="h-9 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                    <div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-red-500/80"></div><div className="w-3 h-3 rounded-full bg-yellow-500/80"></div><div className="w-3 h-3 rounded-full bg-green-500/80"></div></div>
                    <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2"><FileCode size={12} className="text-blue-400" /> scanpy_pipeline.ipynb</div>
                    <div className="w-8"></div> 
                  </div>
                  <div className="relative aspect-[4/3]">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                      <source src="/dna-loop.mp4" type="video/mp4" />
                    </video>
                    {/* TYPO PATCH */}
                    <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                        <div className="bg-slate-900/90 text-white text-[10px] px-2 py-0.5 rounded border border-white/10 shadow-lg">Open Chromatin</div>
                        <div className="bg-slate-900/90 text-purple-300 font-bold text-[11px] px-2 py-0.5 rounded border border-white/10 shadow-lg mt-0.5">Transcription Factors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCROLL TO SECTION 3 (YOUTUBE) */}
            <div className="flex flex-col items-center gap-3 mt-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Watch Video Courses</p>
                <a href="#youtube" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-cyan-500/20 transition-all animate-bounce">
                    <ChevronDown size={28} className="text-cyan-400" />
                </a>
            </div>
        </div>

        {/* =========================================================
            SECTION 3: YOUTUBE LEARNING (NEW ORDER)
           ========================================================= */}
        <div id="youtube" className="mb-48 scroll-mt-24">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Youtube className="w-10 h-10 text-red-600 fill-current" />
                Start Learning Now
              </h2>
              <p className="text-gray-400">Watch the intro or choose your learning path.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <TrackCard 
                track="Track A: Beginner"
                title="Python for Biologists"
                desc="New to coding? Learn Python syntax, Pandas, and plotting from scratch."
                icon={<Code2 size={120} />}
                color="text-cyan-400"
                hoverColor="hover:border-cyan-500/50"
            />
            <TrackCard 
                track="Track B: Advanced"
                title="Multiomics Integration"
                desc="Visualizing scRNA + scATAC integration and trajectory inference."
                icon={<Terminal size={120} />}
                color="text-purple-400"
                hoverColor="hover:border-purple-500/50"
            />
          </div>

          {/* SCROLL TO SECTION 4 (NEXT SECTION) */}
          <div className="flex flex-col items-center gap-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">More Content Below</p>
                <a href="#section-four" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-purple-500/20 transition-all animate-bounce">
                    <ChevronDown size={28} className="text-purple-400" />
                </a>
            </div>
        </div>

        {/* =========================================================
            SECTION 4: PLACEHOLDER (FORMERLY SECTION 3)
           ========================================================= */}
        <div id="section-four" className="scroll-mt-24 text-center py-20 border-t border-white/5">
             <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
             <p className="text-slate-400">Additional modules and community features are on the way.</p>
        </div>

      </div>
    </section>
  );
}

// --- HELPERS ---
function ResourceCard({ icon, title, desc, link, cta }: { icon: any, title: string, desc: string, link: string, cta: string }) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
        <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col">
          <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:border-emerald-500/50 transition-colors">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{title}</h3>
          <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-sm">{desc}</p>
          <div className="flex items-center text-sm font-bold text-gray-300 uppercase tracking-wider group-hover:text-white transition-colors">
            {cta} <ArrowRight size={16} className="ml-2 text-emerald-500 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </a>
    );
}

function TrackCard({ track, title, desc, icon, color, hoverColor }: { track: string, title: string, desc: string, icon: any, color: string, hoverColor: string }) {
    return (
        <a href="https://www.youtube.com/@nishat_BioAI" target="_blank" rel="noreferrer" className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 ${hoverColor} transition-all duration-300 hover:-translate-y-1`}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">{icon}</div>
            <div className="relative z-10">
                <span className={`text-xs font-bold ${color} uppercase tracking-wider mb-2 block`}>{track}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 mb-6 text-sm">{desc}</p>
                <span className="inline-flex items-center text-white font-bold transition-colors">
                    <PlayCircle className="mr-2" size={20} /> Visit Channel
                </span>
            </div>
        </a>
    )
}
