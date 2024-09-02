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
      <Item image='Spotify.png' 
            title='Spotify API' 
            text='This is a Spotify Web Player'
            route='/spotify'
      />
      <Item image='neuralnet.png' 
            title='AI Chatbot' 
            text='This is an AI Chatbot'
            route='/aichatbot'
      />
      <Item image='digihud.jpg' 
            title='Database' 
            text='Sample Database using PostgreSQL'
            route='/database'
      />
      <Item image='mapapi.png' 
            title='MAP API' 
            text='This is an embedded map built with OpenLayers API'
            route='/mapapi'
      />
      <Item image='test.jpg' 
            title='Test Projects' 
            text='This page is for testing projects'
            route='/testprojects'
      />
      <Item image='test.jpg' 
            title='Timeline of History' 
            text='Timeline Styling Project'
            route='/timeline'
      />
    </div>
  );
};

export default Gallery;
