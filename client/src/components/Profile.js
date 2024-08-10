import React from 'react';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';

const Profile = () => {
  return (
    <div>
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
};

export default Profile;
