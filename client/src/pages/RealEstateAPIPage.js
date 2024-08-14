import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import RealEstateAPI from '../components/Projects/RealEstateAPI';

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
