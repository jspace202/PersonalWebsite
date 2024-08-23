// src/services/fileService.js
//import axiosInstance from "../axiosInstance";
import axios from "axios";


export function getFileCount () {
  return axios.get('/api/uploads/filecount');
};

export function uploadFile (file) {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('/api/uploads/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export function getArtistName (artistID) {
    return axios.get(`/api/spotify/artist?artistID=${artistID}`);
};