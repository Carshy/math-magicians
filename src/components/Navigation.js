import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="nav-section">
      <a className="math-heading" href="/">Math Magicians</a>
      <ul className="nav-group">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/calculator" className="nav-link">Calculator</Link>
        </li>
        <li>
          <Link to="/quote" className="nav-link">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
