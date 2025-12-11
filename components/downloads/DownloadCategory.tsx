"use client";

import { motion } from "framer-motion";
import DownloadItem from "./DownloadItem";

export default function DownloadCategory({ title, items }: any) {
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
        {items.map((item: any, i: number) => (
          <DownloadItem key={i} {...item} />
        ))}
      </div>
    </motion.div>
  );
}
