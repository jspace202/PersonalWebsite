// src/hooks/useFileUpload.js
import { useState, useEffect } from 'react';
import { getFileCount, uploadFile } from '../services/fileService';

const useFileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [data, setData] = useState(0);

  useEffect(() => {
    getFileCount()
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    uploadFile(file)
      .then((response) => {
        if (response.status === 200) {
          setUploadStatus('File uploaded successfully');

          getFileCount()
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));

          setFile(null);
          document.querySelector('.FileInput').value = '';
        } else {
          setUploadStatus('Failed to upload file');
        }
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        setUploadStatus('Error uploading file');
      });
  };

  return {
    file,
    uploadStatus,
    data,
    onFileChange,
    onFileUpload,
  };
};

export default useFileUpload;
