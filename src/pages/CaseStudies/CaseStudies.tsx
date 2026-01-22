import { useMemo, useState } from "react";
import { caseStudies } from "../../data/caseStudies";
import FilterBar from "./sections/FilterBar";
import ProjectCard from "./sections/ProjectCard";

type Category = "All" | "Data Engineering" | "Analytics" | "AI";

export default function CaseStudies() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return caseStudies.filter((p) => {
      const matchCategory = category === "All" ? true : p.category === category;
      const matchQuery =
        query.trim().length === 0
          ? true
          : (p.title + p.summary).toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold">Case Studies</h1>
          <p className="mt-3 text-neutral-300/80 max-w-2xl">
            Click into a project to explore architecture, decisions, and outcomes.
          </p>
        </div>
      </div>

      <FilterBar
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}