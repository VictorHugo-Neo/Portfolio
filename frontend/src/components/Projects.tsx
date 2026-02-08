import { BookOpen, ExternalLink } from "lucide-react";

interface ProjectsPropos{
    isDarkMode: boolean
}
export const Projects = ({isDarkMode}: ProjectsPropos) => {

    return (
        <div className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4 font-black uppercase text-[10px] tracking-widest">
                <BookOpen size={16} /> Produção Acadêmica
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Machine Learning e Segurança do Trabalho</h3>
            <p className="text-sm opacity-60 mb-6 italic italic">Publicado nos Anais do WI-SCI do IFNMG. Foco em Visão Computacional.</p>
            <button className={`text-xs font-bold flex items-center gap-2 hover:underline ${isDarkMode ? 'text-white' : 'text-blue-700'}`}>
                Ver Publicação <ExternalLink size={14} />
            </button>
        </div>
    )

}