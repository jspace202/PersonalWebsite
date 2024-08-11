import React from 'react';
import '../assets/styles/main.scss'
import NavButton from './NavBar/NavButton';
import NavIcon from './NavBar/NavIcon';

function Navbar () {
  return (
    <div className='Navbar'>
      <NavIcon />
      <NavButton text='Home'/>
      <NavButton text='Projects'/>
    </div>
  );
};

export default Navbar;
