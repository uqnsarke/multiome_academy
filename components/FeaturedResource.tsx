import React from 'react';
import { BookOpen, Mail, Library, Youtube, ArrowRight } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Knowledge Hub
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay updated with the latest in Single-Cell & AI through my written content.
          </p>
        </div>

        {/* --- THE 3-GRID: BLOG, NEWSLETTER, BOOKS --- */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          
          {/* Card 1: Blog */}
          <ResourceCard 
            icon={<BookOpen className="w-8 h-8 text-emerald-400" />}
            title="The Blog"
            desc="Deep dives into bioinformatics algorithms, troubleshooting guides, and Python tutorials."
            link="https://your-blog-url.com"  // <--- UPDATE THIS LINK
            cta="Read Articles"
          />

          {/* Card 2: Newsletter */}
          <ResourceCard 
            icon={<Mail className="w-8 h-8 text-purple-400" />}
            title="BioAI Newsletter"
            desc="Weekly insights on the intersection of Biology and AI, delivered straight to your inbox."
            link="https://your-newsletter-url.com" // <--- UPDATE THIS LINK
            cta="Subscribe Free"
          />

          {/* Card 3: Books */}
          <ResourceCard 
            icon={<Library className="w-8 h-8 text-pink-400" />}
            title="My Books"
            desc="Comprehensive e-books and guides for mastering single-cell analysis from scratch."
            link="https://your-book-store-link.com" // <--- UPDATE THIS LINK
            cta="Browse Library"
          />

        </div>

        {/* --- START LEARNING (YOUTUBE BANNER) --- */}
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-gradient-xy">
          <div className="bg-gray-950 rounded-[22px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left relative overflow-hidden">
            
            {/* Background Texture for Banner */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
                <Youtube className="w-10 h-10 text-red-500 fill-current" />
                Start Learning Now
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Prefer video? Join thousands of students on my YouTube channel. 
                Step-by-step coding tutorials on Scanpy, Seurat, and Multiomics integration.
              </p>
            </div>

            <div className="relative z-10">
              <a 
                href="https://www.youtube.com/@nishat_BioAI" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-red-600 px-8 font-medium text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]"
              >
                <span className="mr-2 text-lg font-bold">Visit Channel</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

// --- REUSABLE CARD COMPONENT ---
interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: string;
  cta: string;
}

const ResourceCard = ({ icon, title, desc, link, cta }: ResourceCardProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group block h-full">
    <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col">
      
      <div className="mb-6 p-4 rounded-2xl bg-black/40 w-fit border border-white/10 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-500 shadow-inner">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
        {desc}
      </p>
      
      <div className="flex items-center text-sm font-bold text-gray-300 uppercase tracking-wider group-hover:text-white transition-colors">
        {cta} 
        <ArrowRight size={16} className="ml-2 text-emerald-500 group-hover:translate-x-2 transition-transform duration-300" />
      </div>

    </div>
  </a>
);

export default ResourcesSection;
