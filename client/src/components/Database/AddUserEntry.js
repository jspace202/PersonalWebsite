import React, { useState } from 'react';
import { postEntry } from '../../services/fileService';

const AddUserEntry = ({ refreshData }) => {
  const [entryData, setEntryData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setEntryData({
      ...entryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await postEntry(entryData, 'adduser');
      console.log('Entry added:', response.data);

      // Call the refreshData function to update the table
      refreshData();

      // Optionally reset the form
      setEntryData({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error adding Entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='entry'>
      <div>
        <label>Name </label>
        <input
          type="text"
          name="name"
          value={entryData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email </label>
        <input
          type="text"
          name="email"
          value={entryData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password </label>
        <input
          type="text"
          name="password"
          value={entryData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddUserEntry;
