import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-cyan-500/25 via-blue-500/20 to-purple-500/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          About
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-5 text-lg text-neutral-200/80 max-w-3xl"
        >
          I’m a data engineer and analytics practitioner focused on building
          automation-first, reliable data systems that remove friction between
          data and decisions.

          My work spans production data pipelines, analytics platforms, and
          AI-assisted workflows—designed to scale with the business rather than
          break under it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {[
              {
                title: "Production Data Engineering",
                desc: "Designing and operating batch and streaming pipelines with automation, monitoring, and scale in mind.",
              },
              {
                title: "Analytics & Decision Systems",
                desc: "Building dashboards and KPI layers that translate complex data into business-ready insights.",
              },
              {
                title: "AI-Enabled Automation",
                desc: "Applying LLMs and intelligent workflows to document processing, scraping, and analytics acceleration.",
              },
            ].map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-xl font-semibold">{x.title}</div>
              <p className="mt-3 text-neutral-300/80">{x.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}