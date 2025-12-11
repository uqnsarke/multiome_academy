import DownloadCategory from "@/components/downloads/DownloadCategory";
import {
  IconFileZip,
  IconFileSpreadsheet,
  IconFileCode,
  IconFileText,
} from "@tabler/icons-react";

export default function DownloadsPage() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-semibold text-center mb-12">
          Downloads
        </h1>

        <DownloadCategory
          title="Pipelines"
          items={[
            {
              name: "Multiome Pipeline v1",
              size: "42 MB",
              file: "/downloads/pipeline_v1.zip",
              icon: <IconFileZip size={28} className="text-cyan-300" />,
            },
          ]}
        />

        <DownloadCategory
          title="Datasets"
          items={[
            {
              name: "ATAC Matrix",
              size: "85 MB",
              file: "/downloads/dataset.tsv.gz",
              icon: <IconFileSpreadsheet size={28} className="text-green-300" />,
            },
          ]}
        />

        <DownloadCategory
          title="Notebooks"
          items={[
            {
              name: "Multiome Tutorial",
              size: "4.5 MB",
              file: "/downloads/tutorial.ipynb",
              icon: <IconFileCode size={28} className="text-purple-300" />,
            },
          ]}
        />

        <DownloadCategory
          title="Documentation"
          items={[
            {
              name: "scRNA-seq Guide",
              size: "12 MB",
              file: "/downloads/scrna_guide.pdf",
              icon: <IconFileText size={28} className="text-gray-300" />,
            },
          ]}
        />
      </div>
    </section>
  );
}
