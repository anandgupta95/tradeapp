import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './Industry.css'; // Import the CSS file

const industries = [
  {
    id: 1,
    title: 'Automotive',
    description: 'We provide reliable supply solutions for automotive manufacturers, ensuring quality and efficiency.',
  },
  {
    id: 2,
    title: 'Aerospace',
    description: 'Our products meet the stringent requirements of the aerospace industry for safety and performance.',
  },
  {
    id: 3,
    title: 'Construction',
    description: 'We offer durable materials and supplies tailored to the construction sector’s demanding standards.',
  },
  {
    id: 4,
    title: 'Healthcare',
    description: 'Our solutions are designed to support the healthcare industry with essential supplies and equipment.',
  },
];

const Industry = () => {
  return (
    <section className="industries">
      <h2 className="industries-title">Industries We Serve</h2>
      <div className="industries-container">
        {industries.map((industry) => (
          <motion.div
            className="industry-card"
            key={industry.id}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="industry-name">{industry.title}</h3>
            <p className="industry-description">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industry;
