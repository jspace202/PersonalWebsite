import React from 'react';
import '../../assets/styles/Education.scss';

function School ({ image, school, city, start_date, end_date }) {
  return (
    <div className='School'>
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt='pic'/>
      <text className='school'>{school}</text>
      <text className='city'>{city}</text>
      <text className='date'>{start_date} - {end_date}</text>
    </div>
  );
};

export default School;
