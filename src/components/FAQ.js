import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
  const [expanded, setExpanded] = useState(null); // State to manage which question is expanded

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the expanded question
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of manufacturing and supply chain services tailored to your needs."
    },
    {
      question: "What are your shipping options?",
      answer: "We provide various shipping options including express delivery and standard shipping."
    },
    {
      question: "How do you handle pricing?",
      answer: "Our pricing is competitive and varies based on the services and products selected."
    },
    {
      question: "What support do you offer?",
      answer: "Our support team is available 24/7 to assist you with any inquiries or issues."
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <motion.div 
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            initial={{ rotate: 0 }} 
            animate={{ rotate: expanded === index ? 180 : 0 }} 
            transition={{ duration: 0.3 }}
          >
            <h3>{faq.question}</h3>
            <span className="arrow">{expanded === index ? '▲' : '▼'}</span>
          </motion.div>
          {expanded === index && (
            <motion.div 
              className="faq-answer"
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              transition={{ duration: 0.3 }}
            >
              <p>{faq.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
