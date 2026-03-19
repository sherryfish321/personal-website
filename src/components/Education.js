import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css';

const educationItems = [
  {
    id: 'upenn',
    school: 'University of Pennsylvania',
    degree: "Master's in Computer and Information Technology",
    date: '2025 - 2027',
    summary: 'Building a stronger CS foundation through systems, software design, and database coursework.',
    image: `${process.env.PUBLIC_URL}/UpennLogo.png`,
    tags: ['MCIT', 'Philadelphia, PA', 'In Progress'],
    courses: [
      'CIT 5910 Introduction to Software Development',
      'CIT 5920 Mathematical Foundations of Computer Science',
      'CIT 5930 Introduction to Computer Systems',
      'CIT 5940 Data Structures and Software Design',
      'CIT 5950 Computer Systems Programming',
      'CIS 5500 Database and Information Systems',
    ],
  },
  {
    id: 'nthu',
    school: 'National Tsing Hua University',
    degree: 'B.A. in Economics',
    date: '2020 - 2024',
    summary: 'Focused on economics, quantitative analysis, and data-oriented problem solving across business and technology contexts.',
    image: `${process.env.PUBLIC_URL}/NthuLogo.png`,
    tags: ['Economics', 'Taiwan', 'Graduated'],
    courses: [
      'Linear Algebra',
      'Calculus',
      'Statistics',
      'Statistical Data Analysis with Python & R',
      'Data Visualization of Big Data in Education',
      'Microeconomics / Macroeconomics',
      'CS 61A: Structure and Interpretation of Computer Programs',
    ],
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="education-section" id="education">
      <div className="education-layout">
        <div className="education-heading" data-aos="fade-up">
          <h2 className="section-title">
            Education
            <span>Journey</span>
          </h2>
        </div>

        <div className="education-card-list">
          {educationItems.map((item, index) => (
            <article className="education-card" key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="education-card-top">
                <div className="education-logo-wrap">
                  <img src={item.image} alt={item.school} className="school-icon" />
                </div>
                <div className="education-copy">
                  <h3 className="education-school">{item.school}</h3>
                  <p className="education-degree">{item.degree}</p>
                  <p className="education-date">{item.date}</p>
                  <p className="education-summary">{item.summary}</p>
                </div>
              </div>

              <div className="education-divider" />

              <div className="education-tags">
                {item.tags.map((tag) => (
                  <span className="education-tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="course-list">
                {item.courses.map((course) => (
                  <span className="course-pill" key={course}>{course}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
