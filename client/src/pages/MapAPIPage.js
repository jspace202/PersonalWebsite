import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import MapAPI from '../components/Projects/MapAPI';
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
