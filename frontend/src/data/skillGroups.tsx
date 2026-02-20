import { Database, Code2, TerminalIcon, Cpu } from "lucide-react";

export const skillGroups = [
  {
    title: "Stack de Desenvolvimento",
    icon: <Code2 className="text-emerald-500" size={18} />,
    skills: ["Python (FastAPI)", "TypeScript", "React", "Docker", "Git/GitHub"]
  },
  {
    title: "IA & Automação",
    icon: <Cpu className="text-emerald-500" size={18} />,
    skills: ["Python 3.12 (Async)","FastAPI","LangChain", "Ollama (Llama/Mistral)", "Pydantic", "Pytest"]
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