import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero-multiome.jpeg" 
          alt="Multiome Cellular Background"
          fill
          className="object-cover object-center opacity-40" // Increased opacity slightly to make it visible
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      {/* 2. CONTENT */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="max-w-5xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Single-Cell Multiomics: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              From Data to Mechanism.
            </span>
          </h1>
          
          {/* UPDATED TEXT: Shorter, punchier, 2 lines max */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between transcriptomics and chromatin accessibility.<br className="hidden md:block" />
            Master the integration pipelines to unlock deeper biological insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link href="/tutorials" className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white text-lg rounded-full font-bold shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] transition-all hover:scale-105">
              Start Learning
            </Link>
            <Link href="#resources" className="px-10 py-4 bg-slate-800/80 hover:bg-slate-700 text-white text-lg rounded-full font-bold border border-slate-700 backdrop-blur-sm transition-all hover:scale-105">
              Get Resources
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
