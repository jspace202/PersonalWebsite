// src/services/fileService.js
import axios from 'axios';

export function getFileCount () {
  return axios.get('/api/filecount');
};

export function uploadFile (file) {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export function getArtistName (artistID) {
    return axios.get(`/artist?artistID=${artistID}`);
};