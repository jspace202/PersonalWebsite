// src/components/UI/InputField.js
import React from 'react';
import '../../assets/styles/InputField.scss';

const InputField = ({ label, type = 'text', value, onChange, placeholder, className = '' }) => {
  return (
    <div className={`InputField ${className}`}>
      {label && <label className='InputLabel'>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='Input'
      />
    </div>
  );
};

export default InputField;
