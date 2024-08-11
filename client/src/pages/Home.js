import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/Home/About';
import Education from '../components/Home/Education';
import Experience from '../components/Home/Experience';
import Projects from '../components/Projects';


const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
