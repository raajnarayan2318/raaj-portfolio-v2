export type CaseStudy = {
    slug: string;
    title: string;
    category: "Data Engineering" | "Analytics" | "AI";
    summary: string;
    highlights: string[];
    stack: string[];
    github?: string;
    demo?: string;
    problem?: string;
    context?: string[];
    approach?: string[];
    impact?: string[];
    architecture?: {
      title: string;
      desc: string;
    }[];
  };
  
  export const caseStudies: CaseStudy[] = [
    {
      slug: "automated-data-pipeline-analytics-platform",
      title: "End-to-End Automated Data Pipeline & Analytics Platform",
      summary:
        "Designed and built an automation-first data pipeline and analytics platform to deliver reliable, decision-ready insights with minimal manual effort.",
      category: "Data Engineering",
      highlights: [
        "Designed end-to-end ETL pipelines with automated ingestion and transformations",
        "Modeled analytics-ready datasets to support consistent KPI reporting",
        "Improved data reliability through validation and monitoring",
        "Delivered BI-ready datasets optimized for Power BI and Tableau",
        "Reduced manual reporting and improved turnaround time for analytics requests",
      ],
      stack: [
        "Python",
        "SQL",
        "Apache Airflow",
        "ETL / ELT Pipelines",
        "Data Modeling",
        "PostgreSQL",
        "AWS (S3)",
        "Data Quality & Validation",
      ],
      github: undefined, // or add link if you have one
      demo: undefined,   // optional

      problem:
        "The existing data process relied heavily on manual data pulls, ad-hoc scripts, and spreadsheet-based reporting. As data volume and reporting needs increased, data quality issues became frequent and generating consistent KPIs required significant manual effort.",

      context: [
        "Multiple data sources with different schemas and refresh schedules",
        "Manual, spreadsheet-driven reporting workflows",
        "Growing demand for reliable KPIs and executive dashboards",
        "Need to reduce operational overhead through automation",
      ],

      approach: [
        "Designed an automation-first ETL pipeline with clear separation between ingestion, transformation, and consumption layers",
        "Modeled analytics-ready datasets to ensure consistent KPI definitions",
        "Introduced validation and basic monitoring to catch data issues early",
        "Optimized outputs specifically for BI tools and analytics use cases",
      ],

      impact: [
        "Reduced manual data preparation and reporting effort",
        "Improved trust and consistency in reported metrics",
        "Enabled faster turnaround for new analytics and dashboard requests",
        "Established a scalable foundation for future automation and AI use cases",
      ],

      architecture: [
        {
          title: "Source Systems",
          desc: "Operational databases, files, and APIs providing raw business data in different formats.",
        },
        {
          title: "Ingestion Layer",
          desc: "Automated ETL pipelines ingest data on a scheduled basis with retries and basic failure handling.",
        },
        {
          title: "Transformation & Modeling",
          desc: "Business logic applied to clean, normalize, and model data into analytics-ready tables.",
        },
        {
          title: "Data Warehouse",
          desc: "Centralized storage optimized for analytical queries and BI workloads.",
        },
        {
          title: "Analytics & BI",
          desc: "Power BI and Tableau dashboards consuming standardized datasets for KPI reporting.",
        },
      ],
    },
    {
      slug: "llm-assisted-scraper-generation",
      title: "LLM-Assisted Scraper Generation & Standardized Datasets",
      category: "AI",
      summary:
        "Built a Python tool using an LLM (Ollama & DeepSeek) to generate scraper scripts and parsing logic from web sources, speeding delivery and producing standardized, schema-aligned datasets for downstream analytics.",
      highlights: [
        "Reduced effort and turnaround time for new scraping requirements by generating scripts from prompts",
        "Standardized scraped outputs into schema-aligned datasets for reliable downstream consumption",
        "Created reusable templates for extraction, normalization, and validation to improve consistency",
        "Improved maintainability by separating site-specific extraction logic from shared pipeline utilities",
      ],
      stack: ["Python","DeepSeek (LLM)","Ollama (LLM)","Postgres","Selenium", "BS4","REST APIs"],
      problem:
        "Scraping requests arrived frequently with changing requirements, and writing site-specific scrapers manually was time-consuming and inconsistent. Each new scraper required repetitive work—understanding the page structure, writing extraction logic, handling edge cases, and mapping outputs to a standardized dataset schema.",

      context: [
        "Needed to ingest data from multiple websites into standardized datasets for analytics",
        "Scrapers were often built under tight timelines and changing requirements",
        "Consistency was critical: outputs had to align to a defined schema and naming conventions",
        "Goal was to reduce manual engineering effort while maintaining accuracy and reliability",
      ],

      approach: [
        "Designed a Python tool that takes scraping requirements as input and uses an LLM (DeepSeek & Ollama) to generate scraper scripts and parsing logic",
        "Created structured prompts and templates so generated code followed consistent patterns (extraction → normalization → schema mapping)",
        "Built a reusable utility layer for shared concerns like requests/retries, HTML parsing helpers, and output validation",
        "Standardized outputs into schema-aligned datasets to make ingestion into downstream pipelines predictable",
        "Added lightweight validation checks to catch missing fields, unexpected formats",
      ],

      impact: [
        "Reduced time spent writing boilerplate scraping logic and accelerated delivery of new scraper requirements",
        "Improved consistency across scrapers by enforcing templates and schema mapping",
        "Produced standardized datasets that downstream pipelines and analytics could consume reliably",
        "Made scraper development more repeatable and easier to maintain over time",
      ],

      architecture: [
        {
          title: "Requirements Input",
          desc: "Scraping requirements provided as structured prompts defining fields, schema, and constraints.",
        },
        {
          title: "LLM Code Generation",
          desc: "DeepSeek generates scraper scripts and parsing logic following predefined templates.",
        },
        {
          title: "Extraction Layer",
          desc: "Generated scripts extract raw HTML or API responses from target sources.",
        },
        {
          title: "Normalization & Mapping",
          desc: "Parsed fields are normalized and mapped to standardized dataset schemas.",
        },
        {
          title: "Validated Output",
          desc: "Schema-aligned datasets with quality checks, ready for downstream pipelines.",
        },
      ],
    },
    {
      slug: "contract-analytics-platform",
      title: "Contract Analytics & Executive Reporting Platform",
      category: "Analytics",
      summary:
        "Designed analytics workflows and executive dashboards to analyze contracts, vendor performance, and cost trends—enabling faster, data-driven decision-making.",
    
      highlights: [
        "Developed standardized KPIs to compare contract performance across vendors",
        "Built interactive dashboards with drill-downs for executive and operational users",
        "Enabled trend analysis and variance tracking across contract terms",
        "Improved visibility into vendor performance and cost drivers",
      ],
    
      stack: [
        "Python",
        "SQL",
        "Power BI (DAX, Dataflows)",
        "Excel",
        "Data Modeling",
        "KPI Design",
        "Executive Reporting",
      ],
    
      problem:
        "Contract data was fragmented across multiple sources, making it difficult to compare vendor performance, track trends, and evaluate contract effectiveness. Reporting relied on manual analysis, limiting consistency and scalability.",
    
      context: [
        "Contract and vendor data sourced from multiple systems",
        "Stakeholders required both high-level summaries and detailed drill-downs",
        "Metrics needed to be consistent across contracts and reporting periods",
        "Reports were consumed by both operational teams and executives",
      ],
    
      approach: [
        "Designed a unified analytical data model to standardize contract and vendor metrics",
        "Defined reusable KPI logic to ensure consistency across dashboards",
        "Built interactive dashboards with filters, drill-downs, and trend views",
        "Optimized queries and models for performance and usability",
      ],
    
      impact: [
        "Improved visibility into contract performance and vendor trends",
        "Reduced time required to analyze and compare contracts",
        "Enabled executives to make faster, more informed vendor decisions",
        "Established a repeatable analytics framework for future reporting needs",
      ],
    
      architecture: [
        {
          title: "Source Systems",
          desc: "Contract, vendor, and performance data from operational systems.",
        },
        {
          title: "Data Modeling Layer",
          desc: "Standardized contract and vendor models with reusable KPI definitions.",
        },
        {
          title: "Analytics Engine",
          desc: "Optimized SQL and semantic models powering dashboards and reports.",
        },
        {
          title: "BI & Dashboards",
          desc: "Interactive Power BI and Excel dashboards for executives and analysts.",
        },
      ],
    },
    {
      slug: "ecommerce-delivery-risk-insights",
      title: "E-commerce Delivery Risk & Delay Insights",
      category: "Analytics",
    
      summary:
        "Analyzed delivery performance data to identify delay drivers, risk patterns, and operational bottlenecks—enabling more informed logistics and customer experience decisions.",
    
      highlights: [
        "Identified key factors contributing to delivery delays across regions and time periods",
        "Built analytical features to quantify delivery risk and delay likelihood",
        "Visualized trends and hotspots to support operational decision-making",
        "Translated exploratory analysis into actionable insights for stakeholders",
      ],
    
      stack: [
        "Python",
        "SQL",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Statistical Analysis",
        "Dashboards & Visualizations",
      ],
    
      problem:
        "Delivery delays were impacting customer satisfaction, but the underlying causes were not well understood. Existing reporting focused on averages and lacked visibility into risk patterns, outliers, and contributing factors.",
    
      context: [
        "Large volume of order and delivery records across multiple regions",
        "Multiple potential delay drivers including logistics, geography, and timing",
        "Need to move beyond descriptive metrics to risk-oriented analysis",
        "Insights needed to support operational improvements and planning",
      ],
    
      approach: [
        "Performed exploratory data analysis to understand delivery distributions and delay behavior",
        "Engineered features to capture timing, regional, and operational risk factors",
        "Segmented data to identify high-risk routes, periods, and customer segments",
        "Analyzed trends and correlations to surface the most impactful delay drivers",
      ],
    
      impact: [
        "Improved understanding of delivery delay patterns and contributing factors",
        "Enabled targeted investigation of high-risk regions and time windows",
        "Provided data-backed insights to support logistics and operational planning",
        "Established a framework for ongoing risk monitoring and analysis",
      ],
    
      architecture: [
        {
          title: "Order & Delivery Data",
          desc: "Historical order, shipment, and delivery records across regions and time periods.",
        },
        {
          title: "Feature Engineering",
          desc: "Derived features capturing timing, geography, and operational risk factors.",
        },
        {
          title: "Analytical Processing",
          desc: "Exploratory and statistical analysis to identify patterns, correlations, and risks.",
        },
        {
          title: "Insights & Dashboards",
          desc: "Visualizations highlighting delay hotspots, trends, and risk segments.",
        },
      ],
    },
    {
      slug: "llm-powered-document-metadata-platform",
      title: "LLM-Powered Document Metadata & Extraction Platform",
      category: "AI",
    
      summary:
        "Built an LLM-powered (DeepSeek) system to automatically identify, tag, and extract key information from documents collected via automated workflows—producing clean, standardized datasets for AI/ML model training.",
    
      highlights: [
        "Automated document ingestion from multiple sources using Python-based workflows",
        "Used LLMs to classify and meta-tag documents for downstream AI/ML training",
        "Extracted key structured attributes from unstructured document content",
        "Standardized and canonicalized datasets for easy access and reuse by multiple teams",
      ],
    
      stack: [
        "Python",
        "Excel",
        "Postgres",
        "DeepSeek LLM",
        "Ollama LLM",
        "Document Processing",
        "Metadata Tagging",
        "Information Extraction",
        "Automation Frameworks",
        "Schema Design & Canonicalization",
        "Data Quality Checks",
      ],
    
      problem:
        "Documents collected from multiple sources lacked consistent structure, metadata, and organization, making them difficult to use for AI/ML training and analysis. Manual tagging and extraction was time-consuming, inconsistent, and did not scale.",
    
      context: [
        "Documents collected via automated requests to multiple external and internal sources",
        "Large volume of unstructured and semi-structured document data",
        "Downstream AI/ML teams required clean, well-labeled datasets for model training",
        "Need to reduce manual effort while improving consistency and data usability",
      ],
    
      approach: [
        "Built Python-based automation to collect and ingest documents from various sources",
        "Designed an LLM-powered pipeline to classify and meta-tag documents based on content",
        "Extracted key attributes and entities from documents into structured fields",
        "Canonicalized tables and schemas to create clean, standardized datasets",
        "Applied validation and quality checks to ensure consistency and usability",
      ],
    
      impact: [
        "Significantly reduced manual effort required to tag and prepare documents",
        "Improved consistency and quality of datasets used for AI/ML training",
        "Enabled faster onboarding of new document sources into the data pipeline",
        "Made document datasets easier to explore, access, and reuse across teams",
      ],
    
      architecture: [
        {
          title: "Automated Collection",
          desc: "Python-based workflows request and ingest documents from multiple external and internal sources.",
        },
        {
          title: "LLM Classification & Tagging",
          desc: "LLM processes document content to identify type, metadata, and relevant tags.",
        },
        {
          title: "Information Extraction",
          desc: "Key attributes and entities extracted into structured fields and tables.",
        },
        {
          title: "Canonicalization Layer",
          desc: "Data normalized into standardized schemas and clean, well-organized tables.",
        },
        {
          title: "AI/ML-Ready Datasets",
          desc: "High-quality, labeled datasets made available for model training and analysis.",
        },
      ],
    },
  ];