import React from 'react';
import '../../assets/styles/AI.scss';
import Button from '../UI/Button';

const AI = () => {

  return (
    <div className='AIBanner'>
      <div className='AI'>
        <div className='Prompt'>
          <input className='TextInput'/>
          <Button 
            text={'Submit'}
            color={'black'}
          />
        </div>
        <div className='Output'>
          <text>This is the Output</text>
        </div>
      </div>
    </div>
  );
};

export default AI;