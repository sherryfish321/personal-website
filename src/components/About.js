import React from 'react';
import './About.css';

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'R'],
  },
  {
    title: 'Web & Systems',
    items: ['React.js', 'Node.js', 'HTML5/CSS3', 'RESTful APIs', 'Flask', 'Express.js', 'Linux'],
  },
  {
    title: 'Data Analytics',
    items: ['Power BI', 'Tableau', 'Excel', 'MATLAB', 'Matplotlib', 'Power Automate', 'Google Apps Script', 'Google Analytics'],
  },
  {
    title: 'Statistics & Machine Learning',
    items: ['Regression', 't-test', 'Chi-squared', 'Clustering', 'Predictive Analytics', 'XGBoost', 'Scikit-Learn'],
  },
  {
    title: 'Cloud & Engineering',
    items: ['Google Cloud Platform', 'BigQuery', 'Vertex AI', 'AWS', 'QuickSight', 'Docker', 'Git/GitHub', 'CI/CD', 'Data Structures', 'Object-Oriented Design', 'Unit Testing'],
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-layout">
        <div className="about-heading">
          <h2 className="section-title">
            About
            <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <article className="about-card">
            <p className="about-eyebrow">Profile</p>
            <h3 className="about-name">Sherry Huang</h3>
            <p className="about-description">
              I enjoy building thoughtful digital experiences that connect data, design, and problem solving.
              My background in economics and analytics helps me approach products with both business context and technical curiosity.
            </p>
            <p className="about-description">
              I’m currently pursuing a Master&apos;s in Computer and Information Technology at the University of Pennsylvania,
              while continuing to grow in software development, data systems, and interactive product thinking.
            </p>

            <div className="about-meta">
              <span className="about-pill">Philadelphia, PA</span>
              <a className="about-pill about-link-pill" href="mailto:sherryyhhuang@gmail.com">sherryyhhuang@gmail.com</a>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/sherry-yh-huang/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/sherryfish321" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://medium.com/@sherry03210321" target="_blank" rel="noreferrer" aria-label="Medium">
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </article>

          <article className="skills-card">
            <p className="about-eyebrow">Skills</p>
            <div className="skills-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3 className="skill-group-title">{group.title}</h3>
                  <div className="skill-pills">
                    {group.items.map((item) => (
                      <span className="skill-pill" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
