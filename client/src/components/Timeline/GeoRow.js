import React from 'react';
import '../../assets/styles/Timeline.scss'

const GeoRow = ({title}) => {

  return (
    <div className='GeoRow'>
      <div className='RowTitle'>{title}</div>
      <div className='RowData'>Holy Roman Empire</div>
    </div>
  );
};

export default GeoRow;