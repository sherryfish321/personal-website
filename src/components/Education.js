import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css';

const Education = () => {
  const [showDetails, setShowDetails] = useState({
    upenn: false,
    nthu: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleDetails = (key) => {
    setShowDetails((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">

        {/* UPenn */}
        <div className="timeline-item" data-aos="fade-right" onClick={() => toggleDetails('upenn')}>
          <div className="timeline-header">
            <img
              src="/UPenn_logo.png"
              alt="UPenn"
              className="school-icon"
            />
            <div className="timeline-info">
              <span className="timeline-date">2025 - 2027</span>
              <h3 className="timeline-title">
                University of Pennsylvania
                <span className="toggle-icon">{showDetails.upenn ? '▼' : '▶'}</span>
              </h3>
              <p className="timeline-description">
                Master’s in Computer and Information Technology.
              </p>
            </div>
          </div>
          {showDetails.upenn && (
            <div className="course-details">
              <ul>
                <li>CIT 5910 Introduction to Software Development</li>
                <li>CIT 5920 Mathematical Foundations of Computer Science</li>
                <li>CIT 5930 Introduction to Computer Systems</li>
              </ul>
            </div>
          )}
        </div>

        {/* NTHU */}
        <div className="timeline-item" data-aos="fade-right" onClick={() => toggleDetails('nthu')}>
          <div className="timeline-header">
            <img
              src="/NTHU_logo.png"
              alt="NTHU"
              className="school-icon"
            />
            <div className="timeline-info">
              <span className="timeline-date">2020 – 2024</span>
              <h3 className="timeline-title">
                National Tsing Hua University
                <span className="toggle-icon">{showDetails.nthu ? '▼' : '▶'}</span>
              </h3>
              <p className="timeline-description">
                B.A. in Economics. Focused on data science and analysis.
              </p>
            </div>
          </div>
          {showDetails.nthu && (
            <div className="course-details">
              <ul>
                <li>Linear Algebra</li>
                <li>Calculus</li>
                <li>Statistics</li>
                <li>Statistical Data Analysis with Python & R</li>
                <li>Data Visualization of Big Data in Education</li>
                <li>Microeconomics / Macroeconomics</li>
                <li>CS 61A: Structure and Interpretation of Computer Programs</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
