import { useState } from 'react';
import { useScrollSection } from './hooks/useScrollSection';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSection();
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full overflow-x-hidden">
      <Navbar 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
