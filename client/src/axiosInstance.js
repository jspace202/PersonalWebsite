// src/axiosInstance.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://personalwebsite-ytpq.onrender.com/'; // Default to Render backend URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
