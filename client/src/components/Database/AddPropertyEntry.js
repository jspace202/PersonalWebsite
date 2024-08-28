import React, { useState } from 'react';
import { postEntry } from '../../services/fileService';

const AddPropertyEntry = ({ refreshData }) => {
  const [entryData, setEntryData] = useState({
    user_id: '',
    propertyType: '',
    propertyName: '',
    address: '',
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
      const response = await postEntry(entryData, 'addproperty');
      console.log('Entry added:', response.data);

      // Call the refreshData function to update the table
      refreshData();

      // Optionally reset the form
      setEntryData({
        user_id: '',
        propertyType: '',
        propertyName: '',
        address: '',
      });
    } catch (error) {
      console.error('Error adding Entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID </label>
        <input
          type="number"
          name="user_id"
          value={entryData.user_id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Property Name </label>
        <input
          type="text"
          name="propertyName"
          value={entryData.propertyName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Property Type </label>
        <input
          type="text"
          name="propertyType"
          value={entryData.propertyType}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address </label>
        <input
          type="text"
          name="address"
          value={entryData.address}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddPropertyEntry;
