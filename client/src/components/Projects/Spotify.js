import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/Spotify.scss';

const Spotify = () => {
  const [data, setData] = useState(0);
  //const artistID = "718COspgdWOnwOFpJHRZHS"; // Example artist ID
  const artistID = "77SW9BnxLY8rJ0RciFqkHh";

  const handleClick = useEffect(() => {
    console.log('sdfa')
    axios.get(`/artist?artistID=${artistID}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  },[]);

  return (
    <div className='Spotify'>
      <div className='Embedded'>
        <text>embedded stuff</text>
      </div>
      <div className='Data'>
        <button className={handleClick}>get artist info</button>
        <text>{data.name}</text>
      </div>
    </div>
  );
};

export default Spotify;

