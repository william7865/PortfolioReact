import {useEffect, useRef } from 'react';
import React from 'react';
import '../styles/About.css';
import dev from '../assets/dev.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = ({ translations }) => {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const descriptionRef = useRef(null);

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

    // Animation pour la photo
    gsap.fromTo(
      photoRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
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

    // Animation pour la description
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
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
    <section id="about" className="about" ref={sectionRef}>
      <h3>{translations.about}</h3>
      <div className="content">
        <div className="profile-picture" ref={photoRef}>
          <img src={dev} alt="Profile" />
        </div>
        <div className="description" ref={descriptionRef}>
          <p>{translations.descriptions}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
