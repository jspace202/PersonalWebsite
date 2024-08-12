import React from 'react';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import IconButton from './IconButton';
import '../../assets/styles/main.scss'

const SocialIcons = () => {
  return (
    <div className='SocialIcons'>
      <IconButton icon={faLinkedin} url="https://www.linkedin.com/in/jaden-patel/" />
      <IconButton icon={faInstagram} url="https://www.instagram.com/jadenpatel17/" />
      <IconButton icon={faGithub} url="https://github.com/jspace202" />
    </div>
  );
};

export default SocialIcons;
