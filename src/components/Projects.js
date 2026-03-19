// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Transit Accessibility & Urban Safety Modeling',
    subtitle: 'Python / SQL / Machine Learning',
    description:
      'Built an end-to-end geospatial machine learning pipeline to evaluate transit accessibility and station-level safety risk using large-scale crime and transit data.',
    image: `${process.env.PUBLIC_URL}/transit.png`,
    caseLink: 'https://github.com/sherryfish321/transit-urban-safety',
    badges: ['150K+ Crime Incidents', '800+ Stations', 'Geospatial ML'],
  },
  {
    title: 'ADVP Curator',
    subtitle: 'Python / Data Curation / Research Workflow',
    description:
      'Built a curation-focused workflow for organizing domain-specific data with a cleaner structure and more reproducible analysis steps.',
    image: `${process.env.PUBLIC_URL}/advp.png`,
    caseLink: 'https://github.com/sherryfish321/advp_curator',
    badges: ['Data Curation', 'Research Workflow', 'Python'],
  },
  {
    title: 'Portfolio',
    subtitle: 'React.js / TypeScript / JavaScript / HTML / CSS',
    description:
      'Designed and developed a responsive personal portfolio that presents experience, projects, and professional identity in a more intentional way.',
    image: `${process.env.PUBLIC_URL}/Website.png`,
    caseLink: 'https://github.com/sherryfish321/personal-website',
    badges: ['Responsive UI', 'Animation', 'Component Design'],
  },
  {
    title: 'ATM Locator Chatbot',
    subtitle: 'Python / Google Maps API / Heroku / Git',
    description:
      'Developed a LINE chatbot that helps users find the nearest ATM based on bank selection and current location.',
    image: `${process.env.PUBLIC_URL}/CcClub.png`,
    caseLink: 'https://github.com/sherryfish321',
    badges: ['Chatbot', 'Maps API', 'Location Search'],
  },
  {
    title: 'Urban Expansion Probability',
    subtitle: 'Python / GeoPandas / Scikit-Learn / Folium / Rasterio',
    description:
      'Built a geospatial machine learning pipeline to analyze urban development probability with satellite imagery and interactive mapping.',
    image: `${process.env.PUBLIC_URL}/GeoMap.png`,
    caseLink: 'https://github.com/sherryfish321/urban-expansion-probability',
    badges: ['Geospatial ML', 'Satellite Data', 'Interactive Map'],
  },
  {
    title: 'Titanic Survival Prediction',
    subtitle: 'Python / Pandas / Scikit-Learn / XGBoost / Matplotlib',
    description:
      'Performed end-to-end machine learning with feature engineering, model tuning, and evaluation on the Kaggle Titanic dataset.',
    image: `${process.env.PUBLIC_URL}/TitanicProject.png`,
    caseLink: 'https://github.com/sherryfish321/titanic-survival-prediction',
    badges: ['91% Accuracy', 'XGBoost', 'Model Tuning'],
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-layout">
        <div className="projects-heading">
          <h2 className="section-title">
            Selected
            <span>Projects</span>
          </h2>
          <p className="projects-subtitle">
            Hover to flip each project card and explore the story behind the build.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-inner">
                <div className="project-face project-front">
                  <div className="project-image-frame">
                    <img src={project.image} alt={project.title} className="project-preview-image" />
                  </div>
                  <p className="project-front-label">{project.title}</p>
                </div>

                <div className="project-face project-back">
                  <div className="project-back-content">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.badges.map((tag) => (
                        <span className="project-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="case-button" href={project.caseLink} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
