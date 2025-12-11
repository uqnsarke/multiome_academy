"use client";

export default function ServiceCard({ front, back, flipped }: any) {
  return (
    <div className="relative w-full h-72 transform transition-transform duration-700 transform-style-preserve-3d">
      {/* FRONT */}
      <div className={`absolute inset-0 backface-hidden rounded-2xl p-6 
        bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col items-center justify-center gap-4
        ${flipped ? "rotate-y-180" : ""}
      `}>
        {front}
      </div>

      {/* BACK */}
      <div className={`absolute inset-0 backface-hidden transform rotate-y-180 rounded-2xl p-6 
        bg-white/20 border border-white/30 backdrop-blur-xl flex flex-col justify-center
        ${flipped ? "rotate-y-0" : ""}
      `}>
        {back}
      </div>
    </div>
  );
}
