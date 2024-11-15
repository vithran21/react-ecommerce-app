import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const AuthForm = ({ isSignup = false }) => {
  const { login, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    isSignup ? signup(email, password) : login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} style={{ color: 'white' }}>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
