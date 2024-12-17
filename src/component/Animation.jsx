import React, { useState, useEffect } from 'react';
import '../styles/Animation.css';
import dragon from '../assets/dragon2.png';

const Animation = ({ onAnimationEnd }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd();
    },  3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onAnimationEnd]);

  return (
    isAnimating && (
      <div className={`animation-container ${fadeOut ? 'fade-out' : ''}`}>   
        {/* Image du dragon */}
        <img src={dragon} alt="Dragon chinois" className="dragon" />
      </div>
    )
  );
};

export default Animation;
