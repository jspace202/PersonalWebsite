import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/NavBar.scss';

// Function to check backend connection
const checkBackend = async () => {
  try {
    const response = await axios.get('/api/backendConnection');
    return response.data === 'active'; // Check if the backend responds with 'active'
  } catch (error) {
    console.error('Error checking backend connection:', error);
    return false; // Consider not connected if there's an error
  }
};

const Connections = () => {
  const [isConnected, setIsConnected] = useState(null); // null for loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConnectionStatus = async () => {
      const connected = await checkBackend();
      setIsConnected(connected);
      setLoading(false);
    };

    fetchConnectionStatus();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div className='Connections'>Checking backend server...</div>;
  }

  return (
    <div className='Connections'>
      Backend Server:<text className={isConnected ? 'connected' : 'not-connected'}>
        {isConnected ? 'Connected' : 'Not Connected'}
      </text>
    </div>
  ); 
};

export default Connections;
