import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPhp, 
  SiFigma, 
  SiVisualstudio,
  SiPostgresql
} from 'react-icons/si';
import { FaReact, FaGithub, FaSymfony } from 'react-icons/fa'; 
import '../styles/Skills.css';
const Skills = ({translations}) => {
  return (
    <section id="skills" className="skills">
      <h3>{translations.skills}</h3>
      <div className="skills-list">
        <div className="skill-category">
          <h4>Développement Web</h4>
          <ul>
          <li><SiHtml5 color="#E34F26" /> HTML</li>
          <li><SiCss3 color="#1572B6" /> CSS</li>
          <li><SiJavascript color="#F7DF1E" /> JavaScript</li>
          <li><FaSymfony color="#000000" /> Symfony</li>
          <li><SiPhp color="#777BB4" /> PHP</li>
          <li><FaReact color="#61DAFB" /> React</li>
          <li><SiPostgresql color="#336791" /> PostgreSQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Outils</h4>
          <ul>
          <li><SiFigma color="#F24E1E" /> Figma</li>
          <li><FaGithub color="#181717" /> GitHub</li>
          <li><SiVisualstudio color="#5C2D91" /> Visual Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
