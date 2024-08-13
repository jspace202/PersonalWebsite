import React from 'react';
import '../../assets/styles/Education.scss';

function Degree ({ degree, major, GPA, awards }) {
  return (
    <div className='Degree'>
      <text className='degree'>{degree}</text>
      <text className='major'>{major}</text>
      <text className='GPA'>{GPA}/4.0</text>
      <text className='awards'>{awards}</text>
    </div>
  );
};

export default Degree;
