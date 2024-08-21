// src/hooks/useArtistInfo.js
import { useState, useEffect } from 'react';
import { getArtistName } from '../services/fileService';

const useArtistInfo = (artistID) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getArtistName(artistID)
      .then(response => {
        setData(response.data);
      })
  }, [artistID]);

  return { data };
};

export default useArtistInfo;
