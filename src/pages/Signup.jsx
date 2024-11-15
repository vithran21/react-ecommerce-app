// src/pages/Signup.jsx
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    gender: '',
    address: '',
    city: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="pincode" placeholder="Pincode" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
