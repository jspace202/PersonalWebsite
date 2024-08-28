// src/axiosInstance.js
import axios from 'axios';

const devMode = true;

const API_URL = devMode ? 'http://localhost:3000' : process.env.REACT_APP_API_URL || 'https://personalwebsite-ytpq.onrender.com/'; // Default to Render backend URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
