import { type ComponentType } from "react";
import {
  SiPython,
  SiOracle,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTableau,
  SiPandas,
  SiNumpy,
  SiApachespark,
  SiFastapi,
  SiStreamlit,
  SiAmazonwebservices,
  SiR,
  SiGnubash,
  SiJupyter,
} from "react-icons/si";
import {
  FaJava,
  FaBrain,
  FaDatabase,
  FaSearch,
  FaRobot,
  FaCogs,
  FaProjectDiagram,
  FaChartBar,
  FaChartPie,
  FaCloud,
  FaServer,
  FaFileExcel,
} from "react-icons/fa";
import { TbVectorTriangle } from "react-icons/tb";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  // AI & GenAI
  "RAG Systems": FaBrain,
  "LLMs & Prompt Engineering": FaRobot,
  "Embeddings & Vector Search": TbVectorTriangle,
  "LlamaIndex": FaSearch,
  "Semantic Search": FaSearch,

  // Programming
  "Python": SiPython,
  "SQL / PL/SQL": SiOracle,
  "R": SiR,
  "Java": FaJava,
  "Shell Scripting": SiGnubash,

  // Data Analytics & ML
  "Pandas / NumPy": SiPandas,
  "PySpark & Spark MLlib": SiApachespark,
  "Predictive Modeling": FaChartBar,
  "Model Evaluation": FaCogs,

  // Databases
  "Oracle": SiOracle,
  "PostgreSQL / pgvector": SiPostgresql,
  "FAISS": TbVectorTriangle,
  "NoSQL": FaDatabase,

  // Cloud & MLOps
  "AWS (S3, EC2, Glue, Redshift)": SiAmazonwebservices,
  "Docker": SiDocker,
  "CI/CD": FaProjectDiagram,
  "FastAPI / REST APIs": SiFastapi,

  // Visualization & Tools
  "Power BI & DAX": FaChartPie,
  "Tableau": SiTableau,
  "Excel (Advanced)": FaFileExcel,
  "Git": SiGit,
};

// Category icons
const categoryIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "AI & GenAI": FaBrain,
  "Programming": SiPython,
  "Data Analytics & ML": SiPandas,
  "Databases & Retrieval": FaDatabase,
  "Cloud & MLOps": FaCloud,
  "Visualization & Tools": FaChartBar,
};

export function SkillIcon({ name, className = "h-4 w-4" }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return <FaServer className={className} />;
  return <Icon className={className} />;
}

export function CategoryIcon({ category, className = "h-5 w-5" }: { category: string; className?: string }) {
  const Icon = categoryIconMap[category];
  if (!Icon) return <FaCogs className={className} />;
  return <Icon className={className} />;
}
