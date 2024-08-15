import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/styles/FileUpload.scss';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [data, setData] = useState(0);



  useEffect(() => {
    axios.get('/api/filecount')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  },[]);
  



  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        setUploadStatus('File uploaded successfully');
        
        // Fetch the updated file count after a successful upload
        axios.get('/api/filecount')
        .then(response => {setData(response.data)})
        .catch(error => console.error('Error fetching data:', error));

        setFile(null); // Clear the file state
        document.querySelector('.FileInput').value = ''; // Reset the file input element
      } else {
        setUploadStatus('Failed to upload file');
      }
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file');
    });
  };

  return (
    <div className='FileUpload'>
      <input type="file" onChange={onFileChange} className='FileInput' />
      <button onClick={onFileUpload} className='Upload'>Upload</button>
      <p className='Status'>{uploadStatus}</p>
      <p>{`Number of Files: ${data.count}`}</p>
    </div>
  );
};

export default FileUpload;
