export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema PGO",
    description: "Assistente virtual com consciência de contexto utilizando FastAPI e Groq.",
    tech: ["React", "Python", "PostgreSQL", "LLM"],
    link: "https://github.com/VictorHugo-Neo/PGO"
  },
  {
    id: 2,
    title: "Tibia IA",
    description: "Implementação de inteligência artificial em um servidor de Tibia.",
    tech: ["C++", "Lua", "Python", "IA"],
    link: "https://github.com/VictorHugo-Neo/Tibia_ia"
  }
];