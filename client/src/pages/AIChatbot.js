import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AI from '../components/AIChatbot/AIChatbot';

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
