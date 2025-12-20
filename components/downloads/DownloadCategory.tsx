'use client';

import { motion } from "framer-motion";
import DownloadItem from "./DownloadItem";

// --- THIS INTERFACE IS WHAT FIXES THE ERROR ---
interface DownloadCategoryProps {
  title: string;
  items: any[];
}

export default function DownloadCategory({ title, items }: DownloadCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h3 className="text-xl font-bold text-indigo-400 mb-6 border-b border-indigo-500/30 pb-2 inline-block">
        {title}
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <DownloadItem key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
}
