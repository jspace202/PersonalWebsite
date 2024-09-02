import React from 'react';
import GeoRow from './GeoRow';
import '../../assets/styles/Timeline.scss';

const Timeline = () => {

  return (
    <div className='Timeline'>
      <GeoRow title={'Europe'}/>
      <GeoRow title={'Near East'}/>
    </div>
  );
};

export default Timeline;