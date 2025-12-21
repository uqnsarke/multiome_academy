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
    <>
      {/* --- SECTION 1: THE FEATURED RESOURCE (Tabs & Download) --- */}
      <section id="resources" className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl backdrop-blur-md grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center shadow-2xl">
            
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
                  The <span className="text-white font-semibold italic">Scanpy Blueprint</span>: A full end-to-end workflow in <span className="text-yellow-400 font-bold">Python</span>.
                </p>
              </div>

              {isDownloaded ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300">
                  <p className="font-bold flex items-center gap-2"><CheckCircle /> Success! Your guide is ready.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Enter academic email"
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition">
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                </form>
              )}
            </div>

            {/* Terminal with MP4 switchable tabs */}
            <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <div className="h-10 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-4">
                  {videoPlaylist.map((video, index) => (
                    <button key={video.id} onClick={() => setActiveVideo(index)} className={`text-[10px] font-mono flex items-center gap-2 px-2 py-1 rounded ${activeVideo === index ? 'text-emerald-400 bg-emerald-400/10' : 'text-slate-500'}`}>
                      <FileCode size={12} /> {video.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3]">
                <video key={videoPlaylist[activeVideo].src} autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={videoPlaylist[activeVideo].src} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE YOUTUBE LEARNING HUB (The missing portion) --- */}
      <section id="youtube" className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <Youtube className="text-red-600 mb-4" size={48} />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Learning Hub</h2>
            <p className="text-slate-400 max-w-xl">
              Deep-dive into single-cell multiomics with my free video courses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* YouTube Link Suggestion 1 */}
            <a href="YOUR_YOUTUBE_LINK_1" target="_blank" className="group relative block rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-red-500/50 transition-all">
              <div className="aspect-video relative">
                <img src="/yt-thumb-1.jpg" alt="Tutorial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 bg-red-600 rounded-full text-white shadow-xl shadow-red-600/40">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Scanpy for Beginners</h3>
                <p className="text-sm text-slate-400">Master the basics of single-cell RNA-seq analysis.</p>
              </div>
            </a>

            {/* YouTube Link Suggestion 2 */}
            <a href="YOUR_YOUTUBE_LINK_2" target="_blank" className="group relative block rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-red-500/50 transition-all">
              <div className="aspect-video relative">
                <img src="/yt-thumb-2.jpg" alt="Tutorial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-4 bg-red-600 rounded-full text-white shadow-xl shadow-red-600/40">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Multiomics Integration</h3>
                <p className="text-sm text-slate-400">Advanced workflows for RNA + ATAC-seq data.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
