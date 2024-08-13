import React from 'react';
import '../../assets/styles/Experience.scss';

function Role ({ role, description }) {
  return (
    <div className='Role'>
      <text className='role'>{role}</text>
      <text className='description'>{description}</text>
    </div>
  );
};

export default Role;
