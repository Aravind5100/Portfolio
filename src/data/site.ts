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
  gpa: string;
  details: string[];
  coursework: string[];
  certifications: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  usedIn: string; // where you used it
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export const siteConfig = {
  name: "Aravind Kompalli",
  title: "Data Analytics Engineering · AI (RAG) · Data Engineering",
  tagline:
    "Data Analytics Engineering grad building production-grade RAG systems, scalable ETL pipelines, and executive dashboards—backed by evaluation metrics, not guesses.",
  introRoles: [
    "Data Analytics Engineer",
    "RAG System Builder",
    "ETL Pipeline Architect",
    "BI Dashboard Designer",
  ],
  introHook: "I turn messy data into clear decisions.",
  email: "aravindsaikompalli@gmail.com",
  linkedin: "https://www.linkedin.com/in/aravind51/",
  github: "https://github.com/Aravind5100",

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
    icon: "🧠",
    skills: [
      { name: "RAG Systems", proficiency: 90, usedIn: "Single-PDF RAG project" },
      { name: "LLMs & Prompt Engineering", proficiency: 85, usedIn: "RAG evaluation pipeline" },
      { name: "Embeddings & Vector Search", proficiency: 88, usedIn: "FAISS + BM25 hybrid retrieval" },
      { name: "LlamaIndex", proficiency: 75, usedIn: "Document indexing experiments" },
      { name: "Semantic Search", proficiency: 85, usedIn: "Hybrid retrieval optimization" },
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", proficiency: 95, usedIn: "All projects — pipelines, RAG, analytics" },
      { name: "SQL / PL/SQL", proficiency: 92, usedIn: "25M+ record migration at Netcracker" },
      { name: "R", proficiency: 70, usedIn: "Statistical analysis coursework" },
      { name: "Java", proficiency: 65, usedIn: "Backend modules at Netcracker" },
      { name: "Shell Scripting", proficiency: 72, usedIn: "ETL automation scripts" },
    ],
  },
  {
    category: "Data Analytics & ML",
    icon: "📊",
    skills: [
      { name: "Pandas / NumPy", proficiency: 93, usedIn: "Energy & GHG analysis pipeline" },
      { name: "PySpark & Spark MLlib", proficiency: 78, usedIn: "Big Data coursework" },
      { name: "Predictive Modeling", proficiency: 80, usedIn: "ML coursework & projects" },
      { name: "Model Evaluation", proficiency: 85, usedIn: "Recall@K / MRR in RAG" },
    ],
  },
  {
    category: "Databases & Retrieval",
    icon: "🗄️",
    skills: [
      { name: "Oracle", proficiency: 88, usedIn: "Billing data migration at Netcracker" },
      { name: "PostgreSQL / pgvector", proficiency: 82, usedIn: "Vector store experiments" },
      { name: "FAISS", proficiency: 87, usedIn: "Single-PDF RAG vector search" },
      { name: "NoSQL", proficiency: 70, usedIn: "Data management coursework" },
    ],
  },
  {
    category: "Cloud & MLOps",
    icon: "☁️",
    skills: [
      { name: "AWS (S3, EC2, Glue, Redshift)", proficiency: 78, usedIn: "Cloud Foundations certification" },
      { name: "Docker", proficiency: 75, usedIn: "Containerized RAG deployment" },
      { name: "CI/CD", proficiency: 72, usedIn: "Netcracker release pipelines" },
      { name: "FastAPI / REST APIs", proficiency: 80, usedIn: "Backend API development" },
    ],
  },
  {
    category: "Visualization & Tools",
    icon: "📈",
    skills: [
      { name: "Power BI & DAX", proficiency: 90, usedIn: "GMU Space Utilization dashboards" },
      { name: "Tableau", proficiency: 75, usedIn: "Data visualization coursework" },
      { name: "Excel (Advanced)", proficiency: 85, usedIn: "Data analysis & reporting" },
      { name: "Git", proficiency: 88, usedIn: "All projects — version control" },
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
    degree: "M.S. in Data Analytics Engineering",
    school: "George Mason University",
    period: "Aug 2024 – May 2026",
    gpa: "3.8",
    details: [
      "Graduate program focused on applied machine learning, big data systems, and analytics engineering",
    ],
    coursework: [
      "Machine Learning",
      "Data Visualization & Modeling",
      "Data Management & Mining",
      "Big Data Analytics",
      "Statistical Methods",
      "Marketing Research",
    ],
    certifications: [
      "AWS Academy Cloud Foundations",
      "AWS Academy Data Engineering",
    ],
    achievements: [
      "GPA 3.8 / 4.0",
      "Space Management Database Intern at GMU Facilities",
    ],
  },
];

export const projectFilters = ["All", "RAG", "BI", "Data Engineering"] as const;
