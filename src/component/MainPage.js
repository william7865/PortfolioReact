import React, { useState, useEffect } from 'react';
import '../styles/MainPage.css'; // Importer le CSS
import dragon from '../assets/dragon2.png'; // Image du dragon

const Portfolio = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // État pour contrôler la barre de navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu (barres/croix)
  const [showHero, setShowHero] = useState(false); // État pour gérer l'affichage des éléments de la section Héros

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setIsMenuOpen((prev) => !prev); // Change l'état pour le menu
  };

  // useEffect pour afficher les éléments de la section Héros après le chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 1000); // Délai avant de rendre les éléments visibles

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio">
      {/* Icône avec deux barres en haut à droite */}
      <button onClick={toggleNav} className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}>
        <div className={`bar ${isMenuOpen ? 'bar1' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'bar2' : ''}`}></div>
      </button>

      {/* Barre de navigation avec animation */}
      <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
        <img src={dragon} alt="Dragon" className="nav-logo" />
        <ul className="nav-links">
          <li><a href="#about">À Propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contactez-moi</a></li>
        </ul>
      </nav>

      {/* Section Héros avec Dragon */}
      <header className="hero">
        <h1 className={showHero ? '' : 'hidden'}>Bienvenue !</h1>
        <h2 className={showHero ? '' : 'hidden'}>Je conçois et développe des outils pour le web</h2>
        <img src={dragon} alt="Dragon Hero" className={`hero-dragon ${showHero ? '' : 'hidden'}`} />
      </header>

      {/* Section À Propos */}
      <section id="about" className="about">
        <h3>À Propos</h3>
        <p>Je suis un développeur web spécialisé dans la création d'applications réactives.</p>
      </section>

      {/* Section Projets */}
      <section id="projects" className="projects">
        <h3>Mes Projets</h3>
        <div className="project-list">
          <div className="project">
            <h4>Projet 1</h4>
            <p>Description du projet 1.</p>
          </div>
          <div className="project">
            <h4>Projet 2</h4>
            <p>Description du projet 2.</p>
          </div>
          <div className="project">
            <h4>Projet 3</h4>
            <p>Description du projet 3.</p>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <footer id="contact" className="footer">
        <h3>Contactez-moi</h3>
        <p>Email: monemail@example.com</p>
      </footer>
    </div>
  );
};

export default Portfolio;
