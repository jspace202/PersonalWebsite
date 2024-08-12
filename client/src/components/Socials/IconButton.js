// /client/src/components/IconButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/styles/main.scss';

const IconButton = ({ icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="IconButton">
        <FontAwesomeIcon icon={icon} className="Icon" />
    </a>
  );
};

export default IconButton;
