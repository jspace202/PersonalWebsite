// src/components/FileUpload.js
import React from 'react';
import useFileUpload from '../../hooks/useFileUpload';
import Button from '../UI/Button';
import '../../assets/styles/FileUpload.scss';

const FileUpload = () => {
  const { uploadStatus, data, onFileChange, onFileUpload } = useFileUpload();

  return (
    <div className='FileUpload'>
      <input type="file" onChange={onFileChange} className='FileInput' />
      <Button 
        text="Upload" 
        size="1.5rem" 
        color="black" 
        onClick={onFileUpload} // Ensure you pass the click handler
      />
      <p className='Status'>{uploadStatus}</p>
      <p>{`Number of Files: ${data.count}`}</p>
    </div>
  );
};

export default FileUpload;

