import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ border: "1px solid transparent" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Ian Rojas
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection('technologies')}
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              Tecnologías
            </button>
            <button
              onClick={() => scrollToSection('values')}
              className="text-white hover:text-[var(--primary)] transition-colors"
            >
              Competencias
            </button>
            <a
              href="mailto:ian.rsq@gmail.com"
              className="btn-primary px-6 py-2 rounded-full text-white font-medium"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-[var(--primary)] transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-[var(--primary)] transition-colors text-left"
              >
                Portafolio
              </button>
              <button
                onClick={() => scrollToSection('technologies')}
                className="text-white hover:text-[var(--primary)] transition-colors text-left"
              >
                Tecnologías
              </button>
              <button
                onClick={() => scrollToSection('values')}
                className="text-white hover:text-[var(--primary)] transition-colors text-left"
              >
                Competencias
              </button>
              <a
                href="mailto:ian.rsq@gmail.com"
                className="btn-primary px-6 py-2 rounded-full text-white font-medium text-center"
              >
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;