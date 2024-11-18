// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginSignup.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', credentials); // Replace with your API endpoint
      setMessage(response.data.message || 'Login successful!');
      // Save token or user info in localStorage, if required
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Invalid email or password'
      );
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
