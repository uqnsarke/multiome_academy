
'use client';
import { motion } from 'framer-motion';

export default function ParticleLayer() {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -50, 0] }}
          transition={{ duration: 6 + Math.random()*4, repeat: Infinity }}
          className='absolute w-1 h-1 bg-white rounded-full blur-[2px]'
          style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%` }}
        />
      ))}
    </div>
  );
}
