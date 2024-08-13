import React from 'react';
import '../../assets/styles/About.scss';
import { ReactComponent as HUDIcon} from '../../assets/images/HUDicon.svg'
import SocialIcons from '../Socials/SocialIcons';
import Carousel from './Carousel';

const About = () => {

  return (
    <div className='AboutBanner'>
      <div className='About'>
        <text className='title'>Jaden Patel</text>
        <HUDIcon className='AboutHUDIcon'/>
        <SocialIcons />
        <Carousel />
      </div>
    </div>
  );
};

export default About;