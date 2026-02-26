export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  featured: boolean;
  problem: string;
  approach: string;
  results: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; url: string }[];
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const siteConfig = {
  name: "Aravind Kompalli",
  title: "Data Analytics Engineering · AI (RAG) · Data Engineering",
  tagline:
    "Data Analytics Engineering grad building production-grade RAG systems, scalable ETL pipelines, and executive dashboards—backed by evaluation metrics, not guesses.",
  email: "aravindsaikompalli@gmail.com",
  linkedin: "https://www.linkedin.com/in/aravind51/",
  github: "https://github.com/Aravind5100",
  resumeUrl: "/resume.pdf",
  ogImage: "/og-image.png",
  siteUrl: "https://aravindkompalli.dev",
};

export const about = {
  paragraph:
    "I'm a Data Analytics Engineering graduate student at George Mason University with enterprise experience migrating 25 million billing records and building automated data pipelines. I bridge the gap between raw data and real decisions—whether that means designing Power BI dashboards for facilities planning, building evaluated RAG systems with measurable retrieval quality, or automating ETL workflows that save teams 40+ hours a month.",
  strengths: [
    "Enterprise Data Migration & ETL (PL/SQL, Python, 25M+ records)",
    "Retrieval-Augmented Generation (RAG) with Recall@K & MRR evaluation",
    "Power BI Dashboards & Advanced Analytics for executive decisions",
    "Cloud & MLOps (AWS S3, EC2, Glue, Redshift, SageMaker, Docker)",
    "Data Modeling, Validation Pipelines & Automation",
  ],
};

