export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="border-b border-muted section-padding">
        <div className="container-page">
          <h1 className="text-4xl font-semibold tracking-tight">
            Downloads
          </h1>

          <p className="mt-4 max-w-2xl text-muted">
            Templates, scripts, and resources for single-cell and
            multi-omics workflows.
          </p>
        </div>
      </section>

      {/* Downloads Content */}
      <section className="section-padding">
        <div className="container-page">
          <div className="glass rounded-xl p-8">
            <p className="text-muted">
              Downloadable resources will appear here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
