// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio',
    subtitle: 'JavaScript / React.js / HTML / CSS',
    description:
      'Built a fully responsive personal portfolio using React.js and CSS modules, featuring animated sections and modular components. The website highlights professional experiences, project case studies, and interactive elements for networking and visibility.',
    image: '/website.png',
    caseLink: 'https://github.com/sherryfish321',
  },
  {
    title: 'ATM Locator Chatbot Using Python and Google API, Coding & Co-working Club',
    subtitle: 'Python, Heroku, Git',
    description: 'Developed an ATM locator Line chatbot using Python and Google Maps API, enabling users to find the nearest ATM,based on their bank and current location.',
    image: '/CC.png',
    caseLink: 'https://github.com/sherryfish321',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="projects-subtitle">
        Here you will find some of the personal and client projects I created, each containing a case study.
      </p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              {project.subtitle && <h4 className="project-subtitle">{project.subtitle}</h4>}
              <p>{project.description}</p>
              <a className="case-button" href={project.caseLink} target="_blank" rel="noreferrer">
                CASE STUDY
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
