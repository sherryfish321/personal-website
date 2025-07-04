import React, { useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "./components/Hero";
import About from './components/About';
import Education from './components/Education';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // 動畫持續時間
      once: true,    // 只執行一次
    });
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Summary />
      <Experience />
      <Projects />
      <Contact />
      <Navbar />
    </div>


  );
}

export default App;
