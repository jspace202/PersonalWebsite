import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import '../assets/styles/main.scss'

const ProjectsPage = () => {
  return (
    <div className='ProjectsPage'>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
