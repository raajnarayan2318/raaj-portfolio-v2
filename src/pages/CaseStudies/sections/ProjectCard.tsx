import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../../../data/caseStudies";

export default function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
    >
      <div className="text-xs tracking-widest text-neutral-300/70">
        {project.category.toUpperCase()}
      </div>

      <div className="mt-2 text-xl font-semibold">{project.title}</div>
      <p className="mt-3 text-neutral-300/80">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((s) => (
          <div
            key={s}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-neutral-200/80"
          >
            {s}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link
          to={`/case-studies/${project.slug}`}
          className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
        >
          Open case study →
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-200/70 hover:text-white"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}