export const projects: Project[] = [
  {
    slug: "single-pdf-rag",
    title: "Single-PDF RAG System (Evaluated & Persistent)",
    subtitle: "RAG · Retrieval Evaluation · Streamlit",
    tags: ["RAG", "Data Engineering"],
    featured: true,
    problem:
      "Most RAG demos skip evaluation, rebuild embeddings on every run, rely on opaque APIs, and cannot explain retrieval failures—making them unsuitable for production use on document-heavy workflows.",
    approach:
      "Built a production-style RAG application for question answering over a single PDF using page-aware chunking with overlap, local vector embeddings via Ollama (nomic-embed-text), and FAISS-based similarity search combined with BM25 keyword fallback for hybrid retrieval. Implemented persistent caching of embeddings and FAISS indexes keyed by content hash, chunking parameters, and model name to eliminate redundant computation. Developed a Streamlit UI with chat history, citation-grounded responses, and expandable context inspection. Built a formal retrieval evaluation pipeline using Recall@K and MRR on a hand-curated golden dataset to objectively measure and tune search quality.",
    results: [
      "Hybrid retrieval (FAISS + BM25) improved answer relevance and reduced retrieval misses vs. vector-only search",
      "Persistent caching eliminated redundant embedding computation, enabling instant reloads on subsequent runs",
      "Retrieval evaluation with Recall@K and MRR provided actionable metrics to tune chunking and retrieval strategy",
      "Hallucination-safe generation: context-grounded answers only, with inline page and chunk citations",
    ],
    techStack: [
      "Python",
      "FAISS",
      "Ollama",
      "nomic-embed-text",
      "BM25",
      "Streamlit",
      "Recall@K",
      "MRR",
    ],
    metrics: [
      { label: "Retrieval", value: "Hybrid" },
      { label: "Eval Metrics", value: "Recall@K + MRR" },
      { label: "Caching", value: "Persistent" },
      { label: "Citations", value: "Page-level" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Aravind5100/single_pdf_rag" },
    ],
  },
  {
    slug: "building-energy-ghg-analysis",
    title: "Building Energy Efficiency & GHG Emissions Analysis",
    subtitle: "Data Analytics · Sustainability · Python",
    tags: ["Data Engineering", "BI"],
    featured: true,
    problem:
      "City sustainability teams lacked a data-driven understanding of which Chicago building segments produced the highest GHG emissions and where energy efficiency improvements would have the greatest impact.",
    approach:
      "Built end-to-end data preprocessing and analysis pipelines in Python (Pandas, NumPy) for cleaning, transformation, and emissions-related feature engineering on Chicago building energy use data. Created visualizations for trend and anomaly analysis to identify high-emission building segments and energy consumption patterns. Developed an analytics-driven approach to evaluate relationships between energy usage, building characteristics, and emissions outcomes.",
    results: [
      "Identified high-emission building segments and energy consumption trends across Chicago building stock",
      "Surfaced potential efficiency improvement opportunities through feature engineering and trend analysis",
      "Supported sustainability reporting and data-driven climate/energy planning with actionable visualizations",
      "End-to-end reproducible pipeline from raw data to insight-ready outputs",
    ],
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Preprocessing",
      "Feature Engineering",
    ],
    metrics: [
      { label: "Dataset", value: "Chicago Buildings" },
      { label: "Focus", value: "GHG & Energy" },
      { label: "Pipeline", value: "End-to-End" },
      { label: "Output", value: "Actionable Viz" },
    ],
    links: [],
  },
  {
    slug: "power-bi-space-utilization",
    title: "Power BI Space Utilization Dashboard",
    subtitle: "Facilities Analytics · Executive BI",
    tags: ["BI", "Data Engineering"],
    featured: true,
    problem:
      "George Mason University facilities management lacked a unified view of building occupancy and space utilization, making it difficult to optimize room allocation and support planning decisions across buildings and divisions.",
    approach:
      "Built Power BI dashboards for occupancy and space utilization analysis across university buildings and divisions using DAX measures, relational data modeling, and interactive visualizations. Developed automated data validation pipelines in Python to streamline data transfers between Archibus and AutoCAD floor plan workflows, reducing operational turnaround time.",
    results: [
      "Reduced operational turnaround time by 30% through automated Python validation pipelines",
      "Delivered interactive dashboards with DAX measures and slicers for facilities planning decisions",
      "Streamlined data transfers between Archibus and AutoCAD floor plan workflows",
      "Enabled data-driven space allocation decisions across university buildings and divisions",
    ],
    techStack: [
      "Power BI",
      "DAX",
      "Relational Data Modeling",
      "Python",
      "Archibus",
      "AutoCAD",
    ],
    metrics: [
      { label: "Turnaround ↓", value: "30%" },
      { label: "Tool", value: "Power BI" },
      { label: "Modeling", value: "Relational" },
      { label: "Automation", value: "Python" },
    ],
    links: [],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & GenAI",
    skills: [
      "LLMs",
      "LlamaIndex",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Semantic Search",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "PL/SQL", "R", "Java", "C", "UNIX/Shell Scripting"],
  },
  {
    category: "Data Analytics & ML",
    skills: [
      "Pandas",
      "NumPy",
      "PySpark",
      "Spark MLlib",
      "Predictive Modeling",
      "Model Evaluation",
    ],
  },
  {
    category: "Databases & Retrieval",
    skills: ["Oracle", "PostgreSQL", "pgvector", "FAISS", "NoSQL"],
  },
  {
    category: "Cloud & MLOps",
    skills: [
      "AWS (S3, EC2, Glue, Redshift, SageMaker)",
      "Docker",
      "CI/CD",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    category: "Visualization & Tools",
    skills: [
      "Power BI",
      "Tableau",
      "DAX",
      "Excel (Advanced, Pivot)",
      "Google Analytics",
      "Git",
      "Jupyter",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Space Database Management Intern",
    company: "George Mason University",
    period: "Sep 2025 – Present",
    description:
      "Build automated data validation pipelines and Power BI dashboards for university space utilization and facilities planning.",
    highlights: [
      "Built automated data validation pipelines, reducing operational turnaround time by 30%",
      "Streamlined data transfers between Archibus and AutoCAD floor plan workflows with Python scripts",
      "Built Power BI dashboards for occupancy and space utilization analysis using DAX measures and relational data modeling",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Netcracker Technology Solutions",
    period: "Mar 2022 – Jul 2024",
    description:
      "Developed PL/SQL migration scripts and automated ETL pipelines for large-scale telecom billing data migration.",
    highlights: [
      "Developed 60+ PL/SQL scripts to migrate and validate 25M+ customer billing records, boosting data integrity from 85% to 97.4%",
      "Automated ETL pipelines and validation workflows, cutting manual QA effort by 40 hours/month",
      "Integrated offline migration to migrate O2UK Wholesale customers in parallel, improving efficiency by 25%",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.S. in Data Analytics Engineering (GPA: 3.8)",
    school: "George Mason University",
    period: "Aug 2024 – May 2026",
    details: [
      "Coursework: Machine Learning, Visualizations & Modelling, Data Management & Mining, Big Data",
      "AWS Academy Certifications: Cloud Foundations, Data Engineering",
    ],
  },
];

export const projectFilters = ["All", "RAG", "BI", "Data Engineering"] as const;
