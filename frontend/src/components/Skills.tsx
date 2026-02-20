import { skillGroups } from "../data/skillGroups";

interface SkillsProps {
    isDarkMode: boolean;
}

export const Skills = ({ isDarkMode }: SkillsProps) => {
    return (
        <section id="experiencia" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
            {/* Título centralizado com linhas expansivas */}
            <div className="flex items-center justify-center gap-8 mb-20">
                <div className="h-[1px] w-1/4 bg-gradient-to-r from-transparent to-black/10 dark:to-white/10"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 whitespace-nowrap">
                    Stack Tecnológica
                </span>
                <div className="h-[1px] w-1/4 bg-gradient-to-l from-transparent to-black/10 dark:to-white/10"></div>
            </div>

            {/* Grid ajustado para centralização total */}
            <div className="flex flex-wrap justify-center gap-y-16 gap-x-12 lg:gap-x-24">
                {skillGroups.map(group => (
                    <div 
                        key={group.title} 
                        className="flex flex-col items-center text-center space-y-8 w-full sm:w-[300px]"
                    >
                        {/* Container do Ícone */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className={`p-5 rounded-3xl transition-all duration-500 hover:rotate-6 hover:scale-110 ${
                                isDarkMode 
                                ? 'bg-white/5 border border-white/10 shadow-2xl shadow-blue-500/5' 
                                : 'bg-slate-50 border border-black/5 shadow-sm'
                            }`}>
                                {group.icon}
                            </div>
                            <h3 className={`font-bold uppercase tracking-[0.2em] text-[10px] ${
                                isDarkMode ? 'text-blue-400/80' : 'text-blue-600/80'
                            }`}>
                                {group.title}
                            </h3>
                        </div>
                        
                        {/* Badges centralizadas com controle de largura */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {group.skills.map(skill => (
                                <span 
                                    key={skill} 
                                    className={`px-3 py-2 border rounded-xl text-[10px] font-mono font-medium transition-all duration-300
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