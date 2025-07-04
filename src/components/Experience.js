import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';

const Experience = () => {
  const [showDetails, setShowDetails] = useState({
    ey: false,
    dfi: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleDetails = (key) => {
    setShowDetails((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">

        {/* EY Experience */}
        <div className="timeline-item" data-aos="fade-right" onClick={() => toggleDetails('ey')}>
          <div className="timeline-header">
            <img src="/EY_logo.png" alt="EY" className="company-icon" />
            <div className="timeline-info">
              <span className="timeline-date">Mar 2024 - Jun 2025</span>
              <h3 className="timeline-title">
                EY Advisory Services Inc.
                <span className="toggle-icon">{showDetails.ey ? '▼' : '▶'}</span>
              </h3>
              <p className="timeline-description">
                Data Analytics Consultant, Taipei City, Taiwan
              </p>
            </div>
          </div>
          {showDetails.ey && (
            <div className="course-details">
              <ul>
                <li className="no-dot"><strong>Data Governance and Model Development</strong> – GCP, Vertex AI, SQL</li>
                <li>Built centralized data platform and ER schema for product recommendations</li>
                <li>K-means clustering for user segmentation and personalization</li>
                <li className="no-dot"><strong>Data Engineering & NLP</strong> – Python, OpenAI</li>
                <li>Processed 100K+ records with ETL; fine-tuned GPT-3.5 for Salesforce automation</li>
                <li className="no-dot"><strong>Reporting Automation</strong> – Power BI, Selenium</li>
                <li>Reduced manual reporting by 80% and implemented scheduled financial dashboards</li>
              </ul>
            </div>
          )}
        </div>

        {/* DFI Experience */}
        <div className="timeline-item" data-aos="fade-right" onClick={() => toggleDetails('dfi')}>
          <div className="timeline-header">
            <img src="/DFI_logo.png" alt="DFI" className="company-icon" />
            <div className="timeline-info">
              <span className="timeline-date">Jul 2023 - Oct 2023</span>
              <h3 className="timeline-title">
                DFI Inc.
                <span className="toggle-icon">{showDetails.dfi ? '▼' : '▶'}</span>
              </h3>
              <p className="timeline-description">
                Data Analytics Intern, New Taipei City, Taiwan
              </p>
            </div>
          </div>
          {showDetails.dfi && (
            <div className="course-details">
              <ul>
                <li>Used Google Search Console & Analytics to analyze keyword performance</li>
                <li>Implemented SEO strategies, improving keyword rankings by 60%</li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Experience;
