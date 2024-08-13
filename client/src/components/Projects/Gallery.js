import React from 'react';
import Item from './Item';

const Gallery = () => {
  return (
    <div className='Gallery'>
      <Item image='realestatedata.jpg' 
            title='Real Estate API' 
            text='This is a Real Estate API'
            route='/realestateapi'
      />
      <Item image='realestatedata.jpg' 
            title='AI Chatbot' 
            text='This is an AI Chatbot'
            route='/aichatbot'
      />
      <Item image='realestatedata.jpg' 
            title='HUD' 
            text='This is a HUD'
            route='/hud'
      />
      <Item image='realestatedata.jpg' 
            title='MAP API' 
            text='This is a MAP API'
            route='/mapapi'
      />
    </div>
  );
};

export default Gallery;
