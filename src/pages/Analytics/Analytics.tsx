export default function Analytics() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-semibold mb-10">
        Open Source Ecosystem Analytics
      </h1>

      <p className="text-neutral-300 mb-12">
        This dashboard analyzes GitHub ecosystem activity using a Spark-based
        data pipeline that processes GitHub Archive data daily.
      </p>

      <div className="space-y-16">

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Trending Repositories
          </h2>

          <iframe
            src="/analytics/top_repositories.html"
            className="w-full h-[600px] border border-white/10 rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Push Activity
          </h2>

          <iframe
            src="/analytics/push_activity.html"
            className="w-full h-[600px] border border-white/10 rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Pull Request Activity
          </h2>

          <iframe
            src="/analytics/pr_activity.html"
            className="w-full h-[600px] border border-white/10 rounded-xl"
          />
        </div>

      </div>
    </div>
  );
}