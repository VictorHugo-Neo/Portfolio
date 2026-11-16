import type { Repository } from '../services/github';

export const languageColors: { [key: string]: string } = {
  Python: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  TypeScript: "text-blue-600 bg-blue-600/10 border-blue-600/20",
  JavaScript: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  HTML: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  CSS: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  React: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  FastAPI: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  PostgreSQL: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  default: "text-slate-400 bg-slate-500/10 border-slate-500/20"
};

export const LIVE_PROJECTS_URLS: { [key: string]: string } = {
  "saeb_analytics": "https://saeb-analytics.vercel.app/",
  "matdiscreta_pratica": "https://www.numlab.com.br/"
};

export const FEATURED_REPOS = [
  "SAEB_Analytics",
  "MatDiscreta_Pratica",
  "prototype_PGO",
  "SOS_Capacete",
  "CineData",
  "CHAT-CALL"
];

export const PROJECT_METADATA: Record<string, { displayName: string; category: string }> = {
  "saeb_analytics": { 
    displayName: "SAEB Analytics", 
    category: "Data Analytics & BI" 
  },
  "matdiscreta_pratica": { 
    displayName: "NumLab (Matemática Discreta)", 
    category: "Laboratório Interativo" 
  },
  "prototype_pgo": { 
    displayName: "PGO — Gestão de Obras", 
    category: "Gestão Ágil & Back-End" 
  },
  "sos_capacete": { 
    displayName: "SOS Capacete (EPI)", 
    category: "Visão Computacional & IA" 
  },
  "cinedata": { 
    displayName: "CineData", 
    category: "Pipeline de Dados & EDA" 
  },
  "chat-call": { 
    displayName: "Chat-Call", 
    category: "Comunicação em Tempo Real" 
  }
};

export const FALLBACK_REPOSITORIES: Repository[] = [
  {
    id: 1,
    name: "SAEB_Analytics",
    displayName: "SAEB Analytics",
    category: "Data Analytics & BI",
    description: "Plataforma analítica para exploração e visualização de indicadores educacionais do SAEB, com dashboards e análise de métricas de desempenho.",
    html_url: "https://github.com/VictorHugo-Neo/SAEB_Analytics",
    stargazers_count: 0,
    topics: ["analytics", "python", "education", "dashboards"],
    language: "Python"
  },
  {
    id: 2,
    name: "MatDiscreta_Pratica",
    displayName: "NumLab (Matemática Discreta)",
    category: "Laboratório Interativo",
    description: "Laboratório computacional interativo para ensino e experimentação de conceitos de Matemática Discreta e Teoria dos Grafos.",
    html_url: "https://github.com/VictorHugo-Neo/MatDiscreta_Pratica",
    stargazers_count: 0,
    topics: ["typescript", "react", "discrete-math", "education"],
    language: "TypeScript"
  },
  {
    id: 3,
    name: "prototype_PGO",
    displayName: "PGO — Gestão de Obras",
    category: "Gestão Ágil & Back-End",
    description: "Sistema para Planejamento e Gestão de Obras e Projetos, integrando controle ágil de entregas, etapas construtivas e monitoramento de prazos.",
    html_url: "https://github.com/VictorHugo-Neo/prototype_PGO",
    stargazers_count: 0,
    topics: ["python", "fastapi", "project-management"],
    language: "Python"
  },
  {
    id: 4,
    name: "SOS_Capacete",
    displayName: "SOS Capacete (EPI)",
    category: "Visão Computacional & IA",
    description: "Sistema inteligente para detecção de conformidade e uso de capacete/EPI através de Visão Computacional para segurança em ambientes operacionais.",
    html_url: "https://github.com/VictorHugo-Neo/SOS_Capacete",
    stargazers_count: 0,
    topics: ["computer-vision", "machine-learning", "python", "safety"],
    language: "Python"
  },
  {
    id: 5,
    name: "CineData",
    displayName: "CineData",
    category: "Pipeline de Dados & EDA",
    description: "Pipeline analítico de extração e análise de dados sobre o mercado cinematográfico, explorando tendências de avaliações, gêneros e bilheteria.",
    html_url: "https://github.com/VictorHugo-Neo/CineData",
    stargazers_count: 0,
    topics: ["data-analysis", "python", "pandas", "eda"],
    language: "Python"
  },
  {
    id: 6,
    name: "CHAT-CALL",
    displayName: "Chat-Call",
    category: "Comunicação em Tempo Real",
    description: "Aplicação para comunicação e atendimento em tempo real com mensagens instantâneas e fluxo ágil para suporte e contato.",
    html_url: "https://github.com/VictorHugo-Neo/CHAT-CALL",
    stargazers_count: 0,
    topics: ["javascript", "realtime", "web"],
    language: "JavaScript"
  }
];
