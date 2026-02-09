import { skillGroups } from "../data/skillGroups";

interface SkillsProps {
    isDarkMode: boolean;
}

export const Skills = ({ isDarkMode }: SkillsProps) => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            {/* Título sutil para separar do About */}
            <div className="flex items-center gap-4 mb-12">
                <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Stack Tecnológica</span>
                <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {skillGroups.map(group => (
                    <div key={group.title} className="flex flex-col items-center text-center space-y-6">
                        {/* ÍCONE E TÍTULO DA CATEGORIA */}
                        <div className="space-y-3 flex flex-col items-center">
                            <div className={`p-4 rounded-2xl transition-transform duration-300 hover:scale-110 ${
                                isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-black/5'
                            }`}>
                                {group.icon}
                            </div>
                            <h3 className={`font-bold uppercase tracking-widest text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                {group.title}
                            </h3>
                        </div>
                        
                        {/* BADGES CENTRALIZADAS */}
                        <div className="flex flex-wrap justify-center gap-2 max-w-[280px]">
                            {group.skills.map(skill => (
                                <span 
                                    key={skill} 
                                    className={`px-3 py-1.5 border rounded-lg text-[11px] font-mono transition-all duration-300
                                    ${isDarkMode 
                                        ? 'bg-slate-900/40 border-white/5 text-slate-400 hover:border-blue-500/50 hover:text-blue-400' 
                                        : 'bg-white border-black/5 text-slate-600 hover:border-blue-500/50 hover:text-blue-600 shadow-sm'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};