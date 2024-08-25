import React from 'react';
import useRealEstateAPI from '../../hooks/useRealEstateAPI';
import '../../assets/styles/RealEstateAPI.scss';

const RealEstateAPI = () => {
  const { data } = useRealEstateAPI();

  return (
      <div className='RealEstateAPI'>
        {data ? (
          <table>
            <thead>
              <tr>
                <th>Brokered By</th>
                <th>Status</th>
                <th>Price</th>
                <th>Beds</th>
                <th>Baths</th>
                <th>Acre Lot</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>House Size</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.brokered_by}</td>
                  <td>{item.status}</td>
                  <td>${item.price}</td>
                  <td>{item.bed}</td>
                  <td>{item.bath}</td>
                  <td>{item.acre_lot}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zip_code}</td>
                  <td>{item.house_size} sq ft</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
  );
};

export default RealEstateAPI;
