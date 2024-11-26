import React from 'react';
import './Tooltip.css'; // Import the CSS for styling

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip-text">{text}</div>
    </div>
  );
};

export default Tooltip;
