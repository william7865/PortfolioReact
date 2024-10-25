import React, { useState, useEffect, useContext } from 'react';
import { LangContext } from './LanguageContext';
import '../styles/MainPage.css';
import dragon from '../assets/dragon2.png';
import languageIcon from '../assets/earth-icon.png';
import '../styles/Language.css'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Portfolio = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const { lang, toggleLang, translations } = useContext(LangContext);

  useEffect(() => {
    if (!translations) {
      console.error("LangContext not available");
    }
  }, [translations]);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setIsLanguageOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageOpen((prev) => !prev);
  };

  const handleLanguageChange = (language) => {
    toggleLang(language);
    setIsLanguageOpen(false); // Fermer le menu après sélection
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio">
      <button onClick={toggleNav} className={`menu-toggle ${isNavOpen ? 'open' : ''}`}>
        <div className={`bar ${isNavOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${isNavOpen ? 'bar2' : ''}`}></div>
      </button>

      <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
        <img src={dragon} alt="Dragon" className="nav-logo" />
        <ul className="nav-links">
          <li><a href="#about">{translations.about}</a></li>
          <li><a href="#skills">{translations.skills}</a></li>
          <li><a href="#projects">{translations.projects}</a></li>
          <li><a href="#contact">{translations.contactMe}</a></li>
        </ul>
      </nav>

      <header className={`hero ${showHero ? 'visible' : ''}`}>
        <h1>{translations.welcome}</h1>
        <h2>{translations.heroSubtitle}</h2>
        <img src={dragon} alt="Dragon Hero" className="hero-dragon" />
      </header>
      {/* Icône pour afficher le menu de sélection de langue */}
      <div className="language-selector">
        <img
          src={languageIcon}
          alt="Language Selector"
          className="language-icon"
          onClick={toggleLanguageMenu}
        />
        {isLanguageOpen && (
          <div className="language-dropdown">
            <button onClick={() => handleLanguageChange('fr')}>Français</button>
            <button onClick={() => handleLanguageChange('en')}>English</button>
          </div>
        )}
      </div>

      <About translations={translations} />
      <Skills translations={translations} />
      <Projects translations={translations} />

      <footer id="contact" className="footer">
        <h3>{translations.contactMe}</h3>
        <p>{translations.contactEmail}</p>
      </footer>
    </div>
  );
};

export default Portfolio;
