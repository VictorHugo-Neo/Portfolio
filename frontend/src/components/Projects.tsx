import { BookOpen, ExternalLink } from "lucide-react";
import { publications } from "../data/publicationsData";

interface ProjectsPropos {
    isDarkMode: boolean
}
export const Projects = ({ isDarkMode }: ProjectsPropos) => {

    return (
        <div className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100 shadow-sm'}`}>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4 font-black uppercase text-[10px] tracking-widest">
                <BookOpen size={16} /> Produção Acadêmica
            </div>
            
            {publications.map((pub, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                    <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{pub.title}</h3>
                    <p className="text-sm opacity-60 mb-4 italic">{pub.description}</p>
                    <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-xs font-bold transition-all hover:gap-3 ${isDarkMode ? 'text-white hover:text-blue-400' : 'text-blue-700 hover:text-blue-900'
                            }`}
                    >
                        Ver Publicação Completa <ExternalLink size={14} />
                    </a>
                </div>
            ))}
        </div>
    )

}