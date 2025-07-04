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
      <h2 className="summary-heading">💡Driven by Curiosity, Powered by data 📊</h2>
      <p className="summary-text">
        With a foundation in economics and a passion for technology, I bridge the gap between business and computer science to build impactful, data-driven solutions.
      </p>
      <div className="summary-cta" data-aos="zoom-in">
        <a
          href="https://www.linkedin.com/in/sherry-yh-huang/"
          target="_blank"
          rel="noreferrer"
          className="linkedin-hello-button"
        >
          👋 Say Hello on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Summary;
