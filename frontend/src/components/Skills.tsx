import { skillGroups } from "../data/skillGroups";

interface SkillsProps {
    isDarkMode: boolean;
}

export const Skills = ({ isDarkMode }: SkillsProps) => {
    return(
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map(group => (
          <div key={group.title} className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/20 border-white/5 hover:border-blue-500/30' : 'bg-white border-black/5 shadow-sm hover:border-blue-500/30'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-slate-100'}`}>{group.icon}</div>
              <h3 className={`font-bold uppercase tracking-widest text-[10px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className={`px-3 py-1 border rounded-full text-[11px] font-semibold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-black/5 text-slate-600'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    )
}