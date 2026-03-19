// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'ADVP Curator',
    subtitle: 'Python / Data Curation / Research Workflow',
    description:
      'Built a curation-focused project workflow for organizing and processing domain-specific data, with an emphasis on cleaner structure and more reproducible analysis.',
    image: `${process.env.PUBLIC_URL}/advp.png`,
    caseLink: 'https://github.com/sherryfish321/advp_curator',
    badges: ['Data Curation', 'Research Workflow', 'Python'],
    metrics: ['Structured pipeline', 'Reproducible process'],
    details: [
      'Designed a project workflow that helps organize and curate complex inputs into a more structured and usable format.',
      'Focused on making the curation process easier to repeat, maintain, and extend for future analysis work.',
    ],
  },
  {
    title: 'Portfolio',
    subtitle: 'React.js / TypeScript / JavaScript / HTML / CSS',
    description:
      'Built a fully responsive personal portfolio that highlights experience, project case studies, and a more intentional personal brand.',
    image: `${process.env.PUBLIC_URL}/Website.png`,
    caseLink: 'https://github.com/sherryfish321/personal-website',
    badges: ['Responsive UI', 'Animated Sections', 'Component Design'],
    metrics: ['Single-page portfolio', 'Mobile-friendly layout'],
    details: [
      'Designed a modular React structure to keep content easy to update as new experience and projects are added.',
      'Used CSS-driven interaction patterns to create a more polished browsing experience without making the site feel heavy.',
    ],
  },
  {
    title: 'ATM Locator Chatbot',
    subtitle: 'Python / Google Maps API / Heroku / Git',
    description:
      'Developed a LINE chatbot that helps users find the nearest ATM based on their bank and current location.',
    image: `${process.env.PUBLIC_URL}/CcClub.png`,
    caseLink: 'https://github.com/sherryfish321',
    badges: ['Chatbot', 'Maps API', 'Location Search'],
    metrics: ['Location-aware UX', 'Real-world utility'],
    details: [
      'Integrated Python services with mapping APIs to translate user input into relevant nearby ATM results.',
      'Focused on practical user flow design so the interaction felt quick, simple, and useful on mobile.',
    ],
  },
  {
    title: 'Urban Expansion Probability',
    subtitle: 'Python / GeoPandas / Scikit-Learn / Folium / Rasterio',
    description:
      'Built a geospatial machine learning pipeline to detect urban development in Rio de Janeiro using satellite imagery and land cover signals.',
    image: `${process.env.PUBLIC_URL}/GeoMap.png`,
    caseLink: 'https://github.com/sherryfish321/urban-expansion-probability',
    badges: ['Geospatial ML', 'Satellite Data', 'Interactive Map'],
    metrics: ['2020-2021 imagery', 'Folium visualization'],
    details: [
      'Processed spatial and raster datasets to model urban growth probability across time and geography.',
      'Combined classification, regression, and interactive mapping to turn technical outputs into something visually interpretable.',
    ],
  },
  {
    title: 'Titanic Survival Prediction',
    subtitle: 'Python / Pandas / Scikit-Learn / XGBoost / Matplotlib',
    description:
      'Performed end-to-end machine learning on the Kaggle Titanic dataset, from feature engineering through evaluation and tuning.',
    image: `${process.env.PUBLIC_URL}/TitanicProject.png`,
    caseLink: 'https://github.com/sherryfish321/titanic-survival-prediction',
    badges: ['Feature Engineering', 'XGBoost', 'Model Tuning'],
    metrics: ['91% accuracy', 'ROC-AUC 0.91'],
    details: [
      'Engineered features such as family size, deck, and age or fare bins to improve predictive signal.',
      'Used GridSearchCV and model comparison workflows to refine performance and understand tradeoffs across approaches.',
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0].title);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-layout">
        <div className="projects-heading">
          <h2 className="section-title">
            Selected
            <span>Projects</span>
          </h2>
          <p className="projects-subtitle">
            A few projects that show how I approach product thinking, data analysis, and hands-on implementation.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const isActive = activeProject === project.title;

            return (
              <article
                className={`project-item ${index % 2 === 1 ? 'project-item-reverse' : ''} ${isActive ? 'project-item-active' : ''}`}
                key={project.title}
              >
                <div className="project-image-wrap">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-image-overlay">
                      <span>Case Study Snapshot</span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header-row">
                    <div>
                      <h3>{project.title}</h3>
                      <h4 className="project-subtitle">{project.subtitle}</h4>
                    </div>
                    <div className="project-metrics">
                      {project.metrics.map((metric) => (
                        <span className="project-metric" key={metric}>{metric}</span>
                      ))}
                    </div>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.badges.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button
                      type="button"
                      className="project-toggle"
                      onClick={() => setActiveProject(isActive ? '' : project.title)}
                    >
                      {isActive ? 'Hide Details' : 'Show Details'}
                    </button>
                    <a className="case-button" href={project.caseLink} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </div>

                  <div className={`project-details ${isActive ? 'project-details-open' : ''}`}>
                    <div className="project-details-inner">
                      {project.details.map((detail) => (
                        <p className="project-detail-line" key={detail}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
