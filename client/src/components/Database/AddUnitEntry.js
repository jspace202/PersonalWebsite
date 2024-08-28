import React, { useState } from 'react';
import { postEntry } from '../../services/fileService';

const AddUnitEntry = ({ refreshData }) => {
  const [entryData, setEntryData] = useState({
    property_id: '',
    rent: '', 
    leaseStart: '',
    leaseEnd: '', 
    unitNumber: '',
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
      const response = await postEntry(entryData, 'addunit');
      console.log('Entry added:', response.data);

      // Call the refreshData function to update the table
      refreshData();

      // Optionally reset the form
      setEntryData({
        property_id: '',
        rent: '', 
        leaseStart: '',
        leaseEnd: '', 
        unitNumber: '',
      });
    } catch (error) {
      console.error('Error adding Entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Property ID </label>
        <input
          type="number"
          name="property_id"
          value={entryData.property_id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Unit # </label>
        <input
          type="number"
          name="unitNumber"
          value={entryData.unitNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Rent </label>
        <input
          type="number"
          name="rent"
          value={entryData.rent}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Lease Start </label>
        <input
          type="date"
          name="leaseStart"
          value={entryData.leaseStart}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Lease End </label>
        <input
          type="date"
          name="leaseEnd"
          value={entryData.leaseEnd}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddUnitEntry;
