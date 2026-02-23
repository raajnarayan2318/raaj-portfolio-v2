import { motion } from "framer-motion";

export default function Principles() {
  const principles = [
    {
      title: "Make systems observable",
      desc: "If a pipeline fails silently, it will fail often. Monitoring and alerts are part of the product.",
    },
    {
      title: "Design for scale early",
      desc: "Well-designed data systems handle today’s volume and tomorrow’s growth with minimal rework.",
    },
    {
      title: "Optimize for decisions",
      desc: "Dashboards are not visuals, they are decision tools. Every metric must answer a question.",
    },
    {
      title: "Automate repetitive work",
      desc: "Manual data work slows teams down. Automation unlocks reliability and higher-value problem solving.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Principles</h2>
          <p className="mt-2 text-neutral-300/80 max-w-2xl">
            How I think about building data products, analytics, and automation.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
          >
            <div className="text-xl font-semibold">{p.title}</div>
            <p className="mt-3 text-neutral-300/80">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}