import { techIcons } from '../data/constants';

interface BeltbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const Belt = ({isDarkMode} : BeltbarProps) => {
  return(
    <div className={`py-10 border-y ${isDarkMode ? 'border-white/5 bg-white/[0.01]' : 'border-black/5 bg-black/[0.01]'} overflow-hidden relative`}>
        <div className="flex animate-scroll w-[max-content] gap-16 items-center">
          {[...techIcons, ...techIcons, ...techIcons, ...techIcons].map((item, index) => (
            <div key={index} className="flex items-center gap-4 group cursor-default">
              <div className={`p-3 rounded-xl transition-all ${isDarkMode ? 'bg-white/5 grayscale group-hover:grayscale-0' : 'bg-white shadow-sm grayscale group-hover:grayscale-0'}`}>
                {item.icon}
              </div>
              <span className={`font-mono text-[10px] font-bold tracking-widest uppercase opacity-30 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className={`absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r ${isDarkMode ? 'from-[#050505]' : 'from-[#f4f7f9]'} to-transparent`} />
        <div className={`absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l ${isDarkMode ? 'from-[#050505]' : 'from-[#f4f7f9]'} to-transparent`} />
      </div>
  )
}
