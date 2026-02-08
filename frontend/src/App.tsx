import {useState } from 'react';
import {Terminal} from './components/Terminal';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Belt } from './components/Belt';
import { Skills } from './components/Skills';
import { Trajectory} from './components/Trajectory'
import { Projects } from './components/Projects';
import { Repositories } from './components/Repositories';
import Footer from './components/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 
                     ${isDarkMode ? 'bg-[#050505] text-slate-300'
                     : 'bg-[#f4f7f9] text-slate-800'} font-sans
                     selection:bg-blue-500/30 overflow-x-hidden`
                    }>
      {/* NAVEGAÇÃO */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* HEADER */}
      <Header isDarkMode={isDarkMode} />
      {/* ESTEIRA DE TECNOLOGIAS EM MOVIMENTO */}
      <Belt isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {/* COMPETÊNCIAS */}
      <Skills isDarkMode={isDarkMode} />
      {/* TRAJETÓRIA E TERMINAL */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t 
                          border-black/5 dark:border-white/5">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <Trajectory isDarkMode={isDarkMode}/>
          <div className="space-y-12">
            <Terminal isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
          </div>
        </div>
      </section>
      {/* REPOSITÓRIOS GITHUB */}
      <Repositories isDarkMode={isDarkMode} />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;