import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="text-6xl p-20">MULTIOME ACADEMY</h1>
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
