import { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/* ─── Global scroll-reveal observer ─── */
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
          } else {
            // re-animate when scrolling back up
            e.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const refresh = () => {
      document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    };
    refresh();
    // Re-scan after short delay so dynamically-mounted sections are caught
    const t = setTimeout(refresh, 600);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, []);
}

function App() {
  useScrollReveal();
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
