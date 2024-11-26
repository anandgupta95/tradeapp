import React from 'react';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Reliable Supply Solutions for Your Manufacturing Needs</h1>
        <p className="hero-subtitle">Streamlining your supply chain with quality products and exceptional service.</p>
        <button className="cta-button">Get a Quote</button>
      </div>
      {/* Add a visual element (image or background video) */}
      <div className="hero-visual">
        <img src="img/h2.jpg" alt="Manufacturing and Supply" className="hero-image" />
        {/* Alternatively, you can add a background video here */}
      </div>
    </section>
  );
};

export default Hero;
