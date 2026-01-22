export type Role = {
    company: string;
    title: string;
    location?: string;
    period: string;
    summary: string;
    impact: string[];
    stack: string[];
  };
  
  export const experience: Role[] = [
    {
      company: "Contractor / Projects",
      title: "Data Engineering & Analytics Projects",
      period: "Recent",
      summary:
        "Built automation-first pipelines and analytics workflows focused on reliability, decision clarity, and scalable data modeling.",
      impact: [
        "Designed reusable ingestion pipelines with validation + schema standards",
        "Built KPI dashboards to support stakeholder decision-making",
        "Reduced manual reporting effort through automation workflows",
      ],
      stack: ["Python", "SQL", "AWS", "ETL", "Power BI/Tableau", "Git"],
    },
    {
      company: "Academic & Independent Work",
      title: "Analytics + Systems Projects",
      period: "Earlier",
      summary:
        "Delivered multiple end-to-end projects covering data collection, transformation, modeling, and reporting.",
      impact: [
        "Created analytics models around performance and operational risk",
        "Built structured datasets from unstructured sources",
        "Developed dashboards + reporting for trend and performance monitoring",
      ],
      stack: ["Python", "SQL", "APIs", "Data Cleaning", "Dashboards"],
    },
  ];