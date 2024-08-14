import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapAPI from '../components/MapAPI/MapAPI';
import '../assets/styles/MapAPI.scss';

const MapAPIPage = () => {
  return (
    <div className='MapAPIPage'>
      <Navbar />
      <MapAPI />
      <Footer />
    </div>
  );
};

export default MapAPIPage;
