'use client';

import React, { useState } from 'react';
import { Download, CheckCircle, Mail, Terminal, FileCode, ChevronDown } from 'lucide-react';

export default function FeaturedResource() {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  // Both video locations are correctly set here
  const videoPlaylist = [
    { id: 0, title: 'scanpy_pipeline.ipynb', src: '/dna-loop.mp4', label: 'Pipeline' },
    { id: 1, title: 'scanpy_output.mp4', src: '/scanpy_output.mp4', label: 'Results' }
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
                The entire single-cell analysis pipeline in <span className="text-yellow-400 font-bold">Python</span>, 
                condensed into one printable reference. <br className="hidden md:block"/>
                Focus on the <span className="text-emerald-400 font-bold">biology</span>, not the boilerplate.
              </p>
            </div>

            {isDownloaded ? (
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-green-300 animate-in fade-in zoom-in duration-300">
                <p className="font-bold text-lg flex items-center gap-2"><CheckCircle /> Download Started!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white outline-none transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-white font-bold rounded-lg flex items-center justify-center space-x-2 transition shadow-lg">
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Tabbed Terminal Interface */}
          <div className="relative group perspective-1000 hidden md:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transition-transform duration-500">
              
              {/* Terminal Header with Clickable Tabs */}
              <div className="h-10 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                
                {/* Visual Tab Buttons */}
                <div className="flex gap-4">
                  {videoPlaylist.map((video, index) => (
                    <button 
                      key={video.id}
                      onClick={() => setActiveVideo(index)}
                      className={`text-[10px] font-mono flex items-center gap-2 transition-all px-2 py-1 rounded ${activeVideo === index ? 'text-blue-400 bg-blue-400/10 border border-blue-400/20' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      <FileCode size={12} />
                      {video.label}
                    </button>
                  ))}
                </div>
                <div className="w-8"></div> 
              </div>

              <div className="relative aspect-[4/3]">
                {/* Key ensures video element reloads for the new source */}
                <video 
                  key={videoPlaylist[activeVideo].src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-90"
                >
                  <source src={videoPlaylist[activeVideo].src} type="video/mp4" />
                </video>
                
                {/* Dynamic Overlay Title */}
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[10px] font-mono text-blue-300">
                    {videoPlaylist[activeVideo].title}
                </div>

                <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-3 shadow-xl z-20">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-slate-300">Live Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
