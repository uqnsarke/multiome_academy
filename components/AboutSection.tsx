import React from 'react';
import { Linkedin, Youtube, Mail, GraduationCap, Github, Instagram } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-black text-white min-h-[60vh] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section */}
        <div className="relative shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <img 
              // IMPORTANT: Make sure this path is correct for your project
              src="/path-to-your-image.jpg" 
              alt="Nishat" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Nishat.</span>
          </h1>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            I bridge the gap between complex biological data and actionable mechanistic insights. 
            Specializing in <strong className="text-white">Single-Cell Multiomics</strong> and <strong className="text-white">Computational Biology</strong>, 
            I build pipelines that decode cellular heterogeneity.
          </p>

          {/* Social Links Grid */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            
            <SocialLink 
              href="https://www.linkedin.com/in/nishat-sarker/" 
              icon={<Linkedin size={20} />} 
              label="LinkedIn" 
            />
            
            <SocialLink 
              href="https://www.youtube.com/@nishat_BioAI" 
              icon={<Youtube size={20} />} 
              label="YouTube" 
            />
            
            <SocialLink 
              href="https://scholar.google.com/scholar?q=Nishat+Sarker" 
              icon={<GraduationCap size={20} />} 
              label="Scholar" 
            />

            <SocialLink 
              href="https://github.com/uqnsarke" 
              icon={<Github size={20} />} 
              label="GitHub" 
            />

            <SocialLink 
              href="https://www.instagram.com/multiome_academy/" 
              icon={<Instagram size={20} />} 
              label="Instagram" 
            />

            <SocialLink 
              href="mailto:nishat.sarker@uq.net.au" 
              icon={<Mail size={20} />} 
              label="Email" 
            />

          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Social Link Component
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-emerald-500/50 hover:bg-gray-800 transition-all duration-300 text-sm font-medium text-gray-300 hover:text-white"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default AboutSection;
