import React from 'react';
import './Loader.css'; // Import CSS for styling

const Loader = ({ message = 'Loading...', size = '50px', color = '#007bff' }) => {
  return (
    <div className="loader-container">
      <div className="loader" style={{ width: size, height: size, borderTopColor: color }}></div>
      <p className="loader-message">{message}</p>
    </div>
  );
};

export default Loader;
