// src/components/Hero.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";

export default function Hero() {
  const typedRef = useRef(null);

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

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Hello, I'm <span className="highlight">Sherry</span> <span className="highlight">Huang</span></h1>
          <h2>
            I'm a <span ref={typedRef} className="typed-text"></span>
          </h2>
          <p>
            I'm passionate about building data-driven digital experiences and web applications.
          </p>
          <div className="hero-buttons">
            <a href="/CV_SherryHuang.pdf" className="btn">Download CV</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="/my-photo.png" alt="Sherry" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}
