// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-layout">
        <div className="contact-heading">
          <h2 className="section-title">
            Let&apos;s
            <span>Connect</span>
          </h2>
          <p className="contact-subtitle">
            Open to coffee chats, collaboration, and conversations about data, product thinking, and technology.
          </p>
        </div>

        <div className="contact-content">
          <article className="contact-card contact-primary-card">
            <p className="contact-eyebrow">Contact</p>
            <h3 className="contact-card-title">Start a conversation</h3>
            <p className="contact-card-copy">
              If you&apos;d like to connect for a project, opportunity, or just a thoughtful coffee chat, I&apos;d love to hear from you.
            </p>

            <div className="contact-info-list">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt icon" />
                <div>
                  <strong>Location</strong>
                  <p>Philadelphia, PA</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope icon" />
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:sherryyhhuang@gmail.com">sherryyhhuang@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="contact-cta-group">
              <a
                className="contact-cta-secondary"
                href="https://calendly.com/sherryyhhuang/30min"
                target="_blank"
                rel="noreferrer"
              >
                Book a Coffee Chat
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
