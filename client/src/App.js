import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Footer />
      <ProjectsPage />
    </div>
  );
}

export default App;
