import React from 'react';
import Section from '../Education/Section';
import '../../assets/styles/Education.scss';

const Education = () => {
  return (
    <div className='EducationBanner'>
      <div className='Education'>
        <h1>Education</h1>
        <Section 
          logo={'osulogo.png'}
          school={`Oklahoma State University`}
          city={`Stillwater, Oklahoma`}
          start_date={`August 2020`}
          end_date={`December 2023`}
          degree={`Bachelor of Science`}
          major={`Computer Engineering`}
          awards={
            <span>
              5× President's Honor Roll
              <br/>2× Dean's Honor Roll
              <br/>Regent's Distinguished Scholar
            </span>
            }
          GPA={`3.9`}
        />
        <Section 
          logo={'btwlogo.png'}
          school={`Booker T. Washington High School`}
          city={`Tulsa, Oklahoma`}
          start_date={`August 2016`}
          end_date={`May 2020`}
          degree={`High School Diploma`}
          GPA={`3.8`}
        />
        {/*<img src='/osulogo.png' alt='osulogo'/>*/}
      </div>
    </div>
  );
};

export default Education;