import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import ArchitectureFlow from "./sections/ArchitectureFlow";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link className="mt-6 inline-block text-cyan-300" to="/case-studies">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <Link className="text-sm text-cyan-300 hover:text-cyan-200" to="/case-studies">
        ← Back
      </Link>

      <div className="mt-6">
        <div className="text-xs tracking-widest text-neutral-300/70">
          {project.category.toUpperCase()}
        </div>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold">{project.title}</h1>
        <p className="mt-4 text-lg text-neutral-200/80">{project.summary}</p>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h2 className="text-xl font-semibold">Key highlights</h2>
          <ul className="mt-4 space-y-3 text-neutral-300/80">
            {project.highlights.map((h) => (
              <li key={h} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <h2 className="text-xl font-semibold">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <div
                key={s}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-200/80"
              >
                {s}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {project.github && (
              <a className="btn-secondary" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.demo && (
              <a className="btn-primary" href={project.demo} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
          </div>
        </div>
      </section>

      {project.problem && (
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-4 text-neutral-300/80 leading-relaxed">
            {project.problem}
          </p>
        </section>
      )}

      {project.context && (
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Context & Constraints</h2>
          <ul className="mt-4 space-y-3 text-neutral-300/80">
            {project.context.map((c) => (
              <li key={c} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                {c}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.approach && (
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <ul className="mt-4 space-y-3 text-neutral-300/80">
            {project.approach.map((a) => (
              <li key={a} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                {a}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.impact && (
        <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Impact</h2>
          <ul className="mt-4 space-y-3 text-neutral-300/80">
            {project.impact.map((i) => (
              <li key={i} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                {i}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Later we add: Architecture, Diagrams, Screenshots */}
      {project.architecture && (
        <section className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <p className="mt-3 text-neutral-300/80">
            High-level flow of the system and how data moves from requirements to
            standardized datasets.
          </p>

          <ArchitectureFlow steps={project.architecture} />
        </section>
      )}
    </div>
  );
}