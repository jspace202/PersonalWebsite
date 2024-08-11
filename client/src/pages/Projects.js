import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/main.scss'

const Projects = () => {
  return (
    <div className='Project'>
      <Navbar />
      <div className='Gallery'>
        <h1>Projects</h1>
        <h2>AI Chatbot</h2>
        <h2>Real Estate API</h2>
        <h2>Map API</h2>
        <h2>HUD</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
