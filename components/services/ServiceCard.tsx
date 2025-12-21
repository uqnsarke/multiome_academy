'use client';

import React from 'react';

interface ServiceCardProps {
  front: React.ReactNode; 
  back: React.ReactNode;  
  flipped: boolean;       
}

export default function ServiceCard({ front, back, flipped }: ServiceCardProps) {
  return (
    /* Increased height to h-80 (320px) to better fit the biological descriptions */
    <div className="relative w-full h-80 perspective cursor-pointer group">
      <div 
        className={`relative w-full h-full duration-700 transform-style-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side - Glassmorphism applied */}
        <div className="absolute w-full h-full backface-hidden glass rounded-2xl shadow-2xl overflow-hidden border border-white/10 group-hover:border-indigo-500/50 transition-colors">
          {front}
        </div>

        {/* Back Side - Indigo theme */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-950/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-indigo-500/50">
          {back}
        </div>
      </div>
    </div>
  );
}
