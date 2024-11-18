// src/pages/Signup.jsx
import React, { useState } from 'react';
import axios from 'axios'; // For making API requests
import '../styles/LoginSignup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    gender: '',
    address: '',
    city: '',
    pincode: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', formData); // Replace with your API endpoint
      setMessage(response.data.message || 'Signup successful!');
      setFormData({
        username: '',
        email: '',
        phoneNumber: '',
        gender: '',
        address: '',
        city: '',
        pincode: '',
        password: '',
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'An error occurred during signup'
      );
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
