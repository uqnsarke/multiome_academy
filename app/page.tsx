export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="border-b border-muted section-padding">
        <div className="container-page">
          <h1 className="text-5xl font-semibold tracking-tight">
            Multiome Academy
          </h1>

          <p className="mt-6 max-w-2xl text-muted">
            Advanced education, consulting, and resources for single-cell
            and multi-omics data analysis.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="glass rounded-xl p-8">
            <p className="text-muted">
              This section will contain featured content, services,
              or calls to action.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
