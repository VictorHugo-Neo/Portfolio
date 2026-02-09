import { Database, Code2, TerminalIcon } from "lucide-react";

// Exemplo de como organizar para não repetir o About
export const skillGroups = [
  {
    title: "Stack de Desenvolvimento",
    icon: <Code2 className="text-emerald-500" size={18} />,
    skills: ["Python (FastAPI)", "TypeScript", "React", "Docker", "Git/GitHub"]
  },
  {
    title: "Ecossistema de Dados",
    icon: <Database className="text-blue-500" size={18} />,
    skills: ["PostgreSQL", "SQL Avançado", "Pandas/NumPy", "Power BI", "ETL Pipelines"]
  },
  {
    title: "Ambiente & Gestão",
    icon: <TerminalIcon className="text-amber-500" size={18} />,
    skills: ["Linux", "AWS Cloud", "BPMN", "Metodologias Ágeis", "KPI Management"]
  }
];