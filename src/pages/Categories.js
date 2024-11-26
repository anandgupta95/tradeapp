import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './Categories.css'; // Import the CSS file

const categories = [
  {
    id: 1,
    title: 'Automotive',
    description: 'We provide reliable supply solutions for automotive manufacturers, ensuring quality and efficiency.',
  },
  {
    id: 2,
    title: 'Aerospace',
    description: 'Our products meet the stringent requirements of the aerospace Categories for safety and performance.',
  },
  {
    id: 3,
    title: 'Construction',
    description: 'We offer durable materials and supplies tailored to the construction sector’s demanding standards.',
  },
  {
    id: 4,
    title: 'Healthcare',
    description: 'Our solutions are designed to support the healthcare Categories with essential supplies and equipment.',
  },
];

const Categories = () => {
  return (
    <section className="Categories">
      <h2 className="Categories-title">Categories We Serve</h2>
      <div className="Categories-container">
        {categories.map((categories) => (
          <motion.div
            className="Categories-card"
            key={categories.id}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="Categories-name">{categories.title}</h3>
            <p className="Categories-description">{categories.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
