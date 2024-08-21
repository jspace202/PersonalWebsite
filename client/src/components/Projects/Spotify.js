// src/components/Spotify.js
import React, { useState } from 'react';
import useArtistInfo from '../../hooks/useSpotifyAPI';
import '../../assets/styles/Spotify.scss';
import Button from '../UI/Button';
import InputField from '../UI/InputField';

const Spotify = () => {
  //const artistID = "77SW9BnxLY8rJ0RciFqkHh";
  const [artistID, setArtistID] = useState('');
  const [submittedID, setSubmittedID] = useState(null);
  const { data } = useArtistInfo(submittedID);

  const handleInputChange = (e) => {
    setArtistID(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedID(artistID);
  };

  return (
    <div className='Spotify'>
      <div className='Embedded'>
        <p>Embedded stuff</p>
      </div>
      <div className='Data'>
        <InputField
          label="Artist ID"
          value={artistID}
          onChange={handleInputChange}
          placeholder="Enter artist ID"
        />
        <Button
          text={'Submit'}
          color={'black'}
          size={'1rem'}
          onClick={handleSubmit}
        />
        {data && <p>{data.name}</p>}
      </div>
    </div>
  );
};

export default Spotify;