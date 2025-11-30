"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/multiome.png"
        alt="Multiome Background"
        fill
        priority
        className="object-cover"
      />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          Let's learn multiome analysis from scratch!
        </h1>
      </div>
    </div>
  );
}
