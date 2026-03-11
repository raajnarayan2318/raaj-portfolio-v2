import { motion } from "framer-motion";
import Typewriter from "../../../components/ui/Typewriter";

export default function Hero() {
  return (
    <section className="relative">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-r from-cyan-500/40 via-blue-500/25 to-purple-500/30" />
        <div className="absolute top-20 right-[-120px] h-[420px] w-[420px] rounded-full blur-3xl bg-gradient-to-b from-emerald-500/20 to-cyan-400/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-widest text-neutral-300/80"
            >
              DATA ENGINEERING • ANALYTICS • AI-ASSITED SYSTEMS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-4xl md:text-6xl font-semibold leading-tight"
            >
              Hi, I’m{" "}
              <span className="relative inline-block">
                <Typewriter
                  text="Raaj Thipparthy."
                  className="name-glow"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-5 text-lg text-neutral-200/80 max-w-2xl"
            >
              I build reliable data systems and analytics experiences—pipelines, dashboards, and AI-assisted workflows—
              that help teams make faster, smarter decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                className="btn-primary"
                href="#featured"
              >
                Explore case studies
              </a>
              <a
                className="btn-secondary"
                href="https://github.com/raajnarayan2318"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn-secondary"
                href="https://linkedin.com/in/raajnarayan"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { k: "Production Data Pipelines", v: "Batch & streaming, Automated, Monitored" },
                { k: "Analytics & BI Systems", v: "Decision-ready dashboards & KPIs" },
                { k: "AI-Enabled Workflows", v: "LLMs, Document processing, Automation" },
                { k: "Data Reliability", v: "Validation, Governance, and Trust" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="min-h-[110px] rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur"
                >
                  <div className="text-sm font-semibold leading-snug text-neutral-100">
                    {x.k}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-300/80">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="aspect-square rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Raaj profile"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
              <div className="mt-4">
                <div className="text-sm text-neutral-300/80">Focus</div>
                <div className="mt-1 font-medium">
                  Data Engineering • Analytics • AI Enablement
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-300/80">
                Based on real outcomes: automation, quality, and decision velocity. (We’ll refine these lines later.)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}