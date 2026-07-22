import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Gaelwayne',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/abraham-gael-herrera-qui%C3%B1ones',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:gaelino514230@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Abraham Gael Herrera</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
              {t.hero.title}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/Abraham-Gael-Herrera-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              <Download size={20} />
              {t.hero.downloadCV}
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-card border border-dark-border rounded-lg hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                  aria-label={social.label}
                >
                  <Icon size={24} className="text-gray-300 hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
