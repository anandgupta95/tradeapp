import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './Testimonials.css'; // Import the CSS file

const testimonials = [
  {
    id: 1,
    quote: "The service provided was exceptional and exceeded our expectations.",
    clientName: "John Doe",
    company: "ABC Manufacturing",
    caseStudyLink: "#case-study-1",
  },
  {
    id: 2,
    quote: "Thanks to their solutions, our efficiency improved dramatically.",
    clientName: "Jane Smith",
    company: "XYZ Corp",
    caseStudyLink: "#case-study-2",
  },
  {
    id: 3,
    quote: "Their team is knowledgeable and responsive, a pleasure to work with!",
    clientName: "Mike Johnson",
    company: "MNO Industries",
    caseStudyLink: "#case-study-3",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <motion.div
            className="testimonial-card"
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <blockquote className="testimonial-quote">
              "{testimonial.quote}"
            </blockquote>
            <p className="client-name">{testimonial.clientName}, <span className="client-company">{testimonial.company}</span></p>
            <a href={testimonial.caseStudyLink} className="case-study-link">Read Case Study</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
