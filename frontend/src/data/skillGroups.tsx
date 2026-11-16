import { Server, Layout, GraduationCap, FolderGit2 } from "lucide-react";

export const skillGroups = [
  {
    title: "Back-End & APIs",
    icon: <Server className="text-blue-500" size={18} />,
    skills: ["Python (FastAPI)", "SQL / PostgreSQL", "Docker / Containers", "Git & GitHub", "APIs RESTful"]
  },
  {
    title: "Front-End & Web",
    icon: <Layout className="text-cyan-500" size={18} />,
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Vite / SPA"]
  },
  {
    title: "Docência & Fundamentos",
    icon: <GraduationCap className="text-emerald-500" size={18} />,
    skills: ["Algoritmos & Lógica", "Estruturas de Dados", "Mentoria Técnica", "Didática Prática", "Ensino de Back-End"]
  },
  {
    title: "Gestão Ágil & Projetos",
    icon: <FolderGit2 className="text-purple-500" size={18} />,
    skills: ["Scrum & Kanban", "Gestão de Prazos", "BPMN (Processos)", "Documentação", "Inovação Tecnológica"]
  }
];
