// src/pages/AuthPage.js
import React from 'react';
import AuthForm from '../components/AuthForm';
import '../styles/AuthPage.css';
import '../styles/GlobalPage.css';

const AuthPage = () => (
  <div className="auth-page page-container">
    <h1>Login / Signup</h1>
    <AuthForm />
  </div>
);

export default AuthPage;
