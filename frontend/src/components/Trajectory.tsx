import { Briefcase } from "lucide-react";

interface TrajectoryProps {
    isDarkMode: boolean
}

const careerTimeline = [
  {
    period: "2026 — ATUAL",
    role: "Pós-Graduação em Gestão de Projetos e Inovação",
    company: "IFNMG",
    location: "Araçuaí, MG",
    description: "Especialização focada no ciclo de vida de projetos e no desenvolvimento de soluções inovadoras para demandas regionais.",
    tech: ["Gestão", "Inovação", "Estratégia"]
  },
  {
    period: "2024 — ATUAL",
    role: "Professor de Ensino Técnico (Sistemas)",
    company: "EE Professor Jason de Morais",
    location: "Berilo, MG",
    description: "Docente responsável pelas disciplinas de Back-End e Algoritmos. Mentor técnico em projetos práticos, utilizando metodologias ágeis para organização das turmas e análise de indicadores de desempenho.",
    tech: ["Liderança", "Didática", "Scrum", "Python"]
  },
  {
    period: "2023 — ATUAL",
    role: "Desenvolvedor de Sistemas (Freelancer)",
    company: "Trabalho Autônomo",
    location: "Remoto",
    description: "Desenvolvimento de sistemas web e automações sob demanda. Foco em entender a necessidade do cliente e entregar soluções funcionais como APIs e integrações de dados.",
    tech: ["Full-Stack", "FastAPI", "React", "SQL"]
  },
  {
    period: "2022 — 2022",
    role: "Pesquisador em Data Science e Automação",
    company: "IFNMG - Bolsista P&D",
    location: "Araçuaí, MG",
    description: "Pesquisa aplicada na coleta automatizada de dados e uso de visão computacional para geração de métricas de conformidade em tempo real.",
    tech: ["Data Science", "Python", "OpenCV", "Analytics"]
  },
  {
    period: "2021 — 2024",
    role: "Graduação em Análise e Desenvolvimento de Sistemas",
    company: "IFNMG",
    location: "Araçuaí, MG",
    description: "Formação focada na resolução de problemas reais através da tecnologia, engenharia de dados e infraestrutura.",
    tech: ["Engenharia", "Dados", "Lógica"]
  }
];

export function Trajectory({ isDarkMode }: TrajectoryProps) {
    return (
        <div id = "experiencia">
            <h2 className={`text-2xl font-bold mb-12 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <Briefcase size={24} className="text-blue-500" /> Trajetória Profissional
            </h2>
            <div className="space-y-12 relative border-l border-black/5 dark:border-white/5 ml-3">
                {careerTimeline.map((item, i) => (
                    <div key={i} className="relative pl-10 group">
                        <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-2"></div>
                        <span className="text-[10px] font-mono font-bold text-blue-500 uppercase">{item.period}</span>
                        <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.role}</h3>
                        <p className="text-sm font-medium opacity-60 mb-4">{item.company}</p>
                        <p className="text-sm opacity-50 leading-relaxed mb-4">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}