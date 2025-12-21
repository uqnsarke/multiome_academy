'use client';

import React, { useState } from 'react';
import { Download, CheckCircle, Mail, Terminal, BookOpen, Library, Youtube, PlayCircle, Code2, ArrowRight } from 'lucide-react';

export default function FeaturedResource() {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  // --- HANDLE DOWNLOAD ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Capturing email: ${email}`);
    
    // Trigger the file download
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
    <section id="resources" className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* =========================================================
            SECTION 1: LEAD MAGNET (Live Video + Cheat Sheet)
           ========================================================= */}
        <div className="mb-32">
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl backdrop-blur-md grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center shadow-2xl">
              
              {/* Left: Text & Email Form */}
              <div className="space-y-8">
                <div>
                   <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/20 mb-4 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">
                      <Terminal size={14} />
                      <span>Free Featured Resource</span>
                   </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Stop Googling Syntax. <br/>
                    <span className="text-slate-400">Get the Ultimate Guide.</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    The entire single-cell analysis pipeline in Python, condensed into one printable reference. 
                    Focus on the biology, not the boilerplate.
                  </p>
                </div>

                {/* Email Form Logic */}
                {isDownloaded ? (
                    <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-green-300 animate-in fade-in zoom-in duration-300">
                        <p className="font-bold text-lg flex items-center gap-2"><CheckCircle /> Download Started!</p>
                        <p className="text-sm mt-2 opacity-80">Check your downloads folder.</p>
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
                      <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition shadow-lg shadow-purple-900/20 whitespace-nowrap">
                        <Download className="w-5 h-5" />
                        <span>Download PDF</span>
                      </button>
                    </form>
                 )}
              </div>

              {/* Right: Live Video Preview */}
              <div className="relative group perspective-1000 hidden md:block">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="h-9 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                    <div className="flex space-x-2"><div className="w-3 h-3 rounded-full bg-red-500/80"></div><div className="w-3 h-3 rounded-full bg-yellow-500/80"></div><div className="w-3 h-3 rounded-full bg-green-500/80"></div></div>
                    <div className="text-[10px] text-slate-400 font-mono">scanpy_preview.mp4</div>
                    <div className="w-8"></div> 
                  </div>
                  <div className="relative aspect-[4/3]">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                      {/* Make sure 'dna-loop.mp4' is in your public folder */}
                      <source src="/dna-loop.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* =========================================================
            SECTION 2: KNOWLEDGE HUB (Grid)
           ========================================================= */}
        <div className="mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Knowledge Hub
                </span>
              </h2>
              <p className="text-gray-400">Deep dives, newsletters, and written guides.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        </div>

        {/* =========================================================
            SECTION 3: START LEARNING (Curated Paths)
           ========================================================= */}
        <div className="relative">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Youtube className="w-10 h-10 text-red-600 fill-current" />
                Start Learning Now
              </h2>
              <p className="text-gray-400">Choose your path and start watching for free.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* PATH A: BEGINNER */}
            <a 
              href="https://www.youtube.com/@nishat_BioAI" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 size={120} />
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 block">Track A: Beginner</span>
                <h3 className="text-2xl font-bold text-white mb-2">Python for Biologists</h3>
                <p className="text-slate-400 mb-6 text-sm">New to coding? Learn Python syntax, Pandas, and plotting from scratch.</p>
                <span className="inline-flex items-center text-white font-bold group-hover:text-cyan-400 transition-colors">
                  <PlayCircle className="mr-2" size={20} /> Watch Playlist
                </span>
              </div>
            </a>

            {/* PATH B: ADVANCED */}
            <a 
              href="https://www.youtube.com/@nishat_BioAI" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Terminal size={120} />
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 block">Track B: Advanced</span>
                <h3 className="text-2xl font-bold text-white mb-2">Single-Cell Multiomics</h3>
                <p className="text-slate-400 mb-6 text-sm">Deep learning integration, batch correction, and trajectory inference.</p>
                <span className="inline-flex items-center text-white font-bold group-hover:text-purple-400 transition-colors">
                  <PlayCircle className="mr-2" size={20} /> Watch Playlist
                </span>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

// --- HELPER COMPONENT FOR GRID CARDS ---
function ResourceCard({ icon, title, desc, link, cta }: { icon: any, title: string, desc: string, link: string, cta: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08] flex flex-col">
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
