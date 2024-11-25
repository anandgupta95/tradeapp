import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './CallToAction.css'; // Import the CSS file

const CallToAction = () => {
  return (
    <section className="cta">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="cta-title">Ready to Take Your Business to the Next Level?</h2>
        <p className="cta-subtitle">Join us today and discover how our solutions can benefit you.</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </motion.div>
    </section>
  );
};

export default CallToAction;
