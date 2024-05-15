import React from 'react';
import './Feature.css'; 

const Feature = ({ title, desc, logo, image }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const featureStyle = {
    backgroundColor: getRandomColor(),
  };

  return (
    <div className="feature" style={featureStyle}>
      <div className="content">
        <img src={logo} alt={title} className="logo" />
        <div className="text-content">
          <h2>{title}</h2>
          <div className="divider"></div> 
          <p>{desc}</p>
        </div>
      </div>
      <img src={image} alt={title} className="feature-image" />
    </div>
  );
};

export default Feature;
