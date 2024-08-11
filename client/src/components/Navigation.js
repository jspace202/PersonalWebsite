import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ routes }) {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;