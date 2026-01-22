export default function ValueBlocks() {
    return (
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <p className="text-sm tracking-widest text-neutral-300/80">MY APPROACH</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
              Data that earns trust.
            </h2>
            <p className="mt-4 text-neutral-300/80 leading-relaxed">
              My style is simple: automate ingestion, validate aggressively, monitor continuously,
              and surface insights in a way that is fast to interpret.
            </p>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm tracking-widest text-neutral-300/80">WHAT I DELIVER</p>
            <div className="mt-4 grid gap-3">
              {[
                "Robust pipelines & ETL automation",
                "Cleaned / modeled datasets for analytics",
                "Dashboards: KPIs, trends, drill-downs",
                "AI workflows to reduce manual work",
              ].map((x) => (
                <div
                  key={x}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-neutral-200/90"
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }