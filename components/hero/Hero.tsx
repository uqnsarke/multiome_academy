import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-multiome.jpeg" // <-- UPDATED FILENAME
          alt="Multiome Cellular Background"
          fill
          className="object-cover object-center opacity-30" // Increased opacity slightly for better visibility
          priority
        />
        {/* Stronger Gradient Overlay to ensure text readability against the detailed image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Master Single-Cell <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Multiomics.
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Bridge the gap between scRNA-seq and scATAC-seq. Learn the pipelines, understand the integration, and unlock biological insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link href="/tutorials" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold shadow-lg shadow-purple-500/25 transition-all hover:scale-105">
              Start Learning
            </Link>
            <Link href="#resources" className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white rounded-lg font-bold border border-slate-700 backdrop-blur-sm transition-all hover:scale-105">
              Get Resources
            </Link>
          </div>
        </div>

        {/* Diagram Content (Image 3 from previous turn) */}
        {/* Make sure image_10.png is saved in /public/assets/ */}
        <div className="hidden md:block relative h-[500px] w-full animate-fade-in-up delay-200">
           <Image
            src="/assets/image_10.png" 
            alt="Multiome Integration Diagram"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]" // Added a purple glow
          />
        </div>
      </div>
    </section>
  );
}
