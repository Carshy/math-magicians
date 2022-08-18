import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="nav-section">
      <a className="math-heading" href="/mathHeading">Math Magicians</a>
      <ul className="nav-group">
        <li><a href="/home">Home</a></li>
        <li><a href="/calculator">Calculator</a></li>
        <li><a href="/quote">Quote</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
