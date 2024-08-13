import React from 'react';
import Degree from './Degree';
import School from './School';
import '../../assets/styles/Education.scss';

function Section ({ logo, school, city, start_date, end_date, degree, major, GPA, awards }) {
  return (
    <div className='Section'>
      <School image={logo} school={school} city={city} start_date={start_date} end_date={end_date}/>
      <Degree degree={degree} major={major} GPA={GPA} awards={awards} />
    </div>
  );
};

export default Section;
