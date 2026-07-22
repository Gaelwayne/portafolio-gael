import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t.nav.home, id: 'inicio' },
    { name: t.nav.experience, id: 'experiencia' },
    { name: t.nav.projects, id: 'proyectos' },
    { name: t.nav.about, id: 'sobre-mi' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Abraham Gael Herrera
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 bg-dark-card border border-dark-border rounded-lg hover:border-blue-500 transition-all duration-300"
              aria-label="Toggle language"
            >
              <Languages size={18} />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 w-full py-2 text-gray-300 hover:text-white transition-colors mt-2"
            >
              <Languages size={18} />
              <span>{language === 'es' ? 'English' : 'Español'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
