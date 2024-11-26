import React, { useState } from 'react';
import './Input.css'; // Import the CSS file

const Input = ({ 
  type = 'text', 
  label, 
  value, 
  onChange, 
  placeholder, 
  error, 
  onFocus, 
  onBlur 
}) => {
  return (
    <div className={`input-container ${error ? 'input-error' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <input 
        type={type} 
        className="input-field" 
        value={value}
        onChange={onChange} 
        placeholder={placeholder}
        onFocus={onFocus} 
        onBlur={onBlur}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
