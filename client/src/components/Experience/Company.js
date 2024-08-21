import React from 'react';
import '../../assets/styles/Experience.scss';

function Company ({ image, company, start_date, end_date }) {
  return (
    <div className='Company'>
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt='pic'/>
      <text className='company'>{company}</text>
      <text className='dates'>{start_date} - {end_date}</text>
    </div>
  );
};

export default Company;
