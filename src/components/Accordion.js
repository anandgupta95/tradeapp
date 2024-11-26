import React, { useState } from 'react';
import './Accordion.css'; // Import the CSS file

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // If the clicked section is already active, close it
    } else {
      setActiveIndex(index); // Otherwise, open the clicked section
    }
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(0)}
        >
          <h2>Section 1</h2>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-body">
            <p>This is the content of Section 1.</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(1)}
        >
          <h2>Section 2</h2>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-body">
            <p>This is the content of Section 2.</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(2)}
        >
          <h2>Section 3</h2>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-body">
            <p>This is the content of Section 3.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
