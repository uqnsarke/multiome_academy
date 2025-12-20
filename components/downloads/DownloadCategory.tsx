
'use client';
import { motion } from "framer-motion";
import DownloadItem from "./DownloadItem";

export default function DownloadCategory({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <div className="space-y-4">
        {items.map((item, i) => (
          <DownloadItem key={i} {...item} />
        ))}
      </div>'use client';

import { motion } from "framer-motion";
import DownloadItem from "./DownloadItem";

// This interface fixes the "implicitly has an 'any' type" error
interface DownloadCategoryProps {
  title: string;
  items: any[]; // We use 'any[]' so it accepts any list of download items
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
    </motion.div>
  );
}
