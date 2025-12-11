
'use client';
import { IconDownload } from "@tabler/icons-react";

export default function DownloadItem({ name, size, file, icon }) {
  return (
    <div className="flex items-center justify-between bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-gray-400 text-sm">{size}</p>
        </div>
      </div>

      <a
        href={file}
        download
        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg flex items-center gap-2"
      >
        <IconDownload size={18} /> Download
      </a>
    </div>
  );
}
