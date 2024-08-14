import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import AI from '../components/Projects/AIChatbot';

const AIChatbot = () => {
  return (
    <div className='AIChatbot'>
      <Navbar/>
      <AI/>
      <Footer />
    </div>
  );
};

export default AIChatbot;
