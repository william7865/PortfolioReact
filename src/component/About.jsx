import { useState , useEffect } from 'react';
import React from 'react';
import '../styles/About.css';
import dev from '../assets/dev.jpeg';
const About = ({translations}) => {
  const [ShowAbout,setShowAbout] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAbout(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="about" className={`about ${ShowAbout ? 'visible' : ''}`}>
      <h3>{translations.about}</h3>
      <div className="content">
      <div className="profile-picture">
      <img src={dev} alt="Profile"/>
      </div>
      <div className="description">
      <p>Je suis un développeur web spécialisé dans la création d'applications réactives.</p>
      <p>Mon objectif est de créer des solutions innovantes et efficaces qui répondent aux besoins de mes clients.</p>
      <p>Avec une passion pour le design et la technologie, je m'efforce de fournir des expériences utilisateur optimales.</p>
      </div>
      </div>  
    </section>
  );
};

export default About;
