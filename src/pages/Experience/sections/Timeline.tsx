import { experience } from "../../../data/experience";
import RoleCard from "./RoleCard";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

        <div className="space-y-8">
          {experience.map((role, idx) => (
            <div key={idx} className="relative pl-12">
              {/* node */}
              <div className="absolute left-[6px] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.45)]" />
              <RoleCard role={role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}