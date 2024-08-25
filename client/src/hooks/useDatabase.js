// src/hooks/useDatabase.js
import { useState, useEffect } from 'react';
import { getPropertyTable } from '../services/fileService';

const useDatabase = (table) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Ensure table is used correctly
    getPropertyTable(table)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [table]);

  return { data };
};

export default useDatabase;
