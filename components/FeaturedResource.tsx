'use client';

import React, { useState } from 'react';
import { Download, CheckCircle, Mail, Terminal, FileCode, ChevronDown, Sparkles, Zap } from 'lucide-react';

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
    <section id="resources" className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl backdrop-blur-md grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center shadow-2xl">
          
          {/* Left Side: Conversion Copy */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 mb-6 uppercase tracking-wider">
                <Sparkles size={12} className="animate-pulse" />
                <span>2025 Scientist's Edition</span>
              </span>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stop Googling Syntax. <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Start the Discovery.
                </span>
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                The <span className="text-white font-semibold italic">Scanpy Blueprint</span>: A full end-to-end single-cell workflow in <span className="text-yellow-400 font-bold">Python</span>, distilled into a concise, printable reference.
              </p>

              <ul className="mt-6 space-y-3">
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
              <form onSubmit={handleSubmit} className="flex flex-col sm:row gap-3 pt-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter academic email"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 text-white outline-none transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition shadow-lg shadow-emerald-900/20">
                  <Download className="w-5 h-5" />
                  <span>Get Cheat Sheet</span>
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-500 italic">Trusted by 500+ researchers globally.</p>
          </div>

          {/* Right Side: Interactive Terminal */}
          <div className="relative group perspective-1000 hidden md:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
              
              {/* Header Bar with Switching Tabs */}
              <div className="h-10 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                
                <div className="flex gap-4">
                  {videoPlaylist.map((video, index) => (
                    <button 
                      key={video.id}
                      onClick={() => setActiveVideo(index)}
                      className={`text-[10px] font-mono flex items-center gap-2 transition-all px-2 py-1 rounded ${activeVideo === index ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      <FileCode size={12} />
                      {video.label}
                    </button>
                  ))}
                </div>
                <div className="w-8"></div> 
              </div>

              {/* Video Player with Instant Refresh */}
              <div className="relative aspect-[4/3]">
                <video 
                  key={videoPlaylist[activeVideo].src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  preload="auto"
                  className="w-full h-full object-cover opacity-90"
                >
                  <source src={videoPlaylist[activeVideo].src} type="video/mp4" />
                </video>
                
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[10px] font-mono text-emerald-300">
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

        <div className="flex flex-col items-center gap-3 mt-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Watch Video Courses</p>
          <a href="#youtube" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-emerald-500/20 transition-all animate-bounce">
            <ChevronDown size={28} className="text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
