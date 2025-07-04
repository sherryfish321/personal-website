import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* 左邊資料區塊 */}
        <div className="about-left">
          <h2 className="section-title">About Me</h2>
          <p className="about-description">
            Hello! I'm Sherry Huang, a data-driven professional with a passion for
            creating meaningful digital solutions. I'm currently pursuing a Master's in Computer and Information Technology at the University of Pennsylvania.
          </p>
          <div className="about-details">
            <div className="detail-item"><span>📧 Email:</span> sherryyhhuang@gmail.com</div>
            <div className="detail-item"><span>📍 Location:</span> Philadelphia, PA</div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sherry-yh-huang/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/sherryfish321" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@sherry03210321" target="_blank" rel="noreferrer">
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </div>

        {/* 右邊技能圖示區塊 */}
        <div className="about-right">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-grid">
             {/* 官方 Devicon 系列 */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" />
            {/* 外部來源：非 Devicon */}
            <img src="https://img.icons8.com/color/96/power-bi.png" alt="Power BI" />
            <img src="https://img.icons8.com/color/96/tableau-software.png" alt="Tableau" />
            <img src="https://img.icons8.com/color/96/google-analytics.png" alt="Google Analytics" />
            <img src="https://img.icons8.com/color/96/google-web-search.png" alt="Google Search Console" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
