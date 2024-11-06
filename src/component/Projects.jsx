import React, { useRef } from 'react';
import "../styles/Projects.css";
import garage from "../assets/garage.png";
import resto from "../assets/resto.png";
import voyage from "../assets/voyage.png";
const Projects = ({ translations }) => {
    const projectListRef = useRef(null);

    const scrollLeft = () => {
        const projectWidth = projectListRef.current.firstChild.offsetWidth;
        projectListRef.current.scrollBy({ left: -projectWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const projectWidth = projectListRef.current.firstChild.offsetWidth;
        projectListRef.current.scrollBy({ left: projectWidth, behavior: 'smooth' });
    };

    return (
        <section id="projects" className="projects">
            <h3>{translations.projects}</h3>
            <div className="project-container">
                <button className="scroll-button left" onClick={scrollLeft}>
                    ◀
                </button>
                <div className="project-list" ref={projectListRef}>
                    <div className="project">
                        <img src={garage} alt="Projet 1" className="project-image" />
                        <h4>Projet 1</h4>
                        <p>Description du projet 1.</p>
                    </div>
                    <div className="project">
                        <img src= {resto}alt="Projet 2" className="project-image" />
                        <h4>Projet 2</h4>
                        <p>Description du projet 2.</p>
                    </div>
                    <div className="project">
                        <img src={voyage}alt="Projet 3" className="project-image" />
                        <h4>Projet 3</h4>
                        <p>Description du projet 3.</p>
                    </div>
                </div>
                <button className="scroll-button right" onClick={scrollRight}>
                    ▶
                </button>
            </div>
        </section>
    );
};

export default Projects;
