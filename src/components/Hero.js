// src/components/Hero.js
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "./Hero.css";

export default function Hero() {
  const typedRef = useRef(null);
  const heroRef = useRef(null);
  const [parallaxStyle, setParallaxStyle] = useState({
    '--hero-shift-x': '0px',
    '--hero-shift-y': '0px',
    '--hero-photo-shift-x': '0px',
    '--hero-photo-shift-y': '0px',
    '--hero-blob-shift-x': '0px',
    '--hero-blob-shift-y': '0px',
  });

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Student at Penn", "Data Analyst", "Passionate Learner", "Software Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const handleMove = (event) => {
      if (!heroRef.current) {
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      setParallaxStyle({
        '--hero-shift-x': `${x * 16}px`,
        '--hero-shift-y': `${y * 16}px`,
        '--hero-photo-shift-x': `${x * -20}px`,
        '--hero-photo-shift-y': `${y * -18}px`,
        '--hero-blob-shift-x': `${x * 28}px`,
        '--hero-blob-shift-y': `${y * 28}px`,
      });
    };

    const resetMove = () => {
      setParallaxStyle({
        '--hero-shift-x': '0px',
        '--hero-shift-y': '0px',
        '--hero-photo-shift-x': '0px',
        '--hero-photo-shift-y': '0px',
        '--hero-blob-shift-x': '0px',
        '--hero-blob-shift-y': '0px',
      });
    };

    const node = heroRef.current;
    if (!node) {
      return undefined;
    }

    node.addEventListener('pointermove', handleMove);
    node.addEventListener('pointerleave', resetMove);

    return () => {
      node.removeEventListener('pointermove', handleMove);
      node.removeEventListener('pointerleave', resetMove);
    };
  }, []);

  return (
    <section className="hero-section" id="home" ref={heroRef} style={parallaxStyle}>
      <div className="hero-background">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
      </div>
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-eyebrow">Software, data, and thoughtful digital experiences</p>
          <h1>Hello, I'm <span className="highlight">Sherry</span> <span className="highlight">Huang</span></h1>
          <h2>
            I'm a <span ref={typedRef} className="typed-text"></span>
          </h2>
          <p>
            I build data-informed products and web experiences with a balance of analytical thinking, design sensitivity, and technical curiosity.
          </p>
          <div className="hero-buttons">
            <a href={`${process.env.PUBLIC_URL}/ResumeSherryHuang.pdf`} className="btn">Download CV</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-card">
            <img src={`${process.env.PUBLIC_URL}/MyPhoto.png`} alt="Sherry" className="profile-pic" />
          </div>
        </div>
      </div>
      <a href="#about" className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
