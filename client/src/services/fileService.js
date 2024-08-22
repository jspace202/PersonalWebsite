// src/services/fileService.js
import axiosInstance from "../axiosInstance";



export function getFileCount () {
  return axiosInstance.get('/api/filecount');
};

export function uploadFile (file) {
  const formData = new FormData();
  formData.append('file', file);

  return axiosInstance.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export function getArtistName (artistID) {
    return axiosInstance.get(`/artist?artistID=${artistID}`);
};