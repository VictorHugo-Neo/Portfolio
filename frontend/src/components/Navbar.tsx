import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b py-4 transition-colors duration-500 ${
      isDarkMode 
      ? 'border-white/5 bg-black/20' 
      : 'border-black/5 bg-white/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Branding */}
        <div className="flex flex-col">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] opacity-50">
            Lisboa.dev
          </span>
          <div className="h-0.5 w-4 bg-blue-600 mt-1"></div>
        </div>

        {/* Menu de Ações */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 items-center mr-4">
            {['Sobre', 'Experiência', 'Projetos'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Toggle Dark Mode */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2.5 rounded-xl border transition-all active:scale-90 ${
              isDarkMode 
              ? 'border-white/10 hover:bg-white/5 text-yellow-400 shadow-lg shadow-yellow-500/10' 
              : 'border-black/10 hover:bg-black/5 text-blue-600 shadow-sm'
            }`}
            aria-label="Alternar tema"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};