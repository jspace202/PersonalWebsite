import React from 'react';
import Item from './Item';

const Gallery = () => {
  return (
    <div className='Gallery'>
      <Item image='realestatedata.jpg' title='Real Estate API' text='This is a Real Estate API'/>
      <Item image='realestatedata.jpg' title='AI Chatbot' text='This is an AI Chatbot'/>
      <Item image='realestatedata.jpg' title='HUD' text='This is a HUD'/>
      <Item image='realestatedata.jpg' title='MAP API' text='This is a MAP API'/>
    </div>
  );
};

export default Gallery;
