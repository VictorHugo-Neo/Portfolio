export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tech: string[];
}

export const servicesTimeline: TimelineItem[] = [
  {
    period: "2024 — ATUAL",
    role: "Professor de Ensino Técnico (Sistemas)",
    company: "EE Professor Jason de Morais",
    location: "Berilo, MG",
    description: "Docência em Back-End e Algoritmos. Mentoria técnica orientada a projetos práticos de software, lógica de programação e metodologias ágeis.",
    tech: ["Didática", "Algoritmos", "Python", "Back-End", "Scrum"]
  },
  {
    period: "2023 — ATUAL",
    role: "Desenvolvedor Full-Stack (Freelancer)",
    company: "Trabalho Autônomo & Consultoria",
    location: "Remoto",
    description: "Concepção e desenvolvimento de aplicações web completas, APIs RESTful e automações sob medida, focando em estabilidade, segurança e valor de negócio.",
    tech: ["Full-Stack", "FastAPI", "Python", "React", "TypeScript", "SQL"]
  },
  {
    period: "2022 — 2022",
    role: "Pesquisador em Computação Aplicada",
    company: "IFNMG — Bolsista P&D",
    location: "Araçuaí, MG",
    description: "Desenvolvimento de soluções com Visão Computacional e automação em Python para coleta, monitoramento e análise de métricas em tempo real.",
    tech: ["Python", "Visão Computacional", "OpenCV", "Machine Learning"]
  }
];

export const educationTimeline: TimelineItem[] = [
  {
    period: "2026 — ATUAL",
    role: "Pós-Graduação em Gestão de Projetos e Inovação",
    company: "IFNMG",
    location: "Araçuaí, MG",
    description: "Especialização com foco em gestão ágil, liderança técnica, transformação digital e inovação em processos e produtos tecnológicos.",
    tech: ["Gestão Ágil", "Inovação", "Estratégia", "Liderança"]
  },
  {
    period: "2021 — 2024",
    role: "Graduação em Análise e Desenvolvimento de Sistemas",
    company: "IFNMG",
    location: "Araçuaí, MG",
    description: "Formação superior completa em engenharia de software, modelagem de banco de dados, arquitetura de sistemas e redes.",
    tech: ["Engenharia de Software", "Banco de Dados", "Estruturas de Dados", "Arquitetura"]
  }
];
