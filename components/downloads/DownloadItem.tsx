'use client';

import { IconDownload } from "@tabler/icons-react";
import React from "react";

// --- ADD THIS INTERFACE TO PREVENT TYPE ERRORS ---
interface DownloadItemProps {
  name: string;
  size: string;
  file: string;
  icon?: React.ElementType; // This handles the icon component passed as a prop
}

export default function DownloadItem({ name, size, file, icon: Icon }: DownloadItemProps) {
  return (
    <a 
      href={file} 
      download
      className="group flex items-center justify-between p-4 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-colors">
          {/* Render the icon if it exists, otherwise default to IconDownload */}
          {Icon ? <Icon size={24} /> : <IconDownload size={24} />}
        </div>
        <div>
          <h4 className="font-medium text-slate-200 group-hover:text-white transition-colors">
            {name}
          </h4>
          <span className="text-xs text-slate-500 group-hover:text-slate-400">
            {size}
          </span>
        </div>
      </div>
      
      <div className="text-slate-600 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
        <IconDownload size={20} />
      </div>
    </a>
  );
}
