import { Briefcase } from "lucide-react";

interface TrajectoryProps {
    isDarkMode: boolean
}

const careerTimeline = [
  {
    period: "2024 — ATUAL",
    role: "Professor e Gestor de Projetos Técnicos",
    company: "EE Professor Jason de Morais",
    location: "Berilo, MG",
    description: "Docente em Desenvolvimento de Sistemas e orientador de projetos tecnológicos. Aplico conceitos de Clean Code e Engenharia de Dados na mentoria de alunos, utilizando a análise de métricas educacionais para garantir a eficácia do aprendizado.",
    tech: ["Gestão de Indicadores", "SQL", "Liderança Técnica", "Didática"]
  },
  {
    period: "2022 — 2022",
    role: "Pesquisador em Data Science e Automação",
    company: "IFNMG - Campus Araçuaí",
    location: "Araçuaí, MG",
    description: "Desenvolvimento de pipelines ETL (OpenCV/TensorFlow) para captura de dados visuais e transformação em métricas quantitativas de segurança.",
    tech: ["Python", "Computer Vision", "ETL", "Pandas", "Analytics"]
  },
  {
    period: "2021 — 2024",
    role: "Formação em Tecnologia em Análise e Desenvolvimento de Sistemas",
    company: "IFNMG - Campus Araçuaí",
    location: "Araçuaí, MG",
    description: "Foco em engenharia de dados, infraestrutura e soluções sistêmicas para problemas reais.",
    tech: ["Software Engineering", "Data Structures", "Cloud Fundamentals"]
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