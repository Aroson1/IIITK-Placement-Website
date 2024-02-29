import React from 'react';
import './components/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Your Logo</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
