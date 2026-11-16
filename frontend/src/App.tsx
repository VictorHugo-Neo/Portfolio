import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { About } from './components/About';
import { Repositories } from './components/Repositories';
import { Trajectory } from './components/Trajectory';
import { Skills } from './components/Skills';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-[#090a0f] dark:text-slate-100 font-sans transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold text-xs shadow-lg outline-none ring-2 ring-white"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main id="main-content">
        <Header />
        <About />
        <Repositories />
        <Trajectory />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
