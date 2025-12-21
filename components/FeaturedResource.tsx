'use client';

import React, { useState } from 'react';
import { Download, CheckCircle, Mail, Terminal, FileCode, ChevronDown, Sparkles, Zap, Youtube, Play } from 'lucide-react';

export default function FeaturedResource() {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  const videoPlaylist = [
    { id: 0, title: 'scanpy_pipeline.ipynb', src: '/dna-loop.mp4', label: 'The Workflow' },
    { id: 1, title: 'scanpy_output.mp4', src: '/scanpy_output.mp4', label: 'Final Output' }
  ];

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
    <div className="bg-black">
      {/* --- SECTION 1: THE FEATURED RESOURCE --- */}
      <section id="resources" className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl backdrop-blur-md grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center shadow-2xl">
            
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-500/30 mb-6 uppercase tracking-wider">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>2025 Scientist's Edition</span>
                </span>
                
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  Stop Googling Syntax. <br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                    Start the Discovery.
                  </span>
                </h2>
                
                <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                  The <span className="text-white font-semibold italic">Scanpy Blueprint</span>: A full end-to-end single-cell workflow in <span className="text-yellow-400 font-bold">Python</span>, distilled into a concise, printable reference.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Optimized QC & Normalization thresholds",
                    "Marker Identification for 20+ cell types",
                    "Publication-ready UMAP & DotPlot parameters"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm">
                      <Zap size={14} className="text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {isDownloaded ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 animate-in fade-in zoom-in duration-300">
                  <p className="font-bold text-lg flex items-center gap-2"><CheckCircle /> Success! Your guide is ready.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-4 max-w-md">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-500" />
                    <input
                      type="email"
                      placeholder="Enter academic email"
                      className="w-full pl-10 pr-4 py-3 bg-slate-950/80 border border-slate-700/50 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition shadow-xl shadow-emerald-900/20 active:scale-95">
                    <Download className="w-5 h-5" />
                    <span>Get Cheat Sheet</span>
                  </button>
                </form>
              )}
              <p className="text-[10px] text-slate-500 italic">Trusted by 500+ researchers globally.</p>
            </div>

            {/* Right Side: Interactive Terminal with Border Glow */}
            <div className="relative group perspective-1000 hidden md:block">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                
                {/* MacOS Terminal Header */}
                <div className="h-10 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  
                  <div className="flex gap-4">
                    {videoPlaylist.map((video, index) => (
                      <button 
                        key={video.id}
                        onClick={() => setActiveVideo(index)}
                        className={`text-[10px] font-mono flex items-center gap-2 transition-all px-3 py-1 rounded-md ${activeVideo === index ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20' : 'text-slate-500 hover:text-slate-300'}`}
                      >
                        <FileCode size={12} />
                        {video.label}
                      </button>
                    ))}
                  </div>
                  <div className="w-8"></div> 
                </div>

                {/* Video Player */}
                <div className="relative aspect-[4/3] bg-black">
                  <video 
                    key={videoPlaylist[activeVideo].src} 
                    autoPlay loop muted playsInline preload="auto"
                    className="w-full h-full object-cover opacity-90"
                  >
                    <source src={videoPlaylist[activeVideo].src} type="video/mp4" />
                  </video>
                  
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-[10px] font-mono text-emerald-300">
                      {videoPlaylist[activeVideo].title}
                  </div>

                  <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-3 shadow-xl z-20">
                    <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-slate-300">Live Simulation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 mt-16 animate-bounce">
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">Watch Video Courses</p>
            <ChevronDown size={24} className="text-emerald-500" />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE LEARNING HUB (YouTube Cards) --- */}
      <section id="youtube" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="p-4 bg-red-500/10 rounded-3xl border border-red-500/20 mb-8">
              <Youtube className="text-red-500" size={48} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Learning Hub</h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Deep-dive into single-cell multiomics with my free video courses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Tutorial 1 */}
            <a href="https://youtube.com/your-video-link-1" target="_blank" className="group relative block rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/20 hover:border-red-500/40 transition-all duration-500 shadow-2xl">
              <div className="aspect-video relative overflow-hidden">
                <img src="/yt-thumb-1.jpg" alt="Tutorial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play fill="currentColor" size={32} className="ml-1" />
                  </div>
                </div>
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">Tutorial</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">Scanpy for Beginners</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Master the basics of single-cell RNA-seq analysis from raw data to visualization.</p>
              </div>
            </a>

            {/* Tutorial 2 */}
            <a href="https://youtube.com/your-video-link-2" target="_blank" className="group relative block rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/20 hover:border-red-500/40 transition-all duration-500 shadow-2xl">
              <div className="aspect-video relative overflow-hidden">
                <img src="/yt-thumb-2.jpg" alt="Tutorial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play fill="currentColor" size={32} className="ml-1" />
                  </div>
                </div>
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">Advanced</div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">Multiomics Integration</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Advanced workflows for merging RNA and ATAC-seq data to uncover regulatory networks.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
