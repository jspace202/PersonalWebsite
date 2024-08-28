import React from 'react';
import '../../assets/styles/NavBar.scss'
import NavButton from './NavButton';
import NavIcon from './NavIcon';
import Connections from './Connections';

function Navbar () {
  return (
    <div className='Navbar'>
      <div className='LeftItems'>
        <NavIcon />
        <NavButton text='Home' route="/" />
        <NavButton text='Projects' route="/projects" />
      </div>
      <Connections/>
    </div>
  );
};

export default Navbar;
