import { useState, useEffect } from 'react';
import { getRealEstate } from '../services/fileService';

const useRealEstateAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRealEstate()
      .then(response => {
        setData(response.data);
      })
  }, []);

  return { data };
};

export default useRealEstateAPI;
