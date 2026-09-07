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
import { About } from './components/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 
                     ${isDarkMode ? 'bg-[#050505] text-slate-300'
                     : 'bg-[#f4f7f9] text-slate-800'} font-sans
                     selection:bg-blue-500/30 overflow-x-hidden`
                    }>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Belt isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Skills isDarkMode={isDarkMode} />
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 border-t 
                          border-black/5 dark:border-white/5">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Trajectory isDarkMode={isDarkMode}/>
          <div className="space-y-12">
            <Terminal isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
          </div>
        </div>
      </section>
      <Repositories isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}

export default App;