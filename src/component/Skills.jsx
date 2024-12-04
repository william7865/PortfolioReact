import React from 'react';
import {useEffect, useRef } from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPhp, 
  SiFigma, 
  SiPostgresql,
  SiVisualstudiocode,
  SiAlpinedotjs,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMysql,
  SiGit
  
} from 'react-icons/si';
import { FaReact, FaGithub, FaSymfony} from 'react-icons/fa'; 
import '../styles/Skills.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Skills = ({translations}) => {
  const sectionRef = useRef(null);
  const categoryRef = useRef(null);
  const category2Ref = useRef(null);

  useEffect(() => {
    // Animation pour la section principale
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%", 
          end: "bottom 50%",
          scrub: true, 
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
    gsap.fromTo(
      categoryRef.current,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          end: "bottom 50%",
          scrub: true, 
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
    gsap.fromTo(
      category2Ref.current,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          end: "bottom 50%",
          scrub: true,
          toggleActions: "restart reverse restart reverse",
        },
      }
    );
  }, []);

  return (
    
    <section id="skills" className="skills"ref={sectionRef}>
      <h1>{translations.skills}</h1>
      <div className="skills-list">
        <div className="skill-category"ref={categoryRef}>
          <h4>Développement Web</h4>
          <ul>
          <li><SiHtml5 color="#E34F26" /> HTML</li>
          <li><SiCss3 color="#1572B6" /> CSS</li>
          <li><SiJavascript color="#F7DF1E" /> JavaScript</li>
          <li><FaSymfony color="#000000" /> Symfony</li>
          <li><SiPhp color="#777BB4" /> PHP</li>
          <li><FaReact color="#61DAFB" /> React</li>
          <li><SiPostgresql color="#336791" /> PostgreSQL</li>
          <li><SiAlpinedotjs color="#8BC0D0" /> Alpine.js</li>
          <li><SiMysql color="#4479A1" /> MySQL</li>
          </ul>
        </div>
        <div className="skill-category"ref={category2Ref}>
          <h4>Outils</h4>
          <ul>
          <li><SiFigma color="#F24E1E" /> Figma</li>
          <li><FaGithub color="#181717" /> GitHub</li>
          <li><SiVisualstudiocode color="#007ACC" /> Visual Studio Code</li>
          <li><SiMicrosoftexcel color="#217346" /> Microsoft Excel</li>
          <li><SiMicrosoftword color="#2B579A" /> Microsoft Word</li>
          <li><SiGit color="#F05032" /> Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
