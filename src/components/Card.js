import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ image, title, description, buttonText, onButtonClick, style = {} }) => {
  return (
    <div className="card" style={style}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onButtonClick}>
          {buttonText || 'Click Me'}
        </button>
      </div>
    </div>
  );
};

export default Card;
