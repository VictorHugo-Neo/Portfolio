import { Database, Code2, LayoutDashboard, Microscope } from "lucide-react";

export const skillGroups = [
  {
    title: "Desenvolvimento & Software",
    icon: <Code2 className="text-blue-500" size={18} />,
    skills: ["Python (FastAPI)", "TypeScript", "React", "SQL / PostgreSQL", "Docker / Git"]
  },
  {
    title: "Análise & Business Intelligence",
    icon: <LayoutDashboard className="text-amber-500" size={18} />,
    skills: ["Power BI (DAX)", "Excel Avançado", "Pandas / NumPy", "Google Looker Studio", "Dashboards"]
  },
  {
    title: "Gestão & Inovação",
    icon: <Database className="text-emerald-500" size={18} />,
    skills: ["Metodologias Ágeis", "Gestão de KPIs", "BPMN (Processos)", "Scrum / Kanban", "Documentação"]
  },
  {
    title: "Pesquisa & IA Aplicada",
    icon: <Microscope className="text-purple-500" size={18} />,
    skills: ["LangChain", "Automação Python", "Visão Computacional", "Ollama (IA Local)", "P&D Técnico"]
  }
];