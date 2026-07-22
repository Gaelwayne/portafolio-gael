import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-dark-border py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
