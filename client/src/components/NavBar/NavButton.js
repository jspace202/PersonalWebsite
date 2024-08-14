import React from 'react';
import '../../assets/styles/main.scss';
import { useLocation, useNavigate } from 'react-router-dom';

function NavButton({ text, route }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(route);
  }

  // Check if the current location matches the route
  const isActive = location.pathname === route;

  return (
    <div className={`NavButton ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {text}
    </div>
  );
};

export default NavButton;
