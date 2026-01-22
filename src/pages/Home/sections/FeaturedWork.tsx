import { motion } from "framer-motion";

const featured = [
  {
    title: "AI-Adaptive Scraping Framework",
    tag: "LLM-driven extraction",
    desc: "A resilient ingestion system that adapts to schema changes and expands coverage without manual rewrites.",
    href: "/case-studies/ai-scraping",
  },
  {
    title: "Contract Analytics Platform",
    tag: "Dashboards + modeling",
    desc: "A decision layer that helps compare vendors and detect agency-level trends with clear KPIs.",
    href: "/case-studies/contract-analytics",
  },
  {
    title: "E-commerce Delivery Risk",
    tag: "Analytics + prediction",
    desc: "End-to-end analytics workflow to understand delays and predict delivery risk using ML features.",
    href: "/case-studies/ecom-risk",
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Featured case studies</h2>
          <p className="mt-2 text-neutral-300/80 max-w-2xl">
            Click into a project to see the problem framing, approach, architecture, and impact.
          </p>
        </div>
        <a className="btn-secondary hidden md:inline-flex" href="/case-studies">
          View all
        </a>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featured.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.href}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
          >
            <div className="text-xs tracking-widest text-neutral-300/70">{p.tag}</div>
            <div className="mt-2 text-xl font-semibold">{p.title}</div>
            <p className="mt-3 text-neutral-300/80">{p.desc}</p>
            <div className="mt-6 text-sm font-medium text-cyan-300/90 group-hover:text-cyan-200">
              Open → 
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}