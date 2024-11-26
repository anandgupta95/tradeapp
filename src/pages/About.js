import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <motion.h2 
          className="about-title" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p 
          className="about-history"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Established in 2000, we have over 20 years of experience in providing top-notch supply solutions tailored to our clients' needs.
        </motion.p>
        <motion.h3 
          className="about-mission-title"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.p 
          className="about-mission"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission is to deliver exceptional quality products while streamlining your supply chain with innovative solutions.
        </motion.p>
        <motion.h3 
          className="about-values-title"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Our Values
        </motion.h3>
        <motion.ul 
          className="about-values"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1 }}
        >
          <li>Integrity</li>
          <li>Quality</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
        </motion.ul>
        <motion.h3 
          className="about-certifications-title"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Certifications & Awards
        </motion.h3>
        <motion.p 
          className="about-certifications"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          We are proud to be ISO 9001 certified and have received multiple awards for our outstanding service in the industry.
        </motion.p>
        <motion.h3 
          className="about-testimonials-title"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          What Our Clients Say
        </motion.h3>
        <motion.blockquote 
          className="about-testimonial"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          “This company has transformed our supply chain. Their products and services are second to none!” - Happy Client
        </motion.blockquote>
      </div>
    </section>
  );
};

export default About;
