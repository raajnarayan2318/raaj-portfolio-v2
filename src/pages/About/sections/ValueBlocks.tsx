export default function ValueBlocks() {
    return (
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <p className="text-sm tracking-widest text-neutral-300/80">MY APPROACH</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Complex Data to Decision-Ready Systems.
            </h2>
            <p className="mt-4 text-neutral-300/80 leading-relaxed">
              I design data systems with reliability and automation as first-class concerns,
              starting from ingestion and validation through monitoring, analytics, and downstream consumption.
              My focus is on building pipelines and analytics layers that teams can trust,
              even as data volume, complexity, and business demands grow.
            </p>

            <p className="mt-3 text-neutral-300/80 leading-relaxed">
              Rather than optimizing only for speed, I prioritize correctness, observability,
              and long-term maintainability. Where it adds real value, I incorporate AI-assisted
              workflows to reduce manual effort, accelerate insights, and improve operational efficiency
              without compromising engineering discipline.
            </p>
          </div>
  
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm tracking-widest text-neutral-300/80">WHAT I DELIVER</p>
            <div className="mt-4 grid gap-4">
              {[
                "End-to-end automated data pipelines (batch & near real-time)",
                "Modeled datasets designed for analytics and BI consumption",
                "Decision-ready dashboards with KPIs, trends, and drill-downs",
                "AI-powered workflows for document processing and automation",
              ].map((x) => (
                <div
                  key={x}
                  className="
                    flex items-center
                    min-h-[64px]
                    rounded-2xl
                    border border-white/10
                    bg-black/30
                    px-5
                    py-4
                    text-neutral-200/90
                    leading-relaxed
                  "
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