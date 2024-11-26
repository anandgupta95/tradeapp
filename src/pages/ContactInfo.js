import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './ContactInfo.css'; // Import the CSS file

const ContactInfo = () => {
  return (
    <section className="contact-info" >
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        style={{display:'flex',justifyContent:'space-around',width:'100%',flexWrap:'wrap'}}
      >
        
        
        <form className="contact-form">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">We're here to help! Fill out the form or reach us directly:</p>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <div className="submit-button">
          <button type="submit" className="submit-button">Send Message</button>
          </div>
          
        </form>

        <div className="contact-details" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Address:</strong> 123 Business Rd, City, State, Zip</p>

          <div className="social-media">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
        </div>

        
      </motion.div>
    </section>
  );
};

export default ContactInfo;
