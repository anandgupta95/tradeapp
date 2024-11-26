import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ label, onClick, color = 'blue', size = 'medium' }) => {
  return (
    <button
      className={`button button-${color} button-${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
