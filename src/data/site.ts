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
  usedIn: string; // where you used it
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const siteConfig = {
  name: "Aravind Kompalli",
  title: "Data Analytics Engineering · AI (RAG) · Data Engineering",
  tagline:
    "Data Analytics Engineering grad who builds RAG pipelines, ETL migrations, and dashboards, then proves they work with real evaluation metrics.",
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
    "I'm a Data Analytics Engineering graduate student at George Mason University with enterprise experience migrating 11 million customer records and building automated data pipelines. That includes designing Power BI dashboards, automating an Archibus-to-ArcGIS database migration for facilities planning, building evaluated RAG systems with measurable retrieval quality, and automating ETL workflows that cut QA cycle time from 60 hours to 25.",
  strengths: [
    "Enterprise Data Migration & ETL (PL/SQL, Python, 11M+ customer records)",
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
      "Most RAG demos skip evaluation, rebuild embeddings on every run, rely on opaque APIs, and cannot explain retrieval failures, which makes them unsuitable for production use on document-heavy workflows.",
    approach:
      "Built a production-style RAG application for question answering over a single PDF using page-aware chunking with overlap, local vector embeddings via Ollama (nomic-embed-text), and FAISS-based similarity search combined with BM25 keyword fallback for hybrid retrieval. Implemented persistent caching of embeddings and FAISS indexes keyed by content hash, chunking parameters, and model name to eliminate redundant computation. Developed a Streamlit UI with chat history, citation-grounded responses, and expandable context inspection. Built a formal retrieval evaluation pipeline using Recall@K and MRR on a hand-curated golden dataset to objectively measure and tune search quality.",
    results: [
      "Perfect Recall@K = 1.0 on a 10-question hand-labeled golden set: every scored question retrieved a chunk from its correct ground-truth page",
      "MRR = 0.806 across policy, fact, list, and procedure question types, evaluated against a real university housing handbook",
      "Persistent, content-addressed caching (SHA-256 of PDF + chunking params + embed model) eliminated redundant embedding computation on repeat runs",
      "Hallucination-safe generation: context-grounded answers only, with inline page and chunk citations, and a verified refusal path for unanswerable questions",
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
      { label: "Recall@K", value: "1.0" },
      { label: "MRR", value: "0.806" },
      { label: "Caching", value: "Content-Hashed" },
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
  {
    slug: "arctic-policy-intelligence-engine",
    title: "Arctic Policy Intelligence Engine",
    subtitle: "RAG · Legal-Grade Citations · GMU DAEN Capstone",
    tags: ["RAG", "Full-Stack"],
    featured: true,
    problem:
      "Military legal analysts assessing Arctic geopolitical scenarios have to manually cross-reference UNCLOS, bilateral treaties, and national Arctic strategies across 10 countries. A standard LLM answer isn't trustworthy enough to cite in a real legal assessment, since it can fabricate a treaty article or a quote that doesn't exist.",
    approach:
      "As the primary contributor (248 of roughly 280 commits) on a 4-person GMU DAEN capstone team, 'Team Watchtower,' I built a full-stack RAG system engineered specifically to make LLM output citable: hybrid BM25 + FAISS retrieval with query-adaptive lane weighting and bounded RRF fusion, an evidence-first composition pipeline that tags every finding as [LAW]/[POLICY]/[FACT]/[INFERENCE]/[GAP], a 3-gate validation layer backed by an approved-quotes provenance pool, and an 8-dimension risk scorer producing a GO/CAUTION/NO-GO recommendation per scenario. A generate, verify, escalate chain routes across three different models so no model checks its own work. Every major decision was validated with a controlled A/B test against a fixed golden eval set rather than assumed, including the call to disable LLM-generated HyDE after it cost 6 points of nDCG.",
    results: [
      "Evidence-first composition took the system from 0 legally-citable findings across all test scenarios to 6 validated [LAW] findings with zero unsupported claims and zero authority violations",
      "A controlled 25-scenario A/B test showed enabling web retrieval raised evidence-first routing from 56% to 88%, adding 8 legally-grounded findings vs. 0, for only +3.7s of added latency",
      "Backed by a curated corpus of 955+ sources and 150K+ chunks across 10 Arctic nations plus Arctic Council/NATO/EU sources",
      "1,505 backend + 84 frontend automated tests; full-stack Dockerized deployment (FastAPI + Next.js + Nginx) with Prometheus/Grafana observability and Langfuse LLM tracing",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "FAISS",
      "SQLite FTS5",
      "OpenAI API",
      "Docker",
      "Langfuse",
    ],
    metrics: [
      { label: "LAW findings", value: "0 → 6" },
      { label: "EF routing (web A/B)", value: "56% → 88%" },
      { label: "Corpus", value: "955+ sources" },
      { label: "Automated tests", value: "1,589" },
    ],
    links: [],
  },
  {
    slug: "career-intelligence-data-platform",
    title: "Career Intelligence Data Platform",
    subtitle: "Data Engineering · ML · Medallion Architecture",
    tags: ["Data Engineering", "BI"],
    featured: true,
    problem:
      "The labor market for data professionals is noisy: job seekers can't easily tell which skills matter for which role, what a realistic next-role transition looks like, which skills are trending vs. plateauing, or which job postings are inflated, mislabeled noise rather than genuine signal.",
    approach:
      "Built a 5-layer medallion pipeline (Bronze → Silver → Gold → ML → Serving) over 785,741 real job postings, with one ML module mapped to each of four business questions: a text-only Linear SVM role classifier, a per-skill Exponential Smoothing/ARIMA demand forecaster, a cosine-similarity career-transition recommender, and an Isolation Forest plus rule-based job-posting anomaly detector. Cleaning, validation, and quality-check scripts run between every layer, and every ML module was benchmarked against simpler baselines before being selected for production.",
    results: [
      "Cleaned 785,741 raw postings down to 784,895 duplicate-free records and 3,591,106 job-skill pairs across 252 unique skills",
      "Role classifier reached 94.55% held-out accuracy (92.76% macro F1), scored across the full 758,502-row eligible dataset with 95.98% agreement",
      "Identified 4 emerging skills (Tableau, Power BI, Excel, R) vs. 6 stable core skills (SQL, Python, AWS, Spark, Azure, Java) from 53 weeks of demand data",
      "Flagged 38,305 anomalous postings (4.9% of the dataset) by combining rule-based thresholds with an Isolation Forest model",
    ],
    techStack: [
      "Python",
      "Pandas",
      "scikit-learn",
      "statsmodels",
      "AWS S3",
      "Parquet",
      "Jupyter",
    ],
    metrics: [
      { label: "Postings processed", value: "785,741" },
      { label: "Classifier accuracy", value: "94.55%" },
      { label: "Anomalies flagged", value: "38,305" },
      { label: "Architecture", value: "5-Layer Medallion" },
    ],
    links: [],
  },
  {
    slug: "taskhub-api",
    title: "TaskHub Task Manager API",
    subtitle: "FastAPI · JWT Auth · PostgreSQL",
    tags: ["Full-Stack"],
    featured: false,
    problem:
      "A task-management API's easiest-to-get-wrong parts aren't the CRUD routes. They're the sharp edges: auth correctness, information leakage between users, partial-update semantics, and encoding edge cases that a happy-path demo never exercises.",
    approach:
      "Built a FastAPI + PostgreSQL backend with JWT-based auth and fully owner-scoped CRUD, structured around six single-responsibility files (config, database, models, schemas, auth, routes) so persistence, wire format, and auth never leak into each other. Ownership is enforced as a query filter, not a follow-up check, so no future route can accidentally fetch another user's row. A task that isn't yours returns the same 404 as a task that doesn't exist, closing an enumeration side-channel; explicit response models allow-list every field returned so an unrelated ORM change can't silently leak a hashed password. Paired with a React + TypeScript frontend (taskhub-ui) that exercises the full contract end-to-end.",
    results: [
      "Closed a real TOCTOU race in registration by catching the DB's unique-constraint violation on commit rather than trusting a pre-check alone",
      "Fixed bcrypt's silent 72-byte password truncation by validating byte length (not character length) before hashing, preventing a false sense of password strength",
      "Blocked username homoglyph impersonation (e.g. Cyrillic look-alike characters) with an explicit character-set validator",
      "404-not-403 and identical-message login errors prevent both task-ID and username enumeration by any authenticated caller",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "React",
      "TypeScript",
    ],
    metrics: [
      { label: "Auth", value: "JWT (OAuth2)" },
      { label: "Ownership checks", value: "Query-level" },
      { label: "Frontend", value: "React + TS" },
      { label: "Files", value: "6, single-purpose" },
    ],
    links: [],
  },
  {
    slug: "url-shortener",
    title: "URL Shortener Service",
    subtitle: "FastAPI · React · CORS Debugging",
    tags: ["Full-Stack"],
    featured: false,
    problem:
      "A FastAPI URL-shortener backend existed with no frontend and no CORS policy configured, so no browser-based client could call it at all.",
    approach:
      "Extended the existing three-route FastAPI backend (shorten, stats lookup, redirect-with-click-tracking) with a CORS policy and a full React (Vite) frontend: a shorten form, a link card with copy/stats actions, and a stats lookup view, with created-link history persisted to localStorage since the API has no listing endpoint. Diagnosed and fixed a real CORS bug live: a second, independently-run dev server landed on a different port than the backend's hardcoded CORS allowlist expected. Used lsof to confirm what was actually listening and a hand-crafted curl preflight request to isolate the exact failing header before shipping the fix.",
    results: [
      "Shipped a complete shorten → track → look-up-stats flow, verified end-to-end in a live browser session rather than just written and assumed correct",
      "Diagnosed a live CORS failure to its root cause (a second dev server on an unexpected port) using infrastructure-level tools (lsof, curl preflight) instead of guesswork",
      "Replaced a single hardcoded CORS origin with a regex-based localhost policy, confirmed fixed using the same curl-based method that found the bug",
      "Collision-checked shortcode generation over a 62^6 (~56.8B) possible-value space",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "React", "Vite"],
    metrics: [
      { label: "Routes", value: "3 REST endpoints" },
      { label: "Shortcode space", value: "62⁶" },
      { label: "Verification", value: "Live E2E" },
      { label: "Debug method", value: "lsof + curl" },
    ],
    links: [],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & GenAI",
    skills: [
      { name: "RAG Systems", usedIn: "Single-PDF RAG project" },
      { name: "LLMs & Prompt Engineering", usedIn: "RAG evaluation pipeline" },
      { name: "Embeddings & Vector Search", usedIn: "FAISS + BM25 hybrid retrieval" },
      { name: "LlamaIndex", usedIn: "Document indexing experiments" },
      { name: "Semantic Search", usedIn: "Hybrid retrieval optimization" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", usedIn: "All projects: pipelines, RAG, analytics" },
      { name: "SQL / PL/SQL", usedIn: "11M+ customer record migration at Netcracker" },
      { name: "React / TypeScript", usedIn: "TaskHub UI, URL Shortener frontend, Arctic Policy dashboard (Next.js)" },
      { name: "R", usedIn: "Statistical analysis coursework" },
      { name: "Java", usedIn: "Backend modules at Netcracker" },
      { name: "Shell Scripting", usedIn: "ETL automation scripts" },
    ],
  },
  {
    category: "Data Analytics & ML",
    skills: [
      { name: "Pandas / NumPy", usedIn: "Energy & GHG analysis pipeline" },
      { name: "PySpark & Spark MLlib", usedIn: "Big Data coursework" },
      { name: "Predictive Modeling", usedIn: "ML coursework & projects" },
      { name: "Model Evaluation", usedIn: "Recall@K / MRR in RAG" },
    ],
  },
  {
    category: "Databases & Retrieval",
    skills: [
      { name: "Oracle", usedIn: "Billing data migration at Netcracker" },
      { name: "PostgreSQL / pgvector", usedIn: "Vector store experiments" },
      { name: "FAISS", usedIn: "Single-PDF RAG vector search" },
      { name: "NoSQL", usedIn: "Data management coursework" },
    ],
  },
  {
    category: "Cloud & MLOps",
    skills: [
      { name: "AWS (S3, EC2, Glue, Redshift)", usedIn: "Cloud Foundations certification" },
      { name: "Docker", usedIn: "Containerized RAG deployment" },
      { name: "CI/CD", usedIn: "Netcracker release pipelines" },
      { name: "FastAPI / REST APIs", usedIn: "TaskHub, URL Shortener, Alaska billing portal (Netcracker)" },
    ],
  },
  {
    category: "Visualization & Tools",
    skills: [
      { name: "Power BI & DAX", usedIn: "GMU Space Utilization dashboards" },
      { name: "Tableau", usedIn: "Data visualization coursework" },
      { name: "Excel (Advanced)", usedIn: "Data analysis & reporting" },
      { name: "Git", usedIn: "All projects: version control" },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Space Management Analyst",
    company: "George Mason University",
    period: "Sep 2026 - Present",
    description:
      "Leading the database-migration piece of Facilities' transition from Archibus to ArcGIS, and building internal tools for space management operations.",
    highlights: [
      "Built a Python tool (ezdxf, Pyautocad) to automatically tag AutoCAD blueprints with the Building/Floor/Room identifiers ArcGIS requires across 287 buildings, with versioned, non-destructive saves and a composite-key safeguard against tag conflicts",
      "Built CSP Request, a full-stack (React + FastAPI) approval-workflow app replacing manual liaison request forms, now in pilot with 20+ liaisons and cutting liaison-to-Space-Management communication and meeting time by 90%",
      "Continue building Power BI dashboards for space utilization and facilities reporting",
    ],
  },
  {
    role: "Space Management Database Intern",
    company: "George Mason University",
    period: "Sep 2025 - May 2026",
    description:
      "Kept the Archibus space-management database and AutoCAD floor plans in sync across 287 buildings and 4 campuses, and built Power BI dashboards for facilities leadership.",
    highlights: [
      "Automated the two-way Archibus ↔ AutoCAD sync with Python pipelines, saving roughly 10 hours/week across 287 buildings and 4 campuses",
      "Diagnosed and fixed a duplicate-room-ID sync failure by redesigning the primary key to Building ID + Room ID, plus added automatic backup-before-overwrite safeguards",
      "Built Power BI dashboards (KPIs, DAX, Power Query) tracking vacancy/occupancy rates and maintenance costs, used regularly by university officials",
    ],
  },
  {
    role: "Software Engineer",
    company: "Netcracker Technology Solutions",
    period: "Mar 2022 - Jul 2024",
    description:
      "Wrote PL/SQL and PostgreSQL migration and validation scripts for telecom billing data migrations on the O2UK client project (NEC Corporation).",
    highlights: [
      "Built 108 validation scripts to migrate 11M customer billing records across 28 migration runs, cleaning and validating data inherited from a prior vendor before it could be used for billing",
      "Reduced migration downtime from 16 hours to 5 hours and cut QA cycle time from 60 hours to 25 hours per cycle by improving validation and analysis workflows",
      "Independently handled development and migration for O2UK Wholesale, a smaller offline sub-client migration, completed in ~2 months with careful table-lock monitoring",
      "Built backend APIs (FastAPI) and contributed React/Node.js frontend work for the Alaska client's billing and customer portal",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.S. in Data Analytics Engineering",
    school: "George Mason University",
    period: "Aug 2024 - May 2026",
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

export const projectFilters = [
  "All",
  "RAG",
  "BI",
  "Data Engineering",
  "Full-Stack",
] as const;
