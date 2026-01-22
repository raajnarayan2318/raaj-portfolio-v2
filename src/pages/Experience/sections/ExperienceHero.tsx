import { motion } from "framer-motion";

export default function ExperienceHero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[850px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/18 to-blue-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 text-lg text-neutral-200/80 max-w-3xl"
        >
          A story-driven timeline highlighting outcomes, impact, and the way I build systems and analytics.
        </motion.p>
      </div>
    </section>
  );
}