import Hero from '@/components/hero/Hero';
import ServicesSection from '@/components/services/ServicesSection';
import FeaturedResource from '@/components/FeaturedResource';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* 1. Hero Section (Top of page) */}
      <Hero />

      {/* 2. Services Section (Flip cards) */}
      <ServicesSection />

      {/* 3. Lead Magnet / Cheat Sheet Section */}
      <FeaturedResource />
      
    </main>
  );
}
