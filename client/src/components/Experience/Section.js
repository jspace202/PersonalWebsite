import React from 'react';
import Role from './Role';
import Company from './Company';
import '../../assets/styles/Experience.scss';

function Section ({ logo, company, role, description, start_date, end_date }) {
  return (
    <div className='Section'>
      <Company image={logo} company={company} start_date={start_date} end_date={end_date}/>
      <Role role={role} description={description}/>
    </div>
  );
};

export default Section;
