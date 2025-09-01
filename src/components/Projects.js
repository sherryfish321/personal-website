// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio',
    subtitle: 'React.js / TypeScript / JavaScript / HTML / CSS ',
    description:
      'Built a fully responsive personal portfolio using React.js and CSS modules, featuring animated sections and modular components. The website highlights professional experiences, project case studies, and interactive elements for networking and visibility.',
    image: `${process.env.PUBLIC_URL}/Website.png`,
    caseLink: 'https://github.com/sherryfish321/personal-website',
  },
  {
    title: 'ATM Locator Chatbot Using Python and Google API, Coding & Co-working Club',
    subtitle: 'Python/ Heroku / Git',
    description: 'Developed an ATM locator Line chatbot using Python and Google Maps API, enabling users to find the nearest ATM,based on their bank and current location.',
    image: `${process.env.PUBLIC_URL}/CcClub.png`,
    caseLink: 'https://github.com/sherryfish321',
  },
  {
    title: 'Urban Expansion Probability',
    subtitle: 'Python / GeoPandas / Scikit-Learn / Folium / Rasterio',
    description: 'Built a geospatial machine learning pipeline to detect urban development in Rio de Janeiro using satellite imagery from 2020–2021. Applied land cover classification, logistic regression, and folium mapping to visualize predicted urban expansion.',
    image: `${process.env.PUBLIC_URL}/GeoMap.png`,
    caseLink: 'https://github.com/sherryfish321/urban-expansion-probability',
  },
  {
    title: 'Titanic Survival Prediction',
    subtitle: 'Python / Pandas / Scikit-Learn / XGBoost / Matplotlib',
    description: 'Performed end-to-end machine learning on Kaggle Titanic dataset. Engineered features such as family size, deck, and age/fare bins. XGBoost achieved 91% accuracy with ROC-AUC of 0.91. Applied GridSearchCV for hyperparameter tuning.',
    image: `${process.env.PUBLIC_URL}/TitanicProject.png`,
    caseLink: 'https://github.com/sherryfish321/titanic-survival-prediction',
  }
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
