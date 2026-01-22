export type CaseStudy = {
    slug: string;
    title: string;
    category: "Data Engineering" | "Analytics" | "AI";
    summary: string;
    highlights: string[];
    stack: string[];
    github?: string;
    demo?: string;
  };
  
  export const caseStudies: CaseStudy[] = [
    {
      slug: "ai-adaptive-web-scraping",
      title: "AI Adaptive Web Scraping Framework",
      category: "AI",
      summary:
        "Built a scraping framework that adapts to website structure changes using automation + intelligence, improving reliability of ingestion.",
      highlights: [
        "Reduced manual scraper fixes with adaptive parsing",
        "Designed retry + resilience for changing DOM patterns",
        "Structured output into analytics-ready datasets",
      ],
      stack: ["Python", "Automation", "Parsing", "APIs", "Data Modeling"],
      github: "https://github.com/raajnarayan2318",
    },
    {
      slug: "contract-analytics-platform",
      title: "Contract Analytics Platform",
      category: "Analytics",
      summary:
        "Developed analytics workflows to compare contracts, performance, and vendor trends with interactive dashboards.",
      highlights: [
        "Created KPI dashboards with drilldowns",
        "Built reusable metric definitions",
        "Enabled faster vendor evaluation decisions",
      ],
      stack: ["SQL", "Power BI / Tableau", "Modeling", "KPIs"],
    },
    {
      slug: "ecommerce-delivery-risk-insights",
      title: "E-commerce Delivery Risk Insights",
      category: "Analytics",
      summary:
        "Created an end-to-end analytics model to identify delivery delay drivers and quantify risk patterns over time.",
      highlights: [
        "Built feature pipelines for delay factors",
        "Visualized delay hotspots and trends",
        "Supported business decision-making with insights",
      ],
      stack: ["Python", "SQL", "EDA", "Dashboards"],
    },
    {
      slug: "etl-automation-pipeline",
      title: "ETL Automation Pipeline System",
      category: "Data Engineering",
      summary:
        "Designed a scalable ingestion and transformation pipeline to support reporting and analytics with data quality checks.",
      highlights: [
        "Automated ETL with validation steps",
        "Standardized schemas and transformations",
        "Improved reliability of reporting datasets",
      ],
      stack: ["AWS", "SQL", "ETL", "Data Quality", "Pipelines"],
    },
  ];