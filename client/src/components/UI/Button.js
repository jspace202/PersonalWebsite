import React from 'react';
import '../../assets/styles/Button.scss';

function Button ({ text, size, color, onClick }) {

  return (
    <div 
        className='Button'
        style={{
            '--text-size': size,
            '--button-color': color,
        }}
        onClick={onClick}
    >
        <text size={size}>{text}</text>
    </div>
  );
};

export default Button;
