'use client';
import { Download, CheckCircle, Mail, FileCode, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function FeaturedResource() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email captured: ${email}`);
  };

  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
       
       {/* Background Decoration: Faint grid & Glows */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-900/40 border border-slate-700/50 rounded-3xl backdrop-blur-md grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center shadow-2xl">
          
          {/* --- LEFT: TEXT CONTENT --- */}
          <div className="space-y-8">
            <div>
               <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/20 mb-4 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">
                  <Terminal size={14} />
                  <span>Free Resource</span>
               </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Stop Googling Syntax. <br/>
                <span className="text-slate-400">Get the Ultimate Guide.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                The entire single-cell analysis pipeline in Python, condensed into one printable reference. 
                Focus on the <span className="text-purple-400 font-semibold">biology</span>, not the boilerplate.
              </p>
            </div>

            <ul className="space-y-4 text-slate-200">
              <li className="flex items-center space-x-3">
                <div className="bg-purple-500/20 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-purple-400" /></div>
                <span>AnnData Object Structure & Manipulation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-purple-500/20 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-purple-400" /></div>
                <span>Preprocessing: Filtering, Normalization, PCA</span>
              </li>
              <li className="flex items-center space-x-3">
                 <div className="bg-purple-500/20 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-purple-400" /></div>
                <span>Visualization: UMAP, DotPlots, Heatmaps</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white outline-none transition-all placeholder:text-slate-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg flex items-center justify-center space-x-2 whitespace-nowrap transition shadow-lg shadow-purple-900/20">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </form>
          </div>

          {/* --- RIGHT: THE VISUAL (Now styled as a Code Editor Window) --- */}
          <div className="relative group perspective-1000">
            
            {/* Animated Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            {/* The "Window" Container */}
            <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]">
              
              {/* Window Header (Mac/VS Code Style) */}
              <div className="h-9 bg-[#2d2d2d] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                  <FileCode size={12} className="text-blue-400" />
                  scanpy_pipeline.ipynb
                </div>
                <div className="w-8"></div> {/* Spacer for centering */}
              </div>

              {/* Window Content (Video) */}
              <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                >
                  <source src="/dna-loop.mp4" type="video/mp4" />
                </video>
                
                {/* Code Overlay Effect (Grid + Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-[length:20px_20px]"></div>

                {/* Floating "Preview" Badge */}
                <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur border border-slate-700 px-4 py-2 rounded-lg flex items-center gap-3 shadow-xl">
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
