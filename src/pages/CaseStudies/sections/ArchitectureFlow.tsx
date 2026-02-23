type Step = {
    title: string;
    desc: string;
  };
  
  export default function ArchitectureFlow({ steps }: { steps: Step[] }) {
    return (
      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-2xl border border-white/10 bg-black/30 p-4 text-sm"
          >
            <div className="font-semibold text-neutral-100">
              {i + 1}. {s.title}
            </div>
            <div className="mt-2 text-neutral-300/80 leading-relaxed">
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    );
  }