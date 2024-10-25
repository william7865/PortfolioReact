import React from 'react';
import '../styles/About.css';
const About = ({translations}) => {
  return (
    <section id="about" className="about">
      <h3>{translations.about}</h3>
      <p>Je suis un développeur web spécialisé dans la création d'applications réactives.</p>
      <p>Mon objectif est de créer des solutions innovantes et efficaces qui répondent aux besoins de mes clients.</p>
      <p>Avec une passion pour le design et la technologie, je m'efforce de fournir des expériences utilisateur optimales.</p>
    </section>
  );
};

export default About;
