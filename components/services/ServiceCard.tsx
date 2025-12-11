
'use client';
export default function ServiceCard({front,back,flipped}){
return(
<div className="relative w-full h-72 perspective cursor-pointer">
  <div className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flipped?'rotate-y-180':''}`}>
    <div className="absolute inset-0 backface-hidden rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col items-center justify-center gap-4 p-6">
      {front}
    </div>
    <div className="absolute inset-0 backface-hidden transform rotate-y-180 rounded-2xl bg-white/10 border border-cyan-400/30 shadow-[0_0_40px_5px_rgba(0,255,255,0.25)] backdrop-blur-xl flex flex-col justify-center p-6">
      {back}
    </div>
  </div>
</div>
);
}
