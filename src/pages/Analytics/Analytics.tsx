import { useEffect, useState } from "react";

type Repo = {
  repo: string;
  total_events?: number;
  push_count?: number;
  pr_count?: number;
};

export default function Analytics() {

  const [data, setData] = useState<any>(null);
  const [chart, setChart] = useState("repos");
  const [table, setTable] = useState("top_repositories");

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("total_events");
  const [sortDir, setSortDir] = useState("desc");

  useEffect(() => {

    fetch("./analytics/dashboard_data.json")
      .then(res => res.json())
      .then(setData);

  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-neutral-400">
        Loading GitHub ecosystem analytics...
      </div>
    );
  }

  let tableData: Repo[] = data?.tables?.[table] || [];

  // Search filter
  tableData = tableData.filter(repo =>
    repo.repo.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  tableData = [...tableData].sort((a, b) => {

    const aVal: any = a[sortField as keyof Repo] || 0;
    const bVal: any = b[sortField as keyof Repo] || 0;

    if (sortDir === "asc") return aVal - bVal;
    return bVal - aVal;

  });

  function changeSort(field: string) {

    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("desc");
    }

  }

  return (

    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-semibold mb-10">
        Open Source Ecosystem Intelligence
      </h1>

      {/* METRICS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

        <Metric title="Total Events" value={data.metrics.total_events}/>
        <Metric title="Active Repositories" value={data.metrics.active_repos}/>
        <Metric title="Push Events" value={data.metrics.push_events}/>
        <Metric title="Pull Requests" value={data.metrics.pull_requests}/>

      </div>

      {/* CHART SELECTOR */}

      <div className="flex gap-4 flex-wrap mb-6">

        <button onClick={()=>setChart("repos")} className="btn-secondary">Repo Activity</button>
        <button onClick={()=>setChart("distribution")} className="btn-secondary">Event Distribution</button>
        <button onClick={()=>setChart("scatter")} className="btn-secondary">Push vs PR</button>
        <button onClick={()=>setChart("ai")} className="btn-secondary">AI Ecosystem</button>
        <button onClick={()=>setChart("data")} className="btn-secondary">Data Ecosystem</button>
        <button onClick={()=>setChart("languages")} className="btn-secondary">Languages</button>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">

        {chart==="repos" && (
          <iframe src="./analytics/top_repositories.html" className="w-full h-[600px]" />
        )}

        {chart==="distribution" && (
          <iframe src="./analytics/event_distribution.html" className="w-full h-[600px]" />
        )}

        {chart==="scatter" && (
          <iframe src="./analytics/push_vs_pr.html" className="w-full h-[600px]" />
        )}

        {chart==="ai" && (
          <iframe src="./analytics/ai_repos.html" className="w-full h-[600px]" />
        )}

        {chart==="data" && (
          <iframe src="./analytics/data_repos.html" className="w-full h-[600px]" />
        )}

        {chart==="languages" && (
          <iframe src="./analytics/language_distribution.html" className="w-full h-[600px]" />
        )}

      </div>

      {/* TABLE CONTROLS */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div className="flex gap-4 flex-wrap">

          <button onClick={()=>setTable("top_repositories")} className="btn-secondary">
            Top Repositories
          </button>

          <button onClick={()=>setTable("fastest_growth")} className="btn-secondary">
            Fastest Growth
          </button>

          <button onClick={()=>setTable("ai_repositories")} className="btn-secondary">
            AI Repositories
          </button>

          <button onClick={()=>setTable("data_repositories")} className="btn-secondary">
            Data Engineering
          </button>

        </div>

        {/* SEARCH */}

        <input
          placeholder="Search repository..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm outline-none"
        />

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="border-b border-white/10 text-neutral-400">

            <tr>

              <th className="text-left py-3">#</th>

              <th className="text-left py-3">Repository</th>

              <th
                className="cursor-pointer"
                onClick={()=>changeSort("total_events")}
              >
                Events
              </th>

              <th
                className="cursor-pointer"
                onClick={()=>changeSort("push_count")}
              >
                Push
              </th>

              <th
                className="cursor-pointer"
                onClick={()=>changeSort("pr_count")}
              >
                PR
              </th>

              <th>Trend</th>

            </tr>

          </thead>

          <tbody>

            {tableData.length === 0 ? (

              <tr>
                <td colSpan={6} className="py-8 text-center text-neutral-500">
                  No data available
                </td>
              </tr>

            ) : (

              tableData.map((repo, i) => (

                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">

                  <td className="py-3">{i+1}</td>

                  <td>

                    <a
                      href={`https://github.com/${repo.repo}`}
                      target="_blank"
                      className="text-cyan-400 hover:underline"
                    >
                      {repo.repo}
                    </a>

                  </td>

                  <td>{repo.total_events ?? "-"}</td>
                  <td>{repo.push_count ?? "-"}</td>
                  <td>{repo.pr_count ?? "-"}</td>

                  <td>

                    {repo.total_events && repo.total_events > 200 ? (
                      <span className="text-green-400">▲ Trending</span>
                    ) : (
                      <span className="text-neutral-500">–</span>
                    )}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

function Metric({title,value}:{title:string,value:number}){

  return (

    <div className="bg-white/5 border border-white/10 rounded-xl p-6">

      <p className="text-neutral-400 text-sm">{title}</p>

      <h3 className="text-3xl font-semibold mt-2">
        {value.toLocaleString()}
      </h3>

    </div>

  );

}