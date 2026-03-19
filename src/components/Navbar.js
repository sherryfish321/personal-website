// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const sectionIds = ['home', 'about', 'education', 'experience', 'projects', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 180;
      let currentSection = sectionIds[0];

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">SHERRY</a>
        <ul className="navbar-menu">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>HOME</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>ABOUT</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>EDUCATION</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>EXPERIENCE</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>PROJECTS</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
