import Hero from '@/components/hero/Hero';
import ServicesSection from '@/components/services/ServicesSection';
import FeaturedResource from '@/components/FeaturedResource';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* 1. Hero Section (Top of page) */}
      {/* Main visual hook with video background */}
      <Hero />

      {/* 2. Services Section (Flip cards) */}
      {/* Detailed breakdown of your bioinformatics services */}
      <ServicesSection />

      {/* 3. Lead Magnet / Cheat Sheet Section */}
      {/* Email capture and value offer */}
      <FeaturedResource />
      
      {/* 4. About Section (New) */}
      {/* Bio, Profile Picture, and Social Links */}
      <AboutSection />

    </main>
  );
}
