import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaPhp } from 'react-icons/fa'; // Icons for Web Development
import { SiMysql } from 'react-icons/si'; // MySQL Icon
import { SiFigma, SiAdobeillustrator, SiAdobepremiere, SiBlender, SiAdobephotoshop } from 'react-icons/si'; // Icons for Web-Design
import '../styles/Skills.css'; // Assurez-vous que le chemin est correct

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Mes compétences</h2>
      <div className="skills-container">
        {/* Colonne Développement Web */}
        <div className="skills-column">
          <h3>Développement Web</h3>
          <ul>
            <li>
              <FaHtml5 className="icon" />
              <span className="skill-name">HTML</span>
              <span className="skill-level">Intermédiaire</span>
            </li>
            <li>
              <FaCss3Alt className="icon" />
              <span className="skill-name">CSS</span>
              <span className="skill-level">Intermédiaire</span>
            </li>
            <li>
              <FaJs className="icon" />
              <span className="skill-name">JavaScript</span>
              <span className="skill-level">Les bases</span>
            </li>
            <li>
              <FaWordpress className="icon" />
              <span className="skill-name">WordPress</span>
              <span className="skill-level">Intermédiaire</span>
            </li>
            <li>
              <SiMysql className="icon" />
              <span className="skill-name">SQL</span>
              <span className="skill-level">Les bases</span>
            </li>
            <li>
              <FaPhp className="icon" />
              <span className="skill-name">PHP</span>
              <span className="skill-level">Les bases</span>
            </li>
          </ul>
        </div>
        {/* Colonne Web-Design */}
        <div className="skills-column">
          <h3>Web-Design</h3>
          <ul>
            <li>
              <SiFigma className="icon" />
              <span className="skill-name">Figma</span>
              <span className="skill-level">Avancé</span>
            </li>
            <li>
              <SiAdobeillustrator className="icon" />
              <span className="skill-name">Illustrator</span>
              <span className="skill-level">Intermédiaire</span>
            </li>
            <li>
              <SiAdobephotoshop className="icon" />
              <span className="skill-name">Photoshop</span>
              <span className="skill-level">Intermédiaire</span>
            </li>
            <li>
              <SiAdobepremiere className="icon" />
              <span className="skill-name">Premier Pro</span>
              <span className="skill-level">Les bases</span>
            </li>
            <li>
              <SiBlender className="icon" />
              <span className="skill-name">Blender</span>
              <span className="skill-level">Les bases</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
