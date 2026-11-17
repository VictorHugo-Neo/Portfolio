import type { ReactNode } from 'react';
import { Code2, BookOpen, Rocket } from 'lucide-react';

export interface PillarItem {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export const aboutPillars: PillarItem[] = [
  {
    icon: <Code2 className="text-slate-800 dark:text-slate-200" size={20} />,
    title: "Desenvolvimento Full-Stack",
    description: "Desenvolvimento de aplicações web completas e APIs de alto desempenho utilizando Python (FastAPI), React, TypeScript e bancos relacionais. Foco em código limpo, arquitetura escalável e segurança.",
    tags: ["FastAPI & Python", "React & TypeScript", "PostgreSQL", "APIs RESTful"]
  },
  {
    icon: <BookOpen className="text-slate-800 dark:text-slate-200" size={20} />,
    title: "Docência & Educação Técnica",
    description: "Professor de ensino técnico em desenvolvimento de sistemas, lecionando Back-End, Algoritmos e lógica de programação. Didática aplicada a projetos reais e mentoria técnica.",
    tags: ["Didática Prática", "Lógica & Algoritmos", "Back-End", "Mentoria"]
  },
  {
    icon: <Rocket className="text-slate-800 dark:text-slate-200" size={20} />,
    title: "Gestão Ágil & Inovação",
    description: "Pós-graduando em Gestão de Projetos e Inovação (IFNMG). Aplicação prática de metodologias ágeis (Scrum/Kanban) para organizar fluxos de trabalho, prazos e entregas eficientes.",
    tags: ["Scrum & Kanban", "Inovação Tecnológica", "BPMN", "Prazos Ágeis"]
  }
];
