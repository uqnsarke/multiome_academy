import Image from "next/image";

export default function Home() {
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Multiome Academy — Learn Single-Cell, Multiome & Bioinformatics
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Step-by-step tutorials for scRNA-seq, scATAC-seq, multiome analysis,
          AI for biology, and computational genomics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-cyan-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">YouTube Lessons</h2>
            <p className="text-gray-700">
              Beginner-to-advanced single-cell tutorials.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">Bioinformatics Guides</h2>
            <p className="text-gray-700">
              Seurat, Scanpy, ArchR, SCENIC+, LIANA+, WGCNA.
            </p>
          </div>

          <div className="bg-teal-100 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">AI + Data Science</h2>
            <p className="text-gray-700">
              Machine learning for biology & genomics.
            </p>
          </div>
        </div>

        <button className="mt-10 px-8 py-3 bg-blue-600 text-white text-lg rounded-xl shadow hover:bg-blue-700 transition">
          Explore Tutorials
        </button>
      </div>
    </div>
  );
}

