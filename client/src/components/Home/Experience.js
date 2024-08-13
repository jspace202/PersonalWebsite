import React from 'react';
import Section from '../Experience/Section';
import '../../assets/styles/Experience.scss';

const Experience = () => {
  return (
    <div className='ExperienceBanner'>
      <div className='Experience'>
        <h1>Experience</h1>
        <Section 
          logo={'ibslogo.png'}
          company={'Interstate Batteries'}
          role={'IT Cybersecurity Intern'}
          start_date={'June 2023'}
          end_date={'August 2023'}
          description={
            <span>
              •Updated documentation of the company’s IT infrastructure and security vulnerabilities, including the risk registry. 
              <br/>•Developed specialized phishing emails and implemented schedules for phishing campaigns. 
              <br/>•Actively monitored security alerts from the company’s various systems, including Azure, 365 Defender, Varonis, 
              <br/>•Suggested policies and rules to implement in various security systems to optimize security monitoring
            </span>
          }
        />
        <Section
          logo={'calogo.png'}
          company={'Consumer Affairs'}
          role={'Frontend Software Engineer Intern'}
          start_date={'June 2022'}
          end_date={'August 2022'} 
          description={
            <span>
              •Translated 25+ UI/UX elements into code using React Framework, applied OOP principles 
              <br/>•Implemented unit tests for 50+ React scripts using Jest and Storybook
              <br/>•Administered backend integration for 10+ frontend UI elements using Python
              <br/>•Actively used Github and Docker for committing, testing, troubleshooting, deployment, and code  review 
              <br/>•Developed CA website under Agile/Scrum methodology using built-in Jira management tools
              <br/>•Collaborated with a team of 12 frontend and backend developers and project managers to increase team software development efficiency
            </span>
          }
        />
      </div>
    </div>
  );
};

export default Experience;
