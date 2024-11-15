// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Signup</button>
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
};

export default AuthPage;
