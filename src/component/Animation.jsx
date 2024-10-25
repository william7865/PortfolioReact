import React, { useState, useEffect } from 'react';
import '../styles/Animation.css';
import dragon from '../assets/dragon2.png';
// import lanterne from '../assets/lanterne.png'; Si on veux ajouter des lanternes à droite et à gauche

const Animation = ({ onAnimationEnd }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd();
    },  4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onAnimationEnd]);

  return (
    isAnimating && (
      <div className={`animation-container ${fadeOut ? 'fade-out' : ''}`}>
        {/* Lanterne gauche *
        <img src={lanterne} alt="Lanterne gauche" className="lanterne lanterne-gauche" />*/}
        
        {/* Image du dragon */}
        <img src={dragon} alt="Dragon chinois" className="dragon" />

        {/*{ Lanterne droite }
       <img src={lanterne} alt="Lanterne droite" className="lanterne lanterne-droite" />*/}
      </div>
    )
  );
};

export default Animation;
