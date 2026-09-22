export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  featured: boolean;
  problem: string;
  approach: string;
  results: string[];
  keyDecisions?: { decision: string; why: string }[];
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
    slug: "rag-document-chatbot",
    title: "RAG Document Chatbot",
    subtitle: "RAG · Retrieval Evaluation · Streamlit",
    tags: ["RAG", "Data Engineering"],
    featured: true,
    problem:
      "Most RAG demos skip evaluation, rebuild embeddings on every run, rely on opaque APIs, and cannot explain retrieval failures, which makes them unsuitable for production use on document-heavy workflows.",
    approach:
      "Built a production-style RAG application for question answering over a single PDF using page-aware, page-scoped chunking (900 characters, 350-character overlap) with local vector embeddings via Ollama (nomic-embed-text), and FAISS-based similarity search combined with BM25 keyword fallback for hybrid retrieval. Retrieval splits top_k between keyword and vector search, merges keyword hits first, and fills remaining slots with vector hits, so precise lexical matches (exact numbers, named policies) are never crowded out by semantically-similar-but-wrong chunks. Implemented persistent, content-addressed caching of embeddings and FAISS indexes keyed by SHA-256 of the PDF hash, chunking parameters, and model name to eliminate redundant computation. Built a Streamlit UI with chat history, citation-grounded responses, and expandable context inspection, plus a formal retrieval evaluation pipeline using Recall@K and MRR on a hand-curated, 10-question golden dataset spanning policy, fact, list, procedure, and unanswerable question types.",
    results: [
      "Perfect Recall@K = 1.0 on the golden set: every scored question retrieved a chunk from its correct ground-truth page, across policy, fact, list, and procedure question types",
      "MRR = 0.806, evaluated against a real 200+ page university housing handbook, with the correct page usually ranked at or near the top",
      "Persistent, content-addressed caching eliminated redundant embedding computation on repeat runs and on switching between PDFs",
      "Hallucination-safe generation: context-grounded answers only, with inline page and chunk citations, and a verified refusal path for the one deliberately unanswerable question in the eval set",
      "Generalized across document genre: the same pipeline was exercised against both a structured policy handbook and a narrative novel without changing the retrieval or generation code",
    ],
    keyDecisions: [
      {
        decision: "Hybrid retrieval (keyword + vector), keyword hits merged first",
        why: "Vector-only search was measurably missing exact-match queries, specific numbers, named policies, proper nouns, that a simple term-frequency search catches trivially. Merging keyword-first was a direct, empirical fix for retrieval failures a pure-vector approach was producing.",
      },
      {
        decision: "Exact FAISS search (IndexFlatL2), not an approximate index",
        why: "At single-document, few-hundred-chunk scale, exact search is fast enough and avoids a whole class of ANN tuning problems (nlist, nprobe). The system is deliberately single-PDF scoped, not built for corpora.",
      },
      {
        decision: "Content-addressed cache keyed on SHA-256(PDF hash + chunk size + overlap + embed model)",
        why: "Correctness is guaranteed by construction: any change to the PDF or any pipeline parameter automatically invalidates the cache and forces a rebuild, with no manual cache-busting step to forget.",
      },
      {
        decision: "Local-only inference via Ollama, no hosted LLM or embedding API",
        why: "No per-call cost, no dependency on hosted model behavior changing over time, and every stage of the pipeline stays inspectable end to end, which is what makes the evaluation harness meaningful.",
      },
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
      "Built Power BI dashboards for occupancy and space utilization analysis across 287 buildings and 4 campuses (Fairfax, Arlington/Mason Square, SciTech/Manassas, Mason Korea) using DAX measures, relational data modeling, and interactive visualizations. Developed automated Python data validation pipelines to keep the Archibus database and AutoCAD floor plans in sync, replacing what had been a fully manual reconciliation process at that scale.",
    results: [
      "Reduced operational turnaround time by 30% through automated Python validation pipelines",
      "Delivered interactive dashboards (KPIs, DAX measures, Power Query, slicers) tracking vacancy/occupancy rates, area-per-occupancy trends, occupancy density, and monthly maintenance costs, refreshed automatically each day",
      "Streamlined data transfers between Archibus and AutoCAD floor plan workflows across 4 campuses",
      "Dashboards are used regularly by university officials and stakeholders to make space allocation decisions",
    ],
    keyDecisions: [
      {
        decision: "Redesigned the Archibus primary key to Building ID + Room ID",
        why: "The sync broke once: rooms sharing the same room ID across different buildings were being treated as duplicates. Composite-keying on Building ID + Room ID fixed it, and my supervisor still uses that key structure today to flag incorrectly entered records.",
      },
      {
        decision: "Backup-before-overwrite safeguard (timestamped file, kept separate from the live diagram) on every automated update",
        why: "Added directly in response to the duplicate-key incident, so a rollback path always exists if a sync update goes wrong, on top of Archibus's own week of retained backups.",
      },
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
    keyDecisions: [
      {
        decision: "Disabled LLM-generated HyDE in favor of deterministic, rule-based query rewriting",
        why: "A controlled A/B test showed the LLM version cost 6 points of nDCG. The LLM's only remaining role in retrieval is query-type classification; everything else is rule-based because it measurably retrieves better.",
      },
      {
        decision: "Multiplicative authority scoring with a hard floor, not additive credits",
        why: "Additive tier credits let a low-quality chunk 'rescue' itself into the top results by accumulating small boosts. Multiplicative scoring with a floor at median(top5) x 0.45 closes that hole while still rewarding tier-1 sources.",
      },
      {
        decision: "Generate, verify, escalate across three different models instead of one model checking its own work",
        why: "A model verifying its own output tends to correlate its own errors. A different model with different prompting catches more, and escalation to a stronger model only fires when verification actually fails.",
      },
      {
        decision: "Two-phase scenario flow (parse, then confirm) instead of one-shot analysis",
        why: "A full scenario run costs 20+ LLM calls and 60-120 seconds. Letting an analyst review and correct the system's interpretation of countries and actions before committing to the full run avoids paying that cost on a misread prompt.",
      },
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
    keyDecisions: [
      {
        decision: "Medallion architecture (Bronze, Silver, Gold, ML, Serving) over a flatter pipeline",
        why: "Instantly legible to data-engineering interviewers and maps directly onto how the platform explains itself; each layer is independently re-runnable and testable.",
      },
      {
        decision: "Text-only Linear SVM chosen as the production classifier over text+metadata models",
        why: "Benchmarking showed metadata (salary, location, benefits) added minimal accuracy lift over title/skills/location text alone, a data-driven simplification rather than picking the most complex model.",
      },
      {
        decision: "Anomaly detection combines rule-based flags with an Isolation Forest rather than either alone",
        why: "Rule-based thresholds alone are transparent but crude, flagging 54.3% of postings on skill-count deviation by itself. Fusing them with a model-based score keeps the result interpretable without being too blunt to act on.",
      },
      {
        decision: "Composite recommendation score weighted 0.5 role importance / 0.3 market demand / 0.2 emerging signal",
        why: "An explicit business judgment to prioritize skills a target role actually needs over skills that are merely broadly popular or merely trending.",
      },
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
    keyDecisions: [
      {
        decision: "Ownership enforced as a query filter, not a follow-up check",
        why: "The dependency that resolves a task ID also filters by owner_id in the same query, returning 404 on no match. No future route can accidentally fetch another user's row, because the SQL itself can't return it.",
      },
      {
        decision: "404, not 403, for a task you don't own",
        why: "A 403 would confirm the ID exists at all, letting any authenticated caller enumerate how many tasks exist system-wide just by probing IDs. The same reasoning applies to login: an unknown username and a wrong password return an identical 401.",
      },
      {
        decision: "Two separate model layers: SQLAlchemy models for the database, Pydantic schemas for the API",
        why: "If merged, returning an ORM object directly would serialize whatever attributes happen to be loaded. An unrelated change, like eager-loading a relationship, could silently start leaking a related user's hashed_password into a response.",
      },
      {
        decision: "Fail loudly on missing config (no default secret key)",
        why: "A fallback default like 'dev-secret' is exactly the mechanism by which a development secret quietly ends up signing tokens in production, so config.py raises at import time instead of defaulting.",
      },
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
    keyDecisions: [
      {
        decision: "allow_origin_regex matching any localhost port, instead of one fixed CORS origin",
        why: "Vite silently falls back to the next free port whenever the default is already taken, which is exactly what caused the live CORS failure this project debugged. A regex policy tolerates that without hardcoding a second origin every time it happens.",
      },
      {
        decision: "Diagnosed the failure with lsof and a hand-crafted curl preflight request, not trial-and-error through the UI",
        why: "'Load failed' in the browser is a generic message that looks identical for a dead server and a CORS rejection. Checking what was actually listening, then reproducing the exact preflight the browser sends, isolated the real mechanism instead of guessing and re-testing through a slower feedback loop.",
      },
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
      { name: "RAG Systems", usedIn: "RAG Document Chatbot (hybrid FAISS + BM25); Arctic Policy Intelligence Engine (hybrid BM25 + FAISS with RRF fusion)" },
      { name: "LLM Application Design", usedIn: "Grounded, refusal-capable generation in RAG Document Chatbot; evidence-first generate-verify-escalate pipeline in Arctic Policy Intelligence Engine" },
      { name: "Embeddings & Vector Search (FAISS)", usedIn: "RAG Document Chatbot, Arctic Policy Intelligence Engine" },
      { name: "Retrieval Evaluation (Recall@K, MRR, nDCG)", usedIn: "RAG Document Chatbot eval harness; Arctic Policy Intelligence Engine retrieval A/B testing" },
      { name: "LLM Observability (Langfuse)", usedIn: "Arctic Policy Intelligence Engine tracing and cost tracking" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", usedIn: "Every project: pipelines, RAG, ML, backend APIs" },
      { name: "SQL / PL/SQL", usedIn: "11M+ customer record migration at Netcracker" },
      { name: "TypeScript / JavaScript", usedIn: "TaskHub UI, URL Shortener frontend, Arctic Policy Intelligence Engine dashboard" },
      { name: "R", usedIn: "Statistical analysis coursework" },
      { name: "Java", usedIn: "Backend modules at Netcracker" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "FastAPI", usedIn: "TaskHub, URL Shortener, CSP Request, Alaska billing portal (Netcracker)" },
      { name: "JWT Auth & OAuth2 (python-jose, passlib, bcrypt)", usedIn: "TaskHub" },
      { name: "Pydantic (validation & config)", usedIn: "TaskHub, URL Shortener, Career Intelligence Data Platform" },
      { name: "SQLAlchemy (ORM)", usedIn: "TaskHub, URL Shortener" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", usedIn: "TaskHub UI, URL Shortener frontend, CSP Request" },
      { name: "Next.js", usedIn: "Arctic Policy Intelligence Engine dashboard" },
      { name: "Tailwind CSS", usedIn: "Arctic Policy Intelligence Engine, this portfolio" },
      { name: "Vite", usedIn: "TaskHub UI and URL Shortener frontend build tooling" },
    ],
  },
  {
    category: "Data Engineering & ETL",
    skills: [
      { name: "ETL Pipeline Design", usedIn: "108 validation scripts at Netcracker; Archibus ↔ AutoCAD sync at GMU" },
      { name: "Medallion Architecture (Bronze / Silver / Gold)", usedIn: "Career Intelligence Data Platform" },
      { name: "Data Validation & Quality Checks", usedIn: "Netcracker migration batches (300K records, ~93K flagged); Career Intelligence Silver-layer QA" },
      { name: "AWS S3 & Parquet", usedIn: "Career Intelligence Data Platform" },
    ],
  },
  {
    category: "Machine Learning & Analytics",
    skills: [
      { name: "scikit-learn (classification, TF-IDF, Isolation Forest)", usedIn: "Career Intelligence Data Platform" },
      { name: "Time Series Forecasting (statsmodels: ARIMA, Exponential Smoothing)", usedIn: "Career Intelligence Data Platform" },
      { name: "Pandas / NumPy", usedIn: "Building Energy & GHG Emissions Analysis, Career Intelligence Data Platform" },
      { name: "PySpark & Spark MLlib", usedIn: "Big Data coursework" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", usedIn: "TaskHub, URL Shortener, Netcracker" },
      { name: "Oracle", usedIn: "Billing data migration at Netcracker" },
      { name: "FAISS (vector index)", usedIn: "RAG Document Chatbot, Arctic Policy Intelligence Engine" },
      { name: "SQLite FTS5 (BM25 full-text search)", usedIn: "Arctic Policy Intelligence Engine" },
    ],
  },
  {
    category: "Cloud, DevOps & Observability",
    skills: [
      { name: "AWS (S3, EC2, Glue, Redshift)", usedIn: "AWS Academy Cloud Foundations & Data Engineering certifications; Career Intelligence Data Platform" },
      { name: "Docker", usedIn: "Arctic Policy Intelligence Engine full-stack deployment (FastAPI + Next.js + Nginx)" },
      { name: "CI/CD (GitHub Actions)", usedIn: "Arctic Policy Intelligence Engine pipeline; Netcracker release pipelines" },
      { name: "Observability (Prometheus, Grafana)", usedIn: "Arctic Policy Intelligence Engine" },
    ],
  },
  {
    category: "BI, Visualization & Tools",
    skills: [
      { name: "Power BI & DAX", usedIn: "GMU Space Utilization dashboards, CSP Request reporting" },
      { name: "Tableau", usedIn: "Data visualization coursework" },
      { name: "Excel (Advanced)", usedIn: "Data analysis & reporting" },
      { name: "Git", usedIn: "Version control across every project" },
    ],
  },
  {
    category: "Facilities & Engineering Automation",
    skills: [
      { name: "Archibus & ArcGIS (space management systems)", usedIn: "GMU Space Management Analyst / Intern roles" },
      { name: "AutoCAD Automation (ezdxf, Pyautocad)", usedIn: "Automated blueprint tagging across 287 buildings at GMU" },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Space Management Analyst",
    company: "George Mason University",
    period: "Sep 2026 - Present",
    description:
      "Leading the database-migration piece of Facilities' transition from Archibus to ArcGIS, and building the internal tools that make that migration and day-to-day space management operations possible.",
    highlights: [
      "Stepped into an in-progress Archibus-to-ArcGIS migration (targeted for January 2027) and took ownership of the database-migration piece, given prior large-scale migration experience at Netcracker",
      "Built a Python tool (ezdxf, Pyautocad) to automatically tag AutoCAD blueprints with the Building ID, Floor Code, and Room ID that ArcGIS requires (previously only Room ID and Area Capacity were tracked), across 287 buildings, with timestamped non-destructive saves and a composite-key safeguard against tag conflicts",
      "Built CSP Request, a full-stack (React + FastAPI) approval-workflow app replacing manual liaison paperwork: liaisons submit space requirements through an interactive UI, requests move through a 3-stage approval chain (my feasibility review, supervisor review, final approval), status is tracked in real time, and a rejected request can be resubmitted directly to the stage that flagged it instead of restarting",
      "CSP Request is in pilot with 20+ liaisons and has cut liaison-to-Space-Management communication and meeting time by 90%",
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
      "Kept the Archibus database current for 287 buildings across 4 campuses (Fairfax, Arlington/Mason Square, SciTech/Manassas, Mason Korea), each with 5-6 floors and 10-20 rooms per floor",
      "Automated the two-way Archibus <-> AutoCAD sync with Python pipelines, saving roughly 10 hours/week that had previously gone into manually keeping both systems aligned at that scale",
      "Diagnosed a duplicate-room-ID sync failure (the same room ID reused across different buildings) and redesigned the primary key to Building ID + Room ID; my supervisor still uses that key structure to flag incorrectly entered records, and I added automatic backup-before-overwrite safeguards in response",
      "Handled work orders for space allocation, coordinating directly with department liaisons on requirements and time-period agreements, and preparing reports for supervisors and higher officials to review and approve",
      "Built Power BI dashboards (KPIs, DAX, Power Query) tracking vacancy/occupancy rates, area-per-occupancy trends, and monthly maintenance costs, refreshed automatically each day and used regularly by university officials",
    ],
  },
  {
    role: "Software Engineer",
    company: "Netcracker Technology Solutions",
    period: "Mar 2022 - Jul 2024",
    description:
      "Wrote PL/SQL and PostgreSQL migration and validation scripts for telecom billing data migrations, moving from the ZAIN MySQL-to-PostgreSQL transition onto the O2UK client project for NEC Corporation.",
    highlights: [
      "Started on the ZAIN client's MySQL-to-PostgreSQL migration; moved to the O2UK client within two months based on performance and adaptability",
      "Built 108 validation scripts to clean and migrate billing data O2UK inherited from a prior vendor; the first migration batch alone (300K customer records) surfaced roughly 93K validation failures, which were analyzed, categorized, and sent back to O2UK for correction before re-migration",
      "Migrated 11M customers across 28 migration runs total; as the project passed 70% completion, moved from development into production, focused on migration speed and efficiency",
      "Reduced migration downtime from 16 hours to 5 hours and cut QA cycle time from 60 hours to 25 hours per cycle",
      "Independently handled development and migration for O2UK Wholesale, a smaller offline sub-client migration requiring careful table-lock monitoring since billing systems had to stay down; completed in about 2 months",
      "Built backend APIs (FastAPI) and contributed React/Node.js frontend work for the Alaska client's billing and customer portal, with QA testing both layers",
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
