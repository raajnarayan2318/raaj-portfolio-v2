export default function TechMarquee() {
    const items = ["Python", "SQL", "AWS", "Redshift", "Postgres", "Power BI", "Tableau", "Spark", "ETL", "LLMs"];
    return (
      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-6 overflow-hidden">
          <div className="whitespace-nowrap animate-[marquee_22s_linear_infinite] text-neutral-300/80">
            {[...items, ...items].map((x, i) => (
              <span key={i} className="mx-5 text-sm tracking-wide">
                {x}
                <span className="mx-5 text-white/10">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }