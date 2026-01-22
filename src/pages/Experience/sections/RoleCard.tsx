import { useState } from "react";
import { motion } from "framer-motion";
import type { Role } from "../../../data/experience";

export default function RoleCard({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-sm tracking-widest text-neutral-300/70">
            {role.period}
          </div>
          <div className="mt-2 text-xl font-semibold">
            {role.title}
          </div>
          <div className="mt-1 text-neutral-300/80">
            {role.company}
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="self-start rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          {open ? "Collapse" : "Read more"}
        </button>
      </div>

      <p className="mt-4 text-neutral-300/80">{role.summary}</p>

      {/* expandable area */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-sm font-medium">Impact</div>
            <ul className="mt-3 space-y-2 text-neutral-300/80">
              {role.impact.map((x) => (
                <li key={x} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="text-sm font-medium">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.stack.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-200/80"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}