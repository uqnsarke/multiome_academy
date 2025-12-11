
'use client';
import { motion } from 'framer-motion';

export default function NeonRing() {
  return (
    <motion.div
      className='absolute inset-0 flex items-center justify-center pointer-events-none'
      animate={{ opacity: [0.2, 0.7, 0.2] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <div className='w-[500px] h-[500px] rounded-full border border-cyan-300/30 blur-[60px]'/>
    </motion.div>
  );
}
