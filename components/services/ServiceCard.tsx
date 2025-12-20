'use client';

import React from 'react';

// --- ADD THIS INTERFACE ---
interface ServiceCardProps {
  front: React.ReactNode; // Content for the front of the card
  back: React.ReactNode;  // Content for the back of the card
  flipped: boolean;       // Is the card currently flipped?
}

export default function ServiceCard({ front, back, flipped }: ServiceCardProps) {
  return (
    <div className="relative w-full h-72 perspective cursor-pointer">
      <div 
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700">
          {front}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-900/90 rounded-xl shadow-xl overflow-hidden border border-indigo-500">
          {back}
        </div>
      </div>
    </div>
  );
}
