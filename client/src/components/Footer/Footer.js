import React from 'react';
import '../../assets/styles/main.scss'
import { ReactComponent as HUDIcon} from '../../assets/images/HUDicon.svg'
import SocialIcons from '../Socials/SocialIcons';

const Footer = () => {
  return (
    <div className='Footer'>
      <HUDIcon className='FooterIcon'/>
      <SocialIcons />
      <text>Copyright © 2024 Jaden Patel</text>
    </div>
  );
};

export default Footer;
