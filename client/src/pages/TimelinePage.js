import React from 'react';
import Navbar from '../components/NavBar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import Timeline from '../components/Timeline/Timeline.js';
import '../assets/styles/Timeline.scss';

const TimelinePage = () => {
  return (
    <div className='TimelinePage'>
      <Navbar />
      <Timeline />
      <Footer />
    </div>
  );
};

export default TimelinePage;
