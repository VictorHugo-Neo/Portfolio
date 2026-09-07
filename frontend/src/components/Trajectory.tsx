import { Briefcase } from "lucide-react";

interface TrajectoryProps {
    isDarkMode: boolean
}

import { careerTimeline } from "../data/trajectoryData";

export function Trajectory({ isDarkMode }: TrajectoryProps) {
    return (
        <div id = "experiencia">
            <h2 className={`text-2xl font-bold mb-8 md:mb-12 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <Briefcase size={24} className="text-blue-500" /> Trajetória Profissional
            </h2>
            <div className="space-y-8 md:space-y-12 relative border-l border-black/5 dark:border-white/5 ml-3">
                {careerTimeline.map((item, i) => (
                    <div key={i} className="relative pl-10 group">
                        <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-1.25 top-2"></div>
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