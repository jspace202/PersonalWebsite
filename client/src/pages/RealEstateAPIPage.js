import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RealEstateAPI from '../components/RealEstateAPI/RealEstateAPI';

const RealEstateAPIPage = () => {
  return (
    <div className='RealEstateAPIPage'>
      <Navbar />
      <RealEstateAPI />
      <Footer />
    </div>
  );
};

export default RealEstateAPIPage;
