// src/hooks/useDatabase.js
import { useState, useEffect, useCallback } from 'react';
import { getPropertyTable } from '../services/fileService';

const useDatabase = (table) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    getPropertyTable(table)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [table]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, refresh: fetchData };
};

export default useDatabase;
