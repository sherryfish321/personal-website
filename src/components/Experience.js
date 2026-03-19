import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';

const experienceItems = [
  {
    id: 'wang-lab',
    company: 'Wang Lab, University of Pennsylvania',
    role: 'Research Assistant',
    date: 'Dec 2025 - Present',
    location: 'Philadelphia, PA',
    image: `${process.env.PUBLIC_URL}/UpennLogo.png`,
    summary: 'Supporting biomedical and genomic research through scalable NLP workflows, structured preprocessing, and publication data standardization.',
    tags: ['Research', 'Part Time', 'Biomedical NLP'],
    highlights: [
      'Engineered scalable NLP data pipelines in Python to process large-scale biomedical literature with structured validation and reproducible preprocessing workflows for genomic research datasets.',
      'Collaborated with cross-functional researchers to define structured data schemas and ensure consistency across heterogeneous scientific publications.',
    ],
  },
  {
    id: 'ey',
    company: 'EY Advisory Services Inc.',
    role: 'Data Analytics Consultant',
    date: 'Mar 2024 - Jun 2025',
    location: 'Taipei City, Taiwan',
    image: `${process.env.PUBLIC_URL}/EyLogo.png`,
    summary: 'Built data products, automation workflows, and reporting systems that supported personalization, operations, and internal analytics.',
    tags: ['Consulting', 'Full Time', 'Taiwan'],
    highlights: [
      'Built a centralized data platform and ER schema for product recommendations.',
      'Applied K-means clustering for user segmentation and personalization.',
      'Processed 100K+ records with ETL and fine-tuned GPT-3.5 for Salesforce automation.',
      'Reduced manual reporting by 80% with scheduled Power BI dashboards.',
    ],
  },
  {
    id: 'dfi',
    company: 'DFI Inc.',
    role: 'Data Analytics Intern',
    date: 'Jul 2023 - Oct 2023',
    location: 'New Taipei City, Taiwan',
    image: `${process.env.PUBLIC_URL}/DfiLogo.png`,
    summary: 'Supported SEO and digital analytics efforts by turning search and traffic data into actionable optimization decisions.',
    tags: ['Internship', 'SEO Analytics', 'Taiwan'],
    highlights: [
      'Used Google Search Console and Google Analytics to analyze keyword performance.',
      'Implemented SEO strategies that improved keyword rankings by 60%.',
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-layout">
        <div className="experience-heading" data-aos="fade-up">
          <h2 className="section-title">
            Work
            <span>History</span>
          </h2>
        </div>

        <div className="experience-card-list">
          {experienceItems.map((item, index) => (
            <article className="experience-card" key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="experience-card-top">
                <div className="experience-logo-wrap">
                  <img src={item.image} alt={item.company} className="company-icon" />
                </div>
                <div className="experience-copy">
                  <h3 className="experience-company">{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-date">{item.date}</p>
                  <p className="experience-summary">{item.summary}</p>
                  <ul className="experience-highlight-list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="experience-divider" />

              <div className="experience-tags">
                {item.tags.map((tag) => (
                  <span className="experience-tag" key={tag}>{tag}</span>
                ))}
                <span className="experience-tag">{item.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
