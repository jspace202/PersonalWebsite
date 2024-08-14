import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import Test from '../components/Projects/Test.js';

const TestProjects = () => {
  return (
    <div className='TestProjects'>
      <Navbar />
      <Test />
      <Footer />
    </div>
  );
};

export default TestProjects;
