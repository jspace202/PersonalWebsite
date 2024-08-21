import React from 'react';
import '../../assets/styles/About.scss';
import SocialIcons from '../Socials/SocialIcons';
import Carousel from './Carousel';

const About = () => {

  return (
    <div className='AboutBanner'>
      <div className='About'>
        <text className='title'>Jaden Patel</text>
        <img src='Portrait.jpg' 
             alt='portrait'
             className='portrait'
        />
        <SocialIcons />
        <Carousel />
      </div>
    </div>
  );
};

export default About;