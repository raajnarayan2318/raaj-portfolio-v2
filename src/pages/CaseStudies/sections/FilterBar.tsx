type Props = {
    category: "All" | "Data Engineering" | "Analytics" | "AI";
    setCategory: (c: Props["category"]) => void;
    query: string;
    setQuery: (q: string) => void;
  };
  
  export default function FilterBar({ category, setCategory, query, setQuery }: Props) {
    const categories: Props["category"][] = ["All", "Data Engineering", "Analytics", "AI"];
  
    return (
      <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-2xl px-4 py-2 text-sm border transition ${
                category === c
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-black/20 hover:bg-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
  
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full md:w-[320px] rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm outline-none focus:border-white/30"
        />
      </div>
    );
  }