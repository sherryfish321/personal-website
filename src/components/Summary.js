import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Summary.css';

const Summary = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="summary-section" id="summary" data-aos="fade-up">
      <div className="summary-card">
        <p className="summary-eyebrow">What drives me</p>
        <h2 className="summary-heading">Driven by curiosity. Built through data and technology.</h2>
        <p className="summary-text">
          With a foundation in economics and a growing computer science background, I enjoy bridging business context,
          analytics, and software to create thoughtful digital solutions.
        </p>
        <div className="summary-actions" data-aos="fade-up" data-aos-delay="100">
          <a
            href="https://www.linkedin.com/in/sherry-yh-huang/"
            target="_blank"
            rel="noreferrer"
            className="summary-button summary-button-secondary"
          >
            Say Hello on LinkedIn
          </a>
          <a href="#contact" className="summary-button summary-button-primary">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Summary;
