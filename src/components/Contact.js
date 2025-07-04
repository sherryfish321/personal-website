// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
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
              <p><a href="sherryyhhuang@gmail.com">sherryyhhuang@gmail.com</a></p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
