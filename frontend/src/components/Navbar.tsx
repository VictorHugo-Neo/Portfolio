import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_LINKS = [
  { name: 'Sobre', href: '#sobre', id: 'sobre' },
  { name: 'Projetos', href: '#projetos', id: 'projetos' },
  { name: 'Trajetória', href: '#trajetoria', id: 'trajetoria' },
  { name: 'Habilidades', href: '#habilidades', id: 'habilidades' },
  { name: 'Contato', href: '#contato', id: 'contato' }
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS, 180);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/85 dark:bg-[#090a0f]/85 border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300"
        aria-label="Navegação principal"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={handleScrollToTop}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="Ir para o topo da página de Victor Hugo Lisboa"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              VH
            </div>
            <span className="font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              Lisboa<span className="text-blue-600 dark:text-blue-400">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`text-xs font-semibold uppercase tracking-wider px-3 py-2 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isActive
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-white/5 font-bold'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-4 w-px bg-slate-200 dark:bg-white/10" aria-hidden="true" />

            <button
              onClick={toggleTheme}
              className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            >
              {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            >
              {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            id="mobile-nav-menu"
            className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#090a0f]/95 backdrop-blur-xl px-6 py-5 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`min-h-[48px] flex items-center px-4 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
