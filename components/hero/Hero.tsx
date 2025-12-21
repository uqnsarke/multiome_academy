import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          // Note: ensuring this matches your latest upload (.jpg)
          src="/hero-multiome.jpeg"  
          alt="Multiome Cellular Background"
          fill
          // Changed opacity-40 to opacity-80 for much higher visibility
          className="object-cover object-center opacity-80" 
          priority={true}
        />
        
        {/* Lighter Gradient: Starts transparent to show colors, fades to black at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90"></div>
      </div>

      {/* 2. CONTENT */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="max-w-6xl space-y-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Single-Cell Multiomics: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              From Data to Mechanism.
            </span>
          </h1>
          
          {/* UPDATED TEXT LAYOUT */}
          {/* Increased max-width to allow single-line sentences */}
          <div className="text-xl md:text-2xl text-slate-100 font-medium space-y-2 leading-relaxed drop-shadow-md">
            <p>Bridge the gap between transcriptomics and chromatin accessibility.</p>
            <p>Master the integration pipelines to unlock deeper biological insights.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <Link href="/tutorials" className="px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white text-lg rounded-full font-bold shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] transition-all hover:scale-105">
              Start Learning
            </Link>
            <Link href="#resources" className="px-10 py-4 bg-slate-800/90 hover:bg-slate-700 text-white text-lg rounded-full font-bold border border-slate-600 backdrop-blur-md transition-all hover:scale-105">
              Get Resources
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
