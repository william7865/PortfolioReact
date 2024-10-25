import React from 'react';
import "../styles/Projects.css";
import projects from '../data/informations.json';

const Projects = () => {
    return (
        <section id="projects" className="projects">
        <h3>Mes Projets</h3>
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
