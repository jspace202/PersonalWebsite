import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import Spotify from '../components/Projects/Spotify';

const HUDPage = () => {
  return (
    <div className='HUDPage'>
      <Navbar />
      <Spotify />
      <Footer />
    </div>
  );
};

export default HUDPage;
