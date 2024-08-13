import React, { useState, useEffect } from 'react';
import '../../assets/styles/Carousel.scss';
import express from'../../assets/images/express.png';
import mongo from '../../assets/images/mongodb.png';
import react from '../../assets/images/React.png';
import node from '../../assets/images/Node.js.png';

const Carousel = ({ interval = 5000 }) => {
  const images = [
    express,
    mongo,
    react,
    node,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoSlide);
  }, [currentIndex, images.length, interval]);

  return (
    <div className="carosuel">
      <img src={images[currentIndex]} alt='Example' />
    </div>
  );
};

export default Carousel;