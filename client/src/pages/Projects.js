import React from 'react'
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import Projects from '../components/Projects/Projects';
import '../assets/styles/main.scss'

const ProjectsPage = () => {
  return (
    <div className='ProjectsPage'>
      <Navbar />
      <div className='MainSection'>
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
