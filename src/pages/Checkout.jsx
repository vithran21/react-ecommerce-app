// src/pages/Checkout.js
import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import '../styles/Checkout.css';
import '../styles/GlobalPage.css';

const Checkout = () => (
  <div className="checkout page-container">
    <h1>Checkout</h1>
    <CheckoutForm />
  </div>
);

export default Checkout;
