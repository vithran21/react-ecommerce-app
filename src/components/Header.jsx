// src/components/Header.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const authContext = useContext(AuthContext);

  // Check if authContext exists to avoid destructuring from undefined
  if (!authContext) {
    console.error("AuthContext is undefined. Make sure AuthProvider is correctly set up.");
    return null;
  }

  const { user, logout } = authContext;

  return (
    <header className="header">
      <Link to="/" className="header-link">Home</Link>
      {user ? (
        <>
          <span className="user-greeting">Hello, {user.email}</span>
          <button onClick={logout} className="header-button">Logout</button>
        </>
      ) : (
        <Link to="/auth" className="header-link">Login</Link>
      )}
      <Link to="/cart" className="header-link">Cart</Link>
    </header>
  );
};

export default Header;
