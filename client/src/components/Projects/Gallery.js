import React from 'react';
import Item from './Item';

const Gallery = () => {
  return (
    <div className='Gallery'>
      <Item image='rewallpaper.png' 
            title='Real Estate API' 
            text='This is a Real Estate API'
            route='/realestateapi'
      />
      <Item image='neuralnet.png' 
            title='AI Chatbot' 
            text='This is an AI Chatbot'
            route='/aichatbot'
      />
      <Item image='digihud.jpg' 
            title='HUD' 
            text='This is a HUD'
            route='/hud'
      />
      <Item image='mapapi.png' 
            title='MAP API' 
            text='This is a MAP API'
            route='/mapapi'
      />
      <Item image='mapapi.png' 
            title='Test Projects' 
            text='This page is for testing projects'
            route='/testprojects'
      />
    </div>
  );
};

export default Gallery;
