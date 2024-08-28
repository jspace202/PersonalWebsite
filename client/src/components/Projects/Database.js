// src/pages/Database.js
import React from 'react';
import useDatabase from '../../hooks/useDatabase';
import '../../assets/styles/Database.scss';
import AddUserEntry from '../Database/AddUserEntry';
import AddPropertyEntry from '../Database/AddPropertyEntry';
import AddUnitEntry from '../Database/AddUnitEntry';

const Database = () => {
  const usersData = useDatabase('users');
  const propertyData = useDatabase('property');
  const unitData = useDatabase('unit');

  return (
    <div className='DatabaseBanner'>
      <div className='Database'>
        {/* Section for Users Table */}
        <div className='DbSection'>
          <AddUserEntry refreshData={usersData.refresh} />
          {usersData.data ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {usersData.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading users data...</p>
          )}
        </div>

        {/* Section for Property Table */}
        <div className='DbSectionLarge'>
          <AddPropertyEntry refreshData={propertyData.refresh} />
          {propertyData.data ? (
            <table>
              <thead>
                <tr>
                  <th>Property ID</th>
                  <th>Property Name</th>
                  <th>Address</th>
                  <th>Property Type</th>
                </tr>
              </thead>
              <tbody>
                {propertyData.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.propertyname}</td>
                    <td>{item.address}</td>
                    <td>{item.propertytype}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading property data...</p>
          )}
        </div>

        {/* Section for Unit Table */}
        <div className='DbSectionLarge'>
          <AddUnitEntry refreshData={unitData.refresh} />
          {unitData.data ? (
            <table>
              <thead>
                <tr>
                  <th>Unit ID</th>
                  <th>Property ID</th>
                  <th>Rent</th>
                  <th>Lease Start</th>
                  <th>Lease End</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {unitData.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.property_id}</td>
                    <td>{item.rent}</td>
                    <td>{item.leasestart}</td>
                    <td>{item.leaseend}</td>
                    <td>{item.unitnumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading unit data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Database;
