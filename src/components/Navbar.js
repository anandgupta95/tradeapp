import React from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar = ({ onToggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">MyApp</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/" className="navbar-link">Home</a></li>
        <li><a href="/about" className="navbar-link">About</a></li>
        <li><a href="/services" className="navbar-link">Services</a></li>
        <li><a href="/contact" className="navbar-link">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="theme-toggle-btn" onClick={onToggleTheme}>Toggle Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
