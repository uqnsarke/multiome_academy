export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <section className="border-b border-white/10 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Downloads
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Curated resources, templates, and tools for single-cell and
            multi-omics analysis.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Placeholder for future download cards */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="text-white/60">
              Downloads will be available here soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
