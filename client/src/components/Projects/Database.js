import React from 'react';
import useDatabase from '../../hooks/useDatabase';
import '../../assets/styles/Database.scss';

const Database = () => {
  const { data } = useDatabase('users');

  return (
    <div className='DatabaseBanner'>
      <div className='Database'>
        <div className='DbSection'>
          {data ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
        <div className='DbSectionLarge'>
          dfsa
        </div>
        <div className='DbSection'>
          dsf
        </div>
      </div>
    </div>
  );
};

export default Database;