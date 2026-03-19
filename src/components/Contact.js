// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Let’s connect and build something impactful together — feel free to drop a message!
      </p>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt icon" />
            <div>
              <strong>My Location 📍</strong>
              <p>Philadelphia</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope icon" />
            <div>
              <strong>Email Address 📩</strong>
              <p><a href="mailto:sherryyhhuang@gmail.com">sherryyhhuang@gmail.com</a></p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">{isSubmitted ? 'Message Ready to Send' : 'Send Message'}</button>
          {isSubmitted && (
            <p className="form-feedback">
              Thanks! Your mail app can be opened through the email link on the left.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
