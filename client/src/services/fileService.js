// src/services/fileService.js
import axiosInstance from "../axiosInstance";
//import axios from "axios";

export function checkBackend() {
  return axiosInstance.get('/api/checkConnection');
}

export function getFileCount () {
  return axiosInstance.get('/api/uploads/filecount');
};

export function uploadFile (file) {
  const formData = new FormData();
  formData.append('file', file);

  return axiosInstance.post('/api/uploads/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export function getArtistName (artistID) {
    return axiosInstance.get(`/api/spotify/artist?artistID=${artistID}`);
};

export function getRealEstate () {
    return axiosInstance.get('/api/realestatedata');
};

export function getPropertyTable (table) {
  return axiosInstance.get(`/api/properties/${table}`);
};

export function postEntry(data, table) {
  return axiosInstance.post(`/api/properties/${table}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

