import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import HUD from '../components/Projects/HUD';

const HUDPage = () => {
  return (
    <div className='HUDPage'>
      <Navbar />
      <HUD />
      <Footer />
    </div>
  );
};

export default HUDPage;
