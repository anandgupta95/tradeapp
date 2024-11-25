import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(prevState => !prevState);
  };
 
  const [isFixed, setIsFixed] = useState(true);

  useEffect(()=> {
    const handleScroll = () => {

      if (window.scrollY > window.innerHeight){
        setIsFixed(false);
      }
      else{
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll',handleScroll);
    };
  }, []);


  return (
    <header className="header" style={{display: isFixed ? 'flex' : 'none', }}>
      <div className="logo">MyLogo</div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? 'close' : 'Menu'}
      </button>
      <nav className={`nav ${isMobile ? 'mobile' : ''}`}>
      
        <a className="nav-links" href="#home">Home</a>
        <a className="nav-links" href="#about">About</a>
      <a className="nav-links" href="#services">Services</a>
        <a className="nav-links" href="#contact">Contact</a>
      
      </nav>
    </header>
  );
};

export default Header;
