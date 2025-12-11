import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/services/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mt-32" />
      <ServicesSection />
    </main>
  );
}
