// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="brand-name">
      <Link to="/">V Store</Link>
    </div>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
