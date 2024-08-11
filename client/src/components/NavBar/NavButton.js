import React from 'react';
import '../../assets/styles/main.scss';
import { useNavigate } from 'react-router-dom';

function NavButton({ text, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  }

  return (
    <div className='NavButton' onClick={handleClick}>
      {text}
    </div>
  );
};

export default NavButton;
