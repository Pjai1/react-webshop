import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <ul className="navbar navbar-light bg-light">
      <li className="navbar-brand mb-0 h1">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-brand">
        <Link to="/table">Product List</Link>
      </li>
    </ul>
  </div>
);

export default Header;
