import React from 'react';
import "../styles/Projects.css";

// Ajoutez un div qui permet de slide vers la gauche ou la droite pour voir les projets suivants ou précédents.
const Projects = ({translations}) => {
    return (
        <section id="projects" className="projects">
        <h3>{translations.projects}</h3>
        <div className="project-list">
          <div className="project">
            <h4>Projet 1</h4>
            <p>Description du projet 1.</p>
          </div>
          <div className="project">
            <h4>Projet 2</h4>
            <p>Description du projet 2.</p>
          </div>
          <div className="project">
            <h4>Projet 3</h4>
            <p>Description du projet 3.</p>
          </div>
        </div>
      </section>
    );
}
export default Projects;
