import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HUD from '../components/HUD/HUD';

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
