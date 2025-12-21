'use client';

import React from 'react';

interface ServiceCardProps {
  front: React.ReactNode; 
  back: React.ReactNode;  
  flipped: boolean;       
}

export default function ServiceCard({ front, back, flipped }: ServiceCardProps) {
  return (
    <div className="relative w-full h-[360px] md:h-[380px] perspective cursor-pointer group">
      <div 
        className={`relative w-full h-full duration-700 transform-style-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  );
}
