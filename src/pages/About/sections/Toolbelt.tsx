import { motion } from "framer-motion";

const skills = [
    // Programming & Querying
    "Python (Pandas, NumPy, Scikit-Learn)",
    "SQL (CTEs, Window Functions, Optimization)",
    "PySpark",
    "VBA",

    // Data Engineering & ETL
    "ETL / ELT Pipeline Design",
    "Python ETL Pipelines",
    "Apache Airflow",
    "Azure Data Factory (ADF)",
    "SSIS",
    "API Data Ingestion",
    "Web Scraping (Selenium, REST APIs)",
    "Automation Frameworks",

    // Data Modeling & Warehousing
    "Data Modeling",
    "Data Warehousing",
    "PostgreSQL",
    "MySQL",
    "Redshift",
    "Snowflake",

    // Analytics & BI
    "Power BI (DAX, Dataflows, Power Query)",
    "Tableau",
    "Excel (Power Pivot, VBA)",
    "Azure Data Explorer (Kusto)",
    "KPI Dashboarding",
    "Executive Reporting",

    // Analytics & Data Competencies
    "Data Cleaning & Transformation",
    "Data Quality & Governance",
    "A/B Testing",
    "Cohort & Funnel Analysis",
    "Product Analytics",
    "User Behavior Analysis",
    "GTM & Revenue Analytics",
    "Statistical Analysis",
    "Workflow Optimization",

    // Cloud & Platforms
    "AWS (S3, Lambda, Redshift)",
    "Azure Data Services",
    "Git",
    "Power Automate",
];

export default function Toolbelt() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Toolbelt</h2>
      <p className="mt-2 text-neutral-300/80 max-w-2xl">
        A practical stack for building data products end-to-end.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.015 }}
            className="rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-neutral-200/90 hover:bg-white/10"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}