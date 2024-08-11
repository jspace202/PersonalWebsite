import React from 'react';
import '../assets/styles/main.scss'
import NavButton from './NavBar/NavButton';
import NavIcon from './NavBar/NavIcon';

function Navbar () {
  return (
    <div className='Navbar'>
      <NavIcon />
      <NavButton text='Home' route="/" />
      <NavButton text='Projects' route="/projects" />
    </div>
  );
};

export default Navbar;
