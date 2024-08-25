import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import Database from '../components/Projects/Database';

const DatabasePage = () => {
  return (
    <div className='DatabasePage'>
      <Navbar />
      <Database />
      <Footer />
    </div>
  );
};

export default DatabasePage;
