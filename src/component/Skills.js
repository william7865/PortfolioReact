import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPhp, 
  SiAdobeillustrator, 
  SiAdobepremierepro, 
  SiAdobephotoshop, 
  SiFigma, 
  SiBlender, 
  SiWordpress 
} from 'react-icons/si'; // Icons from Simple Icons
import { FaReact, FaGithub, FaSymfony } from 'react-icons/fa'; // Icones correctes pour React, GitHub, Symfony
import '../styles/Skills.css'; // Fichier CSS pour les styles

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h3>Mes Compétences</h3>
      <div className="skills-list">
        <div className="skill-category">
          <h4>Développement Web</h4>
          <ul>
            <li><SiHtml5 /> HTML</li>
            <li><SiCss3 /> CSS</li>
            <li><SiJavascript /> JavaScript</li>
            <li><FaSymfony /> Symfony</li> {/* Utilisation de l'icône Symfony */}
            <li><SiPhp /> PHP</li>
            <li><FaReact /> React</li> {/* Utilisation de l'icône React */}
          </ul>
        </div>
        <div className="skill-category">
          <h4>Web-Design</h4>
          <ul>
            <li><SiFigma /> Figma</li>
            <li><FaGithub /> GitHub</li> {/* Utilisation de l'icône GitHub */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
