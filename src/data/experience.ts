export type Role = {
  company: string;
  title: string;
  location?: string;
  period: string;
  summary: string;
  impact: string[];
  stack: string[];
  caseStudies?: {
    label: string;
    slug: string;
  }[];
};

export const experience: Role[] = [
  {
    company: "LotusPetal AI",
    title: "Senior Data Analyst",
    location: "Remote",
    period: "Jan 2025 – Present",
    summary:
      "Built automation-first data systems and analytics for Technical (Product development, AI Engineerign & Research) and Business (Leadership, Marketting & Sales) teams supporting decision-making, combining robust ETL, standardized schemas, quality gates, and LLM-assisted workflows to reduce manual effort and improve reliability at scale.",
    impact: [
      "Design and deploy automated ETL pipelines using Python, APIs, and Airflow, reducing manual data collection by ~90% and improving reporting accuracy",
      "Built an LLM-powered document processing workflow to classify, meta-tag, and extract structured fields from thousands of documents—accelerating dataset readiness for downstream model training",
      "Developed an AI-assisted scraping capability (Python + Selenium + DeepSeek/Ollama) to generate/maintain scraper logic and map outputs into standardized schemas, expanding data-source coverage while minimizing manual scripting",
      "Engineer centralized PostgreSQL data models and canonicalized tables across multi-source datasets, improving accessibility and reducing repeated transformation work for analysts and downstream teams",
      "Implement automated QA + production health monitoring pipeline (daily validations, artifacts, and reporting) to catch data issues early, reduce recurring production incidents and improve product stability by ~70%",
      "Build GTM + product KPI dashboards (SQL/Excel + Power BI) spanning adoption/retention and funnel metrics, helping leadership uncover conversion gaps and shorten decision cycles",
      "Lead a 4-person data engineering and analysis team: set ETL standards, validation frameworks, dashboard QA checks, and delivery rituals (sprint planning + prioritization) using agile methodologies (Trello) to improve reliability and execution speed",
    ],
    stack: [
      "Python",
      "SQL",
      "Excel",
      "MS D365",
      "MS Office",
      "Apache Airflow",
      "PostgreSQL",
      "Power BI",
      "AWS",
      "APIs",
      "Selenium",
      "BS$", 
      "Playwright",
      "LLMs (DeepSeek & Ollama)",
      "Power BI",
      "Data Modeling",
      "Data Quality & Governance",
      "Automation Frameworks",
      "Executive Reporting",
    ],
    caseStudies: [
      {
        label: "Automated Data Pipeline & Analytics Platform",
        slug: "automated-data-pipeline-analytics-platform",
      },
      {
        label: "LLM-Assisted Scraper Generation",
        slug: "ai-adaptive-web-scraping",
      },
      {
        label: "LLM-Powered Document Metadata Platform",
        slug: "llm-powered-document-metadata-platform",
      },
    ],
  },

  {
    company: "Sakesh Solutions LLC",
    title: "Data Analyst Intern",
    location: "Sugar Land, TX",
    period: "Sep 2024 – Dec 2024",
    summary:
      "Automated ingestion and transformation workflows for recurring product reporting, improving refresh reliability and reducing manual preparation for dashboards and analysis.",
    impact: [
      "Built Python-based ingestion and transformation scripts to automate product data workflows and improve refresh speed",
      "Performed data cleaning, validation, and structured dataset maintenance to ensure reliable inputs for recurring reports",
      "Supported internal dashboards and reporting deliverables by turning ad-hoc requests into repeatable workflows",
    ],
    stack: [
      "Python",
      "SQL",
      "Data Cleaning & Transformation",
      "ETL Pipeline Design",
      "Data Validation",
      "Dashboards / Reporting",
      "Git",
    ],
  },

  {
    company: "University of Houston",
    title: "Financial Analyst (NCWS Student Worker)",
    location: "Houston, TX",
    period: "May 2023 – May 2024",
    summary:
      "Automated financial reporting and performed analytical reviews across cost centers and contracts—reducing manual work and improving accuracy for budgeting decisions.",
    impact: [
      "Automated recurring financial reports using PeopleSoft, Power Query, VBA, and advanced Excel, reducing manual effort by ~30–40%",
      "Analyzed cost-center and contract data using Excel and SQL-based reporting tools to improve accuracy and support budgeting/spend decisions",
      "Built repeatable reporting assets that stakeholders could refresh and trust without heavy manual intervention",
    ],
    stack: [
      "Excel (Power Pivot, VBA)",
      "Power Query",
      "PeopleSoft",
      "SQL",
      "Executive Reporting",
      "Workflow Optimization",
    ],
  },

  {
    company: "Radiant Infosystems",
    title: "Junior Data Analyst",
    location: "Bengaluru, India",
    period: "Jun 2021 – May 2022",
    summary:
      "Built KPI dashboards and supported ETL/reporting pipelines—improving visibility, query performance, and data quality for recurring operational reporting.",
    impact: [
      "Built and maintained Power BI dashboards using DAX, Power Query, and SQL to track operational KPIs and performance metrics",
      "Wrote and optimized MySQL/SQL queries for extraction, transformation, and validation—improving query performance by ~40%",
      "Supported ETL development using SSIS, Azure Data Factory, and Python (Pandas), with intermediate datasets in AWS S3 and reporting tables on Amazon RDS (MySQL)",
      "Performed data cleaning, transformation, and quality checks to reduce inconsistencies and manual reconciliation for recurring reports",
      "Partnered with stakeholders to translate reporting requirements into automated solutions (SQL scripting + scheduled refreshes)",
    ],
    stack: [
      "Power BI (DAX, Power Query)",
      "SQL",
      "MySQL",
      "Tableau",
      "Python (Pandas)",
      "SSIS",
      "Azure Data Factory (ADF)",
      "AWS S3",
      "Amazon RDS (MySQL)",
    ],
  },
];